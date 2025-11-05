import styles from './Comunicacao.module.css'
import { Link } from 'react-router-dom'
import CardShadow from '../../components/CardShadow/CardShadow'
import imgComunicacao from '../../img/bckComunicacao.jpg'

export default function Comunicacao() {
    return (
        <>
            <section className={styles.sectionWelcome}>
                <div className={styles.cardSection}>
                    <div className={styles.containerWelcome}>
                        <div className={styles.cardWelcome}>
                            <h1>Comunicação</h1>
                            <p>Brincar é muito mais que diversão — é o caminho pelo qual a criança<br />aprende a se expressar, entender o mundo e se conectar com as pessoas ao seu redor.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sectionPresentation}>
                <div className={styles.containerPresentation}>
                    <CardShadow>
                        <p className={styles.widthP}>Estudos em fonoaudiologia e desenvolvimento infantil, como os de Paul e Norbury (2012), indicam que atividades lúdicas e estruturadas ajudam a melhorar linguagem expressiva e receptiva, habilidades sociais e compreensão de sinais sociais. Essas práticas permitem que a criança se expresse, compreenda melhor o mundo ao redor e participe de forma mais ativa das relações sociais.</p>
                        <img src={imgComunicacao} style={{height: '200px', borderRadius: '20px'}} alt="imagem de um pai ensinando pra sua filha" />
                    </CardShadow>
                </div>

            </section>
        </>
    )
}