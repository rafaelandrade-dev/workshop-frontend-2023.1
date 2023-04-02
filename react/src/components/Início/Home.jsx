import styles from "./Home.module.css"

function Home(){
    return(
        <main>
            <div className={styles.p_container}>
                <p className={styles.p_text}>
                    A dupla Rick e Morty não é apenas baseada em Doc Brown e Marty McFly, mas são também considerados uma representação vaga de um problema comum de saúde mental – o transtorno bipolar. Aparentemente, os dois personagens são baseados nas duas metades do co-criador Justin Roiland.
                    Dan Harmon admitiu, dizendo que o programa é “uma personificação precisa do transtorno bipolar”. Faz sentido, visto que mesmo considerando o quão diferentes os dois personagens são, eles ainda conseguem manter uma relação avô/neto bastante sólida.
                </p>
            </div>
        </main>
    )
}

export default Home 