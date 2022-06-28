import { getAccessToken } from '@/utils/access_token';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

const RequireAuth = () => {
  const token = getAccessToken();
  const { pathname } = useLocation();

  const redirectTo = pathname !== '/' ? `?redirect-to=${pathname}` : '';

  return (
    <>{token ? <Outlet /> : <Navigate to={`/login${redirectTo}`} replace />}</>
  );
};

export default RequireAuth;
