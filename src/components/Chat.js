import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { addMessage } from '../actions';

class Chat extends Component {
  handleMessageSubmit(text) {
    this.props.addMessage(text);
  }

  render() {
    return (
      <div className="chat">
        <MessageList messages={this.props.messages} />
        <MessageInput onSubmit={this.handleMessageSubmit.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { messages }  = state;
  return {
    messages
  };
};

export default connect(mapStateToProps, { addMessage })(Chat);
