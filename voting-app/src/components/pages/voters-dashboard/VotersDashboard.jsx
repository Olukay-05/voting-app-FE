import React, { useState, useEffect } from 'react'
import axios from "axios";

import getFormValues from '../../utils/form-values/FormValues';
import { useNavigate } from 'react-router-dom';

import Modal from 'react-modal';



import "../../../reuseable-components/dashboard-reuseables/cards/Card.css"
import "../voters-dashboard/VotersDashboard";
import Card from "../../../reuseable-components/dashboard-reuseables/cards/Card"




const VotersDashboard = () => {

  const [candidates, setCandidates] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

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


  const submitId = () => {
    console.log(selectedCandidateId)

    // const { data } = getFormValues(e.currentTarget);

    // data.append("selectedCandidateId", selectedCandidateId);

    axios.post("http://localhost:8080/api/v2/voting/voting", {candidateId: selectedCandidateId})
    .then((response) => {

      console.log(response);
        console.log(response.data);

        // Habeeb do whatever you need to do with the response
    })
    .catch((error) => {
        console.log(error);
    }); 
    alert("Thank you for voting. You can view live results on the view results menu")
    navigate("/", {replace: true})
    localStorage.clear();
  }

  const closeModal = () => {
    setIsModalOpen(false);
    navigate('/SignOut');
  }

  return (

    <div className="card-group">
            
      {
        candidates.map((candidate) => {
          return <Card key={ candidate.id } candidate={ candidate } onRadioChange={ onRadioChange }/>
        })
      }

      <button type="button" onClick={ submitId } className="member-btn">
        PLACE YOUR VOTE
      </button>

      {/* <Modal isOpen={isModalOpen}>
        <h2>Vote cast successfully</h2>
        <button onClick={closeModal}>Ok</button>
      </Modal> */}

      <Modal isOpen={isModalOpen} className="Modal">
        <div className="Modal__Content">
          <div className="Modal__Header">
            <h2 className="Modal__Title">Vote cast successfully</h2>
            <button className="Modal__CloseBtn" onClick={closeModal}>
              &times;
            </button>
          </div>
          <div className="Modal__Body">
            <p>Your vote has been cast successfully.</p>
          </div>
          <div className="Modal__Footer">
            <button className="Modal__Btn" onClick={closeModal}>Ok</button>
          </div>
        </div>
      </Modal>
            
    </div>
  )
}

export default VotersDashboard;