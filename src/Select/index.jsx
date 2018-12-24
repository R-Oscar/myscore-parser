import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import styles from './styles';
import components from './components';

function CountrySelect({ title, classes, theme }) {
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit'
      }
    })
  };

  return (
    <>
      <Typography variant="h5">{title}</Typography>
      <ReactSelect classes={classes} styles={selectStyles} components={components} />
    </>
  );
}

CountrySelect.propTypes = {
  title: PropTypes.string
};

export default withStyles(styles, { withTheme: true })(CountrySelect);
