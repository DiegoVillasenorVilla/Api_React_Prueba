import React, {useContext} from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
import { NavItem } from "react-bootstrap";


export const Home = () => {

  const {dispatch} = useContext(userContext);
  let navigate = useNavigate();
  const location = useLocation();
  const handleLogout= () => {
    dispatch({type: "SINGOUT"});
    navigate("/Login");
  };

    return (
       
      <div className="mini-container-home">
        <Navbar/>
        <h1 className="titleOne">Super Heroes API</h1>
        <span>{location.state}</span>
        <button onClick={handleLogout}>Logout</button>
        <img className="img-home" src="https://image.winudf.com/v2/image/Y29tLnN1cGVyaGVyb2Vzd2FsbHBhcGVyc0hEYmFja2dyb3VuZHMuc3RhcndvcmxkX3NjcmVlbl83XzE1MzIwMTk0ODNfMDUw/screen-7.jpg?fakeurl=1&type=.jpg"/>
      </div>
     
       
        
    );
};

   
       
    
