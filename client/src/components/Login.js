import { useState } from 'react';
import '../app.css';

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
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
        <input type="submit" value="Login"/>
      </span>
    
    </form>  
   )
  };
  
  export default Login;