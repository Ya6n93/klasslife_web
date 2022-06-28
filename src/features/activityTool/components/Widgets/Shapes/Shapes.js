import { Square, Circle, Star } from '@mui/icons-material';

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

const SquareShape = ({ color, lock }) => {
  return (
    <Square
      sx={{
        color: color,
        height: '100%',
        width: '100%',
        boxSizing: 'initial',
        border: lock ? '2px dashed red' : null,
        cursor: 'move',
      }}
    />
  );
};

const CircleShape = ({ color, lock }) => {
  return (
    <Circle
      sx={{
        color: color,
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

const StarShape = ({ color, lock }) => {
  return (
    <Star
      sx={{
        color: color,
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

export { SquareShape, CircleShape, StarShape };
