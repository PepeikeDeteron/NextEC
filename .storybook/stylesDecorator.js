import React from 'react';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

const stylesDecorator = (story) => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default stylesDecorator;