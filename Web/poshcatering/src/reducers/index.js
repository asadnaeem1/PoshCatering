import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import {currentUserReducer} from './currentUserReducer';
import {partnersDataReducer} from './partnersDataReducer';
import {singlePartnerReducer} from './singlePartnerReducer';

export default combineReducers({
    form: formReducer,
    user: currentUserReducer,
    listing: partnersDataReducer,
    singlePartner: singlePartnerReducer
});