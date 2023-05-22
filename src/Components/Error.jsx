import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const history = useNavigate();

  return (
    <div>
      <h1>Error 404! Page not found</h1>
      <button className="btn btn-primary" onClick={() => history("/")}>
        Redirect Login Page
      </button>
    </div>
  );
};

export default Error;
