import { useCallback, useEffect, useState } from 'react';
import { Container } from '@/features/activityTool';
import { Box, Fab } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Save } from '@mui/icons-material';
import { useStudentActivity, useUpdateStudentActivity } from '@/api';

export const CreateActivityTool = () => {
  const snapToGridAfterDrop = false;
  const { data: studentActivity } = useStudentActivity();
  const [items, setItems] = useState([]);
  const { mutate: updateStudentActivity } = useUpdateStudentActivity();

  useEffect(() => {
    if (studentActivity) {
      setItems(studentActivity?.content.exercice || []);
    }
  }, [studentActivity, updateStudentActivity]);

  const updateItem = useCallback(
    (item) => {
      let exercice = items;
      exercice = exercice.map((i) => {
        if (i.id === item.id) {
          return item;
        }
        return i;
      });
      updateStudentActivity({
        student: {
          firstname: '5',
        },
        activity: {
          title: '' + studentActivity?.activity.id,
        },
        content: {
          exercice,
        },
      });
    },
    [items, studentActivity?.activity.id, updateStudentActivity],
  );

  const moveBox = useCallback(
    (item) => {
      updateItem(item);
    },
    [updateItem],
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Container
          snapToGrid={snapToGridAfterDrop}
          boxes={items}
          moveBox={moveBox}
          student
        />
      </Box>
      <Fab
        sx={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          bgcolor: 'success.main',
        }}
        aria-label="add"
        onClick={() => console.log('save activity')}
      >
        <Save />
      </Fab>
    </DndProvider>
  );
};

export default CreateActivityTool;
