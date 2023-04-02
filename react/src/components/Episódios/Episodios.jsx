import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import styles from "./Episodios.module.css";

function Episodios() {
  const [chapter, setChapter] = useState([]);

  async function GetChapter() {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21`
    );
    setChapter(response.data);
    console.log(chapter)
  }
  useEffect(() => {
    GetChapter();
  });

  return (
    <div>
      <h1>Episodios</h1>
      {chapter !== "vazio" && (
        
          <ul>
            {chapter.map((item, index) => (
              <div className={styles.card_episode}>
                <Link to="./src/components/CardEp/Card.jsx">
                <img
                  src="./src/assets/rickmortyepisodes.png"
                  alt="photo chapter"
                  key={index}
                />
                <li key={index} className={styles.episode}>
                  {item.name}
                </li>
                <li key={index} className={styles.episode}>
                  {item.episode}
                </li>
                <li key={index} className={styles.episode}>
                  {item.air_date}
                </li>
                </Link>
              </div>
            ))}
          </ul>
      )}
    </div>
  );
}

export default Episodios;
