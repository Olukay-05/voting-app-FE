import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home";
import Navbar from "./reusable-components/navbar-reusable/navbar";

function App() {

  
  return (
   <Routes>
      <Route path="/" element={ <Home /> } > 
      
      </Route>
   </Routes>
      
  );
}


  // <Navbar>
  //   <div>Banke</div>
  //   <div>Owolabi</div>
  //   <div>Celina</div>
  // </Navbar>
   
export default App;
