import './App.css';
import { Routes, Route, Link, } from "react-router-dom";
import Task2 from './Tasks/Task2';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='Task2' >Task2</Link>
      </nav>
      <Routes>
        <Route  path="/Task2" element={<Task2 />} />
      </Routes>
    </div>
  );
}

export default App;
