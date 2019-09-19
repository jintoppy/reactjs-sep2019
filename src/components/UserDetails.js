import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { onSelectUser } from '../actions/user';

class UserDetails extends Component {
    componentDidMount = async () => {
        const { match } = this.props;
        const { userId } = match.params;
        const userResponse = await axios.get(`http://5cf909a3e3c79f001439b380.mockapi.io/api/users/${userId}`);
        this.props.onSelectUser(userResponse.data);
      }
    render(){
        const { selectedUser } = this.props;
        return (
            <div>
                    <h3>Selected User Details</h3>
                    {
                        selectedUser ? 
                        (
                            <div>
                                <p>Name is {selectedUser.name}</p>
                                <p>Age is {selectedUser.age}</p>
                            </div>
                        ) : null }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedUser: state.user.selectedUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectUser: (usr) => {
            const action = onSelectUser(usr);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails)