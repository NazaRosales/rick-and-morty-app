import './App.css';
import NavBar from './components/navBar/NavBar';
import Cards from './components/cards/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Detail from './components/detail/Detail';
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
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose = {onClose} />}>
            </Route>
            <Route path='/about' element = {<About/>}></Route>
            <Route path='/detail/:id' element = {<Detail/>}></Route>
         </Routes>
      </div>
   );
}
export default App;
