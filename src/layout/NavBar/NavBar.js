import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Button from '../../components/Button/Button'
import clsx from 'clsx'
import { AiOutlineMenu } from 'react-icons/ai';

export default function NavBar() {
    return (
        <>
            <header>
                <div className={styles.cardHeader}>
                    <AiOutlineMenu className={styles.menuIconHeader}/>
                    <ul>
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