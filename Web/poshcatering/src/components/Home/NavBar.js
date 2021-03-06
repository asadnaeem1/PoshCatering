import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar({content}) {
    const classes = useStyles();
    const {brand, links} = content;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{background: 'white'}}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
                {brand}
            </Typography>
            {
              links.map(link=>(
                <Link to={link.link}>
                  <Button>{link.title}</Button>
                </Link>
              ))
            }
          </Toolbar>
        </AppBar>
      </div>
    )
}
