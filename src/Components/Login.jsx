import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  // console.log(inputValue);

  const [data, setData] = useState([]);

  const getData = (e) => {
    const { value, name } = e.target;

    setInputValue(() => {
      return { ...inputValue, [name]: value };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { email, password } = inputValue;

    const getUserArr = localStorage.getItem("userInfo");

    if (email === "") {
      alert("Please fill the email");
    } else if (!email.includes("@")) {
      alert("Please write valid email");
    } else if (password === "") {
      alert("Please fill the password");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userLogin = userData.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("invalid credentials");
        } else {
          localStorage.setItem("user_login", JSON.stringify(userLogin));
          history("/dashboard");
        }
      }
    }
  };
  return (
    <div className="container d-flex justify-content-center bg-secondary mt-3 border col-sm-6 rounded ">
      <Form>
        <Form.Group
          className="mb-3 pt-3 text-center  "
          controlId="formBasicEmail"
        >
          <Form.Control
            type="email"
            name="email"
            onChange={getData}
            className="bg-dark  text-white  text-center "
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3 text-center " controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            onChange={getData}
            className="bg-dark text-white text-center "
            placeholder="Password"
          />
        </Form.Group>

        <div className="text-center">
          <Button
            className="btn btn-outline-light btn-dark text-white mb-3 col-sm-5 rounded container text-center"
            type="submit"
            onClick={addData}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
