import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import styles from "./Galeria.module.css";


function Galeria() {
    const [characters, setAllCharacters] = useState("vazio")

    const getAllCharacters = async ()=>{
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        setAllCharacters(response.data.results)
    }
    
    return(
        <div>
            <h1>Galeria</h1>
            <button onClick={getAllCharacters}>Pesquisar</button>
            {characters !== "vazio" && (
                <ul>
                    {characters.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}


        </div>
    )
}


export default Galeria
