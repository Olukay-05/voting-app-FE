import React from 'react'


import "../../../reuseable-components/dashboard-reuseables/cards/card.css"

import Card from "../../../reuseable-components/dashboard-reuseables/cards/card"



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

const VotersDashboard = ( onCheckboxChange) => {


  return (
    
//     <form>

//         <section >
//           <h2 id="student-info">Voter's Information</h2>
//           <div class="info">
//             <label for="student-name">Name:</label>
//             <input type="text" name="student-name" id="student-name" />
//           </div>

//           <div class="info">
//             <label for="student-email">Email:</label>
//             <input type="email" name="student-email" id="student-email" />
//           </div>
          
//         </section>

//         <section>

//           <h2 id="html-questions">CANDIDATES</h2>

//           <div class="question-block">
//             <p>1</p>
//             <fieldset class="question" name="html-question-one">
//               {/* <legend>
//                 Kindly click the checkbox to vote this candidate (Candidate Name)
//               </legend> */}
// {/* 
//               <ul class="answers-list">
//                 <li>
//                   <label for="q1-a1">
//                     <input type="checkbox" id="q1-a1" name="q1" value="true" />
//                     Vote for me
//                   </label>
//                 </li>
//               </ul> */}





//             </fieldset>
//           </div>

//           {/* <div class="question-block">
//             <p>2</p>
//             <fieldset class="question" name="html-question-two">
//               <legend>
//                 A label element nesting an input element is required to have a
//                 for attribute with the same value as the input's id
//               </legend>
//               <ul class="answers-list">
//                 <li>
//                   <label for="q2-a1">
//                     <input type="radio" id="q2-a1" name="q2" value="true" />
//                     True
//                   </label>
//                 </li>
//                 <li>
//                   <label for="q2-a2">
//                     <input type="radio" id="q2-a2" name="q2" value="false" />
//                     False
//                   </label>
//                 </li>
//               </ul>
//             </fieldset>
//           </div> */}
//         </section>

//     </form>


        



          <div className="card-group">
            
              {
                candidates.map((candidate) => {
                  return <Card key={ candidate.id } candidate={ candidate } onCheckboxChange={ onCheckboxChange }/>
                })
              }
            
          </div>
  )
}

export default VotersDashboard;