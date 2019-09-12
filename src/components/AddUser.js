import React, { Component, createRef } from 'react';

class AddUser extends Component {
    // state = {
    //     nameVal: '',
    //     ageVal: ''
    // }
    // onInputChange = (evnt) => {
    //     console.log(evnt.target.value);
    //     const inputVal = evnt.target.value;
    //     if(inputVal.startsWith('a') ){
    //         this.setState({
    //             nameVal: evnt.target.value
    //         });
    //     }
        
    // }
    constructor(props){
        super(props);
        this.txtName = createRef();
        this.txtAge = createRef();

    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.txtName.current.value);
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    Name: <input 
                            ref={this.txtName}
                        />   
                </div>
                <div>
                    Age: <input ref={this.txtAge} />   
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        );
    }
};

export default AddUser;