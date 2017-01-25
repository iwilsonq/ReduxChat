import React from 'react';

const ThreadControl = props => {
  console.log(props.threads);
  return (
    <div className="thread-control">
      {props.threads.map(thread => (
        <div
          key={thread.id}
          id={thread.id}
          className="thread"
          onClick={props.onThreadClick}
        >
          {thread.name}
        </div>
      ))}
    </div>
  );
};

export default ThreadControl;
