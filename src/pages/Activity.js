import { Box, Paper, Fab } from '@mui/material';
import { Add } from '@mui/icons-material';
import { ActivityCard, ActivityModal } from '@/features/activities';
import { useState } from 'react';
import { useActivities } from '@/api';

const Activity = () => {
  const { data: activities, isLoading } = useActivities();

  const [anchorEl, setAnchorEl] = useState(false);

  const newModal = () => {
    setAnchorEl(true);
  };

  const closeNewModal = () => {
    setAnchorEl(false);
  };

  if (isLoading) {
    return <Paper sx={{ minHeight: '85vh' }}>Loading...</Paper>;
  }

  return (
    <Paper sx={{ minHeight: '85vh' }}>
      <Box p={2} display="flex" gap={2} flexWrap="wrap">
        {activities['hydra:member'].map((activity) => (
          <ActivityCard
            key={activity.id}
            id={activity.id}
            activity={activity}
          />
        ))}
      </Box>
      <Fab
        sx={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          bgcolor: 'success.main',
        }}
        aria-label="add"
        onClick={newModal}
      >
        <Add />
      </Fab>
      <ActivityModal open={anchorEl} onClose={closeNewModal} />
    </Paper>
  );
};

export default Activity;
