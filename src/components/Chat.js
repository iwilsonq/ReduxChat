import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThreadDisplay from './ThreadDisplay';
import { addMessage } from '../actions';

class Chat extends Component {
  handleMessageSubmit(text) {
    const { activeThreadId } = this.props;
    this.props.addMessage(text, activeThreadId);
  }

  render() {
    const { threads, activeThreadId } = this.props;
    return (
      <div className="chat">
        <ThreadDisplay
          threads={threads}
          activeThreadId={activeThreadId}
          handleMessageSubmit={this.handleMessageSubmit.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { threads, activeThreadId }  = state;
  return {
    threads,
    activeThreadId
  };
};

export default connect(mapStateToProps, { addMessage })(Chat);
