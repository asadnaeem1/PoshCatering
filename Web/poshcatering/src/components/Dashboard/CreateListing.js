import React from 'react';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';
import SimpleAppBar from './SimpleAppBar';
import {TextField, Container, Box, Button, makeStyles, Input, Typography, Paper} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3, 2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    submit: {
        margin: '16px 0 0 auto',
    },
    displayNone:{
        display: 'none'
    }
}));

const fileUpload = (e, change) => {
    const formData = new FormData()
    formData.append('file', e.target.files[0])
    console.log('------->',formData);
    axios.post("http://localhost:4000/files/upload", formData, {
    }).then(res => {
        change('image',res.data.filename);
    })
};

const createTextField = (props) => {
    const {input, label, meta, className} = props;
    return (
        <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            className={className}
            {...input}
            label={label}
        />
    )
}

function CreateListing(props) {
    const classes = useStyles();
    const { handleSubmit } = props;
    return (
        <Box>
            <SimpleAppBar title="Create Listing"/>
            <Paper className={classes.root}>
                <form onSubmit={handleSubmit}>
                    <Field 
                        name="title"
                        label="title"
                        component={createTextField}
                    />
                    <Field 
                        name="description"
                        label="description"
                        component={createTextField}
                    />
                    <Field 
                        name="address"
                        label="address"
                        component={createTextField}
                    />
                    <Field 
                        name="contact"
                        label="contact"
                        component={createTextField}
                    />
                    <Field 
                        name="image"
                        label="image"
                        className={classes.displayNone}
                        component={createTextField}
                    />
                    <Typography variant='body1' >
                        Image Upload: <Input type='file' accept="image/*" onChange={(e)=>{fileUpload(e,props.change)}} className={classes.input} margin="normal" required fullWidth/>
                    </Typography>
                    <Box display='flex'>
                        <Button variant="contained" color="primary" type="submit" className={classes.submit}>
                            Create
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    )
}

export default reduxForm({
    form: 'createListing'
})(CreateListing);
