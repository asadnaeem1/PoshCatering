import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'white'
    },
}));

export default function SimpleAppBar({title}) {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
                {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}
