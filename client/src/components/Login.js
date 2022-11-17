import { useState } from 'react';
import '../app.css';
import Axios from 'axios';
import React from 'react';
import  { useNavigate } from 'react-router-dom'

const Login = () => {
  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const loginUser = () => {
    Axios.post('http://localhost:3000/login', inputs).then(response => {
      console.log(response.data);
      if(response.data === "success") {
        navigate("/dashboard");
      } else {
        alert(response.data);
      }})
  }

  return (
    <form name="Login" onSubmit={handleSubmit}>
      <h1>Login</h1>

      <span>
        <label> Enter username:
        <input type="text" name="username" placeholder="Username..." value={inputs.username || ""} onChange={handleChange}/>
        </label>
      </span>

      <span>
        <label> Enter Password:
        <input type="password" name="password" placeholder="Password..." value={inputs.password || ""} onChange={handleChange}/>
        </label>
      </span>

      <span>
        <input onClick={loginUser} type="submit" value="Login"/>
      </span>
    
    </form>  
   )
  };
  
  export default Login;