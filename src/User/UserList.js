import React from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        <li>
          <Link to={`/users/1`}>User1</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserList;
