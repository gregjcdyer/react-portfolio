import { ListItem, MenuList } from '@mui/material';
import { Link } from 'react-router-dom';
import { RoutePath } from '../routes';

const NavBar = () => {
  const links: { path: RoutePath; label: string }[] = [
    { path: '/', label: 'Home' },
    { path: '/wildlife', label: 'Wildlife' },
    { path: '/landscape', label: 'Landscape' },
    { path: '/astro', label: 'Astro' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav style={styles.nav}>
      <MenuList style={styles.list}>
        {links.map((link) => (
          <ListItem key={link.path}>
            <Link to={link.path} style={styles.link}>
              {link.label}
            </Link>
          </ListItem>
        ))}
      </MenuList>
    </nav>
  );
};

interface Styles {
  nav: React.CSSProperties;
  list: React.CSSProperties;
  link: React.CSSProperties;
}

const styles: Styles = {
  nav: {
    width: '100px',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
  },
  link: {
    textDecoration: 'none',
  },
};

export default NavBar;
