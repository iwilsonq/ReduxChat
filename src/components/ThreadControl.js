import React from 'react';

const ThreadControl = props => {
  return (
    <div className="thread-control">
      {props.threads.map(thread => (
        <div
          key={thread.id}
          id={thread.id}
          className="thread"
        >
          <a id={thread.id} onClick={props.onThreadClick}>{thread.name + ' '}</a>
          <a id={thread.id} onClick={props.onThreadClose}>&times;</a>
        </div>
      ))}
    </div>
  );
};

export default ThreadControl;
