import React from "react";
import "./Sidebar.css";

import { NavLink } from "react-router-dom";


const Sidebar = () => {

  return (
    <div className="sidebar">


      <ul className="sidein">
        <h2 className="conti">Continents</h2>

          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/">World</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/ncasia">Asia</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/ncafrica">Africa</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/ncaustralia">Australia</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/nceurope">Europe</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/ncnramerica">North America</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/ncsuamerica">South America</NavLink>
          <NavLink style={({isActive})=>{return{backgroundColor: isActive ?  ' #00204a' : ''}}} className="ancr1" to="/ncoceiana">Oceania</NavLink>
      </ul>

      
     
    </div>
  );
};

export default Sidebar;
