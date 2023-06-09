import { Link } from 'react-router-dom';
import styles from './Card.module.css'
export default function Card(props) {
  
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick = {() => props.onClose(props.id)}>X</button>
         </div>
         <Link to={`/detail/${props.id}`}>
            <div className={styles.dataContainer}>
               <h2>{props.name}</h2>
               <h4>Status: {props.status}</h4>
               <h4>Species: {props.species}</h4>
               <h4>Gender: {props.gender}</h4>
               <h4>Origin: {props.origin}</h4>
            </div>
            <img src={props.image} alt='Imagen' />
         </Link>


      </div>
   );
}

