import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";
import {login, useAuth} from "../auth"

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [logged] = useAuth();
  const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("You pressed login")
    let opts = {
      'username': username,
      'password': password
    }
    console.log(opts)
    fetch('/api/login', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
      .then(token => {
        if (token.access_token){
          login(token)
          console.log(token)
        }
        else {
          setPassword("")
          alert("Please type in correct username/password")
        }
      })
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

 return (
    <div className="login">
      <div className="login__window">
        <div className="login__form">
          <div className="form__description">
            <h2>Login Now</h2>
            <p>The Account is Ready for You.</p>
          </div>
            {!logged? <form onSubmit={onSubmitClick}>
            <label htmlFor="email">Email Address</label>
            <input type="email" 
              className="form__input"
              onChange={handleUsernameChange}
              value={username}
              required
              name="email"
            />
            <label htmlFor="password">Password</label>
            <input
              className="form__input"
              type="password"
              onChange={handlePasswordChange}
              value={password}
              required
            />

            <button className="login__button" type="submit">
              Login
            </button>
            <Link to="/register" className="login__link">
              Don't have an Account?
            </Link>
          </form>
          :<Redirect to='/home' />}
        </div>
        <div className="login__image">
          <div className="login__image__headline">
            <h3>Welcome back!</h3>
            <p>Come and finish your tasks, for better future.</p>
          </div>

          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p403x403/148937350_421591552248485_5238614361000657297_n.png?_nc_cat=103&ccb=3&_nc_sid=aee45a&_nc_ohc=nNTqc76SyZkAX-vfLq_&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_tp=30&oh=f29d1bce1d284a29da916b8f21a77a4e&oe=604A629D"
            alt="someimage"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
