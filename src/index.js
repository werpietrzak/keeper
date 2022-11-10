import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyles } from './styles/Global.style';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.style';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
