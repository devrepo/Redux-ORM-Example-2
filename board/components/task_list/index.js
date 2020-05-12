import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTaskLists } from '../../selectors';
import TaskList from './ui';

class TaskListWrapper extends Component {
  render(){
    const { taskLists } = this.props;
    return (
      taskLists.map( (taskList) => (
        <TaskList key={taskList.id} {...taskList}/>
      ))
    )
  }
}

const mapStateToProps = (state, props) => {
    return {
        taskLists: getTaskLists(state)
    };
};

export default connect(mapStateToProps)(TaskListWrapper);