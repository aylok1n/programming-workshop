import React, { useState } from "react";
import './styles.css'

export const Task3 = (props) => {
    const [x1, setx1] = useState(0)
    const [x2, setx2] = useState(0)
    const [N, setN] = useState(100)
    const [h, seth] = useState(0)
    const [res, setRes] = useState([])

    function factorial(num) {
        var rval = 1;
        for (var i = 2; i <= num; i++)
            rval = rval * i;
        return rval;
    }

    const calculate = () => {
        let H
        if (h === 0) H = Number(((1 - 0.1) / 10))
        else H = h
        let x = Number(x1)
        let res = []
        for (let n = 0; n <= N; n++) {
            if (x <= x2) {
                let result = Math.pow(2 * x, n) / factorial(n)
                let y = props.y ? props.y(x) : Math.exp(2 * x)
                res.push(`при x = ${x} сумма = ${result} Y(x) = ${y}`)
                x += H
            }
        }
        setRes(res)
    }

    return (
        <div className='center '>
            {props.y !== undefined ? <></> : <h1>Task3</h1>}
            <div className='row between'>
                <div className='column'>
                    <label>
                        x1
                        <input value={x1} onChange={e => setx1(Number(e.target.value))} type='number' ></input>
                    </label>
                    <label>
                        x2
                        <input value={x2} onChange={e => setx2(Number(e.target.value))} type='number' ></input>
                    </label>
                </div>
                <div className='column'>
                    <label>
                        N
                        <input value={N} onChange={e => setN(Number(e.target.value))} type='number' ></input>
                    </label>
                    <label>
                        h
                        <input value={h} onChange={e => seth(Number(e.target.value))} type='number' ></input>
                    </label>
                </div>
            </div>
            <button onClick={calculate}>Выполнить</button>
            {res.map((i, index) => <div key={index} >{i}</div>)}
        </div>
    )
}
export default Task3