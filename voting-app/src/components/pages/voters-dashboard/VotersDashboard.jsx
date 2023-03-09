import React, { useState, useEffect } from 'react'
import axios from "axios";

import getFormValues from '../../utils/form-values/FormValues';



import "../../../reuseable-components/dashboard-reuseables/cards/Card.css"

import Card from "../../../reuseable-components/dashboard-reuseables/cards/Card"




const VotersDashboard = () => {

  const [candidates, setCandidates] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/admin/display-result")
          .then((response) => {
            console.log(response.data.data);
            setCandidates(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          })
  }, []);


  const onRadioChange = (id) => {

    setSelectedCandidateId(id);
  };


  const onSubmit = (e) => {

    e.preventDefault();

    const { data } = getFormValues(e.currentTarget);

    data.append("selectedCandidateId", selectedCandidateId);

    axios.post("http://localhost:8080/api/v1/voter/vote", data)
    .then((response) => {

        console.log(response.data);

        // Habeeb do whatever you need to do with the response
    })
    .catch((error) => {
        console.log(error);
    });

  }

  return (

    <div className="card-group">
            
      {
        candidates.map((candidate) => {
          return <Card key={ candidate.id } candidate={ candidate } onRadioChange={ onRadioChange }/>
        })
      }

      <button
       type="button"
        onClick={ onSubmit }
         className="member-btn"
      >
        PLACE YOUR VOTE
      </button>
            
    </div>
  )
}

export default VotersDashboard;