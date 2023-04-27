import logo from './logo.svg';
import './App.css';
import { Router,Routes,Route } from 'react-router-dom'; 
import Layout from './components/layout.js';
import Lessons from './pages/lessons';
import Projects from './pages/projects';

function App() {
  return (
    <div class ="apper">
          <h1>Dwayne Levene | dwayneglevene@yahoo.com</h1>

      <Layout />

       {/* <Routes> */}
          {/* <Route path='lessons' element ={<Lessons />} /> */}
        {/* </Routes> */}
      {/* </Router> */}

      {/* <Router> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/lessons" element={<Lessons />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
