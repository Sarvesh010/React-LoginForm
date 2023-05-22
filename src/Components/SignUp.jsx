import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const history = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
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

    const { name, email, password, cpassword } = inputValue;

    if (name === "") {
      alert("Fill the name");
    } else if (email === "") {
      alert("Please fill the email");
    } else if (!email.includes("@")) {
      alert("Please write valid email");
    } else if (password === "") {
      alert("Please fill the password");
    } else if (cpassword !== password) {
      alert("Password doesn't match");
    } else {
      console.log("data added successfully");
      localStorage.setItem("userInfo", JSON.stringify([...data, inputValue]));
      history("/login");
    }
  };

  return (
    <div className="container d-flex justify-content-center bg-secondary mt-3 border col-sm-6 rounded ">
      <Form>
        <Form.Group className="mb-3 pt-3   " controlId="formBasicName">
          <Form.Control
            type="text"
            name="name"
            onChange={getData}
            className="bg-dark  text-white text-center "
            placeholder="Enter Your Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 text-center  " controlId="formBasicEmail">
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

        <Form.Group
          className="mb-3 text-center "
          controlId="formBasicCPassword"
        >
          <Form.Control
            type="password"
            name="cpassword"
            onChange={getData}
            className="bg-dark text-center text-white  "
            placeholder="Confirm Password"
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
          <p>
            Already have an account{" "}
            <span>
              <NavLink to="/login">SignIn</NavLink>
            </span>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
