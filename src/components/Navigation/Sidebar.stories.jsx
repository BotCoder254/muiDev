import React from 'react';
import Sidebar from './Sidebar';
import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  CalendarIcon,
  InboxIcon,
  UserIcon,
  BellIcon,
} from '@heroicons/react/24/outline';

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

const menuItems = [
  { label: 'Dashboard', href: '#', icon: HomeIcon, active: true },
  { label: 'Team', href: '#', icon: UserGroupIcon },
  { label: 'Projects', href: '#', icon: DocumentDuplicateIcon },
  { label: 'Calendar', href: '#', icon: CalendarIcon },
  { label: 'Documents', href: '#', icon: InboxIcon },
  { label: 'Reports', href: '#', icon: ChartBarIcon },
  { label: 'Settings', href: '#', icon: CogIcon },
  { label: 'Help', href: '#', icon: QuestionMarkCircleIcon },
];

const Footer = () => (
  <div className="flex items-center gap-4 px-4 py-3 bg-black/10 rounded-lg">
    <img
      src="https://via.placeholder.com/32"
      alt="User"
      className="w-8 h-8 rounded-full"
    />
    <div className="flex-1 min-w-0">
      <div className="font-medium truncate">John Doe</div>
      <div className="text-sm opacity-60 truncate">john@example.com</div>
    </div>
  </div>
);

// Default sidebar
export const Default = {
  args: {
    brand: 'Company',
    brandLogo: 'https://via.placeholder.com/32',
    menuItems,
    footer: <Footer />,
  },
};

// Dark variant
export const Dark = {
  args: {
    brand: 'Company',
    brandLogo: 'https://via.placeholder.com/32',
    menuItems,
    footer: <Footer />,
    color: 'dark',
  },
};

// Primary color
export const Primary = {
  args: {
    brand: 'Company',
    brandLogo: 'https://via.placeholder.com/32',
    menuItems,
    footer: <Footer />,
    color: 'primary',
  },
};

// Floating variant
export const Floating = {
  args: {
    brand: 'Company',
    brandLogo: 'https://via.placeholder.com/32',
    menuItems,
    footer: <Footer />,
    variant: 'floating',
    color: 'white',
    shadow: true,
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-100 p-4">
        <Story />
      </div>
    ),
  ],
};

// Minimal variant
export const Minimal = {
  args: {
    brand: 'Company',
    brandLogo: 'https://via.placeholder.com/32',
    menuItems,
    footer: <Footer />,
    variant: 'minimal',
    color: 'white',
    shadow: false,
  },
};

// Right position
export const RightPosition = {
  args: {
    brand: 'Company',
    brandLogo: 'https://via.placeholder.com/32',
    menuItems,
    footer: <Footer />,
    position: 'right',
    color: 'white',
  },
};

// Size variations
export const Sizes = () => (
  <div className="flex gap-4">
    <Sidebar
      brand="Small"
      menuItems={menuItems.slice(0, 5)}
      size="small"
      color="white"
    />
    <Sidebar
      brand="Medium"
      menuItems={menuItems.slice(0, 5)}
      size="medium"
      color="white"
    />
    <Sidebar
      brand="Large"
      menuItems={menuItems.slice(0, 5)}
      size="large"
      color="white"
    />
  </div>
);

// Collapsed state
export const Collapsed = {
  args: {
    brand: 'Company',
    brandLogo: 'https://via.placeholder.com/32',
    menuItems,
    footer: <Footer />,
    expanded: false,
    color: 'white',
  },
};

// Overlay variant
export const Overlay = {
  args: {
    brand: 'Company',
    brandLogo: 'https://via.placeholder.com/32',
    menuItems,
    footer: <Footer />,
    overlay: true,
    blur: true,
    color: 'dark',
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
        <Story />
      </div>
    ),
  ],
};

// Rounded variant
export const Rounded = {
  args: {
    brand: 'Company',
    brandLogo: 'https://via.placeholder.com/32',
    menuItems,
    footer: <Footer />,
    rounded: true,
    color: 'white',
    shadow: true,
  },
}; 