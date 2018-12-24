import React from 'react';
import Results from '../Results';
import Select from '../Select';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Typography variant="h4" gutterBottom>
        Сбор статистики
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Выберите страну
      </Typography>
      <Select />
      <Typography variant="subtitle1" gutterBottom>
        Выберите лигу
      </Typography>
      <Select />
      <Results />
    </>
  );
}
