import React, { useMemo, useEffect } from "react";
import Axios from 'axios';


const Dashboard = () => {

  const getBookData = () => {
    Axios.get('http://localhost:3000/bookData').then(response => {
      console.log(response.data);})
  }

  return(
    <div>
      <h1>Dashboard</h1>
      <span>
        <input onClick={getBookData} type="submit" value="Get Book Data"/>
      </span>
    </div>
  )
};

export default Dashboard;