import styles from './Card.module.css'
export default function Card(props) {
   const { name, status, species, gender, origin, image, onClose } = props;
  
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={onClose}>X</button>
         </div>

         <div className={styles.dataContainer}>
            <h2>{name}</h2>
            <h4>Status: {status}</h4>
            <h4>Species: {species}</h4>
            <h4>Gender: {gender}</h4>
            <h4>Origin: {origin}</h4>
         </div>

         <img src={image} alt='Imagen' />

      </div>
   );
}

