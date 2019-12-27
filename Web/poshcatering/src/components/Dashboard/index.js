import React from 'react';
import { Route, Link } from 'react-router-dom';
import {Grid, AppBar, Typography, makeStyles, List, ListItem, ListItemText, ListItemIcon, Box} from '@material-ui/core';
import {Create, Settings, Timeline, FormatListNumbered, Add} from '@material-ui/icons';
import CreateListing from './CreateListing';
import CreateMenu from './CreateMenu';
import axios from 'axios';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme)=>({
    sideNav: {
        backgroundColor: theme.palette.secondary.main,
        width: '100%',
    },
    listItem:{
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: 'white'
        }
    },
    linkStyle: {
        textDecoration: 'none'
    }
}));

const ListItemLink = (text,icon,link) => {
    const classes = useStyles();
    return (
        <Link to={`/dashboard/${link}`} className={classes.linkStyle}>
            <ListItem className={classes.listItem}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{text}</ListItemText>
            </ListItem>
        </Link>
    )
}

const handleCreateListing = (values, email) => {
    axios.post('http://localhost:4000/partners/createlisting',{...values, email}).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
}

const handleCreateMenu = (values, email, type) => {
    const link = type==='package' ? 'createmenupackage' : 'createmenuitem';
    axios.post(`http://localhost:4000/partners/${link}`,{...values, email}).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
}

function Dashboard({user}) {
    const classes = useStyles();
    var createMenuFormType = '';
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <List component='nav' >
                    {ListItemLink('Create Listing',<Create/>,'createlisting')}
                    {ListItemLink('Create / Edit Menu',<Add/>,'createmenu')}
                    {ListItemLink('Manage Orders',<FormatListNumbered/>)}
                    {ListItemLink('Summary',<Timeline/>)}
                    {ListItemLink('Setting',<Settings/>)}
                </List>
            </Grid>
            <Grid item xs={9}>
                <Route path='/dashboard/createlisting' exact><CreateListing onSubmit={(values)=>{handleCreateListing(values, user.email)}}/></Route>
                <Route path='/dashboard/createmenu' exact><CreateMenu onSubmit={(values)=>{handleCreateMenu(values, user.email, createMenuFormType)}} formType={(value)=>{createMenuFormType=value}}/></Route>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state)=>{
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)
