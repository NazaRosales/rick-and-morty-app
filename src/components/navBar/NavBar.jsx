import SearchBar from "../searchbar/SearchBar";
import { Link } from "react-router-dom";
export function NavBar(props) {
    return(
      <div>
         <Link to={'/about'}>
            <button>About</button>
         </Link>
         <Link to={'/home'}>
            <button>Home</button>
         </Link>
         <SearchBar onSearch = {props.onSearch}/>
      </div>
    );
 }
 
 export default NavBar;
 