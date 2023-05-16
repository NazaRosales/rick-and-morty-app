export default function Card(props) {
   const { name, status, species, gender, origin, image, onClose } = props;

   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h3>Status: {status}</h3>
         <h3>Species: {species}</h3>
         <h3>Gender: {gender}</h3>
         <h3>Origin: {origin.name}</h3>
         <img src={image} alt='Imagen' />
      </div>
   );
}

