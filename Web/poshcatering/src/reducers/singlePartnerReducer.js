export const singlePartnerReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SINGLE_PARTNER_DATA':
            return {...state, ...action.payload.data};
        default:
            return state;
    }
}