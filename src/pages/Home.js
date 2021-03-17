import React from "react";
import Sidebar from "../components/Sidebar";
import Tracker from "../components/Tracker";
import {useEffect} from "react";
import {authFetch} from "../auth"

import "./Home.css";

function Home() {
  useEffect(() => {
    authFetch("/api/home").then(response => {
      if (response.status === 401){
        console.log("Sorry you aren't authorized!")
      }
      return response.json()
    }).then(response => {
      if (response.status === 200){
        console.log("200")
      }
    })
  }, [])
  return (
    <div className="home">
       <Sidebar />
       <Tracker />
    </div>
  )
}

export default Home;
