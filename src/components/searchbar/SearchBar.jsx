import styles from './SearchBar.module.css'
export function SearchBar(props) {
   return (
      <div className={styles.container}>
         <input type = "search" />
         <button onClick= {props.onSearch}>Agregar</button>
      </div>
   );
}

export default SearchBar;
