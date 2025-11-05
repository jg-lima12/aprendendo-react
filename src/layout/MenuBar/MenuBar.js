import { Link } from 'react-router-dom'
import styles from './MenuBar.module.css'
import Button from '../../components/Button/Button'

export default function MenuBar() {


    return (
        <>
            <div className={styles.containerMenu}>
                <div className={styles.cardMenu}>
                    <div className={styles.titleMenu}>
                        <span>Atividades</span>
                    </div>
                    <ul>
                        <li>
                            <Link
                                className={styles.link}
                                to='/comunicacao'>
                                <Button size='large' version='letterTrp'>Comunicação</Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                to='/sensoriais'>
                                <Button size='large' version='letterTrp'>Sensoriais</Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                to='/cognitivo'>
                                <Button size='large' version='letterTrp'>Cognitivo</Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                to='/interacao-social'>
                                <Button size='large' version='letterTrp'>Interação Social</Button>
                            </Link>
                        </li>
                        <li className={styles.noneBorder}>
                            <Link
                                className={styles.link}
                                to='/motora'>
                                <Button size='large' version='letterTrp'>Motora</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}