import React from 'react';
import {Typography, Paper, makeStyles, Checkbox, Box, FormControlLabel} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(3,0),
      display:'flex',
      justifyContent: 'space-between'
    },
}));

export default function MenuItem({title,price, input, label}) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Box>
                <Typography variant="h5" component="h3">
                    {title}
                </Typography>
                <Typography component="p">
                    {`Rs. ${price}`}
                </Typography>
            </Box>
            <Box>
                <Typography variant="body1" color='primary'>Add
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={input.value ? true : false}
                            onChange={input.onChange}
                            color='primary'
                        />
                    }
                    label={label}
                />
                </Typography>
            </Box>
        </Paper>
    )
}
