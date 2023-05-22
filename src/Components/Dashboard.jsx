import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const history = useNavigate();

  const userLogout = () => {
    localStorage.removeItem("userInfo");
    history("/login");
  };
  return (
    <div>
      <h1>Logged in Successfully</h1>
      <button onClick={userLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
