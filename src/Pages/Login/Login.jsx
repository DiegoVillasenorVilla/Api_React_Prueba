import React from "react";
import { Navbar } from "../../components/Navbar/Navbar"
import "./Login.css"

export const Login = () => {
    return(
        <div className="loginCointainer">
            <Navbar/>
            <h1 className="headerOne">Login</h1>
            <div className="inputContainer">
                <label htmlFor=""> Email</label>
                <input  type="text" name="" id="" placeholder="Enter a valid email"/>
            </div>

            <div className="inputContainer">
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" placeholder="*****" ></input>
            </div>

            <button>Login</button>
        </div>
    )
}