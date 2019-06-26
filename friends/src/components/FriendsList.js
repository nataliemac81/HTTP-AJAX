import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="friends-list">
        <h3>Friends List:</h3>
        {this.props.list.map(friend => (
          <span className="friends-name">{friend.name}</span>
        ))}
      </div>
    );
  }
}
