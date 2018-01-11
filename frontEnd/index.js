import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';

import AppRoutes from './routes'; // routes page

// maetrial ui and global style
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import './Styles/globalStyle'

const theme = createMuiTheme({
  palette: {
    primary: red, // Purple and green play nicely together.
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
    </MuiThemeProvider>,
  document.getElementById('app')
)
