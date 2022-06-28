import PropTypes from 'prop-types';
import {
  Card,
  IconButton,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';

const StudentActivityCard = ({ studentActivity }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const defaultColor = theme.palette.mode === 'dark' ? '#212121' : '#eeeeee';

  const updateActivty = () => {
    navigate(`/student-tool/${studentActivity.id}`);
  };

  return (
    <Card sx={{ minWidth: 275, backgroundColor: defaultColor }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {studentActivity.activity.title} <br />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {studentActivity.activity.description} <br />
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Edit" onClick={updateActivty}>
          <Edit />
        </IconButton>
      </CardActions>
    </Card>
  );
};

StudentActivityCard.propTypes = {
  activity: PropTypes.shape().isRequired,
};

export default StudentActivityCard;
