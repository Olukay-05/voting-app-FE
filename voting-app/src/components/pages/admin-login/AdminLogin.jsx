import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import FormInput from '../../../reuseable-components/dashboard-reuseables/form-input/FormInput';

const AdminLogin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the username and password

    navigate("/AdminRegistration");
  };



  return (
    <div>
      <form onSubmit={ handleSubmit } className="form">
        <FormInput 
          label= "Admin Username"
          type="text"
          name="text"
          value={ username }
          onChange={ handleUsernameChange }
        />

        <FormInput 
          label= "Password"
          type="password"
          name="password"
          value={ password }
          onChange={ handlePasswordChange }
        />

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  )
}

export default AdminLogin;