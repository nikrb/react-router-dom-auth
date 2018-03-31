import React from 'react';

const UserPage = ({id}) => {
  console.log('UserPage props:', id);
  return (
    <div>
      <h2>User Page</h2>
      [{id}] User1
    </div>
  );
};

export default UserPage;
