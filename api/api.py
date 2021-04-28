import os
from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
import flask_cors
from flask_bcrypt import Bcrypt
import flask_praetorian

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}
db = SQLAlchemy(app)
cors = flask_cors.CORS(app)
bcrypt = Bcrypt(app)
guard = flask_praetorian.Praetorian(app)

class Todo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)

    def __str__(self):
        return f'{self.id} {self.content}'

def todo_serializer(todo):
    return {
        'id': todo.id,
        'content': todo.content
    }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    is_active = db.Column(db.Boolean, default=True, server_default='true')
    fullname = db.Column(db.String(20), unique=False, nullable=False)

    def __str__(self):
        return f'{self.username} {self.password} {self.fullname}'

    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []
    @classmethod
    def lookup(cls, username):
        return cls.query.filter_by(username=username).one_or_none()
    @classmethod
    def identify(cls, id):
        return cls.query.get(id)
    @property
    def identity(self):
        return self.id
    def is_valid(self):
        return self.is_active

app.debug = True

bcrypt.init_app(app)
cors.init_app(app)
db.init_app(app)
guard.init_app(app, User)


@app.route('/api/register', methods=['GET', 'POST'])
def register():
    request_data = json.loads(request.data)
    hashed_password = bcrypt.generate_password_hash(password=request_data['password']).decode('utf-8')
    user = User(username=request_data['username'], password=hashed_password, fullname=request_data['fullname'])
    db.session.add(user)
    db.session.commit()
    return {'201': 'Účet bol zaregistrovaný'}
    

@app.route('/api/login', methods=['GET', 'POST'])
def login():
    request_data = json.loads(request.data)
    user = User.query.filter_by(username=request_data['username']).first()
    if user and bcrypt.check_password_hash(user.password, password=request_data['password']):
        user = guard.authenticate(username=request_data['username'], password=request_data['password'])
        ret = {'access_token': guard.encode_jwt_token(user)}
        return ret, 200
    else:
        return {'201': 'neprihlaseny'}

@app.route('/api/refresh', methods=['POST'])
def refresh():

    print("refresh request")
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'access_token': new_token}
    return ret, 200

@app.route('/api/home')
@flask_praetorian.auth_required
def protected():
    return {'201': 'prihlaseny'}

@app.route('/api/settings')
@flask_praetorian.auth_required
def fullnameSettings():
    return {"fullname": f'{flask_praetorian.current_user().fullname}'}

@app.route('/api/username')
@flask_praetorian.auth_required
def usernameSettings():
    return {"username": f'{flask_praetorian.current_user().username}'}

@app.route('/api/updateEmail', methods=['GET', 'POST'])
@flask_praetorian.auth_required
def updateEmail():
    email=flask_praetorian.current_user().username
    user = User.query.filter_by(username=email).first()
    request_data = json.loads(request.data)

    if user and bcrypt.check_password_hash(user.password, password=request_data['password']):
        newemail = request_data['updateEmail']
        user.username=(newemail)
        db.session.commit()




@app.route('/api', methods=['GET'])
def index():
    todo=Todo.query.all()
    return jsonify([*map(todo_serializer, Todo.query.all())])

@app.route('/api/create', methods=['POST'])
def create():
    request_data = json.loads(request.data)
    todo = Todo(content=request_data['content'])
    db.session.add(todo)
    db.session.commit()

    return {'201': 'todo created'}

@app.route('/api/<int:id>')
def show(id):
    return jsonify([*map(todo_serializer, Todo.query.filter_by(id=id))])

@app.route('/api/<int:id>', methods=['POST'])
def delete(id):
    request_data = json.loads(request.data)
    Todo.query.filter_by(id=request_data['id']).delete()
    db.session.commit()
    return {'204': 'Deleted'}


if __name__ == '__main__':
    app.run(debug=True)