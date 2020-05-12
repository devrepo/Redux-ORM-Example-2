import * as types from './action_types';

// Initial state of the application.
const initialState = {
    loading: false,
    error: null
};

// action types
const {
    GET_BOARD_STARTED,
    GET_BOARD_SUCCESS,
    GET_BOARD_FAILURE
} = types;

// Helper function to avoid switch cases and running the reducers
const createReducer = (initState, handlers) => {
    return function reducer(state = initState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        }
        return state;
    };
};

// Global handler for all the asynchronous actions to start loading
const startLoading = (state, action) => {
    return {
        ...state,
        loading: true
    };
};

// Global handler for all the asynchronous actions to stop loading
const stopLoading = (state, action) => {
    return {
        ...state,
        loading: false
    };
};

// Global handler to report all errors
const reportError = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.payload.error
    };
};

// actual mapping the reducers to the respective slice reducers.
export default createReducer(initialState, {
    [GET_BOARD_STARTED]: startLoading,
    [GET_BOARD_SUCCESS]: stopLoading,
    [GET_BOARD_FAILURE]: reportError
});