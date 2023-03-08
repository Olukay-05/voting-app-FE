import React, { useState, useEffect } from 'react'
import axios from "axios";



import "../../../reuseable-components/dashboard-reuseables/cards/Card.css"

import Card from "../../../reuseable-components/dashboard-reuseables/cards/Card"



const candidates = [
  {
    id: 1,
    fullName: "Olukayode Ogunnowo",
    email: "olukayode.ogunnowo@yahoo.com",
    numberOfVotes: 0

  },

  {
    id: 2,
    fullName: "Olukayode Ogunnowo",
    email: "olukayode.ogunnowo@yahoo.com",
    numberOfVotes: 0

  },

  {
    id: 3,
    fullName: "Olukayode Ogunnowo",
    email: "olukayode.ogunnowo@yahoo.com",
    numberOfVotes: 0

  },

  {
    id: 4,
    fullName: "Olukayode Ogunnowo",
    email: "olukayode.ogunnowo@yahoo.com",
    numberOfVotes: 0

  },

  {
    id: 5,
    fullName: "Olukayode Ogunnowo",
    email: "olukayode.ogunnowo@yahoo.com",
    numberOfVotes: 0

  }
]

const VotersDashboard = ( { onRadioChange } ) => {

  // const [candidates, setCandidates] = useState([]);

  // useEffect(() => {
  //   axios.get()
  //         .then((response) => {
  //           setCandidates(response.data);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         })
  // }, []);

  return (

    <div className="card-group">
            
      {
        candidates.map((candidate) => {
          return <Card key={ candidate.id } candidate={ candidate } onCheckboxChange={ onRadioChange }/>
        })
      }

      <button
        type="button"
        // onClick={ }
        className="member-btn"
      >
        PLACE YOUR VOTE
      </button>
            
    </div>
  )
}

export default VotersDashboard;