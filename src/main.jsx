import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Move CSS import to the TOP (after React imports)
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);