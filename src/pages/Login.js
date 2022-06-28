import { Typography, Link as MUILink, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { LoginForm } from '@/features/auth';
import useStore from '@/store/useStore';
import logo from '@/assets/imgs/klasslife_logo.png';
import logoDark from '@/assets/imgs/klasslife_logo_dark.png';

const Login = () => {
  const darkTheme = useStore((state) => state.darkTheme);

  return (
    <Box display="flex" flexDirection="column">
      <img src={darkTheme ? logoDark : logo} alt="logo" width="75%" />
      <Typography color="grey.500" my={3}>
        Dear user, log in to continue
      </Typography>
      <LoginForm />
      <MUILink component={Link} to="/register" color="primary.main">
        Don't have an account? Register
      </MUILink>
    </Box>
  );
};

export default Login;
