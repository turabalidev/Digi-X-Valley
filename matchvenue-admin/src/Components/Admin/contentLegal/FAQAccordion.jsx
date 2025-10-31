// src/components/admin/terms/FAQAccordion.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left flex justify-between items-center bg-white hover:bg-gray-50"
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-purple-50 border-t border-purple-200">
          <p className="text-sm text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;