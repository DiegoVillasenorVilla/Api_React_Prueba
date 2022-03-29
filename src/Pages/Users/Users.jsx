import React from 'react';
import './Users.css';
import {useState, useEffect} from "react";
import  { Link } from "react-router-dom"; 
import {Input} from "../../components/Input/Input";
import {MiniCard} from "../../components/MiniCard/MiniCard";
import { Navbar } from "../../components/Navbar/Navbar";


export const Users = () => {

  const [superheroe, setsuperheroe] = useState([]);
  const [filter, setFilter] = useState('');
  //const [counter, setCounter] = useState(0);
  //const TextInput = useRef();   //ref={TextInput}

  const FiltrarDatos = superheroe.filter((item)=> item.name.toLowerCase().includes(filter));

  useEffect(() => {
    const fetchHeroe = async () =>{
      const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
      const data = await response.json();
      setsuperheroe(data);
      //TextInput.current.focus();
    }
    fetchHeroe();
  }, []);

  const handleFilter= (e) => {setFilter(e.target.value)};

  return (
    <>
      <Navbar/>
      <div className="Users">
       
       <Input className="input-search" placeholder="Search" onChange={handleFilter}/> 
       <div className="grid-container">{FiltrarDatos?.map((item, i)=>(
        <Link
          key={item.id}
          to={`/Users/${item.id}`}
          style={{ textDecoration: "none"}}
          state={item}
        >
          <MiniCard images={item.images} name={item.name} biography={item.biography} appearance={item.appearance}/>
        </Link>
        
       ))}
       </div>  

       <div className="container"> </div>
      

      
      </div>
    </>
    
  );
}

export default Users

