import styles from './Comunicacao.module.css'
import { Link } from 'react-router-dom'
import CardShadow from '../../components/CardShadow/CardShadow'

export default function Comunicacao() {
    return (
        <>
            <section className={styles.sectionWelcome}>
                <div className={styles.cardSection}>
                    <div className={styles.containerWelcome}>
                        <div className={styles.cardWelcome}>
                            <h1>Comunicação</h1>
                            <p>Brincar é muito mais que diversão — é o caminho pelo qual a criança<br/>aprende a se expressar, entender o mundo e se conectar com as pessoas ao seu redor.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <CardShadow style={{backgroundColor: 'blue'}}>
                    OI
                </CardShadow>
            </section>
        </>
    )
}