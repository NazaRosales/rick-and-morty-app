import './App.css';
import NavBar from './components/navBar/NavBar';
import Cards from './components/cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';

function App() {
   const[characters, setCharacters] = useState([]);
  
   function onSearch(id) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
         } else {
         window.alert('¡No hay personajes con este ID!');
         }
         })
         .catch(() => {
            window.alert('¡No hay personajes con este ID!');
          });
   }
   const onClose = (id) => {
      setCharacters(characters.filter( char => char.id !== id ))
   }
   

   return (
      <div className='App'>
         <NavBar onSearch = {onSearch}/>
         <Cards characters={characters} onClose = {onClose} />
      </div>
   );
}
export default App;
