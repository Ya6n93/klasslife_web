import PropTypes from 'prop-types';
import {
  Card,
  IconButton,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';
import { Delete, Edit, FileCopy, Check } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';

const ActivityCard = ({ id, activity }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const defaultColor = theme.palette.mode === 'dark' ? '#212121' : '#eeeeee';

  const updateActivty = () => {
    navigate(`/tool/create/${id}`);
  };

  const deleteActivity = () => {
    console.log(`delete ${id}`);
  };

  const cloneActivity = () => {
    console.log(`clone ${id}`);
  };

  const corrigerActivity = () => {
    navigate(`/tool/correct/${id}`);
  };

  return (
    <Card sx={{ minWidth: 275, backgroundColor: defaultColor }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {activity.title} <br />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {activity.description} <br />
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Edit" onClick={updateActivty}>
          <Edit />
        </IconButton>
        <IconButton aria-label="Check" onClick={corrigerActivity}>
          <Check />
        </IconButton>
        <IconButton aria-label="FileCopy" onClick={cloneActivity}>
          <FileCopy />
        </IconButton>
        <IconButton aria-label="Delete" onClick={deleteActivity}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

ActivityCard.propTypes = {
  id: PropTypes.number.isRequired,
  activity: PropTypes.shape().isRequired,
};

export default ActivityCard;
