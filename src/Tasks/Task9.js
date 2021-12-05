import React, { useState, useEffect } from "react";
import "./complex.css";
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import Complex from "../utils/Complex";

export const Task9 = (props) => {
    const [h, setH] = useState(0.05);
    const [data, setData] = useState([]);
    const xMin = 1;
    const xMax = 3;

    const findComplexFunction = () => {
        const arrayValues = Complex.task(xMin, xMax, h);
        console.log(arrayValues);
        setData(arrayValues);
    };

    useEffect(() => {
        findComplexFunction();
    }, []);

    // const setHValue = (e) => {
    //   setH(e.target.value-0);
    // }

    return (
        <div className='wrapper'>
            <div className='content'>
                {/* <div className='field'>
            <label>h:</label>
            <input type="number" value={h} onChange={setHValue} />
          </div>     */}
            </div>
            <div className='chart'>
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="x" />
                    <YAxis type="number" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="re" stroke="#8884d8" />
                    <Line type="monotone" dataKey="im" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    )
}
export default Task9