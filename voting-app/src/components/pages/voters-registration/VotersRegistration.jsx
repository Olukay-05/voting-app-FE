import React from 'react'
import { useState } from 'react';
import getFormValues  from '../../utils/form-values/FormValues';
import "../admin-dashboard/Admin-dashboard.css";

const VotersRegistration = () => {

    const [isVoter, setIsVoter] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault();

    const { isEmpty, data } = getFormValues(e.currentTarget);

    if(isEmpty) {
        alert("Please fill all the fields");
        return;
    }

    console.log(data)

    e.currentTarget.reset();
  }  

   
  return (
    <section className="register-page full-page">
        <form className="form" onSubmit={ onSubmit }>

            <h3>{ isVoter ? "View Your Vote" : "Login to Vote" }</h3>

            {!isVoter && (

                <div className="form-row">

                    <label htmlFor="name" className="form-label">
                        Full Name:
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-input"
                    />

                </div>
            )}


            <div className="form-row">

                    <label htmlFor="name" className="form-label">
                        Gender:
                    </label>
                    <input
                        id="gender"
                        type="text"
                        name="name"
                        className="form-input"
                    />

                </div>


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