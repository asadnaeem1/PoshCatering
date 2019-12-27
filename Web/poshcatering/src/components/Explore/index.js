import React, {useEffect} from 'react';
import PartnerCard from '../Common/PartnerCard';
import {Box, makeStyles} from '@material-ui/core';
import {fetchPartners} from '../../actions';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    card: {
        padding: 10
    },
})

function Explore({fetchPartners, listing, history}) {
    const classes = useStyles();
    useEffect(()=>{
        fetchPartners();
    }, [])
    return (
        <div>
            <Box display='flex' flexWrap='wrap' justifyContent='space-around' alignItems='center'>
                {
                    Object.values(listing).map((item)=>(
                        <Box className={classes.card} key={item._id}>
                            <PartnerCard partner={item}/>
                        </Box>
                    ))
                }
            </Box>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listing: state.listing
    }
}

export default connect(mapStateToProps, {fetchPartners})(Explore);
