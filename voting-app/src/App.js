import { Routes, Route } from "react-router-dom";


import Navigation from "./routes/navigation/Navigation";
import Home from "./routes/home/home";
import VotersDashboard from "./components/pages/voters-dashboard/VotersDashboard";
import AdminLogin from "./components/pages/admin-login/AdminLogin";
import AdminRegistration from "./components/pages/admin-dashboard/Admin-dashboard";
import Results from "./components/pages/voting-result/Results";
import SignOut from "./components/pages/signout/SignOut";


function App() {
  return (
   <Routes>
      <Route path="/" element={ <Navigation /> } > 
        <Route index element={ <Home /> }/>
        <Route path="VotersDashboard" element={ <VotersDashboard /> }/>
        <Route path="AdminLogin" element={ <AdminLogin /> }/>
        <Route path="AdminRegistration" element={ <AdminRegistration /> }/>
        <Route path="Results" element={ <Results /> }/>
        <Route path="SignOut" element={ <SignOut /> }/>
      </Route>
   </Routes>
      
  );
}

export default App;
