import { useQuery } from 'react-query';
import { getStudentActivities } from 'klasslife_lib';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '@/utils/access_token';

const useStudentActivities = () => {
  const navigate = useNavigate();
  const token = getAccessToken();

  return useQuery(
    ['studentActivities', 'all'],
    () =>
      getStudentActivities(token).then((res) => {
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

export { useStudentActivities };
