/**
 * @component Tabs
 * @description A professional tabs component with multiple variants, animations, and features.
 * 
 * @example
 * ```jsx
 * // Basic usage
 * import { Tabs } from './components/Navigation';
 * 
 * function MyComponent() {
 *   const items = [
 *     {
 *       label: 'Tab 1',
 *       value: 'tab1',
 *       content: <div>Content for Tab 1</div>
 *     },
 *     {
 *       label: 'Tab 2',
 *       value: 'tab2',
 *       content: <div>Content for Tab 2</div>
 *     }
 *   ];
 * 
 *   return <Tabs items={items} />;
 * }
 * 
 * // With icons, badges, and controlled state
 * import { FiHome, FiSettings } from 'react-icons/fi';
 * 
 * function ControlledTabs() {
 *   const [activeTab, setActiveTab] = useState('home');
 * 
 *   const items = [
 *     {
 *       label: 'Home',
 *       value: 'home',
 *       icon: FiHome,
 *       badge: { content: '5' },
 *       content: <HomeContent />
 *     },
 *     {
 *       label: 'Settings',
 *       value: 'settings',
 *       icon: FiSettings,
 *       content: <SettingsContent />
 *     }
 *   ];
 * 
 *   return (
 *     <Tabs
 *       items={items}
 *       value={activeTab}
 *       onChange={setActiveTab}
 *       variant="pills"
 *       color="primary"
 *       size="large"
 *       animated
 *     />
 *   );
 * }
 * ```
 */

import React from 'react';
import Tabs from './Tabs';
import {
  FiHome,
  FiSettings,
  FiUser,
  FiMail,
  FiBell,
  FiHeart,
} from 'react-icons/fi';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile tabs component with multiple variants, animations, and rich features.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'white'],
      description: 'Color theme of the tabs',
    },
    variant: {
      control: 'select',
      options: ['default', 'pills', 'bordered', 'lifted', 'enclosed'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the tabs',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the tabs',
    },
  },
};

const items = [
  {
    label: 'Home',
    value: 'home',
    icon: FiHome,
    badge: { content: '5' },
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Home Content</h3>
        <p>This is the home tab content.</p>
      </div>
    ),
  },
  {
    label: 'Profile',
    value: 'profile',
    icon: FiUser,
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Profile Content</h3>
        <p>This is the profile tab content.</p>
      </div>
    ),
  },
  {
    label: 'Messages',
    value: 'messages',
    icon: FiMail,
    badge: { content: '3' },
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Messages Content</h3>
        <p>This is the messages tab content.</p>
      </div>
    ),
  },
  {
    label: 'Notifications',
    value: 'notifications',
    icon: FiBell,
    badge: { content: '2' },
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Notifications Content</h3>
        <p>This is the notifications tab content.</p>
      </div>
    ),
  },
  {
    label: 'Settings',
    value: 'settings',
    icon: FiSettings,
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Settings Content</h3>
        <p>This is the settings tab content.</p>
      </div>
    ),
  },
];

// Default tabs
export const Default = {
  args: {
    items,
    color: 'primary',
  },
};

// Pills variant
export const Pills = {
  args: {
    items,
    variant: 'pills',
    color: 'primary',
  },
};

// Bordered variant
export const Bordered = {
  args: {
    items,
    variant: 'bordered',
    color: 'primary',
  },
};

// Lifted variant
export const Lifted = {
  args: {
    items,
    variant: 'lifted',
    color: 'primary',
  },
};

// Enclosed variant
export const Enclosed = {
  args: {
    items,
    variant: 'enclosed',
    color: 'primary',
  },
};

// Size variations
export const Sizes = () => (
  <div className="space-y-8">
    <Tabs
      items={items.slice(0, 3)}
      size="small"
      variant="pills"
      color="primary"
    />
    <Tabs
      items={items.slice(0, 3)}
      size="medium"
      variant="pills"
      color="primary"
    />
    <Tabs
      items={items.slice(0, 3)}
      size="large"
      variant="pills"
      color="primary"
    />
  </div>
);

// Color variations
export const Colors = () => (
  <div className="space-y-8">
    <Tabs
      items={items.slice(0, 3)}
      color="primary"
      variant="pills"
    />
    <Tabs
      items={items.slice(0, 3)}
      color="secondary"
      variant="pills"
    />
    <Tabs
      items={items.slice(0, 3)}
      color="success"
      variant="pills"
    />
  </div>
);

// With icons and badges
export const WithIconsAndBadges = {
  args: {
    items,
    variant: 'pills',
    color: 'primary',
  },
};

// Vertical orientation
export const Vertical = {
  args: {
    items: items.slice(0, 3),
    orientation: 'vertical',
    variant: 'pills',
    color: 'primary',
  },
};

// Full width
export const FullWidth = {
  args: {
    items: items.slice(0, 3),
    fullWidth: true,
    variant: 'pills',
    color: 'primary',
  },
};

// Centered
export const Centered = {
  args: {
    items: items.slice(0, 3),
    centered: true,
    variant: 'pills',
    color: 'primary',
  },
};

// Controlled example
export const Controlled = () => {
  const [activeTab, setActiveTab] = React.useState('home');

  return (
    <div className="space-y-4">
      <div className="text-center text-gray-600">
        Active Tab: {activeTab}
      </div>
      <Tabs
        items={items}
        value={activeTab}
        onChange={setActiveTab}
        variant="pills"
        color="primary"
      />
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActiveTab('home')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go to Home
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go to Settings
        </button>
      </div>
    </div>
  );
};

// Responsive example
export const Responsive = {
  args: {
    items,
    variant: 'pills',
    color: 'primary',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl mx-auto px-4">
        <Story />
      </div>
    ),
  ],
}; 