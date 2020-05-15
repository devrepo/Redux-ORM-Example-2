import * as types from '../action_types';

export const editTask = (id, newName = "New Task Name") => {
    return (dispatch) => {
        dispatch(taskNameEdit({id, newName}))
    }
}

const taskNameEdit = (payload) => ({
    type: types.EDIT_TASK_SUCCESS,
    loading: false,
    payload: payload
});