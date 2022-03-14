import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from "react";

function App() {

  const [animal, setAnimal] = useState([]);
  const [filter, setFilter] = useState('');
  //const [counter, setCounter] = useState(0);
  const TextInput = useRef();

  const FiltrarDatos = animal.filter((item)=> item.name.toLowerCase().includes(filter));

  useEffect(() => {
    const fetchAnimals = async () =>{
      const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10');
      const data = await response.json();
      setAnimal(data);
      TextInput.current.focus();
    }
    fetchAnimals();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1> Animales</h1>
        <input ref={TextInput} placeholder="Search ..." onChange={(e) => setFilter(e.target.value)} />
        {FiltrarDatos?.map((item,i)=>(
           <p key={i}>{item.name}</p>
        )) }
        
      </header>
    </div>
  );
}

export default App;
