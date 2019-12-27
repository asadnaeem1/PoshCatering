import React from 'react';
import bannerImage from '../../assets/carousel/banner1.jpg';
import {Typography, Container, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    mainDiv: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh'
    },
    innerDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
    }
}))


export default function Jumbotron({content}) {
    const classes = useStyles();
    const {title,description,imageURL=bannerImage} = content;
    return (
        <div className={classes.mainDiv} style={{backgroundImage: `url(${imageURL})`}}>
            <div className={classes.innerDiv}>
                <Container>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="h5">{description}</Typography>
                </Container>
            </div>
        </div>
    )
}