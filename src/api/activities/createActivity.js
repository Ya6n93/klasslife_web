import { useMutation, useQueryClient } from 'react-query';
import { createActivity } from 'klasslife_lib';
import { getAccessToken } from '@/utils/access_token';

const useCreateActivity = (data) => {
  const queryClient = useQueryClient();
  const token = getAccessToken();

  return useMutation(createActivity(token), {
    onMutate: async (newActivity) => {
      await queryClient.invalidateQueries('activities');

      const previousActivities = queryClient.getQueryData('activities');

      if (previousActivities) {
        queryClient.setQueryData('activities', [
          ...previousActivities,
          newActivity,
        ]);
      }

      return { previousActivities };
    },
    onError: (error, newActivity, context) => {
      if (context?.previousActivities) {
        queryClient.setQueryData('activities', context.previousActivities);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries('activities');
    },
  });
};

export { useCreateActivity };
