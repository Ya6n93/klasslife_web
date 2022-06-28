import useStore from '@/store/useStore';
import {
  useTheme,
  Link,
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
} from '@mui/material';
import logo from '@/assets/imgs/klasslife_logo.png';
import logoDark from '@/assets/imgs/klasslife_logo_dark.png';
import { NavLink as RRNavLink } from 'react-router-dom';
import DarkThemeToggle from '../DarkThemeToggle';

const NavLink = (props) => {
  const theme = useTheme();

  const activeStyle = {
    color: theme.palette.secondary.main,
  };

  return (
    <Link
      component={RRNavLink}
      underline="hover"
      {...props}
      style={({ isActive }) => (isActive ? activeStyle : null)}
    />
  );
};

const Navbar = () => {
  const darkTheme = useStore((state) => state.darkTheme);

  return (
    <AppBar position="static" color="inherit">
      <Toolbar variant="dense">
        <div>
          <img
            src={darkTheme ? logoDark : logo}
            height="50"
            alt="KlassLife Logo"
          />
        </div>
        <Box flexGrow={1}>
          <List
            sx={{
              display: 'flex',
              '& .MuiListItem-root': {
                width: 'auto',
              },
            }}
          >
            <ListItem>
              <NavLink to="/">Accueil</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/activities">Activités</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/chat">Messagerie</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/scheduler">Emploi du temps</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/suivi">Suivi des activités</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/student-activities">Student Activités</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/students">Mes élèves</NavLink>
            </ListItem>
          </List>
        </Box>
        <DarkThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
