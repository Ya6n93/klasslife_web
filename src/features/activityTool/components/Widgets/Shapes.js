import PropTypes from 'prop-types';
import { Square, Circle, Star } from '@mui/icons-material';

const SquareShape = ({ color, lock, student }) => {
  return (
    <Square
      sx={{
        color: color,
        height: '100%',
        width: '100%',
        boxSizing: 'initial',
        border: !student && lock ? '1px dashed red' : null,
      }}
    />
  );
};

const CircleShape = ({ color, lock, student }) => {
  return (
    <Circle
      sx={{
        color: color,
        height: '100%',
        width: '100%',
        borderRadius: '100%',
        boxSizing: 'initial',
        border: !student && lock ? '1px dashed red' : null,
      }}
    />
  );
};

const StarShape = ({ color, lock, student }) => {
  return (
    <Star
      sx={{
        color: color,
        height: '100%',
        width: '100%',
        borderRadius: '100%',
        boxSizing: 'initial',
        border: !student && lock ? '1px dashed red' : null,
      }}
    />
  );
};

export { SquareShape, CircleShape, StarShape };
