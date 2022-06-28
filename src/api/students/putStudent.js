import { useMutation, useQueryClient } from 'react-query';
import { putStudent } from 'klasslife_lib';
import { useParams } from 'react-router-dom';
import { getAccessToken } from '@/utils/access_token';

const usePutStudent = (content) => {
  const queryClient = useQueryClient();
  const { studentId } = useParams();
  const token = getAccessToken();

  return useMutation(
    (student) => {
      putStudent(token, studentId, student);
    },
    {
      onMutate: (newStudent) => {
        queryClient.cancelQueries(['student', studentId]);
        queryClient.setQueriesData(['student', studentId], newStudent);
      },
      onSettled: async () => {
        queryClient.invalidateQueries(['student', studentId]);
      },
    },
  );
};

export { usePutStudent };
