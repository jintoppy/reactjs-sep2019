import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';


class AddUser extends Component {
    state = {
        place: ''
    }
    // onInputChange = (evnt) => {
    //     console.log(evnt.target.value);
    //     const inputVal = evnt.target.value;
    //     if(inputVal.startsWith('a') ){
    //         this.setState({
    //             nameVal: evnt.target.value
    //         });
    //     }
        
    // }
    txtName = createRef();
    txtAge = createRef();
    onSubmit = (e) => {
        e.preventDefault();
        const nameValue = this.txtName.current.value;
        const ageValue = this.txtAge.current.value;
        const newUser = {
            name: nameValue,
            age: ageValue
        };
        this.props.onAddUser(newUser);
        this.txtName.current.value = '';
        this.txtAge.current.value = '';
    }
    shouldComponentUpdate(){
        return false;
    }
    onPlaceChange = (e) => {
        this.setState({
            place: e.target.value
        });
    }
    render(){
        console.log('rendering of Add User');
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    Name: <input ref={this.txtName} />
                </div>
                <div>
                    Age: <input ref={this.txtAge} />   
                </div>
                <div>
                    Place: <input
                            value={this.state.place}
                            onChange={this.onPlaceChange} />
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        );
    }
};

AddUser.propTypes = {
    onAddUser: PropTypes.func.isRequired
};

export default AddUser;