import { ColorPicker, useColor } from 'react-color-palette';
import { Modal, Paper, Stack, Switch, Button } from '@mui/material';
import 'react-color-palette/lib/css/styles.css';
import { useState } from 'react';

const ShapeModal = ({
  changeColor,
  open,
  onClose,
  lockElement,
  deleteElement,
  copieElement,
}) => {
  const [color, setColor] = useColor('hex', '#ffffff');
  const [lock, setLock] = useState(open?.lock);

  const handleLock = () => {
    setLock(lockElement(open?.id));
  };

  const handleChange = (event) => {
    setColor(event);
    changeColor(open?.id, event.hex);
  };

  const handleDelete = (event) => {
    deleteElement(open?.id);
    onClose();
  };

  const handleCopie = () => {
    copieElement(open);
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
          Bloqué{' '}
          <Switch
            defaultChecked={open?.lock}
            onChange={handleLock}
            value={lock}
          />
        </Stack>
        <ColorPicker
          width={456}
          height={228}
          color={color}
          onChange={handleChange}
          hideHSV
          hideRGB
          dark
        />
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleCopie}>Copie</Button>
      </Paper>
    </Modal>
  );
};

export default ShapeModal;
