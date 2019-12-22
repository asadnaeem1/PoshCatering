import React from 'react';
import bannerImage from '../../assets/carousel/banner1.jpg';
import {Typography, Container} from '@material-ui/core';

export default function Jumbotron() {
    return (
        <div style={styles.mainDiv}>
            <div style={styles.innerDiv}>
                <Container>
                    <Typography variant="h3">Get the best Catering services in town!</Typography>
                    <Typography variant="h5">POSH Catering, for all your catering needs.</Typography>
                </Container>
            </div>
        </div>
    )
}

const styles = {
    mainDiv: {
        backgroundImage: `url(${bannerImage})`,
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
}