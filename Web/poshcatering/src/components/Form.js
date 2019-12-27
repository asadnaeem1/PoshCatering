import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Typography, Button, Grid, Link as UILink } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submit: {
        margin: '16px 0'
    },
    linkStyle: {
        textDecoration: 'none'
    }
}))

const createTextField = (props) => {
    const {input, label, meta} = props;
    return (
        <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            {...input}
            label={label}
        />
    )
}

function Form(props) {
    const styleClasses = useStyles();
    const { handleSubmit, pristine, reset, submitting, classes, variant, heading } = props;
    const title= variant==="signin" ? "Sign In": "Sign Up"
    var baseURL = '';
    if(heading){
        baseURL = '/partners';
    }
    return (
        <Container className={styleClasses.container} maxWidth="sm">
            <div>
                <Typography variant="h3">{heading?heading: "Welcome!"}</Typography>
                <Typography variant="h5">{title}</Typography>
                <form onSubmit={handleSubmit}>
                    {
                        variant==="signup" ? (
                            <Field 
                                name="name"
                                label="name"
                                component={createTextField}
                            />
                        ) : null
                    }
                    <Field 
                        name="email"
                        label="email"
                        component={createTextField}
                    />
                    <Field 
                        name="password"
                        label="password"
                        component={createTextField}
                    />
                    <Button variant="contained" color="primary" type="submit" className={styleClasses.submit}>
                    {title}
                    </Button>
                </form>
                {
                    variant==="signup" ? (
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link className={styleClasses.linkStyle} to={`${baseURL}/signin`}>
                                <UILink href="#" variant="body2">
                                    Already have an account? Sign in
                                </UILink>
                                </Link>
                            </Grid>
                        </Grid>
                        ) : (
                        <Grid container>
                            <Grid item xs>
                                <Link className={styleClasses.linkStyle}>    
                                    <UILink variant="body2">
                                        Forgot password?
                                    </UILink>
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link className={styleClasses.linkStyle} to={`${baseURL}/signup`}>
                                    <UILink variant="body2">
                                        Don't have an account? Sign Up
                                    </UILink>
                                </Link>
                            </Grid>
                        </Grid>
                        )
                }
            </div>
        </Container>
    )
}

export default reduxForm({
    form: 'accountForm'
})(Form);
