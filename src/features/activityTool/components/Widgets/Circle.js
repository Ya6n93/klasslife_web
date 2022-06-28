import { Circle } from '@mui/icons-material';

const styles = {
  border: '2px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

const stylesLock = {
  border: '2px dashed red',
  padding: '0.5rem 1rem',
  cursor: 'move',
};

//ELEMENTS
const Shape = ({ title, color, preview, lock }) => {
  return (
    <Circle
      sx={{
        color: color || 'black',
        height: '100%',
        width: '100%',
        borderRadius: '100%',
        boxSizing: 'initial',
        border: lock ? '2px dashed red' : null,
        cursor: 'move',
      }}
    />
  );
};

export default Shape;
