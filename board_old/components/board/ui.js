import React, { Component } from 'react';
import {LabeledBox} from '../common/box';
import TaskListWrapper from '../task_list';

const BoardUI = (props) => {
  return (
    <LabeledBox label={props.name + ", last updated: " + new Date(props.lastUpdated).toUTCString()} visible={props.visible}>
      <TaskListWrapper />
    </LabeledBox>
    
  )
}

export default BoardUI;