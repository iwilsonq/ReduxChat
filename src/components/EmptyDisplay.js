import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const EmptyDisplay = props => {
  return (
    <div className="thread-display empty">
      <h3>You appear to not be chatting with anybody! Click one of the names in the user menu to get started :)</h3>
    </div>
  );
};

export default EmptyDisplay;
