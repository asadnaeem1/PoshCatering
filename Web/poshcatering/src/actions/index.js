import axios from 'axios';

export const currentUser = (currentUser) => {
    return {
        type: 'USER',
        payload: currentUser
    }
}

export const fetchPartners = () => async (dispatch) => {
    const response = await axios.get('http://localhost:4000/data/partners');
    dispatch({
        type: 'PARTNERS_DATA',
        payload: response
    })
}

export const fetchSinglePartner = (id) => async (dispatch) => {
    const response = await axios.get(`http://localhost:4000/data/partners/${id}`);
    dispatch({
        type: 'SINGLE_PARTNER_DATA',
        payload: response
    })
}