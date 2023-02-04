import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './layout/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <>
          <NavBar />
        </>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}>
              <Route index element={<h1>Home</h1>} />
              <Route path='*' element={<h1>Not Found</h1>} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
