import { useQuery } from 'react-query';
import { getStudent } from 'klasslife_lib';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '@/utils/access_token';

const useStudent = () => {
  const navigate = useNavigate();
  const token = getAccessToken();

  const { studentId } = useParams();
  return useQuery(
    ['student', studentId],
    () =>
      getStudent(token, studentId).then((res) => {
        console.log(res);
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

export { useStudent };
