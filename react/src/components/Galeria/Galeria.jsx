import { useState, useEffect } from "react";
import axios from "axios"
import styles from "./Galeria.module.css";


function Galeria() {
    const [characters, setAllCharacters] = useState("vazio")

    const getAllCharacters = async ()=>{
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        setAllCharacters(response.data.results)
    }
    useEffect(()=>{
        getAllCharacters()
    })
    
    return(
        <div>
            <h1>Galeria</h1>
            {/* <div className={styles.btn_container}>
                <button onClick={getAllCharacters}>Pesquisar</button>
            </div> */}
            {characters !== "vazio" && (
                <ul>
                    {characters.map((item, index)=>(
                    <div className={styles.card}>
                        <img src={item.image} alt={item.name} key={index}/>
                        <li key={index} className={styles.name}>{item.name}</li>
                        <li key={index}>{item.status}</li>
                        <li key={index}>{item.species}</li>
                        <li key={index}>{item.gender}</li>
                    </div>

                    ))}
                </ul>
            )}


        </div>
    )
}


export default Galeria
