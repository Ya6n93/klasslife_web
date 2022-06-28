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
const VerticalTrait = ({ title, color, preview, lock }) => {
  return (
    <div
      style={{
        backgroundColor: color || 'black',
        height: '100%',
        width: '10px',
        border: lock ? '2px dashed red' : null,
        cursor: 'move',
      }}
    />
  );
};

export default VerticalTrait;
