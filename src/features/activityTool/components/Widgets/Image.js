//ELEMENTS

import { Image as MuiImage } from '@mui/icons-material';
import { Box } from '@mui/material';

const Image = ({ src, preview, lock }) => {
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
    // <img src={src} sx={{ height: '100%', width: '100%' }} />
    <Box
      sx={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: '100%',
      }}
    />
    //   <div
    //     style={lock ? { ...stylesLock } : { ...styles }}
    //     role={preview ? 'ImagePreview' : 'Box'}
    //   >
    //     {title}
    //   </div>
  );
};

export default Image;
