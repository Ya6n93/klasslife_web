import React from 'react';
import { StudentCard } from '@/features/students';
import '@/styles/Students.css';
import { Box, Typography, CircularProgress } from '@mui/material';
import { useStudents } from '@/api';

const Students = () => {
  const { data: students, isLoading } = useStudents();

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
    <div className="Students">
      <Typography
        variant="h1"
        element={<span />}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Mes élèves
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'center',
          padding: '15px',
          textDecoration: 'none',
        }}
      >
        {students['hydra:member'].map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </Box>
    </div>
  );
};

export default Students;
