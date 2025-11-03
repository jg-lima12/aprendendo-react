import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import imageLogo from '../img/LogoCCA.png'
import Button from '../components/Button'
import clsx from 'clsx'

export default function NavBar() {
    return (
        <>
            <header>
                <div className={styles.cardHeader}>
                    <Link to='/' className={clsx(styles.link, styles.logo)} >
                        <img src={imageLogo} alt="Logo do Site" className={styles.logoImg} />
                        <h1 className={styles.fontKanit}>CCA</h1>
                    </Link>

                    <ul>
                        <li>
                            <Link
                                className={styles.link}
                                to='/comunicacao'>
                                <Button version='lineTrp'>Comunicação</Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                to='/sensoriais'>
                                <Button version='lineTrp'>Sensoriais</Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                to='/cognitivo'>
                                <Button version='lineTrp'>Cognitivo</Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                to='/interacao-social'>
                                <Button version='lineTrp'>Interação Social</Button>
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={styles.link}
                                to='/motora'>
                                <Button version='lineTrp'>Motora</Button>
                            </Link>
                        </li>
                        <li>
                            <div className={styles.separation}>
                                <Link
                                    className={clsx(styles.link, styles.register)}
                                    to='/register'>
                                    <Button version='whiteBck' size='medium'>Register</Button>
                                </Link>
                                <Link
                                    className='link'
                                    to='/login'
                                    id='#login'>
                                    <Button version='whiteTrp' size='medium'>Login</Button>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}