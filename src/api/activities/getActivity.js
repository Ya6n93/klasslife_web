import { useQuery } from 'react-query';
import { getActivity } from 'klasslife_lib';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '@/utils/access_token';

const useActivity = () => {
  const navigate = useNavigate();
  const token = getAccessToken();

  const { activityId } = useParams();
  return useQuery(
    ['activity', activityId],
    () =>
      getActivity(token, activityId).then((res) => {
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

export { useActivity };
