import {Link} from 'react-router-dom'
import styles from './NavBar.module.css'
import imageLogo from '../img/LogoCCA.png'
import ButtonTrp from '../components/ButtonsTrp'
import ButtonBck from '../components/ButtonsBck'
import clsx from 'clsx'

export default function NavBar() {
    return (
        <>
            <header>
                <div className={styles.cardHeader}>
                    <div className={styles.logo}>
                        <img src={imageLogo} alt="Logo do Site" className={styles.logoImg} />
                        <h1 className={styles.fontKanit}>CCA</h1>
                    </div>
                    <ul>
                        <li>
                            <Link className={styles.link} to='/'><ButtonTrp content='Home' color='white' borderColor='white' /></Link>
                        </li>
                        <li>
                            <Link className={styles.link} to='/about'><ButtonTrp content='About' color='white' borderColor='white' /></Link>
                        </li>
                        <li>
                            <Link className={styles.link} to='/contact'><ButtonTrp content='Contact' color='white' borderColor='white' /></Link>
                        </li>
                        <li>
                            <Link className={styles.link} to='/help'><ButtonTrp content='Help' color='white' borderColor='white' /></Link>
                        </li>
                        <li>
                            <div className={styles.separation}>
                                <Link className={clsx(styles.link, styles.register)} to='/register'><ButtonBck content='Register' backgroundColor='trasparent' color='white' borderColor='white' /></Link>
                                <Link className='link' to='/login' id='#login'><ButtonBck content='Login' color='#2e73db' borderColor='white'/></Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}