import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { AuthTokenProvider } from './hooks/AuthTokenContext';
//import { RoomProvider } from './hooks/RoomContext';
import { ErrorProvider } from './hooks/ErrorContext';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        backgroundColor: '#191414',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: '#1DB954',
      },
    },
    Button: {
      variants: {
        spotify: {
          bg: '#1DB954',
          color: '#191414',
        },
        'spotify-alt': {
          bg: '#1DB954',
          color: '#191414',
        },
      },
    },
    Badge: {
      variants: {
        spotocracy: {
          bg: '#191414',
          color: '#1DB954',
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ErrorProvider>
      <AuthTokenProvider>
          <ChakraProvider theme={theme}>
            <App  />
          </ChakraProvider>
      </AuthTokenProvider>
    </ErrorProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
