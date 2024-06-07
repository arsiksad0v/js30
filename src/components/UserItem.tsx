import React from 'react';
import { User } from '../types';

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Роль: {user.role}</p>
        <p className="card-text">Активен: {user.isActive ? 'Да' : 'Нет'}</p>
      </div>
    </div>
  );
};

export default UserItem;