// import Cookies from "js-cookie";
// import { useState, useEffect } from "react"

// const [selectedCandidates, setSelectedCandidates] = useState([]);


//   const handleCheckBoxChange = (candidateId) => {
//     const updatedCandidates = selectedCandidates.includes(candidateId)
//                             ? selectedCandidates.filter((id) => id !== candidateId)
//                             : [...selectedCandidates, candidateId];

//     setSelectedCandidates(updatedCandidates);
//     Cookies.set("selectedCandidates", JSON.stringify(updatedCandidates));
//   }

//   useEffect(() => {
//     const storedSelectedCandidates = Cookies.get("selectedCandidates");
//     if(storedSelectedCandidates) {
//       setSelectedCandidates(JSON.parse(storedSelectedCandidates))
//     }
//   }, [])
