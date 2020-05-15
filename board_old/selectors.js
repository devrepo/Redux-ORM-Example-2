import { OTHER_REDUCER, NAME } from './constants';

export const getSession = (state) => {
  return state[NAME].boardData;
}
export const getBoard = (state) => {
    const { boardData } = state[NAME];
    return boardData;
}
export const getTaskLists = (state) => {
  const { boardData } = state[NAME];
  const {taskLists} = boardData
  return taskLists || [];
}
export const getTasks = (state, taskListId) => {
    const taskLists = getTaskLists(state);
    return taskLists[taskListId].tasks || [];
}

export const getOtherState = (state) => {
  const otherState = state[OTHER_REDUCER];
  return otherState;
}