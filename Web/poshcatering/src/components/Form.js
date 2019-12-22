import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column'
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
var variantGlobal;
function Form(props) {
    const styleClasses = useStyles();
    const { handleSubmit, pristine, reset, submitting, classes, variant } = props;
    variantGlobal = variant;
    const title= variant==="signin" ? "Sign In": "Sign Up"
    return (
        <Container className={styleClasses.container} maxWidth="sm">
            <Typography variant="h3">{title}</Typography>
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
                <Button variant="contained" color="primary" type="submit">
                    {title}
                </Button>
            </form>
        </Container>
    )
}
console.log(variantGlobal)
export default reduxForm({
    form: 'accountForm'
})(Form);
