import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import African from "./African";
import Europe from "./Europe";
import './Middl.css';
import NrAmerica from "./NrAmerica";
import Asia from "./Asia";
import Rightsec from "./Rightsec";
import Sidebar from "./Sidebar";
import Australia from "./Australia";
import SuAmerica from "./SuAmerica";
import Oceiana from "./Oceiana"



const Middl = () => {
    return (
        <div className="mid">
          <div className="container">
              
              <div className="right-section">
                <BrowserRouter className="flx">
                <div className="left-section">
                <Sidebar/>
               </div>
                  
                  <Routes>
                      <Route path="/" element={<Rightsec/>} />
                      <Route path="/ncafrica" element={<African/>} />
                      <Route path="/ncasia" element={<Asia/>} />
                      <Route path="/ncaustralia" element={<Australia/>} />                   
                      <Route path="/nceurope" element={<Europe/>} />                    
                      <Route path="/ncnramerica" element={<NrAmerica/>} />
                      <Route path="/ncsuamerica" element={<SuAmerica/>} />
                      <Route path="/ncoceiana" element={<Oceiana/>} />
                      
                    </Routes>  
                </BrowserRouter>    
              </div>
          </div>
        </div>
    )
}

export default Middl;