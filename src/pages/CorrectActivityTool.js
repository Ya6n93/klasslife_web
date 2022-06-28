import { useCallback, useEffect, useState } from 'react';
import { Container } from '@/features/activityTool';
import { Box, Button, Typography } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  useActivity,
  useUpdateActivity,
  useCreateStudentActivity,
} from '@/api';
import useStore from '@/store/useStore';

export const CorrectActivityTool = () => {
  const darkTheme = useStore((state) => state.darkTheme);
  const snapToGridAfterDrop = false;
  const { data: activity } = useActivity();
  const [items, setItems] = useState([]);
  const [exercice, setExercice] = useState([]);
  const { mutate: updateActivity } = useUpdateActivity();
  const { mutate: createStudentActivity } = useCreateStudentActivity();

  useEffect(() => {
    if (activity) {
      setItems(activity?.content.correction || []);
      setExercice(activity?.content.exercice || []);
    }
  }, [activity, updateActivity]);

  const updateItem = useCallback(
    (item) => {
      let correction = items;
      correction = correction.map((i) => {
        if (i.id === item.id) {
          return item;
        }
        return i;
      });
      updateActivity({
        content: {
          exercice,
          correction,
        },
        item: item,
      });
    },
    [items, updateActivity, exercice],
  );

  const moveBox = useCallback(
    (item) => {
      updateItem(item);
    },
    [updateItem],
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Container
          snapToGrid={snapToGridAfterDrop}
          boxes={items}
          moveBox={moveBox}
          student={false}
        />
      </Box>
      <Button
        sx={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          bgcolor: 'primary.main',
          borderRadius: '12px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
          p: '10px',
        }}
        onClick={() =>
          createStudentActivity({
            student: {
              firstname: '5',
            },
            activity: {
              title: '' + activity.id,
            },
            content: {
              exercice: exercice,
              correction: items,
            },
          })
        }
      >
        <Typography
          sx={{
            color: darkTheme ? '#e0e0e0' : '#212121',
            fontSize: '18px',
            lineHeight: '21px',
            fontStyle: 'italic',
            textTransform: 'capitalize',
          }}
          variant="overline"
        >
          Valider
        </Typography>
      </Button>
    </DndProvider>
  );
};

export default CorrectActivityTool;
