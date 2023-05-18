import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
export default function Detail(){
    const {id} = useParams()
    const [character, setCharacter] = useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    return(
        <div>
            {character.name? <h1>{character.name}</h1> : null}
            {character.status? <h3>{character.status}</h3> : null}
            <h3>{character.species}</h3>
            <h3>{character.gender}</h3>
            {character.origin && character.origin.name && <h3>{character.origin.name}</h3>}
            <img src={character.image} alt= {character.name} />
        </div>
    )
}