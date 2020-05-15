import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';
import { getBoard, getSession, getOtherState} from '../../selectors';
import BoardUI from './ui';
import {Loader, Error} from '../common';

class Board extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    //Action creator from thunk is invoked here
    this.props.getBoard();
  }

  render() {
    const { board, session, other } = this.props;
    return (
      <div>
        <Error visible={other.error}> {other.error} </Error>
        <Loader visible={other.loading}/>
        <BoardUI {...board} visible={!other.error}/>
        <pre>
          {JSON.stringify(session, undefined, 4)}
        </pre>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        board: getBoard(state),
        session: getSession(state),
        other: getOtherState(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBoard: (boardId) => {
            dispatch(actions.getBoard());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);