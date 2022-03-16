import React, { useState, useEffect } from "react";
import './styles.css'

export const Task4 = (props) => {
    const [N, setN] = useState(3)
    const [M, setM] = useState(3)
    const [matrix, setMatrix] = useState([[]])
    const [saddlePoint, setSaddlePoint] = useState(false)

    const setMatr = () => {
        let matr = [];
        for (let i = 0; i < N; i++) {
            matr[i] = []
            for (let j = 0; j < M; j++) {
                matr[i].push(Math.floor(Math.random() * (200 - 100 + 1)) + 100)
            }
        }
        setMatrix(matr)
        findSaddlePoint(matr)
    }

    const findSaddlePoint = (matr) => {
        for (let i = 0; i < matr.length; i++) {
            let rowMin = matr[i][0];

            let colIndex = 0;

            let saddlePoint = true;

            //Finding the smallest element in ith row
            for (let j = 1; j < matr[i].length; j++) {
                if (matr[i][j] < rowMin) {
                    rowMin = matr[i][j];

                    colIndex = j;
                }
            }

            //Checking rowMin is also the largest element in its column

            for (let j = 0; j < matr.length; j++) {
                if (matr[j][colIndex] > rowMin) {
                    saddlePoint = false;
                    break;
                }
            }

            if (saddlePoint) {
                setSaddlePoint(rowMin);
            }
            else setSaddlePoint(false);

        }
    }

    useEffect(() => {
        setMatr()
    }, [])

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
            {matrix?.map((N, indexN) => (
                <div key={indexN}>
                    {N?.map((M, indexM) => (
                        <span style={{ marginRight: 10 }} key={indexM}>{M}</span>
                    ))}
                </div>
            ))}
            {saddlePoint && <div>
                седловая точка: {saddlePoint}
            </div>}
        </div>
    )
}


export default Task4