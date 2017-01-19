import React from 'react';

const MessageInput = props => {
  let input;
  return (
    <div className="message-input">
      <button
        onClick={() => {
          props.onSubmit(input.value);
          input.value = '';
        }}
        className="send-button"
        type="submit"
      >
        Send
      </button>
      <textarea
        name="message"
        type="text"
        ref={node => input = node}
      ></textarea>
    </div>
  );
};

export default MessageInput;
