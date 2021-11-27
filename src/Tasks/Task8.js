import React, { useState } from "react";
import './styles.css'


export const Task8 = (props) => {
    const width = 500
    const height = 500
    const canvas = React.useRef(null)

    const [A, setA] = useState(0)
    const [B, setB] = useState(0)
    const [C, setC] = useState(0)
    const [M1, setM1] = useState([0, 0])
    const [M2, setM2] = useState([0, 0])

    React.useEffect(() => {
        updateCanvas()
    }, [A, B, C, M1, M2])

    const updateCanvas = () => {
        const ctx = canvas.current.getContext('2d');
        ctx.clearRect(0, 0, width, height);
        // Ваша формула
        const y = (x) => A * x + B * x + C;
        const polyline = (color, pts) => {
            ctx.strokeStyle = color;
            ctx.beginPath();
            pts.forEach((p, i) => i ? ctx.lineTo(...p) : ctx.moveTo(...p));
            ctx.stroke();
        }

        let scale = 25;
        let step = 1;
        ctx.lineWidth = 0.5;
        for (var i = step * scale; i < width; i += step * scale) { //вертикальные
            polyline('#7a7979', [[i, 0], [i, height]]);
        }
        for (var i = step * scale; i < height; i += step * scale) { //Горизонтальные
            polyline('#7a7979', [[0, i], [width, i]]);
        }

        ctx.lineWidth = 2;
        let pts = [];
        for (let x = -width / 2; x < width / 2; x += 1) {
            pts.push([width / 2 + x, height / 2 - y(x / scale) * scale]);
        }
        polyline('blue', pts);

        //Ось X 
        polyline('red', [[0, height / 2], [width, height / 2]]);

        // ось Y
        polyline('red', [[width / 2, 0], [width / 2, height]]);

        const m1x = width / 2 + Number(M1[0])
        const m1y = height / 2 - Number(M1[1])
        const m2x = width / 2 + Number(M2[0])
        const m2y = height / 2 - Number(M2[1])

        ctx.beginPath();
        ctx.strokeStyle = '#123123'
        ctx.lineWidth = 5;
        ctx.arc(m1x, m1y, 2, 0, Math.PI * 2, true);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#123123'
        ctx.lineWidth = 5;
        ctx.arc(m2x, m2y, 2, 0, Math.PI * 2, true);
        ctx.stroke();

        const M0 = pts.sort((a, b) => {
            let l1 = Math.sqrt(Math.pow((a[0] - m1x), 2) + Math.pow((a[1] - m1y), 2))
            let l2 = Math.sqrt(Math.pow((a[0] - m2x), 2) + Math.pow((a[1] - m2y), 2))
            let k1 = Math.sqrt(Math.pow((b[0] - m1x), 2) + Math.pow((b[1] - m1y), 2))
            let k2 = Math.sqrt(Math.pow((b[0] - m2x), 2) + Math.pow((b[1] - m2y), 2))
            return ((l1 + l2) - (k1 + k2))
        })[0]



        ctx.beginPath();
        ctx.strokeStyle = '#123123'
        ctx.lineWidth = 5;
        ctx.arc((M0[0]), M0[1], 2, 0, Math.PI * 2, true);
        ctx.stroke();
    }

    return (
        <div className='center '>
            <h1>Task8</h1>
            <div className='row between'>
                <div className='column'>
                    <label>A <input placeholder='Введите перове число' value={A} onChange={e => setA(Number(e.target.value))} ></input></label>
                    <label>B <input placeholder='Введите перове число' value={B} onChange={e => setB(Number(e.target.value))} ></input></label>
                    <label>C <input placeholder='Введите перове число' value={C} onChange={e => setC(Number(e.target.value))} ></input></label>
                </div>
                <div className='column'>
                    <label>M1 <input placeholder='Введите перове число' value={M1} onChange={e => setM1(e.target.value.split(',', 2))} ></input></label>
                    <label>M2 <input placeholder='Введите перове число' value={M2} onChange={e => setM2(e.target.value.split(',', 2))} ></input></label>
                    <div>M1 {M1.join(' ')}</div>
                    <div>M2 {M2.join(' ')}</div>
                </div>
            </div>
            <canvas ref={canvas} width={width} height={height} />
        </div>
    )
}
export default Task8