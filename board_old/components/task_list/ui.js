import React, { Component } from 'react';
import {LabeledBox} from '../common/box';
import TaskWrapper from '../task';

const TaskList = (props) => {
  const { taskLists } = props;
  return (
    <LabeledBox label={props.name}>
      <TaskWrapper taskListId={props.index}/>
    </LabeledBox>
  )
}

export default TaskList;