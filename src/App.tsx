import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './layout/NavBar';
import About from './pages/About';
import Astro from './pages/Astro';
import Home from './pages/Home';
import Landscape from './pages/Landscape';
import Wildlife from './pages/Wildlife';
import { RoutePath } from './routes'; // Import the RoutePath type

const appRoutes: { path: RoutePath; element: JSX.Element }[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/wildlife', element: <Wildlife /> },
  { path: '/landscape', element: <Landscape /> },
  { path: '/astro', element: <Astro /> },
];

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
