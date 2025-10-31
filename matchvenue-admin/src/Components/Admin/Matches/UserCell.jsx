// src/components/admin/matches/UserCell.jsx
import React from 'react';

const UserCell = ({ user }) => {
  return (
    <div className="flex items-center gap-3">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-10 h-10 rounded-full border border-gray-200"
      />
      <div>
        <p className="text-sm font-medium text-gray-900">{user.name}</p>
        <p className="text-xs text-gray-500">{user.type}</p>
      </div>
    </div>
  );
};

export default UserCell;