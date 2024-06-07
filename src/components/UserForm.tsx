import React, { useState } from 'react';
import { User } from '../types';

interface UserFormProps {
  addUser: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser({ name, email, role, isActive });
    setName('');
    setEmail('');
    setRole('user');
    setIsActive(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Имя</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Роль</label>
        <select
          className="form-control"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">Пользователь</option>
          <option value="editor">Редактор</option>
          <option value="admin">Администратор</option>
        </select>
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="activeCheck"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="activeCheck">
          Активен
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Создать пользователя
      </button>
    </form>
  );
};

export default UserForm;
