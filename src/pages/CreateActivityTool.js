import { useCallback, useEffect, useState } from 'react';
import {
  Container,
  ShapeModal,
  BoxModal,
  ListItem,
} from '@/features/activityTool';
import { Box, Button, Fab, IconButton, Paper, Typography } from '@mui/material';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ArrowBackIos, Save } from '@mui/icons-material';
import {
  useActivity,
  useUpdateActivity,
  useCreateStudentActivity,
} from '@/api';
import useStore from '@/store/useStore';
import { useNavigate } from 'react-router-dom';

export const CreateActivityTool = () => {
  const darkTheme = useStore((state) => state.darkTheme);
  const snapToGridAfterDrop = false;
  const { data: activity, isLoading } = useActivity();
  const [items, setItems] = useState([]);
  const { mutate: updateActivity } = useUpdateActivity();
  const { mutate: createStudentActivity } = useCreateStudentActivity();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      setItems(activity?.content.exercice || []);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, updateActivity]);

  const addItem = useCallback(
    (item) => {
      let tmpID = uuidv4();
      let exercice = items;
      item.id = tmpID;
      exercice.push(item);
      updateActivity({
        content: {
          exercice,
          correction: {
            exercice,
          },
        },
      });
      setItems(exercice);
    },
    [items, updateActivity],
  );

  const updateItem = useCallback(
    (item) => {
      let exercice = items;
      exercice = exercice.map((i) => {
        if (i.id === item.id) {
          return item;
        }
        return i;
      });
      updateActivity({
        content: {
          exercice,
          correction: exercice,
        },
      });
      setItems(exercice);
    },
    [items, updateActivity],
  );

  const [selectedShape, selectShape] = useState(null);
  const closeShape = () => selectShape(null);

  const [selectedBox, selectBox] = useState(null);
  const closeBox = () => selectBox(null);

  const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : r & 0x3 || 0x8;
        return v.toString(16);
      },
    );
  };

  const moveBox = useCallback(
    (item) => {
      if (item.id.length !== 36) {
        addItem(item);
      } else {
        updateItem(item);
      }
    },
    [addItem, updateItem],
  );

  const lockElement = useCallback(
    (id) => {
      let exercice = items;
      exercice = exercice.map((i) => {
        if (i.id === id) {
          i.lock = !i.lock;
        }
        return i;
      });
      updateActivity({
        content: {
          exercice,
          correction: exercice,
        },
      });

      return exercice[id].lock;
    },
    [items, updateActivity],
  );

  const changeColor = useCallback(
    (id, color) => {
      let exercice = items;
      exercice.find((e) => e.id === id).color = color;
      updateActivity({
        content: {
          exercice,
          correction: exercice,
        },
      });
      setItems(exercice);
    },
    [items, updateActivity],
  );

  const changeTitle = useCallback(
    (id, title) => {
      let exercice = { ...items };
      exercice[id].title = title;
      updateActivity({
        content: {
          exercice,
          correction: exercice,
        },
      });
    },
    [items, updateActivity],
  );

  const deleteElement = useCallback(
    (id) => {
      let exercice = items;
      exercice = exercice.filter((e) => e.id !== id);
      updateActivity({
        content: {
          exercice,
          correction: exercice,
        },
      });
      setItems(exercice);
    },
    [items, updateActivity],
  );

  const copieElement = useCallback(
    (element) => {
      let tmpID = uuidv4();
      let exercice = items;
      let newElement = { ...element };
      newElement.id = tmpID;
      newElement.top = newElement.top + 10;
      newElement.left = newElement.left + 10;
      exercice.push(newElement);
      updateActivity({
        content: {
          exercice,
          correction: exercice,
        },
      });
      setItems(exercice);
    },
    [items, updateActivity],
  );

  if (isLoading) {
    return <Paper sx={{ minHeight: '85vh' }}>Loading...</Paper>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={{ display: 'flex', minHeight: '80vh' }}>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            pb={5}
            gap={1}
            onClick={() => navigate('/activities')}
          >
            <Button
              sx={{
                p: 0,
                minWidth: '20px',
                bgcolor: darkTheme ? '#2b2b2b' : '#e0e0e0',
              }}
            >
              <ArrowBackIos
                sx={{
                  transform: 'translateX(5px)',
                }}
              />
            </Button>
            <Typography
              sx={{
                fontFamily: 'abeezee',
                fontStyle: 'italic',
                letterSpacing: '0.05em',
                fontSize: '18px',
              }}
            >
              Retour
            </Typography>
          </Box>
          <ListItem />
        </Box>
        <Box
          sx={{
            flex: 6,
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
          }}
          elevation={3}
        >
          <Typography
            variant="overline"
            sx={{
              fontSize: '20px',
              textAlign: 'center',
              letterSpacing: '0.25em',
              fontFamily: 'cantarell',
              pb: 2,
            }}
            component="span"
          >
            Activité en cours de création...
          </Typography>
          <div
            style={{
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
              onClick={lockElement}
              changeColor={changeColor}
              openModal={selectShape}
              boxModal={selectBox}
              creating
              student={false}
            />
          </div>
        </Box>
      </Box>
      <ShapeModal
        open={selectedShape}
        onClose={closeShape}
        changeColor={changeColor}
        lockElement={lockElement}
        deleteElement={deleteElement}
        copieElement={copieElement}
      />
      <BoxModal
        open={selectedBox}
        onClose={closeBox}
        changeTitle={changeTitle}
        lockElement={lockElement}
      />
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
      {/* <Fab
        sx={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          bgcolor: 'success.main',
        }}
        aria-label="add"
        onClick={() =>
          createStudentActivity({
            student: {
              firstname: '5',
            },
            activity: {
              title: '' + activity.id,
            },
            content: {
              exercice: items,
            },
          })
        }
      >
        <Save />
      </Fab> */}
    </DndProvider>
  );
};

export default CreateActivityTool;
