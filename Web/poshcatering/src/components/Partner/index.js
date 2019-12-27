import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchSinglePartner} from '../../actions';
import Jumbotron from '../Home/Jumbotron';
import MenuItem from './MenuItem';
import {Field, reduxForm} from 'redux-form';
import { Grid, Paper, Typography } from '@material-ui/core';

const createMenuItem = ({input,label,meta, item})=>{
    return (
        <MenuItem {...item} input={input} label={label}/>
    )
}

function Partner(props) {
    const {handleSubmit, fetchSinglePartner, partner, selectedMenuItems, match} = props;
    useEffect(() => {
        fetchSinglePartner(match.params.id);
        console.log('called')
    }, [])
    console.log('-------------------------')
    selectedMenuItems && selectedMenuItems.values && Object.keys(selectedMenuItems.values).map((key)=>{
        console.log(selectedMenuItems.values[key]);
    })
    return (
        <Grid container xs={12}>
            <Grid item xs={9}>
                <Jumbotron content={{title: partner.title, description: partner.description, imageURL: `http://localhost:4000/static/img/${partner.image}`}}/>
                <form onSubmit={handleSubmit}>
                    {
                        partner.menuItems && partner.menuItems.map(item=>(
                            <Field name={item.title} item={item} key={item._id} component={createMenuItem}/>
                        ))
                    }
                </form>
            </Grid>
            <Grid item xs={3}>
                <Paper>
                    <Typography variant='h5' color='primary'>Selected Items</Typography>
                    <Typography variant='body1' color='primary'>Custom Package</Typography>
                {
                    selectedMenuItems && selectedMenuItems.values && Object.keys(selectedMenuItems.values).map(key=>(
                        selectedMenuItems.values[key]===true?(<Typography variant='body1'>- {key} {(partner.menuItems.find((item)=>item.title===key)).price}</Typography>):null
                    ))
                }
                </Paper>
            </Grid>
        </Grid>
    )
}
    
const MapStateToProps = (state)=>{
    // var partner = Object.values(state.listing).find(({_id})=>_id===ownProps.match.params.id);
    // if(partner){
    //     return {
    //         partner
    //     }
    // } else {
    //     return {}
    // }
    console.log(state)
    return {
        selectedMenuItems: state.form.selectedMenuItems,
        partner: state.singlePartner
    }
}
export default reduxForm({ form: 'selectedMenuItems'})(connect(MapStateToProps,{fetchSinglePartner})(Partner));