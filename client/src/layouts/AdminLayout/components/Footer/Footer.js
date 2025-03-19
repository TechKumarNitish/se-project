import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Software Engineering Project. 2025
      </Typography>
      <Typography variant="caption">
      Designed with precision and excellence |{' '}
        <Link href="http://georgesimos.com/" target="_blank" rel="noopener">
          Software Engineering Project
        </Link>
      </Typography>
    </div>
  );
}
