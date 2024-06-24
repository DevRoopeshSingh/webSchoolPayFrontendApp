import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Settings = ({ initialSettings, onSave }) => {
  const [settings, setSettings] = useState(initialSettings);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onSave(settings);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">App Name</label>
        <input
          type="text"
          name="appName"
          value={settings.appName}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">App Logo URL</label>
        <input
          type="text"
          name="appLogo"
          value={settings.appLogo}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <button onClick={handleSaveClick} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
        Save Settings
      </button>
    </div>
  );
};

Settings.propTypes = {
  initialSettings: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Settings;
