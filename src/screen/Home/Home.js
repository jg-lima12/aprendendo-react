import styles from './Home.module.css'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import simboloAutismo from '../../img/simboloAutismo.png'

export default function Home() {
    return (
        <>
            <section className={styles.sectionWelcome}>
                <div className={styles.cardSection}>
                    <div className={styles.containerWelcome}>
                        <div className={styles.cardWelcome}>
                            <h1>Bem vindos ao<br />Cuidar com Amor</h1>
                            <p>Aqui, você encontrará ideias, orientações e recursos <br /> para transformar o dia a dia em experiências enriquecedoras,<br />sempre com carinho, respeito e amor.</p>
                            <div><Link to='/login'><Button size='large' version='blueBck'>Login</Button></Link></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sectionPresentation}>
                <div className={styles.containerPresentation}>
                    <div className={styles.cardPresentation}>
                        <p>Cuidar de uma criança autista é uma jornada cheia de descobertas e aprendizados. Cada momento é uma oportunidade de estimular o desenvolvimento, fortalecer vínculos e celebrar conquistas.
                        As brincadeiras, atividades e exercícios — sejam sensoriais, educativos ou lúdicos — são muito mais do que diversão: eles ajudam no desenvolvimento da comunicação, da coordenação motora, da autonomia e na forma como a criança se relaciona com o mundo ao seu redor. Cada descoberta é um tesouro que merece ser valorizado.
                        </p>

                        <img src={simboloAutismo} className={styles.simboloTamanho} alt="Simbolo do Autismo" />
                    </div>
                </div>
            </section>
        </>
    )
}