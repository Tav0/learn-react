import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';

export default function UserList(props) {
    if( props.userlist.length === 0) {
        return <h2>No users found!</h2>;
    }

    const userRows = props.userlist.map( (user, index) => (
        <tr key={index}>
            <td><Link to={'/users/' + user.id}>{user.id}</Link></td>
            <td><Link to={'/users/' + user.id}>{user.username}</Link></td>
        </tr>
    ));

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <td width='10%'>#</td>
                    <td>User Name</td>
                </tr>
            </thead>
            <tbody>
                {userRows}
            </tbody>
        </Table>
    );
}
