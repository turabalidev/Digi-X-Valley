// src/pages/AdminTerms.jsx
import React, { useState } from 'react';
import FAQAccordion from '../../Components/Admin/contentLegal/FAQAccordion';
import RulesTable from '../../Components/Admin/contentLegal/RulesTable';
import VersionHistory from '../../Components/Admin/contentLegal/VersionHistory';

const ContentLegalPage = () => {
  const [isEditing, setIsEditing] = useState(false);

  const faqs = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page. You will receive an email with instructions to create a new password.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer: 'You can cancel your subscription anytime from your account settings.',
    },
    {
      question: 'How can I report inappropriate behavior?',
      answer: 'Use the report button on the user profile or message.',
    },
    {
      question: 'Can I use Enigma Code+ for free?',
      answer: 'Yes, the basic version is free with limited features.',
    },
    {
      question: 'What is your matching algorithm based on?',
      answer: 'Our algorithm uses interests, location, and activity patterns.',
    },
  ];

  const rules = [
    { title: 'Respectful Communication', category: 'Communication Rules', description: 'Be kind and respectful...', updated: 'Oct 1, 2025, 09:00 AM' },
    { title: 'Respectful Communication', category: 'Communication Rules', description: 'Be kind and respectful...', updated: 'Oct 1, 2025, 09:00 AM' },
    { title: 'Respectful Communication', category: 'Communication Rules', description: 'Be kind and respectful...', updated: 'Oct 1, 2025, 09:00 AM' },
    { title: 'Respectful Communication', category: 'Communication Rules', description: 'Be kind and respectful...', updated: 'Oct 1, 2025, 09:00 AM' },
  ];

  return (
    <div className="min-h-screen bg-[#FFF1EA] px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-8">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            👋 Hello, Admin!
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Here's what's happening on YoureUp today.
          </p>
        </div>
        <div className="text-left md:text-right text-xs sm:text-sm text-black">
          <p>Thursday, October 16, 2025</p>
          <p className="text-purple-600 font-bold">03:02 PM</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <a href="#" className="hover:text-purple-600">Terms and conditions</a>
      </nav>

      {/* Page Title */}
      <h1 className="text-xl font-semibold text-gray-900 mb-6">Terms & Conditions</h1>

      {/* Editor Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        {isEditing ? (
          <textarea
            className="w-full h-32 p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-purple-500"
            defaultValue="These terms and conditions outline the rules and regulations for the use of YoureUp's Website..."
          />
        ) : (
          <p className="text-gray-700">
            These terms and conditions outline the rules and regulations for the use of YoureUp's Website...
          </p>
        )}

        <div className="flex items-center justify-between mt-6">
          <p className="text-xs text-gray-500">Last updated: May 15, 2023</p>
          <div className="flex gap-2">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700"
                >
                  Save
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50">
                  Preview
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50"
                >
                  Discard
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-8">
        <button className="pb-3 text-purple-600 border-b-2 border-purple-600 font-medium">Privacy Policy</button>
        <button className="pb-3 text-gray-600 hover:text-purple-600">Version History</button>
      </div>

      {/* Version History */}
      <VersionHistory />

      {/* FAQ Section */}
      <div className="space-y-4 mb-8">
        {faqs.map((faq, i) => (
          <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      {/* Rules Table */}
      <RulesTable rules={rules} />
    </div>
  );
};

export default ContentLegalPage;