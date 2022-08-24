import { Box, Button, Grid } from '@chakra-ui/react';
import React from 'react';
import { SongData } from '../Types';
import Song from './Song';

interface SearchResultProps {
  songData: SongData;
  style?: React.CSSProperties;
}

const SearchResult: React.FC<SearchResultProps> = ({songData, style
}) => {
  return (
    <>
      <Grid templateColumns="4fr 1fr" style={style}>
        <Song songData={songData} />
        <Box alignSelf="center" justifySelf="center">
        </Box>
      </Grid>
    </>
  );
};

export default SearchResult;
