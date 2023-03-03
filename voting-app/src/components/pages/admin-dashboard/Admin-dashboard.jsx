import React from 'react'
import { useState } from 'react';
import getFormValues  from '../../utils/form-values/FormValues';

import axios from "axios"
import "../admin-dashboard/Admin-dashboard.css";

const AdminRegistration = () => {

    const [isCandidate, setIsCanditate] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault();

    const { isEmpty, data } = getFormValues(e.currentTarget);

    if(isEmpty) {
        alert("Please fill all the fields");
        return;
    }

    console.log(data)

    
    axios.post("https://localhost:8080/api/v1/admin/candidate-addition", {
        fullName: "olukayode",
        email: "olukay@gmail.com"
    })
    .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

    e.currentTarget.reset();
  }  

   
  return (
    <section className="register-page full-page">
        <form className="form" onSubmit={ onSubmit }>

            <h3>{ isCandidate ? "View Candidate" : "Canditate Registration" }</h3>

            {!isCandidate && (

                <div className="form-row">

                    <label htmlFor="name" className="form-label">
                        Full Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="fullName"
                        className="form-input"
                    />

                </div>
            )}


            <div className="form-row">

                <label htmlFor="email" className="form-label">
                    Email:
                </label>

                <input 
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                />
            </div>

            <button type="submit" className="btn btn-block">
                Submit
            </button>
            
            <p>
                { isCandidate ? "Not a Candidate yet?" : "Already a Candidate?" }

                <button
                    type="button"
                    onClick={ () => setIsCanditate( !isCandidate ) }
                    className="member-btn"
                >

                 {isCandidate ? "Register as Canditate" : "View Candidate"}
                </button>
            </p>
        </form>
    </section>
  )
}

export default AdminRegistration;