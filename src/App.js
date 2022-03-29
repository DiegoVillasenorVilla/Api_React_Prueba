//import './App.css';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Users} from "./Pages/Users/Users";
import {Home} from "./Pages/Home/Home";
import {Login} from "./Pages/Login/Login";
import {PageNotFound} from "./Pages/PageNotFound";
import {User} from "./Pages/User/User";


function App(){
 return(
  
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="Home" element={<Home/>} />
      <Route  path="Login" element={<Login/>} />
      <Route path="Users" element={<Users/>} >
        <Route path=":UserId" element={<User/>} />
      </Route>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
      
  </BrowserRouter>
    
  );
  
}

export default App

