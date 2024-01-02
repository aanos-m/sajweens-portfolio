import About from './About';
import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StarQuest from './projects/StarQuest';
import CometKnight from './projects/CometKnight';
import Illuminate from './projects/Illuminate';
import Aimbridge from './projects/Aimbridge';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects/StarQuest' element={<StarQuest/>}/>
        <Route path='/projects/Illuminate' element={<Illuminate/>}/>
        <Route path='/projects/CometKnight' element={<CometKnight/>}/>
        <Route path='/projects/Aimbridge' element={<Aimbridge/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
