import { createSelector } from 'redux-orm';
import { OTHER_REDUCER } from './constants';
import orm from './models';

const Board = createSelector(orm.Board);
const TaskList = createSelector(orm.TaskList);
const Task = createSelector(orm.Task)

export const getSession = (state) => {
  const board = Board(state, 1);
  const taskLists = TaskList(state);
  const tasks = Task(state);
  return {
    board: board,
    taskLists: taskLists,
    tasks: tasks
  }
}
export const getBoard = (state) => {
    const board = Board(state, 1);
    return board || {}
}
export const getTaskLists = (state) => {
    const taskLists = TaskList(state);
    return taskLists || [];
}
export const getTasks = (state, taskListId) => {
    const tasks = Task(state);
    const filteredTasks = tasks.filter(task => 
        {
            return task.taskListId == taskListId
        })
    return filteredTasks || [];
}

export const getOtherState = (state) => {
  const otherState = state[OTHER_REDUCER];
  return otherState;
}