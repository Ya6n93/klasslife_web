import { useQuery } from 'react-query';
import { getActivities } from 'klasslife_lib';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '@/utils/access_token';

const useActivities = () => {
  const navigate = useNavigate();
  const token = getAccessToken();

  return useQuery(
    ['activities', 'all'],
    () =>
      getActivities(token).then((res) => {
        if (res.status === 401) {
          navigate('/login');
        } else {
          return res.data;
        }
      }),
    {
      staleTime: 'infinity',
    },
  );
};

export { useActivities };
