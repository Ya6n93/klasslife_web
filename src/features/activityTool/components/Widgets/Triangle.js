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
const Triangle = ({ title, color, preview, lock }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderLeft: '50px solid transparent',
        borderRight: '50px solid transparent',
        borderBottom: `100px solid ${color || 'black'}`,
      }}
    />
  );
};

export default Triangle;
