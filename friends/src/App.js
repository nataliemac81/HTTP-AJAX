import React, { Component } from 'react';
import axios from 'axios';
// import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import CreateFriend from './components/CreateFriend';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friendsList: res.data
        })
      })
      .catch(err =>  {
        console.log(err)
      })
  }

  // addToFriendsList = friend => {
  //   const friendsList = this.state.friendsList;
  //   friendsList.push(friend);
  //   this.setState({ friendsList });
  // };

  render() {
    return (
      <div>
        <FriendsList friends={this.state.friendsList} />
        <CreateFriend />
      </div>
    );
  }
}
