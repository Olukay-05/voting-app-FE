import { Routes, Route } from "react-router-dom";


import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/home";
import VotersDashboard from "./components/pages/voters-dashboard/VotersDashboard";
import AdminRegistration from "./components/pages/admin-dashboard/Admin-dashboard";

function App() {
  return (
   <Routes>
      <Route path="/" element={ <Navigation /> } > 
        <Route index element={ <Home /> }/>
        <Route path="VotersDashboard" element={ <VotersDashboard /> }/>
        <Route path="AdminRegistration" element={ <AdminRegistration /> }/>
      </Route>
   </Routes>
      
  );
}

export default App;
