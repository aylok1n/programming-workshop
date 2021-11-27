import React, { useState } from "react";
import './styles.css'

export const Task4 = (props) => {
    const [N, setN] = useState(0)
    const [M, setM] = useState(0)
    const [matrix, setMatrix] = useState([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ])

    const setMatr = () => {
        let matr = [];
        for (let i = 0; i < N; i++) {
            matr[i] = []
            for (let j = 0; j < M; j++) {
                matr[i].push(Math.floor(Math.random() * (200 - 100 + 1)) + 100)
            }
        }
        setMatrix(matr)
    }

    const calculate = () => {
        let matr = [...matrix]
        setMatrix(matr.sort((n, m) => m.reduce((a, b) => a + b, 0) - n.reduce((a, b) => a + b, 0)))
    }

    return (
        <div className='center '>
            <h1>Task4</h1>
            <div className='row between'>
                <div className='column'>
                    <label>
                        N
                        <input value={N} onChange={e => setN(Number(e.target.value))} type='number' ></input>
                    </label>
                    <label>
                        M
                        <input value={M} onChange={e => setM(Number(e.target.value))} type='number' ></input>
                    </label>
                </div>
            </div>
            <button onClick={setMatr}>Заполнить</button>
            <button onClick={calculate}>Выполнить</button>
            {matrix?.map((N, indexN) => (
                <div key={indexN}>
                    {N?.map((M, indexM) => (
                        <span style={{ marginRight: 10 }} key={indexM}>{M}</span>
                    ))}
                    сумма строки {N.reduce((a, b) => a + b, 0)}
                </div>
            ))}
        </div>
    )
}
export default Task4