import { useQuery } from 'react-query';
import { getStudentActivity } from 'klasslife_lib';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '@/utils/access_token';

const useStudentActivity = () => {
  const navigate = useNavigate();
  const token = getAccessToken();

  const { studentActivityId } = useParams();
  return useQuery(
    ['studentActivity', studentActivityId],
    () =>
      getStudentActivity(token, studentActivityId).then((res) => {
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

export { useStudentActivity };
