import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "./Home.css";
//import {Link} from "react-route-dom";

export const Home = (props) => {
    return (
       
      <div className="mini-container-home">
        <Navbar/>
        <h1 className="titleOne">Super Heroes API</h1>
        <img className="img-home" src="https://image.winudf.com/v2/image/Y29tLnN1cGVyaGVyb2Vzd2FsbHBhcGVyc0hEYmFja2dyb3VuZHMuc3RhcndvcmxkX3NjcmVlbl83XzE1MzIwMTk0ODNfMDUw/screen-7.jpg?fakeurl=1&type=.jpg"/>
      </div>
     
       
        
    );
};

   
       
    
