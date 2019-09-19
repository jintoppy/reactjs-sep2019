import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Users = ({ users }) => {
    
    const rows = users.map((usr, index) => {
        return (
            <tr key={index}>
                <td>{usr.name}</td>
                <td>{usr.age}</td>
                <td>
                    <Link to={`/userdetails/${usr.id}`}>View</Link>                    
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
    users: PropTypes.arrayOf(selectedUserPropType).isRequired
};

export default Users;