import React from "react";
import Cntrywisedata from "./Cntrywisedata";
import Details from "./Details";
import './Middl.css';
import Rightmid from "./Rightmid";

const Rightsec = () => {
    return (
    <div  className="rightsc">
       <div className="right-top"><Cntrywisedata/></div>
       <div className="right-middle"><Rightmid/></div>
       <div className="right-bottom"><Details/></div>
    </div>
    )
}

export default Rightsec;