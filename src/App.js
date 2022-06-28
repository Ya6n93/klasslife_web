import React, { useState, Suspense, useMemo, useEffect } from 'react';
import {
  StyledEngineProvider,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { ToastContainer } from 'react-toastify';
import AdapterDayjs from '@mui/lab/AdapterDayjs';
import { LocalizationProvider } from '@mui/lab';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from './router/AppRouter';
import useStore from './store/useStore';
import generateTheme from './theme';
import AppLoader from './features/ui/AppLoader';
import { getAccessToken } from 'klasslife_lib';
import history from '@/router/browserHistory';
import { ReactQueryDevtools } from 'react-query/devtools';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const darkTheme = useStore((state) => state.darkTheme);

  const theme = useMemo(
    () => generateTheme(darkTheme ? 'dark' : 'light'),
    [darkTheme],
  );

  useEffect(() => {
    //Ou une route qui peut ressortir une 401 ex: un user me
    if (getAccessToken() === null) {
      const from = history.location.pathname;
      if (!['/', '/login'].includes(from)) {
        const redirectTo = !['/', '/login'].includes(from)
          ? `?redirect-to=${from}`
          : '';
        history.replace(`login${redirectTo}`);
      }
    }
    setLoading(false);
  }, []);

  return (
    <Suspense fallback={<></>}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {loading ? (
            <AppLoader />
          ) : (
            <>
              <QueryClientProvider client={queryClient}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <AppRouter />
                  <ReactQueryDevtools initialIsOpen={false} />
                </LocalizationProvider>
              </QueryClientProvider>
              <ToastContainer theme={darkTheme ? 'dark' : 'light'} limite={3} />
            </>
          )}
        </ThemeProvider>
      </StyledEngineProvider>
    </Suspense>
  );
};

export default App;
