import { useMutation, useQueryClient } from 'react-query';
import { createStudentActivity } from 'klasslife_lib';
import { getAccessToken } from '@/utils/access_token';

const useCreateStudentActivity = (data) => {
  const queryClient = useQueryClient();
  const token = getAccessToken();

  return useMutation(createStudentActivity(token), {
    onMutate: async (newActivity) => {
      await queryClient.invalidateQueries('studentActivities');

      const previousActivities = queryClient.getQueryData('studentActivities');

      if (previousActivities) {
        queryClient.setQueryData('studentActivities', [
          ...previousActivities,
          newActivity,
        ]);
      }

      return { previousActivities };
    },
    onError: (error, newActivity, context) => {
      if (context?.previousActivities) {
        queryClient.setQueryData(
          'studentActivities',
          context.previousActivities,
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries('studentActivities');
    },
  });
};

export { useCreateStudentActivity };
