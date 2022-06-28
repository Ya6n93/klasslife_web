import React, { useState } from 'react';
import {
  CardContent,
  CardMedia,
  Typography,
  Rating,
  Grid,
  CardActionArea,
  Box,
} from '@mui/material';
import { CheckCircleRounded, CancelRounded } from '@mui/icons-material';
import klasslifeLogo from '@/assets/imgs/klasslife_logo.png';
import { SuiviModal, SuiviBorderLinearProgress } from '@/features/suivi';

const Suivi = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const students = [
    { name: 'test dupont', status: false, value: 50 },
    { name: 'test dupont', status: true, value: 20 },
    { name: 'test dupont', status: true, value: 20 },
    { name: 'test dupont', status: true, value: 20 },
    { name: 'test dupont', status: true, value: 20 },
    { name: 'test dupont', status: false, value: 20 },
    { name: 'test dupont', status: false, value: 50 },
    { name: 'test dupont', status: true, value: 50 },
    { name: 'test dupont', status: true, value: 76 },
    { name: 'test dupont', status: false, value: 76 },
    { name: 'test dupont', status: true, value: 76 },
    { name: 'test dupont', status: true, value: 12 },
    { name: 'test dupont', status: false, value: 12 },
    { name: 'test dupont', status: false, value: 12 },
    { name: 'test dupont', status: false, value: 0 },
    { name: 'test dupont', status: true, value: 0 },
    { name: 'test dupont', status: true, value: 0 },
    { name: 'test dupont', status: true, value: 50 },
  ];

  return (
    <div>
      <h1>Suivi des activités</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {students.map((value, index) => (
            <Grid item xs={2} sm={2} md={2}>
              <CardActionArea onClick={handleOpen}>
                <CardMedia component="img" height="140" image={klasslifeLogo} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.name}
                  </Typography>
                  <Typography variant="h5" color="text.secondary">
                    Status :{' '}
                    {value.status ? (
                      <CheckCircleRounded size="30" color="primary" />
                    ) : (
                      <CancelRounded size="30" color="error" />
                    )}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Box sx={{ width: '100%' }}>
                <SuiviBorderLinearProgress
                  value={value.value}
                  variant="determinate"
                />
              </Box>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {}}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <SuiviModal open={open} onClose={handleClose} />
    </div>
  );
};

export default Suivi;
