import styles from "./Home.module.css"

function Home(){
    return(
        <>
            <div>
                <div className={styles.img_container}>
                    <img src="https://ovicio.com.br/wp-content/uploads/2021/10/20211002-rick-and-morty-dan-harmon-and-justin-roiland-finally-reveal_s738-1200.webp" alt="photo" />
                </div>
                <div>
                    <p>
                        A dupla Rick e Morty não é apenas baseada em Doc Brown e Marty McFly, mas são também considerados uma representação vaga de um problema comum de saúde mental – o transtorno bipolar. Aparentemente, os dois personagens são baseados nas duas metades do co-criador Justin Roiland.
                        Dan Harmon admitiu, dizendo que o programa é “uma personificação precisa do transtorno bipolar”. Faz sentido, visto que mesmo considerando o quão diferentes os dois personagens são, eles ainda conseguem manter uma relação avô/neto bastante sólida.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home