// src/pages/AdminSettings.jsx
import React, { useState } from 'react';
import Section from '../../Components/Admin/Settings/Section';
import ProgressBar from '../../Components/Admin/Settings/ProgressBar';
import Toggle from '../../Components/Admin/Settings/Toggle';

const AdminSettings = () => {
  const [showSubscription, setShowSubscription] = useState(true);
  const [showStageUnlock, setShowStageUnlock] = useState(true);

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

      {/* Page Title */}
      <h1 className="text-xl font-semibold text-gray-900 mb-6">User Interaction Rules</h1>

      {/* Subscription Status */}
      <Section
        title="Subscription Status"
        description="Configure the piece of matching to prevent overmatch."
        isOpen={showSubscription}
        onToggle={() => setShowSubscription(!showSubscription)}
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Premium</label>
            <ProgressBar value={45} label="45" />
          </div>
        </div>
      </Section>

      {/* Stage Unlock Rules */}
      <Section
        title="Stage Unlock Rules"
        description="Encourage meaningful communication before meeting."
        isOpen={showStageUnlock}
        onToggle={() => setShowStageUnlock(!showStageUnlock)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Messages Required to Unlock
            </label>
            <ProgressBar value={1} max={10} label="Stage #1 (Meet & Greet)" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration of stages (weeks)
            </label>
            <ProgressBar value={2} max={10} label="2 weeks" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <button className="px-4 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50">
            Reset to defaults
          </button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700">
            Preview Progression
          </button>
        </div>
      </Section>

      {/* Feature Toggles */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Feature Toggles</h3>
        <div className="space-y-6">
          <Toggle
            label="Enable Venue Suggestions"
            description="Recommend nearby date venues based on user preferences and location"
            enabled={true}
          />
          <Toggle
            label="Enable Push Notifications"
            description="Send real-time alerts for new matches, messages, and important updates"
            enabled={true}
          />
          <Toggle
            label="Require User Verification"
            description="Users must verify identity with photo ID before messaging"
            enabled={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;