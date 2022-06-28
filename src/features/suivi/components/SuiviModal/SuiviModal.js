import { Modal, Box, Typography, CardMedia, CardContent } from '@mui/material';
import { CheckCircleRounded, CancelRounded } from '@mui/icons-material';
import klasslifeLogo from '@/assets/imgs/klasslife_logo.png';
import SuiviBorderLinearProgress from '../SuiviBorderLinearProgress';

const SuiviModal = ({ open, onClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={Boolean(open)}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Suivi d'activité de l'élève : test dupont
        </Typography>
        <CardMedia component="img" height="140" image={klasslifeLogo} />
        <CardContent>
          <SuiviBorderLinearProgress variant="determinate" value={75} />
          <Typography>75%</Typography>
        </CardContent>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Historique des activité :{' '}
        </Typography>
        <Typography color="text.secondary">
          Coloriage : <CheckCircleRounded size="25" color="primary" />
        </Typography>
        <Typography color="text.secondary">
          Coloriage : <CancelRounded size="30" color="error" />
        </Typography>
        <Typography color="text.secondary">
          Coloriage : <CheckCircleRounded size="25" color="primary" />
        </Typography>
        <Typography color="text.secondary">
          Coloriage : <CancelRounded size="30" color="error" />
        </Typography>
        <Typography color="text.secondary">
          Coloriage : <CheckCircleRounded size="25" color="primary" />
        </Typography>
      </Box>
    </Modal>
  );
};

export default SuiviModal;
