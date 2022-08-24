import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import List from './pages/List';
import Header from './components/Header';
import { io, Socket } from 'socket.io-client';
import {Box,} from '@chakra-ui/react';
import Song from './components/Song';
//import { useErrorContext } from './hooks/ErrorContext';

interface AppProps {

};


const App: React.FC <AppProps>= ({}) => {
  //const [roomID, setRoomID] = useState('');
  //const [createRoom, setCreateRoom] = useState<boolean>(false);
  const [socket, setSocket] = useState<Socket>();
 // const { error, setError } = useErrorContext();

  // useEffect(() => {
  //   const newSocket = io(`${process.env.REACT_APP_URL}/`);
  //   setSocket(newSocket);
  //   return () => {
  //     newSocket.close();
  //   };
  // }, [setSocket]);

  return (
    <>
      <Router>
        
        <Header />
        <Box margin={{ base: '10px 20px', md: '10px 50px' }} minHeight="80vh">
          <Routes>
            <Route
              path="/"
              element={
                <Welcome
                />
              }
            />
            <Route
              path="/queue"
              element={
                <List/>
              }
            />
           
           
          </Routes>
        </Box>
       
      </Router>
    </>
  );
};

export default App;
