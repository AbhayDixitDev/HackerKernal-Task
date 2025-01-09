import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import "../assets/stylesheets/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("taskToken")) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/login", { email: email, password: password });
      const data = await response.data;
      window.localStorage.setItem("taskToken", data.token);
      if(data.token){
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div  style={{ padding: "20px",height:"100vh",justifyContent:"center",alignItems:"center",display:"flex",backgroundImage:"url('https://media-hosting.imagekit.io//ca7919a018d1436b/Hackerkernel-1024x576%20(1).png?Expires=1831034745&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aAOcD~Ip6HPf~6OYS54vJ6AvvExndbaeKAfNiJtYeB7Q8fZ0Jup64ZXT798MdDT4q4eC7BiN~LwJUmCk4mGe1O91bUulEUyhN3vpSc3RJD~2MD6pZAZ5UbPRpuLP6gWC2j-US7FWZzm7jw9G1Y6U30WVrQW2JUAESUMZR5V1sJRWEUAJ6SUtD~wCKETqRKcIanOFmLvLjlfmvGP-43rPqo42S~mbdmpDCNJU6kEXhI8sKLsJb2-XpD6ErcFcajpj~V2GBbkVYO7TSTQcNn6A33JtAw-yBc9wZZk~Fj2rSsGYdh-7nBSXnJndKjQ3rp4F~bXGxhRenpGFzgbyCECeeA__')"}}>
      <Form className="form-container" style={{ margin: "0 auto", maxWidth: "400px" }}>
        <h3 style={{ textAlign: "center" }}>Login Page  </h3>

        <Form.Control
          type="text"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          style={{ marginBottom: "15px" }}
        />

        <Form.Control
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          style={{ marginBottom: "15px" }}
        />

        <Button variant="primary" onClick={handleLogin} style={{ width: "100%" }}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;