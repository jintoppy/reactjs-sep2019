import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ users, selectedUser, onUserSelect }) => {
    
    const rows = users.map((usr, index) => {
        return (
            <tr key={index}>
                <td>{usr.name}</td>
                <td>{usr.age}</td>
                <td>
                    <button onClick={(evnt) => onUserSelect(usr, evnt)}>View</button>
                </td>
            </tr>
        )
    });
    return (
        <div className="user-list">
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            {selectedUser && (<div>
                <h3>Selected User Details</h3>
                <p>Name is {selectedUser.name}</p>
                <p>Age is {selectedUser.age}</p>
                </div>
            )}
        </div>
    )
};

Users.defaultProps = {
    users: []
};

const selectedUserPropType = PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
});

Users.propTypes = {
    users: PropTypes.arrayOf(selectedUserPropType).isRequired,
    selectedUser: selectedUserPropType.isRequired,
    onUserSelect: PropTypes.func.isRequired
};

export default Users;