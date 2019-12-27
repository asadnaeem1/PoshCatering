import React from 'react';
import {withRouter} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: 345
  },
  media: {
    height: 140,
  },
});

function PartnerCard({partner, history}) {
    const classes = useStyles();
    const {image, title, description, _id} = partner
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={()=>{history.push(`/partner/${_id}`)}}>
        <CardMedia
          className={classes.media}
          image={`http://localhost:4000/static/img/${image}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>{history.push(`/partner/${_id}`)}}>
          Menu
        </Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(PartnerCard);
