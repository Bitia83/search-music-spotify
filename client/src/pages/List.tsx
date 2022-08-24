import {  Grid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AddSong from '../components/AddSong';
import NowPlaying from '../components/NowPlaying';
import { useAuthTokenContext } from '../hooks/AuthTokenContext';
import { useErrorContext } from '../hooks/ErrorContext';

import { SongData } from '../Types';
import Helmet from 'react-helmet';


interface QueueProps {

}
const List: React.FC<QueueProps> = () => {
  const navigate = useNavigate();

 
  //const { setError } = useErrorContext();

  const [addSong, setAddSong] = useState<boolean>(false);

  const authToken = useAuthTokenContext();

  const addSongToQueue = (songData: SongData) => {
    const songToSend: SongData = {
      id: songData.id,
      name: songData.name,
      duration_ms: songData.duration_ms,
      artists: songData.artists,
      album: { images: songData.album.images },
    };

    
  };
  
  return (
    <>
      <Helmet>
        <title>Song Queue</title>
      </Helmet>
      <Grid templateColumns={{ base: '1fr', md: '1fr 3fr' }} gap="20px">
        <div></div>
        <div> 
          <AddSong submitSong={addSongToQueue} />
        </div> 
      </Grid>
    </>
  );
};

export default List;
