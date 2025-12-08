import styles from './Card.module.css'

export default function Card({title, description}){
    return(
        <div className={styles.card}>
            <div className={styles.body}>
                <h2>{title}</h2>
                <span>{description}</span>
            </div>
        </div>
    )
}