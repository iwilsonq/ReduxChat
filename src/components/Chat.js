import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThreadControl from './ThreadControl';
import ThreadDisplay from './ThreadDisplay';
import EmptyDisplay from './EmptyDisplay';
import { addMessage, changeActiveThread, closeThread } from '../actions';

class Chat extends Component {
  componentDidMount() {
    document.getElementById(this.props.activeThreadId).classList.add('active');
  }

  handleThreadClick(e) {
    const threadId = e.target.id;
    this.props.changeActiveThread(threadId);
  }

  handleThreadClose(e) {
    const threadId = e.target.id;
    this.props.closeThread(threadId);
  }

  handleMessageSubmit(text) {
    const { activeThreadId } = this.props;
    this.props.addMessage(text, activeThreadId);
  }

  render() {
    const { threads, activeThreadId } = this.props;
    return (
      <div className="chat">
        <ThreadControl
          threads={threads}
          activeThreadId={activeThreadId}
          onThreadClick={this.handleThreadClick.bind(this)}
          onThreadClose={this.handleThreadClose.bind(this)}
        />
      {
        threads.length ?
        <ThreadDisplay
          threads={threads}
          activeThreadId={activeThreadId}
          handleMessageSubmit={this.handleMessageSubmit.bind(this)}
        /> :
        <EmptyDisplay />
      }
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

export default connect(mapStateToProps, {
  addMessage,
  changeActiveThread,
  closeThread
})(Chat);
