import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newThread } from '../actions';

class UserMenu extends Component {
  handleUserClick(threadId, name) {
    this.props.newThread(threadId, name);
  }

  render() {
    const { users } = this.props;

    return (
      <div className="user-menu">
        <h1>Redux Chat</h1>
        <ul className="user-list">
          <p>Direct Messages</p>
          {users.map(user =>
            <li
              key={user.id}
              onClick={this.handleUserClick.bind(this, user.id, user.name)}
              className="user"
            >
              {user.name}
            </li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { users } = state;

  return {
    users
  };
}

export default connect(mapStateToProps, { newThread })(UserMenu);
