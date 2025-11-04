import styles from './CardShadow.module.css'

export default function CardShadow({ style, children }) {
    return (
        <>
            <div className={styles.card} style={style}>
                {children}
            </div>
        </>
    )
}