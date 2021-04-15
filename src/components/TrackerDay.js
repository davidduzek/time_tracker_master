import React, { useEffect, useState } from "react";
import Task from "./Task";

import "./TrackerDay.css";

function TrackerDay() {
  const [myTasks, setMyTasks] = useState([]);

  //     TAKETO TU TREBA MAT !!!!

  // const getMyStocks = () => {
  //   db.collection("myStocks").onSnapshot((snapshot) => {
  //     let promises = [];
  //     let tempData = [];
  //     snapshot.docs.map((doc) => {
  //       promises.push(
  //         getStocksData(doc.data().ticker).then((res) => {
  //           tempData.push({
  //             id: doc.id,
  //             data: doc.data(),
  //             info: res.data,
  //           });
  //         })
  //       );
  //     });
  //     Promise.all(promises).then(() => {
  //       setMyStocks(tempData);
  //     });
  //   });
  // };

  // useEffect(() => {
  //   let tempStocksData = [];
  //   const stocksList = [
  //     "AAPL",
  //     "MSFT",
  //     "TSLA",
  //     "FB",
  //     "BABA",
  //     "UBER",
  //     "DIS",
  //     "SBUX",
  //   ];

  //   let promises = [];
  //   getMyStocks();
  //   stocksList.map((stock) => {
  //     promises.push(
  //       getStocksData(stock).then((res) => {
  //         console.log(res);
  //         tempStocksData.push({
  //           name: stock,
  //           ...res.data,
  //         });
  //       })
  //     );
  //   });

  //   Promise.all(promises).then(() => {
  //     console.log(tempStocksData);
  //     setStockData(tempStocksData);
  //   });
  // }, []);

  return (
    <div>
      <div className="tracker__day">
        <div className="day__top">
          <div className="day__date">
            <span>Today</span>
          </div>
          <div className="day__totalHours">
            Day hours: <span className="timeTotal">12:00</span>
          </div>
        </div>
        <div className="day__tasks">
          <Task />
        </div>
      </div>
    </div>
  );
}

export default TrackerDay;
