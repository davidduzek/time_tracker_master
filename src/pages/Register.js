import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

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
            <form method="" action="#">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text"
              className="form__input"
              onChange={handleFullnameChange}
              required value={addfullname}
            />
            <label htmlFor="email">Email Address</label>
            <input 
              type="text"
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
            />

            <button className="register__button" onClick={onSubmitClick} type="submit">
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

          <img
            src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p403x403/148002929_413839449689749_1907044659413814928_n.png?_nc_cat=105&ccb=3&_nc_sid=aee45a&_nc_ohc=6ddF5i5lwnMAX_mU4PE&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_tp=30&oh=8c94003280c93819a17a0f8f524bd2c8&oe=6049E10B"
            alt="someimage"
          />
        </div>
      </div>
    </div>
  );


}
