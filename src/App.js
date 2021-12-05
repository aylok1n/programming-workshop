import './App.css';
import { Routes, Route, Link, } from "react-router-dom";
import Task2 from './Tasks/Task2';
import Task3 from './Tasks/Task3';
import Task4 from './Tasks/Task4';
import Task5 from './Tasks/Task5';
import Task6 from './Tasks/Task6';
import Task7 from './Tasks/Task7';
import Task8 from './Tasks/Task8';
import Task10 from './Tasks/Task10'

function App() {
  return (
    <div className="App">
      <nav>
        <Link style={{ marginRight: 10 }} to='Task2' >Task2</Link>
        <Link style={{ marginRight: 10 }} to='Task3' >Task3</Link>
        <Link style={{ marginRight: 10 }} to='Task4' >Task4</Link>
        <Link style={{ marginRight: 10 }} to='Task5' >Task5</Link>
        <Link style={{ marginRight: 10 }} to='Task6' >Task6</Link>
        <Link style={{ marginRight: 10 }} to='Task7' >Task7</Link>
        <Link style={{ marginRight: 10 }} to='Task8' >Task8</Link>

        <Link style={{ marginRight: 10 }} to='Task10' >Task10</Link>
      </nav>
      <Routes>
        <Route path="/Task2" element={<Task2 />} />
        <Route path="/Task3" element={<Task3 />} />
        <Route path="/Task4" element={<Task4 />} />
        <Route path="/Task5" element={<Task5 />} />
        <Route path="/Task6" element={<Task6 />} />
        <Route path="/Task7" element={<Task7 />} />
        <Route path="/Task8" element={<Task8 />} />

        <Route path="/Task10" element={<Task10 />} />
      </Routes>
    </div>
  );
}

export default App;
