import { useState } from "react"
import axios from 'axios'

import styles from './Galeria.module.css'


function Galeria(){
    
    const [character, setCharacter] = useState("vazio")

    const getCharacter = async ()=> {

        const response = await axios.get(`https://rickandmortyapi.com/api/character`)

        setCharacter(response.data)
        console.log(response)

        console.log(response.data.results.map((item)=> console.log(item)))
        console.log(character)
        
    }

    
    return(
        <>
            <button onClick={getCharacter}>Pesquisar</button>

            {
                character === "vazio" ?
                <h2>Nada carregado ainda</h2>
                :
                <div>
                    <h2>Resultados da pesquisa</h2>
                    <p>Nome:{character.name}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            }
        </>
    )
}

export default Galeria