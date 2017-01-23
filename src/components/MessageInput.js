import React, { Component } from 'react';

class MessageInput extends Component {
  componentDidMount() {
    const input = document.querySelector('textarea');
    input.addEventListener('keypress', e => {
      let key = e.which || e.keyCode;
      if (input.value === '') {   // A bit of a hack
        return;
      } else if (key === 13) {
        this.props.onSubmit(input.value);
        input.value = '';
      }
    });
  }

  render() {
    let input;

    return (
      <div className="message-input">
        <button
          onClick={() => {
            this.props.onSubmit(input.value);
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
  }
};

export default MessageInput;
