import { useEffect, useState } from "react";
import styles from "./Galeria.module.css";

function Galeria() {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character`
    );

    setCharacters(response.data);

    const personagem = (response.data.results.map((item) => console.log(item)));
    console.log(characters);
  };

  return (
    <>
      <button onClick={getCharacters}>Pesquisar</button>

      {characters === "vazio" ? (
        <h2>Nada carregado ainda</h2>
      ) : (
        <div>
          <h2>Resultados da pesquisa</h2>
          <p>Nome:{personagem.name}</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      )}
    </>
  );
}

export default Galeria;
