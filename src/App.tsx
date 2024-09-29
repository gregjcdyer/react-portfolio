import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './layout/NavBar';
import About from './pages/About';
import Astro from './pages/Astro';
import Home from './pages/Home';
import Landscape from './pages/Landscape';
import Wildlife from './pages/Wildlife';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/wildlife' element={<Wildlife />} />
            <Route path='/landscape' element={<Landscape />} />
            <Route path='/astro' element={<Astro />} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
