import axios from 'axios';

import { ENDPOINTS_BASE_URL } from '../constants';
import * as types from '../action_types';
const boardDataForBenchMarking = 
{
  "name": "Board Old",
  "id": 1,
  "taskLists": [
    {
      "name": "Task List 1",
      "id": 1,
      "boardId": 1,
      "tasks": [
        {
          "name": "Task 1",
          "status": 1,
          "id": 1,
          "taskListId": 1
        }
      ]
    },
    {
      "name": "Task List 2",
      "id": 2,
      "boardId": 1,
      "tasks": [
        {
          "name": "Task 2",
          "status": 1,
          "id": 2,
          "taskListId": 2
        },
        {
          "name": "Task 3",
          "status": 1,
          "id": 3,
          "taskListId": 2
        }
      ]
    }
  ]
}
export const getBoard = () => {
    return (dispatch) => {
        dispatch(getBoardStarted());
        /*axios
            .get('https://board-data.s3.ap-south-1.amazonaws.com/board.json')
            .then((res) => {
              //console.log(res.data)
              dispatch(getBoardSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getBoardFailure(err.message));
            });*/
        dispatch(getBoardSuccess(boardDataForBenchMarking));
    };
};

const getBoardStarted = () => ({
    type: types.GET_BOARD_STARTED,
    loading: true
});

const getBoardSuccess = (data) => {
    return {
        type: types.GET_BOARD_SUCCESS,
        payload: data
    };
};

const getBoardFailure = (error) => ({
    type: types.GET_BOARD_FAILURE,
    loading: false,
    payload: {
        error
    }
});