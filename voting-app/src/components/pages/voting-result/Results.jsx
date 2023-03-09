import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Results = () => {
    const [results, setResults] = useState([])

    
    
  useEffect(() => {

    axios.get("http://localhost:8080/api/v1/admin/display-result")

          .then((response) => {
            console.log(response);
            setResults(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          })
    }, []);



  return (
    <div>

        <h1>VOTING RESULTS</h1>

        <div className="card">
            <fieldset>
                <div>
                    <h3>
                        We hereby give
                        notice that the number of votes recorded for each Candidate
                        is as follows: 
                    </h3>

                    {
                        results.map((candidate) => {
                            return <p>{candidate.fullName} ----- {candidate.noOfVotes} votes</p>
                        })
                    }
                </div>

                <div className="card-body">
                   
                </div>  
            </fieldset>
        </div>
   </div>
  )
}

export default Results;