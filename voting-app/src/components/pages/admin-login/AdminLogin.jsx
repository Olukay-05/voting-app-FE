import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios';

import FormInput from '../../../reuseable-components/dashboard-reuseables/form-input/FormInput';

const AdminLogin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(true)

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };




  const login = async (adminlogin) => {
    try{
         const res = await axios.post("http://localhost:8080/api/v1/admin/admin-login", adminlogin)
         console.log(res)
         setError(false) 
       }catch(error){
         alert("Invalid email or password")
      };
}

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the username and password
    const adminDetails = {
      name: username,
      password: password
    }
    
    login(adminDetails)
    if (!error){
      navigate("/AdminRegistration")
    }
  };



  return (
    <div>
      <form className="form">
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

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
      </form>
    </div>
  )
}

export default AdminLogin;