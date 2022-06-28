import { useMutation, useQueryClient } from 'react-query';
import { updateActivity } from 'klasslife_lib';
import { useParams } from 'react-router-dom';
import { getAccessToken } from '@/utils/access_token';

const useUpdateActivity = (content) => {
  const queryClient = useQueryClient();
  const { activityId } = useParams();
  const token = getAccessToken();

  return useMutation(
    (activity) => {
      updateActivity(token, activityId, activity);
    },
    {
      onMutate: (newActivity) => {
        queryClient.cancelQueries(['activity', activityId]);
        queryClient.setQueriesData(['activity', activityId], newActivity);
      },
      onSettled: async () => {
        queryClient.invalidateQueries(['activity', activityId]);
      },
    },
  );
};

export { useUpdateActivity };
