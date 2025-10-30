import styles from './ButtonsBck.module.css'


export default function ButtonBck({ content, backgroundColor, color, event, borderColor }) {
    return (
        <>
            <button onClick={event} style={{ background: backgroundColor, color: color, borderColor: borderColor }}>{content}</button>
        </>
    )
}