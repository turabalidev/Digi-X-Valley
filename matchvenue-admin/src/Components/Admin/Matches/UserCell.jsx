// src/components/admin/matches/UserCell.jsx
import React from 'react';

const UserCell = ({ user }) => {
  const name = user?.name || '-';
  const plan = user?.plan_name || 'Free';
  const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&size=40`;
  return (
    <div className="flex items-center gap-3">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full border border-gray-200"
      />
      <div>
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-500">{plan}</p>
      </div>
    </div>
  );
};

export default UserCell;