import React, { Component } from 'react';
import {LabeledBox} from '../common/box';

const Task = (props) => {
  const { tasks } = props;
  return (
    <LabeledBox label={props.name} />
  )
}

export default Task;