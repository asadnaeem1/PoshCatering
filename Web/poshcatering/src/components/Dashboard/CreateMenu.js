import React, {useState} from 'react';
import {Field, reduxForm} from 'redux-form';
import SimpleAppBar from './SimpleAppBar';
import {TextField, Box, Button, makeStyles, Link, Paper, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
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
    link: {
        cursor: 'pointer'
    }
}));

const createTextField = (props) => {
    const {input, label, meta} = props;
    const _input = label==='description' ? {...input, multiline: true} : input;
    return (
        <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            {..._input}
            label={label}
        />
    )
}

function CreateMenu(props) {
    const classes = useStyles();
    const { handleSubmit, formType } = props;
    const [menuType, setMenuType] = useState('package');
    formType(menuType);
    const title = menuType==='package'? 'Create Package': 'Create Menu Item';
    return (
        <Box>
            <SimpleAppBar title="Create Menu"/>
            <Paper className={classes.root}>
                <Typography variant='h5'>{title}</Typography>
                <form onSubmit={handleSubmit}>
                    <Field 
                        name="title"
                        label="title"
                        component={createTextField}
                    />
                    {   
                        menuType==='package' ?
                            <Field 
                                name="description"
                                label="description"
                                component={createTextField}
                            /> : null
                    }
                    <Field 
                        name="price"
                        label="price"
                        component={createTextField}
                    />
                    <Box display='flex' alignItems='center'>
                        {
                            menuType==='package' ?
                            (<Link variant='body2' onClick={() => setMenuType('item')} className={classes.link}>Create Menu Item</Link>):
                            (<Link variant='body2' onClick={() => setMenuType('package')} className={classes.link}>Create Package</Link>)
                        }
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
    form: 'createMenu'
})(CreateMenu);
