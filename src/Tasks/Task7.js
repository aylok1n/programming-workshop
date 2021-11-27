import React, { useState } from "react";
import './styles.css'

export const Task7 = (props) => {
    const [a, setA] = useState('')
    const [b, setB] = useState('')
    const [res, setRes] = useState('')

    const calculate = () => {
        setRes((parseInt(a, 11) + parseInt(b, 11)).toString(11))

    }

    return (
        <div className='center '>
            <h1>Task5</h1>
            <div className='row ' style={{ maxWidth: 600, width: 600, justifyContent: 'center' }}>
                <div className='column'>
                    <input placeholder='Введите перове число' value={a} onChange={e => setA(e.target.value.replace(/[^[0-9.Aa]/, ''))} ></input>
                    <input placeholder='Введите перове число' value={b} onChange={e => setB(e.target.value)} ></input>
                </div>
                <button onClick={calculate}>Сложить</button>
            </div>
            <div className='column'>
                сумма {res}
            </div>
            <div className='column'>
                сумма в десятичной {parseInt(res, 11)}
            </div>
        </div>
    )
}
export default Task7