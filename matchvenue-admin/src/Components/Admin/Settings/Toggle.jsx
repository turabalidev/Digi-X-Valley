// src/components/admin/settings/Toggle.jsx
import React from 'react';

const Toggle = ({ label, description, enabled }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <label className="text-sm font-medium text-gray-900">{label}</label>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none">
        <input
          type="checkbox"
          defaultChecked={enabled}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-200"
        />
        <label
          className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer transition-all duration-200 ${
            enabled ? 'bg-purple-600' : 'bg-gray-300'
          }`}
        ></label>
      </div>
      <style jsx>{`
        .toggle-checkbox:checked {
          right: 0;
          border-color: #8b5cf6;
        }
        .toggle-checkbox:checked + .toggle-label {
          background-color: #8b5cf6;
        }
        .toggle-checkbox {
          right: ${enabled ? '0' : '24px'};
        }
      `}</style>
    </div>
  );
};

export default Toggle;