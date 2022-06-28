import { getAccessToken } from 'klasslife_lib';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import io from 'socket.io-client'

const Home = () => {
  const navigate = useNavigate();
  const [socket, setSocket] = useState()

  if (getAccessToken() === null) {
    navigate('/login');
  }

  useEffect(() => {
    let url = new URL("https://mercure.klasslife.fr/.well-known/mercure")
        url.searchParams.append('topic', '/conversations/8');

        const eventSource = new EventSource(url);

        eventSource.onmessage = (event) => {
            console.log(event)
        }
        eventSource.addEventListener('beforeunload', function () {
        if (eventSource != null) {
            eventSource.close();
        }
    });
  });

  return <Paper sx={{ minHeight: '85vh' }}>Ceci est la page Home</Paper>;
};

export default Home;
