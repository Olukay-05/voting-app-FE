import React from 'react'
import { useState } from 'react';
import getFormValues  from '../../utils/form-values/FormValues';

import axios from "axios"
import "../admin-dashboard/Admin-dashboard.css";

const AdminRegistration = () => {

    const [isCandidate, setIsCanditate] = useState(false);
    const [isRegisteredVoter, setisRegisteredVoter] = useState(false);
    const [regVoter, setRegVoter] = useState(false)


    const candidateData = async (result) => {
        try{
             const res = await axios.post("http://localhost:8080/api/v1/admin/candidate-addition", result)
             console.log(res.data);
           }catch(error){
             console.log(error);
          };
    }

    const VotersData = async (result) => {
        try{
             const res = await axios.post("https://6669-102-88-62-110.eu.ngrok.io/api/v1/admin/candidate-addition", result)
             console.log(res.data);
           }catch(error){
             console.log(error);
          };
    }


  const onSubmit = (e) => {
    e.preventDefault();

    const { isEmpty, data } = getFormValues(e.currentTarget);

    if(isEmpty) {
        alert("Please fill all the fields");
        return;
    }

    candidateData(data);

    // console.log(data)

  
    e.currentTarget.reset();
  }  


  const onSubmitVoter = (e) => {
    e.preventDefault();

    const { isEmpty, data } = getFormValues(e.currentTarget);

    if(isEmpty) {
        alert("Please fill all the fields");
        return;
    }

    VotersData(data);

    // console.log(data)

  
    e.currentTarget.reset();
  }  

  const selectVoter = () =>{
        setRegVoter(true)
  }
  const selectCandiate = () =>{
    setRegVoter(false)
}
   
  return (
    <section className="register-page-full-page">
        <div>
            <h3 onClick={selectCandiate}> Register Candidate</h3>
            <h3 onClick={selectVoter}>Register Voter</h3>
        </div>
        {regVoter 
        ?

        <form className="form" onSubmit={ onSubmitVoter }>

            <h3>{ isRegisteredVoter ? "View Voter" : "Voter Registration" }</h3>

            {!isRegisteredVoter && (

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
                { isRegisteredVoter ? "Yet to Register Voter?" : "Already a Registered Voter?" }

                <button
                    type="button"
                    onClick={ () => setisRegisteredVoter( !isRegisteredVoter ) }
                    className="member-btn"
                >

                 {isRegisteredVoter ? "Register as Voter" : "View Registered Voter"}
                </button>
            </p>
        </form>
        :
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

        }
    </section>
  )
}

export default AdminRegistration;