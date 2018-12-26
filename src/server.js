import express from 'express';
import React from 'react';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { renderToString } from 'react-dom/server';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import App from './App';

const PORT = 8079;
const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const theme = createMuiTheme({
    palette: {
      primary: green,
      accent: red,
      type: 'light'
    },
    typography: {
      useNextVariants: true
    }
  });
  const generateClassName = createGenerateClassName();

  const content = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <App />
      </MuiThemeProvider>
    </JssProvider>
  );

  const css = sheetsRegistry.toString();

  const raw = `
  <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Title</title>
      </head>
      <body>
      
      <div id="app">${content}</div>
      <style id="jss-server-side">${css}</style>
      <script src="client.js"></script>
      </body>
      </html>
  `;

  res.send(raw);
});

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
