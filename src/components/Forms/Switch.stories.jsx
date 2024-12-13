/**
 * @component Switch
 * @description A professional switch (toggle) component with animations and rich features.
 * 
 * @example
 * ```jsx
 * // Basic usage
 * import { Switch } from './components/Forms';
 * 
 * function MyComponent() {
 *   const handleChange = (e, checked) => {
 *     console.log('Switch toggled:', checked);
 *   };
 * 
 *   return (
 *     <Switch
 *       label="Notifications"
 *       description="Receive email notifications"
 *       onChange={handleChange}
 *     />
 *   );
 * }
 * 
 * // With validation and styling
 * <Switch
 *   label="Dark Mode"
 *   description="Enable dark mode theme"
 *   variant="soft"
 *   color="primary"
 *   size="large"
 *   checked={isDarkMode}
 *   onChange={handleThemeChange}
 * />
 * ```
 */

import React from 'react';
import Switch from './Switch';

export default {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile switch (toggle) component with animations and rich features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'flat', 'soft'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size preset',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'white'],
      description: 'Color theme',
    },
  },
};

// Default switch
export const Default = {
  args: {
    label: 'Notifications',
    description: 'Receive email notifications',
    helperText: 'Toggle to enable notifications',
    onChange: (e, checked) => console.log('Switch toggled:', checked),
  },
};

// Controlled switch
export const Controlled = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Switch
      label="Dark Mode"
      description="Enable dark mode theme"
      checked={checked}
      onChange={(e, checked) => setChecked(checked)}
    />
  );
};

// Different variants
export const Variants = () => (
  <div className="space-y-8">
    <Switch
      variant="default"
      label="Default variant"
      description="Classic switch style"
    />
    <Switch
      variant="flat"
      label="Flat variant"
      description="Minimal switch style"
    />
    <Switch
      variant="soft"
      label="Soft variant"
      description="Smooth switch style"
    />
  </div>
);

// Size variations
export const Sizes = () => (
  <div className="space-y-8">
    <Switch
      size="small"
      label="Small size"
      description="Compact switch"
    />
    <Switch
      size="medium"
      label="Medium size"
      description="Default switch"
    />
    <Switch
      size="large"
      label="Large size"
      description="Large switch"
    />
  </div>
);

// Color variations
export const Colors = () => (
  <div className="space-y-8">
    <Switch
      color="primary"
      label="Primary color"
      description="Main theme color"
    />
    <Switch
      color="secondary"
      label="Secondary color"
      description="Alternative theme color"
    />
    <div className="p-8 bg-gray-800 rounded-lg">
      <Switch
        color="white"
        label="White color"
        description="Light theme color"
      />
    </div>
  </div>
);

// With description
export const WithDescription = {
  args: {
    label: 'Auto-save',
    description: 'Automatically save your changes as you work',
    helperText: 'Changes will be saved every 5 minutes',
  },
};

// Disabled state
export const Disabled = {
  args: {
    label: 'Maintenance Mode',
    description: 'System is under maintenance',
    disabled: true,
    helperText: 'This feature is currently disabled',
  },
};

// With error
export const WithError = {
  args: {
    label: 'Premium Features',
    description: 'Enable premium features',
    error: 'Subscription required to enable this feature',
  },
};

// With success
export const WithSuccess = {
  args: {
    label: 'Account Verified',
    description: 'Your account is verified',
    success: 'All features are now available',
    defaultChecked: true,
  },
};

// Complex example
export const ComplexExample = () => {
  const [settings, setSettings] = React.useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: false,
  });

  const handleChange = (setting) => (e, checked) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: checked,
    }));
  };

  return (
    <div className="space-y-6 p-6 bg-white rounded-lg shadow-lg max-w-md">
      <h2 className="text-xl font-semibold text-gray-900">
        Account Settings
      </h2>
      <div className="space-y-4">
        <Switch
          variant="soft"
          color="primary"
          size="medium"
          label="Notifications"
          description="Receive email and push notifications"
          checked={settings.notifications}
          onChange={handleChange('notifications')}
          helperText={settings.notifications ? 'Notifications are enabled' : 'You may miss important updates'}
        />
        <Switch
          variant="soft"
          color="primary"
          size="medium"
          label="Dark Mode"
          description="Use dark theme across the app"
          checked={settings.darkMode}
          onChange={handleChange('darkMode')}
        />
        <Switch
          variant="soft"
          color="primary"
          size="medium"
          label="Auto-save"
          description="Automatically save your work"
          checked={settings.autoSave}
          onChange={handleChange('autoSave')}
          success={settings.autoSave ? 'Your work will be saved automatically' : null}
        />
        <Switch
          variant="soft"
          color="primary"
          size="medium"
          label="Analytics"
          description="Share anonymous usage data"
          checked={settings.analytics}
          onChange={handleChange('analytics')}
          error={!settings.analytics ? 'Analytics help us improve the app' : null}
        />
      </div>
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}; 