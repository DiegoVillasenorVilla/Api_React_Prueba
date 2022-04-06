import React, {useContext} from "react";
import { Navbar } from "../../components/Navbar/Navbar"
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
import "./Login.css";

export const Login = () => {

    const navigate =  useNavigate();
    const {dispatch} = useContext(userContext);
    const handleLogin = () => {
        dispatch({type: "LOGIN"});
        goToHome();
    };

    const goToHome = () => {
        navigate("/Users");
    };

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

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}