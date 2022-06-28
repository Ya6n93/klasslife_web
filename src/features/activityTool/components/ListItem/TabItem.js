import { Tab, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const TabItem = styled((props) => (
  <Tab
    {...props}
    sx={{
      bgcolor:
        props.dark === 'true'
          ? props.choose === props.index
            ? '#333333'
            : 'transparent'
          : props.choose === props.index
          ? 'white'
          : 'transparent',
      borderRadius: '8px',
    }}
    label={
      <Box
        sx={{
          marginLeft: '-30px',
        }}
      >
        <img
          src={
            props.dark === 'true'
              ? props.choose === props.index
                ? props.logo
                : props.logodark
              : props.choose === props.index
              ? props.logodark
              : props.logo
          }
          style={{
            width: '50px',
            height: '50px',
          }}
          alt={props.label}
        />
        <Typography
          sx={{
            textTransform: 'lowercase',
            color:
              props.dark === 'true'
                ? props.choose === props.index
                  ? 'primary.main'
                  : '#333333'
                : props.choose === props.index
                ? 'primary.main'
                : 'white',
          }}
        >
          {props.label}
        </Typography>
      </Box>
    }
    value={props.index}
  />
))(({ theme }) => ({}));

export default TabItem;
