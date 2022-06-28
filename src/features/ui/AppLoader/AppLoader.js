import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Fade } from '@mui/material';
import useStore from '@/store/useStore';
import logo from '@/assets/imgs/klasslife_logo.png';
import logoDark from '@/assets/imgs/klasslife_logo_dark.png';
import * as S from './styles';

const AppLoader = ({ delay }) => {
  const [visible, setVisible] = useState(false);
  const darkTheme = useStore((state) => state.darkTheme);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return visible ? (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      aligenItems="center"
    >
      <S.Logo>
        <Fade in={visible} timeout={200}>
          {/* Mettre  une version light et une autre dark idealemant */}
          <img
            src={darkTheme ? logoDark : logo}
            // height="50"
            alt="KlassLife Logo"
          />
        </Fade>
      </S.Logo>
    </Box>
  ) : null;
};

AppLoader.propTypes = {
  delay: PropTypes.number,
};

AppLoader.defaultProps = {
  delay: 150,
};

export default AppLoader;
