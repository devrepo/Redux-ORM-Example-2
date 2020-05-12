import { combineReducers } from 'redux';
import { constants as boardConstants, reducer, otherReducer } from '../board';

export default combineReducers({
    [boardConstants.NAME]: reducer,
    [boardConstants.OTHER_REDUCER]: otherReducer
});