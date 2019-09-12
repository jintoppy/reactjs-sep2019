import React, { Component } from 'react';
import Users from './components/Users';
import AddUser from './components/AddUser';

//Functional Component
class App extends Component {
  state = {
    selectedUser: null,
    users: [
      { 
        name: 'Ajith',
        age: 30
      },
      { 
        name: 'Vijay',
        age: 20
      }
    ]
  }
  onUserSelect = (usr, evnt) => {
    console.log(evnt);
    this.setState({
      selectedUser: usr
    });
  }
  componentDidMount(){
    console.log('mounted');
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
        <AddUser />
      </div>
    );
  }
  
};

//Compose


export default App;
