//import './App.css';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Users} from "./Pages/Users/Users";
import {Home} from "./Pages/Home/Home";
import {Login} from "./Pages/Login/Login";
import {PageNotFound} from "./Pages/PageNotFound";
import {User} from "./Pages/User/User";
import { PrivateRoute } from './routes/PrivateRoutes';


function App(){
 return(
  
  <Router>
    
    <Routes>
      <Route path="/" >
        <Route 
         index 
         element={
          <PrivateRoute>
           <Home/>
          </PrivateRoute>
        }
        />
        <Route path="Login" element={<Login/>} />
      </Route>
      <Route path="/Users">
        <Route
        index
        element={
          <PrivateRoute>
            <Users/>
          </PrivateRoute>
        }
        />
        <Route path=":UserId" 
        element={
         <PrivateRoute>
           <User/>
         </PrivateRoute>
        }
        />
      </Route>
        
    
     <Route path="*" element={<PageNotFound/>} />
    </Routes>
      
  </Router>
    
  );
  
}

export default App

