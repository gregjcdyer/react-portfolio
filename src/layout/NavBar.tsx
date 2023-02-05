import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', margin: '0.3rem' }}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/wildlife'>Wildlife</Link>
        </li>
        <li>
          <Link to='/landscape'>Landscape</Link>
        </li>
        <li>
          <Link to='astro'>Astro</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
