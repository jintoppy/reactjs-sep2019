import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onAddUser, onGetUsers } from '../actions/user';
import Users from './Users';
import AddUser from './AddUser';


class Home extends Component {      
      componentDidMount(){
        this.props.getUsers();        
      }
      render(){
        return (
            <div id="home-page">
              <Users 
                users={this.props.users} 
              />
              <AddUser onAddUser={this.props.addUser} />
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
    addUser: (newUser) => {
      const action = onAddUser(newUser);
      dispatch(action);
    },
    getUsers: () => {
      const action = onGetUsers();
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);