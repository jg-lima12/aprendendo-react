import styles from './ButtonsTrp.module.css'

export default function ButtonTrp({ content, color, borderColor, event }) {
    return (
        <div>
            <button onClick={event} className={styles.buttonTrp} style={{ color: color, borderColor: borderColor }}>{content}</button>
        </div >
    )
}