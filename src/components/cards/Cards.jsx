import Card from "../card/Card";

export default function Cards(props) {

  const {characters} = props;
  const cardsContainer = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
   }
   return (
      <div style={cardsContainer}>
         
         {
            characters.map((character, index) => (
               <Card
               id = {character.id}
               key={index}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin?.name}
               image={character.image}
               onClose={() => props.onClose(character.id)}
               />
            ))
         }
      </div>
   );
}
