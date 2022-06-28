import { Box, Paper } from '@mui/material';
import { StudentActivityCard } from '@/features/studentActivities';
import { useStudentActivities } from '@/api';

const Activity = () => {
  const { data: studentActivities, isLoading } = useStudentActivities();

  if (isLoading) {
    return <Paper sx={{ minHeight: '85vh' }}>Loading...</Paper>;
  }

  return (
    <Paper sx={{ minHeight: '85vh' }}>
      <Box p={2} display="flex" gap={2} flexWrap="wrap">
        {studentActivities['hydra:member'].map((studentActivity) => (
          <StudentActivityCard
            key={studentActivity.id}
            studentActivity={studentActivity}
          />
        ))}
      </Box>
    </Paper>
  );
};

export default Activity;
