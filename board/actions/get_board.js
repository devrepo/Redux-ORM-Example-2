import axios from 'axios';
import { normalize } from 'normalizr';

import { ENDPOINTS_BASE_URL } from '../constants';
import * as types from '../action_types';
import schemas from './schema';

export const getBoard = () => {
    return (dispatch) => {
        dispatch(getBoardStarted());
        axios
            .get('https://board-data.s3.ap-south-1.amazonaws.com/board.json')
            .then((res) => {
              //console.log(res.data)
              dispatch(getBoardSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getBoardFailure(err.message));
            });
    };
};

const getBoardStarted = () => ({
    type: types.GET_BOARD_STARTED,
    loading: true
});

const getBoardSuccess = (data) => {
    //Simple response is normalized
    const normalizedResponse = normalize(data, schemas.boardSchema);
    return {
        type: types.GET_BOARD_SUCCESS,
        payload: normalizedResponse.entities
    };
};

const getBoardFailure = (error) => ({
    type: types.GET_BOARD_FAILURE,
    loading: false,
    payload: {
        error
    }
});