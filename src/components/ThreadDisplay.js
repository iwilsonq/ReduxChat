import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ThreadDisplay = props => {
  const { threads, activeThreadId } = props;
  const activeThread = threads.find(thread => thread.id === activeThreadId);

  return (
    <div className="thread-display">
      <MessageList messages={activeThread.messages} />
      <MessageInput onSubmit={props.handleMessageSubmit} />
    </div>
  );
};

export default ThreadDisplay;
