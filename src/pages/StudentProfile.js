import { useState } from 'react';
import '@/styles/StudentProfile.css';
import { StudentModal } from '@/features/students';
import {
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
} from '@mui/material';
import { PhoneIphone, Home, LocalPhone, Cake } from '@mui/icons-material';
import Moment from 'moment';
import pp from '@/assets/imgs/neutral_pp.jpg';
import { useStudent } from '@/api';

const StudentProfile = () => {
  const { data: student, isLoading } = useStudent();
  const [anchorEl, setAnchorEl] = useState(false);

  const newModal = () => {
    setAnchorEl(true);
  };

  const closeNewModal = () => {
    setAnchorEl(false);
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src={student?.image ?? pp}
            />
            <span className="font-weight-bold">
              {student?.firstname} {student?.lastname}{' '}
            </span>
            <span className="text-black-50">stanmarsh@mail.com</span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">
                Profil de {student?.lastname} {student?.firstname}
              </h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6"></div>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
                }}
              >
                <Divider />
                <nav aria-label="main mailbox folders">
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Home />
                      </ListItemIcon>
                      <ListItemText
                        primary="Adresse postale"
                        secondary={student?.address + ' ' + student?.postalCode}
                      />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <PhoneIphone />
                      </ListItemIcon>
                      <ListItemText
                        primary="Portable de la mère"
                        secondary={student?.numberMother}
                      />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <PhoneIphone />
                      </ListItemIcon>
                      <ListItemText
                        primary="Portable du père"
                        secondary={student?.numberFather}
                      />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <LocalPhone />
                      </ListItemIcon>
                      <ListItemText
                        primary="Téléphone du domicile"
                        secondary={student?.numberHouse}
                      />
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <Cake />
                      </ListItemIcon>
                      <ListItemText
                        primary="Date d'anniversaire"
                        secondary={Moment(student?.birthday).format(
                          'DD-MM-YYYY',
                        )}
                      />
                    </ListItem>
                  </List>
                </nav>
              </Box>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <Button variant="outlined" onClick={newModal}>
              Modifier
            </Button>
            <StudentModal
              open={anchorEl}
              onClose={closeNewModal}
              studentName={student?.firstname + ' ' + student?.lastname}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
