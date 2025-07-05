import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { getTheme } from './theme';

const Root = () => {
  const [mode, setMode] = useState('light'); // initial mode

  const theme = getTheme(mode);

  const togglemode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App togglemode={togglemode} mode={mode} />
      </ThemeProvider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
