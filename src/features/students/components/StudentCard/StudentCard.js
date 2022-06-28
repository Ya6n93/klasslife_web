import * as React from 'react';
import { Card, Link } from '@mui/material';
import pp from '@/assets/imgs/neutral_pp.jpg';
import { useNavigate } from 'react-router-dom';

const StudentCard = ({ student }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: '100%',
        height: '280px',
        width: '220px',
        margin: '10px',
      }}
    >
      <Link
        to={`/students/${student.id}`}
        onClick={() => navigate(`/student/${student.id}`)}
      >
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <img
            style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              textAlign: 'center',
            }}
            variant="top"
            src={student.image ?? pp}
          />
        </div>
        <div style={{ textAlign: 'center' }} className="detail-container">
          <div>
            <p className="fullname">
              {student.lastname} {student.firstname}
            </p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default StudentCard;
