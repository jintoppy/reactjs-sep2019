import React, { Component } from 'react';
import axios from 'axios';
import Users from './components/Users';
import AddUser from './components/AddUser';

//Functional Component
class App extends Component {
  state = {
    selectedUser: null,
    users: []
  }
  onUserSelect = (usr, evnt) => {
    console.log(evnt);
    this.setState({
      selectedUser: usr
    });
  }
  onAddUser = (newUser) => {
    const newUsers = [...this.state.users, newUser];
    this.setState({
      users: newUsers
    });
  }
  componentDidMount(){
    console.log('mounted');
    const userPromise = axios.get('http://5cf909a3e3c79f001439b380.mockapi.io/api/users');
    userPromise.then(res => {
      this.setState({
        users: res.data
      });
    });
    
  }
  componentDidUpdate() {
    console.log('updated');
  }
  shouldComponentUpdate(nextProps, nextState){    
    return true;
  }
  render(){
    console.log('inside render');
    return (
      <div id="my-app">
        <Users 
          users={this.state.users} 
          selectedUser={this.state.selectedUser}
          onUserSelect={this.onUserSelect}
        />
        <AddUser onAddUser={this.onAddUser} />
      </div>
    );
  }
  
};

//Compose


export default App;
