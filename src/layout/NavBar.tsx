import { ListItem, MenuList } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <MenuList style={styles.list}>
        <ListItem>
          <Link to='/'>Home</Link>
        </ListItem>
        <ListItem>
          <Link to='/wildlife'>Wildlife</Link>
        </ListItem>
        <ListItem>
          <Link to='/landscape'>Landscape</Link>
        </ListItem>
        <ListItem>
          <Link to='astro'>Astro</Link>
        </ListItem>
        <ListItem>
          <Link to='/about'>About</Link>
        </ListItem>
      </MenuList>
    </nav>
  );
};

interface Styles {
  nav: React.CSSProperties;
  list: React.CSSProperties;
}

const styles: Styles = {
  nav: {
    width: '100px',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
    textDecoration: 'none',
  },
};

export default NavBar;
