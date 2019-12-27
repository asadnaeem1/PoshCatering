export const partnersDataReducer = (state = {}, action) => {
    switch (action.type) {
        case 'PARTNERS_DATA':
            return {...state, ...action.payload.data};
        default:
            return state;
    }
}