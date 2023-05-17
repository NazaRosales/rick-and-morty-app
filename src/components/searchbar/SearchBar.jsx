import { useState } from 'react';
import styles from './SearchBar.module.css'
export function SearchBar(props) {

   const [character, setCharacter] = useState("");
   const handleChange = (evento) => {
      const {value} = evento.target;
      setCharacter(value)
      
   }

   return (
      <div className={styles.container}>
         <input type = "search" 
         onChange={handleChange}/>
         <button onClick= {() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}

export default SearchBar;
