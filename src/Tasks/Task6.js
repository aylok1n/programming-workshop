import React, { useState } from "react";
import './styles.css'

export const Task6 = (props) => {
    const [string, setString] = useState('')
    const [words, setWords] = useState([])

    const setByAlphabet = (e) => {
        let str = e.target.value
        setString(str)
        var words = str.replace(/[0-9]/g, '').split(' ').sort();
        setWords(words)
    }

    return (
        <div className='center '>
            <h1>Task5</h1>
            <div className='row ' style={{ maxWidth: 600, width: 600, justifyContent: 'center' }}>
                <div className='column'>
                    <input style={{ width: 400, height: 50 }} placeholder='Введите строку' value={string} onChange={setByAlphabet} ></input>
                </div>
            </div>
            отсортированные слова: <div> {words.map((i, index) => (
                <span style={{ marginRight: 5 }} key={index}>{i}</span>
            ))}</div>
        </div>
    )
}
export default Task6