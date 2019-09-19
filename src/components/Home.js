import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { onUsersReceived } from '../actions/user';
import Users from './Users';
import AddUser from './AddUser';


class Home extends Component {
      onAddUser = async (newUser) => {
        try {
          await axios.post('http://5cf909a3e3c79f001439b380.mockapi.io/api/users', newUser);
          const usersResponse = await axios.get('http://5cf909a3e3c79f001439b380.mockapi.io/api/users');
          this.props.onUsersReceived(usersResponse.data);
        }
        catch(e){
    
        }
        
      }
      componentDidMount(){
        console.log('mounted');
        const userPromise = axios.get('http://5cf909a3e3c79f001439b380.mockapi.io/api/users');
        userPromise.then(res => {
          this.props.onUsersReceived(res.data);
        });
        
      }
      render(){
        return (
            <div id="home-page">
              <Users 
                users={this.props.users} 
              />
              <AddUser onAddUser={this.onAddUser} />
            </div>
          );
      }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUsersReceived: (list) => {
      const action = onUsersReceived(list);
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);