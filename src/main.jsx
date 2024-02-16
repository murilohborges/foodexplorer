import React from 'react';
import ReactDOM from 'react-dom/client';
import { SignUp } from './pages/SignUp/index.jsx';

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.js'

import GlobalStyles from './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <SignUp/>
    </ThemeProvider>
  </React.StrictMode>,
)
