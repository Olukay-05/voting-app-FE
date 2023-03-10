import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from "axios"
import getFormValues  from '../../utils/form-values/FormValues';
import "../admin-dashboard/Admin-dashboard.css";

const VotersRegistration = () => {

    const [isVoter, setIsVoter] = useState(false);
    const [error, setError] = useState(true)
   // const [id, setId] = useState()
    const navigate = useNavigate();

    

    const VoterLogin = async (votersList) => {
        try{
             const res = await axios.post("http://localhost:8080/api/v2/voting/nonCandidate", votersList)
            console.log(res)
            setError(false)

           }catch(error){
          };
    }


  const onSubmit = (e) => {
    e.preventDefault();

    const { isEmpty, data } = getFormValues(e.currentTarget);

    if(isEmpty) {
        alert("Please fill all the fields");
        return;
    }

    // // Validate full name
    // const fullName = data.name.trim();
    // if(fullName === "") {
    //   alert("Please enter your full name");
    //   return;
    // }

    // const fullNameRegex = /^[a-zA-Z].*[\s\.]*$/;

    // const fullNameRegex = /^[A-Z][a-z]+\s[a-zA-Z\s\.]+/;

    // if(!fullNameRegex.test(fullName)) {
    //     alert("Please enter a valid Name");
    //     return;
    // }

    // Validate token
    // const token = data.token.trim();
    // if(token === "") {
    //   alert("Please enter your token");
    //   return;
    // }

    // // Validate email
    // const email = data.email.trim();
    // if(email === "") {
    //   alert("Please enter your email");
    //   return;
    // }

    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if(!emailRegex.test(email)) {
    //   alert("Please enter a valid email");
    //   return;
    // }


    // axios.post("http://localhost:8080/api/v1/admin/display-result", result{
       
    // })
    //     .then(response => console.log(response.data))
    //     .catch(error => console.error(error));
    

    VoterLogin(data)
    if (!error){
         navigate("/VotersDashboard");
    }
    
  }  

   
  return (
    <section className="register-page full-page">
        <form className="form" onSubmit={ onSubmit }>

            <h3>{ isVoter ? "View Your Vote" : "Vote" }</h3>

            {!isVoter && (

                // <div className="form-row">

                //     <label htmlFor="name" className="form-label">
                //         Full Name:
                //     </label>
                //     <input
                //         id="name"
                //         type="text"
                //         name="name"
                //         className="form-input"
                //     />

                // </div>

                
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
            )}


            <div className="form-row">

                    <label htmlFor="token" className="form-label">
                        Token:
                    </label>
                    <input
                        id="token"
                        type="number"
                        name="token"
                        className="form-input"
                    />

                </div>


            {/* <div className="form-row">

                <label htmlFor="email" className="form-label">
                    Email:
                </label>

                <input 
                    id="email"
                    type="email"
                    name="email"
                    className="form-input"
                />
            </div> */}

            <button type="submit" className="btn btn-block">
                Submit
            </button>
            
            <p>
                { isVoter ? "Not Voted?" : "Voted?" }

                <button
                    type="button"
                    onClick={ () => setIsVoter( !isVoter ) }
                    className="member-btn"
                >

                 {isVoter ? "Register as a Voter" : "Click me to view Summary"}
                </button>
            </p>
        </form>
    </section>
  )
}

export default VotersRegistration;