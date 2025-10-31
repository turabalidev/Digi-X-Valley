// src/components/admin/settings/Section.jsx
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Section = ({ title, description, isOpen, onToggle, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50"
      >
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-200 mt-4 pt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Section;