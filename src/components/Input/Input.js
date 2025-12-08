import { useState } from 'react'
import styles from './Input.module.css'

export default function Input({ onChange ,size, color, text, placeHolder, id, name, value}){


    return (
        <div className={styles.card} style={{color: color}}>
        <label htmlFor={name}>{text}</label>
        <input value={value} onChange={onChange} className={`${styles.button} ${styles[color]} ${styles[size]}`} type="text" name={name} id={id} placeholder={placeHolder} />
        </div>
    )
}