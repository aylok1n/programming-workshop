import './App.css';
import { Routes, Route, Link, } from "react-router-dom";
import Task2 from './Tasks/Task2';
import Task3 from './Tasks/Task3';
import Task4 from './Tasks/Task4';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='Task2' >Task2</Link>
        <Link to='Task3' >Task3</Link>
        <Link to='Task4' >Task4</Link>
      </nav>
      <Routes>
        <Route path="/Task2" element={<Task2 />} />
        <Route path="/Task3" element={<Task3 />} />
        <Route path="/Task4" element={<Task4 />} />
      </Routes>
    </div>
  );
}

export default App;
