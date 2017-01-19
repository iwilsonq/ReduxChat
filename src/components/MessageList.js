import React from 'react';

const formatTimeSince = messageTimeStamp => {
  const elapsedTime = Date.now() - messageTimeStamp;
  const minutes = Math.floor(elapsedTime / 60000);

  if (minutes > 0)
    return minutes + 'm';

  return 'Now';
};

const MessageList = props => (
  <div className="message-list">
    {
      props.messages.map((m, index) => (
        <div
          key={index}
          className="message"
        >
          <div className="text-wrapper">
            <div className="text">
              {m.text}
              <span className="timestamp">@{formatTimeSince(m.timestamp)}</span>
            </div>
          </div>
        </div>
      ))
    }
    </div>
);

export default MessageList;
