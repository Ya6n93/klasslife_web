import { useQuery } from 'react-query';
import { getStudents } from 'klasslife_lib';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '@/utils/access_token';

const useStudents = () => {
  const navigate = useNavigate();
  const token = getAccessToken();

  return useQuery(
    ['students', 'all'],
    () =>
      getStudents(token).then((res) => {
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

export { useStudents };
