import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from "react";
import {Input} from "./components/Input";
import {MiniCard} from "./components/MiniCard";


function App() {

  const [superheroe, setsuperheroe] = useState([]);
  const [filter, setFilter] = useState('');
  //const [counter, setCounter] = useState(0);
  const TextInput = useRef();   //ref={TextInput}

  const FiltrarDatos = superheroe.filter((item)=> item.name.toLowerCase().includes(filter));

  useEffect(() => {
    const fetchHeroe = async () =>{
      const response = await fetch('https://akabab.github.io/superhero-api/api/all.json');
      const data = await response.json();
      setsuperheroe(data);
      TextInput.current.focus();
    }
    fetchHeroe();
  }, []);

  const handleFilter= (e) => {setFilter(e.target.value)};

  return (
    <div className="App">
      <Input className="input-search" placeholder="Search" onChange={handleFilter}/> 
      <div className="grid-container">{FiltrarDatos?.map((item, i)=>(
        <MiniCard item={item}/>
      ))}
      </div>

      <div className="container"> </div>
      

      
    </div>
  );
}

export default App;
