import Card from "../card/Card";

export default function Cards({ characters }) {
  console.log(characters);
  const cardsContainer = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
   }
   return (
      <div style={cardsContainer}>
         {characters.map(character => (
            <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin?.name}
            image={character.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
            />
         ))}
      </div>
   );
}
