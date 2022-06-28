import { useMutation, useQueryClient } from 'react-query';
import { updateStudentActivity } from 'klasslife_lib';
import { useParams } from 'react-router-dom';
import { getAccessToken } from '@/utils/access_token';

const useUpdateStudentActivity = (content) => {
  const queryClient = useQueryClient();
  const { studentActivityId } = useParams();
  const token = getAccessToken();

  return useMutation(
    (activity) => {
      updateStudentActivity(token, studentActivityId, activity);
    },
    {
      onMutate: (newActivity) => {
        queryClient.cancelQueries(['studentActivity', studentActivityId]);
        queryClient.setQueriesData(
          ['studentActivity', studentActivityId],
          newActivity,
        );
      },
      onSettled: async () => {
        queryClient.invalidateQueries(['studentActivity', studentActivityId]);
      },
    },
  );
};

export { useUpdateStudentActivity };
