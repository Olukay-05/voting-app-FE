import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import axios from 'axios'

import Chart from "chart.js/auto";
import "../voting-result/Results.css"




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


    // const chartElement = useChart(results);

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
                    <table>
                        <thead>
                            <tr>
                            <th>Name of Candidate</th>
                            <th>Total number of votes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((candidate, index) => (
                            <tr key={index}>
                                <td>{candidate.fullName}</td>
                                <td>{candidate.noOfVotes} votes</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>

                   

                    {/* {
                        results.map((candidate) => {
                            return <p>{candidate.fullName} ----- {candidate.noOfVotes} votes</p>
                        })
                    } */}
                </div>

                <div className="card-body">
                   {/* { chartElement } */}
                </div>  
            </fieldset>
        </div>

        
   </div>
  )
}

export default Results;