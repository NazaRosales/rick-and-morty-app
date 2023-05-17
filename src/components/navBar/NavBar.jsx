import SearchBar from "../searchbar/SearchBar";
export function NavBar(props) {
    return(
       <SearchBar onSearch = {props.onSearch}/>
    );
 }
 
 export default NavBar;
 