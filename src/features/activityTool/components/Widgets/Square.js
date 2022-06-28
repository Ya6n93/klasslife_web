import { Square as Shape } from '@mui/icons-material';

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
const Square = ({ title, color, preview, lock }) => {
  return (
    <Shape
      sx={{
        p: 0,
        color: color || 'black',
        height: '100%',
        width: '100%',
        boxSizing: 'initial',
        border: lock ? '2px dashed red' : null,
        cursor: 'move',
      }}
    />
    // <div
    //   style={{
    //     backgroundColor: color || 'black',
    //     height: '100%',
    //     width: '100%',
    //     boxSizing: 'initial',
    //     border: lock ? '2px dashed red' : null,
    //     cursor: 'move',
    //   }}
    // />
  );
};

export default Square;
