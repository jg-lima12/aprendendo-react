import styles from './Button.module.css'
import clsx from 'clsx'


export default function Button({ children, version = 'whiteTrp', event, size = 'medium'}) {
    const classButton = clsx(
        styles.button,
        styles[version],
        styles[size]
    )

    return (
        <>
            <button onClick={event} className={classButton}>{children}</button>
        </>
    )
}