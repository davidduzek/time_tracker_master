import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { ReactComponent as RegisterImage } from "../images/undraw_authentication_fsn5.svg";

export const Register = ()=> {
  const [addusername, setUsername] = useState('')
  const [addpassword, setPassword] = useState('')
  const [addfullname, setFullname] = useState('')
  
  
  const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("You pressed register")
    fetch('/api/register', {
      method: 'POST',
      body:JSON.stringify({
          username:addusername,
          password:addpassword,
          fullname:addfullname
      }),
      headers: {
                "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
      .then(message=> {
            console.log(message)
            setUsername('')
            setPassword('')
            setFullname('')
          })
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handleFullnameChange = (e) => {
    setFullname(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

 return (
    <div className="register">
      <div className="register__window">
        <div className="register__form">
          <div className="form__description">
            <h2>Register</h2>
            <p>The Account is Ready for You.</p>
          </div>
            <form onSubmit={onSubmitClick}>
            <label htmlFor="name">Full Name</label>
            <input 
              type="text"
              className="form__input"
              onChange={handleFullnameChange}
              required value={addfullname}
              name="name"
            />
            <label htmlFor="email">Email Address</label>
            <input 
              type="email"
              name="email"
              className="form__input"
              onChange={handleUsernameChange}
              required value={addusername}
            />
            <label htmlFor="password">Password</label>
            <input
              className="form__input"
              type="password"
              onChange={handlePasswordChange}
              required value={addpassword}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
              title="Must contain at least one  number and one uppercase and lowercase letter, and at least 7 or more characters"
            />

            <button className="register__button" type="submit">
              Register
            </button>
            <Link to="/login" className="register__link">
              Already Registered?
            </Link>
          </form>
        </div>
        <div className="register__image">
          <div className="image__headline">
            <h3>Join us today!</h3>
            <p>Where your plans and goals become reality.</p>
          </div>
          <RegisterImage className="register__image__img" />
        </div>
      </div>
    </div>
  );


}
