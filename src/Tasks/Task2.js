import React from "react";
import './styles.css'

export const Task2 = (props) => {
    const [fx, setfx] = React.useState(false)
    const [x, setX] = React.useState(0)
    const [m, setM] = React.useState(0)
    const [j, setJ] = React.useState('')

    const calculate = () => {
        let FX = fx
        if (fx === 0) {
            FX = Math.sinh(x)
        } else if (fx === 1) {
            FX = Math.pow(x, 2)
        } else if (fx === 2) {
            FX = Math.exp(x)
        }

        if (-1 < m < x) {
            setJ(Math.sin(5 * FX + 3 * m * Math.abs(FX)))
        } else if (x < m) {
            setJ(Math.cos(3 * FX + 5 * m * Math.abs(FX)))
        } else if (x === m) {
            setJ(Math.pos(FX + m, 2))
        }
    }

    return (
        <div className='center '>
            <h1>Task2</h1>
            <div className='row between'>
                <div className='column'>
                    <label>
                        X
                        <input placeholder='x' value={x} onChange={e => setX(e.target.value)} type='number' ></input>
                    </label>
                    <label>
                        M
                        <input placeholder='m' value={m} onChange={e => setM(e.target.value)} type='number' ></input>
                    </label>
                </div>
                <div className='column'>
                    <div className='row'>
                        <label>sh(x)</label>
                        <input checked={fx === 0} onChange={e => !!e.target.value && setfx(0)} type='checkbox' ></input>
                    </div>
                    <div className='row'>
                        <label>x^2</label>
                        <input checked={fx === 1} onChange={e => !!e.target.value && setfx(1)} type='checkbox' ></input>
                    </div>
                    <div className='row'>
                        <label>e^x<input checked={fx === 2} onChange={e => !!e.target.value && setfx(2)} type='checkbox' /> </label>
                    </div>
                </div>
            </div>
            <button onClick={calculate}>Выполнить</button>
            {j}
        </div>
    )
}
export default Task2