import {
  Modal,
  Paper,
  TextField,
  Select,
  Button,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import { useCreateActivity } from '@/api';

const ActivityModal = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const { mutate: createActivity } = useCreateActivity();

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleType = (event) => {
    setType(event.target.value);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        p: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      closeAfterTransition
    >
      <Paper sx={{ display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}>
        <TextField
          id="outlined-name"
          label="Nom de l'activité"
          value={name}
          onChange={changeName}
        />
        <TextField
          id="outlined-name"
          label="Description de l'activité"
          value={description}
          onChange={changeDescription}
        />
        <Select value={type} onChange={handleType}>
          <MenuItem value="dictee">Dictee</MenuItem>
          <MenuItem value="exercice">Exercice</MenuItem>
        </Select>
        <Button
          onClick={() =>
            createActivity(
              {
                activity: null,
                title: name,
                description,
                content: [],
                pictures: [],
              },
              {
                onSuccess: (data) => {
                  onClose();
                },
              },
            )
          }
        >
          Créer
        </Button>
        <Button onClick={onClose}>Annuler</Button>
      </Paper>
    </Modal>
  );
};

export default ActivityModal;
