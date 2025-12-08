import styles from './Button.module.css'
import clsx from 'clsx'


export default function Button({ style, children, version = 'whiteTrp', onClick, size = 'medium'}) {
    const classButton = clsx(
        styles.button,
        styles[version],
        styles[size]
    )

    return (
        <>
            <button onClick={onClick} className={classButton} style={style} >{children}</button>
        </>
    )
}