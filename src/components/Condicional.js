import { useState } from 'react'
import styles from './Condicional.module.css'

export function Condicional(){

    const [input, setInput] = useState('')
    const [userInput, setUserInput] = useState()


    function enviarEmail(e){
        console.log('Enviado')
        e.preventDefault()
        setUserInput(input)
    }


    return (
        <div>
            <h3>Cadastre o seu email</h3>
            <form>
                <input onChange={(e) => setInput(e.target.value)} value={input} type="email"/>
                <button onClick={enviarEmail}>Enviar Email</button>
            </form>
            <br/>
            {userInput}
        </div>
    )
}