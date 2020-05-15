import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTasks } from '../../selectors';
import Task from './ui';

class TaskWrapper extends Component {
  render(){
    const { tasks } = this.props;
    return (
      tasks.map( (task, index) => (
        <Task key={task.id} {...task} index={index}/>
      ))
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
        tasks: getTasks(state, props.taskListId)
    };
};

export default connect(mapStateToProps)(TaskWrapper);