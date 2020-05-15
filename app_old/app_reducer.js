import { combineReducers } from 'redux';
import { constants as boardConstants, reducer, otherReducer } from '../board_old';

export default combineReducers({
    [boardConstants.NAME]: reducer,
    [boardConstants.OTHER_REDUCER]: otherReducer
});