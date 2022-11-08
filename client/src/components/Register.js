import { useState } from 'react';
import '../app.css';

const Register = () => {
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
    <form name="Register" onSubmit={handleSubmit}>
      <h1>Register</h1>

      <span>
        <label> Enter first name:
        <input type="text" name="fname" placeholder="First Name..." value={inputs.fname || ""} onChange={handleChange}/>
        </label>
      </span>

      <span>
        <label> Enter last name:
        <input type="text" name="lname" placeholder="Last Name..." value={inputs.lname || ""} onChange={handleChange}/>
        </label>
      </span>

      <span>
        <label> Enter email address:
        <input type="email" name="email" placeholder="Email..." value={inputs.email || ""} onChange={handleChange}/>
        </label>
      </span>
     
      <span>
        <label> Enter student number:
        <input type="text" name="studentNum" maxlength = "4" placeholder="Student Number..." value={inputs.studentNum || ""} onChange={handleChange}/>
        </label>
      </span>

      <span>
        <input type="submit" value="Login"/>
      </span>
    
    </form>  
   )
  };
  
  export default Register;