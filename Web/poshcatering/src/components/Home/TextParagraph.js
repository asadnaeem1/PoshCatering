import React from 'react';
import {Typography, Container} from '@material-ui/core';

export default function TextParagraph({content}) {
    return (
        <Container maxWidth="md">
            <Typography variant="h3" style={styles.headingStyle}>{content.title}</Typography>
            <Typography variant="body2" style={styles.bodyStyle}>{content.paragraph}</Typography>
        </Container>
    )
}

const styles = {
    headingStyle: {
        textAlign: 'center'
    },
    bodyStyle: {
        margin: '10px 0px',
        textAlign: 'center'
    }
}
