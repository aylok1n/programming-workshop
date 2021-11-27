import React, { useState } from "react";
import './styles.css'
import Task3 from "./Task3";

export const Task5 = (props) => {
    const [fx, setfx] = useState(0)

    return (
        <div className='center '>
            <h1>Task5</h1>
            <div className='row between' style={{ maxWidth: 600, width: 600 }}>
                <Task3 y={(!!fx === 0 && Math.tan) || (!!fx === 1 && Math.cosh) || (!!fx === 2 && (x => Math.sin(x) * Math.sin(x)))} />
                <div className='column'>
                    <div className='row'>
                        <label>tg(x)</label>
                        <input checked={fx === 0} onChange={e => !!e.target.value && setfx(0)} type='checkbox' ></input>
                    </div>
                    <div className='row'>
                        <label>ch(x)</label>
                        <input checked={fx === 1} onChange={e => !!e.target.value && setfx(1)} type='checkbox' ></input>
                    </div>
                    <div className='row'>
                        <label>sin(x) * sin(x)<input checked={fx === 2} onChange={e => !!e.target.value && setfx(2)} type='checkbox' /> </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Task5