import React, { useEffect } from 'react';
import { useAuthTokenContext, useAuthTokenUpdateContext,
} from '../hooks/AuthTokenContext';

import {Button, Stack, Flex,
} from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getUserAuthToken } from '../api/api';
import { stringify } from 'querystring';
import { timesWithinHour } from '../utils/Utils';
import useLocalStorage from '../hooks/useLocalStorage';
import { AuthTokenLocalData } from '../Types';
import Helmet from 'react-helmet';
//import { useErrorContext } from '../hooks/ErrorContext';
interface WelcomeProps {
}

const Welcome: React.FC<WelcomeProps> = () => {
  let navigate = useNavigate();

  const authToken = useAuthTokenContext();
  const updateAuthToken = useAuthTokenUpdateContext();

  const [storedTokenData, setStoredTokenData] = useLocalStorage<
    AuthTokenLocalData | undefined
  >('authToken', undefined);

 // const state = generateRandomString(16);

  const search = useLocation().search;
  const code = new URLSearchParams(search).get('code');

  useEffect(() => {
    const getAuthToken = async () => {
      if (code && !authToken && !storedTokenData) {
        const authToken = await getUserAuthToken(code);
        updateAuthToken(authToken.access_token);
        setStoredTokenData({
          authToken: authToken.access_token,
          creationTime: new Date().toISOString(),
          refreshToken: authToken.refresh_token,
        });
      }
    };
    getAuthToken();
  }, [authToken, code, updateAuthToken, storedTokenData, setStoredTokenData]);

  useEffect(() => {
    if (storedTokenData) {
      const dateCreated = new Date(storedTokenData.creationTime);
      if (
        storedTokenData.authToken &&
        dateCreated &&
        timesWithinHour(new Date(storedTokenData.creationTime), new Date())
      ) {
        updateAuthToken(storedTokenData.authToken);
      } else {
        setStoredTokenData(undefined);
      }
    }
  }, [setStoredTokenData, storedTokenData, updateAuthToken]);

  return (
    <>
     <Helmet>
        <title>better than spotify</title>
      </Helmet>
      <Stack
        className="welcome-form"
        margin="10vh 0"
        direction={{ base: 'column', md: 'row' }}
        height="100px"
        justifyContent="center"
        alignItems={{ base: 'center', md: 'normal' }}
      >
        
        <Flex alignItems="center">
          {!authToken ? (
            <a
              href={`https://accounts.spotify.com/authorize?${stringify({
                response_type: 'code',
                client_id: process.env.REACT_APP_CLIENT_ID,
                scope: process.env.REACT_APP_SCOPE,
                redirect_uri: process.env.REACT_APP_REDIRECT_URI,
              })}`}
            >
              Log In With Spotify
            </a>
          ) : (
            <Button
              variant="spotify"
              margin={{ base: '10px 0', md: '0 10px' }}
              onClick={() => {
                navigate(`/queue`);
              }}
            >
           WELCOME TO SPOTIFY
            </Button>
          )}
        </Flex>
      </Stack>
    </>
  );
};

export default Welcome;
