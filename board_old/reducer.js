import * as types from './action_types';

const initialState = {
    boardData: {},
    loading: false,
    error: null
}

const updateArray = (array, id, newObject) => {
    return [
        ...array.slice(0, id), Object.assign({}, array[id], newObject),...array.slice(id + 1)
    ]
}
export default (state = initialState, action) => {
    switch(action.type){
        case types.GET_BOARD_STARTED:
            return {
                ...state,
                loading: action.payload
            }
        case types.GET_BOARD_SUCCESS: 
            return {
                ...state,
                boardData: {
                    ...action.payload,
                    lastUpdated: (new Date().getTime())
                },
                loading: false
            }

        case types.EDIT_TASK_SUCCESS: 
            const {id, taskListId, newName} = action.payload;
            const taskLists = state.boardData.taskLists;
            const tasks = taskLists[taskListId].tasks;
            let updatedTasks = updateArray(tasks, id, {name: newName});
            let updatedTaskList = updateArray(taskLists, taskListId, {tasks: updatedTasks});
            let returnState =  Object.assign({}, state,
                    {
                        ...state,
                        boardData: {
                            ...state.boardData,
                            taskLists: updatedTaskList
                        }
                    }
            );
            return returnState;
        
        default :
            return state;
    }
}

