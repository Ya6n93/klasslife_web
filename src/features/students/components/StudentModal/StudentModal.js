import {
  Modal,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';
import { useState } from 'react';
import { LocalizationProvider, DesktopDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { usePutStudent, useStudent } from '@/api';

const StudentModal = ({ open, onClose, studentName }) => {
  const { data: student, isLoading } = useStudent();
  const { mutate: putStudent } = usePutStudent();
  const [value, setValue] = useState(new Date(student?.birthday));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  function convertDate(date) {
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    var newdate = year + '-' + month + '-' + day;
    return newdate;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData(event.currentTarget);
    onClose();
    putStudent(
      {
        firstname: dataForm.get('firstname'),
        lastname: dataForm.get('lastname'),
        birthday: convertDate(value),
        address: dataForm.get('address'),
        postalCode: Number(dataForm.get('postalCode')),
        numberFather: dataForm.get('numberFather'),
        numberMother: dataForm.get('numberMother'),
        numberHouse: dataForm.get('numberHouse'),
      },
      {
        onSuccess: (data) => {
          onClose();
        },
      },
    );
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        p: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      closeAfterTransition
    >
      <Paper
        component="form"
        sx={{ display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}
        onSubmit={handleSubmit}
      >
        <Typography
          sx={{ mb: 2 }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Modification du profil de {studentName}
        </Typography>
        <TextField
          id="firstname"
          name="firstname"
          label="Nom"
          defaultValue={student?.firstname}
        />
        <TextField
          id="lastname"
          name="lastname"
          label="Prénom"
          defaultValue={student?.lastname}
        />
        <TextField
          id="address"
          name="address"
          label="Adresse postale"
          defaultValue={student?.address}
        />
        <TextField
          id="postalCode"
          name="postalCode"
          label="Code postal"
          defaultValue={student?.postalCode}
        />
        <TextField
          id="numberMother"
          name="numberMother"
          label="Portable Mère"
          defaultValue={student?.numberMother}
        />
        <TextField
          id="numberFather"
          name="numberFather"
          label="Portable Père"
          defaultValue={student?.numberFather}
        />
        <TextField
          id="numberHouse"
          name="numberHouse"
          label="Téléphone du domicile"
          defaultValue={student?.numberHouse}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Date d'anniversaire"
            inputFormat="dd/MM/yyyy"
            id="birthday"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button type="submit">Modifier</Button>
        <Button onClick={onClose}>Annuler</Button>
      </Paper>
    </Modal>
  );
};

export default StudentModal;
