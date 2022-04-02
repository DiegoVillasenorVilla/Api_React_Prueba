import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import { faHome } from '@fortawesome/free-solid-svg-icons'


export const Navbar = () => {
  return(
    <div className="navbarContainer">
        
        <Link  to="/" style={{textDecoration: "none"}}> 
          <FontAwesomeIcon  className="iconHome" icon={faHome} />
        </Link>
         
        <div className="linksContainer">
         <Link to="/Login" style={{textDecoration: "none"}}>
           <h3 className="titleThree"> Login</h3>
         </Link>
        
         <Link  to="/Users" style={{textDecoration:"none"}}>
           <h3 className="titleThree">Users</h3>
         </Link>
        </div>
       
        
      
    </div>
    
      
      
  )
        
}