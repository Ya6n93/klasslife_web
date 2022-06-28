//ELEMENTS

const Box = ({ title, yellow, preview, lock, type }) => {
  const styles = {
    border: '2px dashed gray',
    padding: '0.5rem 1rem',
    cursor: 'move',
    color: 'black',
  };

  const stylesLock = {
    border: '2px dashed red',
    padding: '0.5rem 1rem',
    cursor: 'move',
    color: 'black',
  };

  return (
    <div
      style={lock ? { ...stylesLock } : { ...styles }}
      role={preview ? 'BoxPreview' : 'Box'}
    >
      {title}
    </div>
  );
};

export default Box;
