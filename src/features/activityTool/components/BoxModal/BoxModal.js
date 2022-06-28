import { Modal, Paper, TextField, Switch, Stack } from '@mui/material';
import { useState } from 'react';

const BoxModal = ({ changeTitle, open, onClose, lockElement }) => {
  const [title, setTitle] = useState(open?.title);
  const [lock, setLock] = useState(open?.lock);

  const handleChange = (event) => {
    setTitle(open?.title);
    setTitle(changeTitle(open?.id, event.target.value));
  };

  const handleLock = () => {
    setLock(open?.lock);
    setLock(lockElement(open?.id, lock));
    setLock(!lock);
  };

  return (
    <Modal
      open={Boolean(open)}
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
        <Stack flexDirection="row" alignItems="center">
          Bloqué <Switch defaultChecked={open?.lock} onChange={handleLock} />
        </Stack>
        <TextField
          id="outlined-name"
          label="Text"
          value={title}
          defaultValue={open?.title}
          onChange={handleChange}
        />
      </Paper>
    </Modal>
  );
};

export default BoxModal;
