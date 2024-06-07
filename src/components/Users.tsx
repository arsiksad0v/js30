import React from 'react';
import { User } from '../types';
import UserItem from './UserItem';

interface UsersProps {
  users: User[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
};

export default Users;
