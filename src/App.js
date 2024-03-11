import React from "react";
import UserDetails from './Components/UserDetails'
import Home from './routes/home'
import Contacts from './routes/contact'
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";

const App = () => {
  return ( 
    <> 
     <NavBar/>
    <Routes>
      

      <Route path="/project" element={<UserDetails />} /> 
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<Contacts/>} />

       
      <Route />
    </Routes>
</>
   );
}
 
export default App;
