/**
 * @component Navbar
 * @description A professional navigation bar component with multiple variants and responsive design.
 * 
 * @example
 * ```jsx
 * // Basic usage
 * import { Navbar } from './components/Navigation';
 * 
 * function MyApp() {
 *   return (
 *     <Navbar
 *       brand={{ name: 'Company', logo: '/logo.svg' }}
 *       items={[
 *         { label: 'Home', href: '/' },
 *         { label: 'About', href: '/about' },
 *         { label: 'Contact', href: '/contact' }
 *       ]}
 *     />
 *   );
 * }
 * 
 * // With dropdowns and user menu
 * const items = [
 *   {
 *     label: 'Products',
 *     items: [
 *       { label: 'Feature 1', href: '/features/1' },
 *       { label: 'Feature 2', href: '/features/2' }
 *     ]
 *   }
 * ];
 * 
 * const userMenu = {
 *   name: 'John Doe',
 *   role: 'Admin',
 *   avatar: '/avatar.jpg',
 *   items: [
 *     { label: 'Profile', href: '/profile' },
 *     { label: 'Settings', href: '/settings' },
 *     { label: 'Logout', onClick: handleLogout }
 *   ]
 * };
 * 
 * <Navbar
 *   brand={{ name: 'Company', logo: '/logo.svg' }}
 *   items={items}
 *   userMenu={userMenu}
 *   notifications={{
 *     unread: 3,
 *     items: [
 *       { label: 'New message', href: '/messages' }
 *     ]
 *   }}
 *   variant="floating"
 *   color="light"
 * />
 * ```
 */

import React from 'react';
import Navbar from './Navbar';
import {
  FiHome,
  FiUsers,
  FiFolder,
  FiSettings,
  FiHelpCircle,
  FiPlus,
  FiUser,
  FiMail,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A versatile navigation bar component with multiple variants, responsive design, and rich features.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['light', 'dark', 'transparent'],
      description: 'Color theme of the navbar',
    },
    variant: {
      control: 'select',
      options: ['default', 'floating', 'minimal'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the navbar',
    },
    position: {
      control: 'select',
      options: ['fixed', 'sticky', 'relative'],
      description: 'Position style of the navbar',
    },
  },
};

const menuItems = [
  { label: 'Home', href: '#', icon: FiHome },
  { label: 'Team', href: '#', icon: FiUsers },
  { label: 'Projects', href: '#', icon: FiFolder },
  { label: 'Settings', href: '#', icon: FiSettings },
  { label: 'Help', href: '#', icon: FiHelpCircle },
];

const userMenu = {
  name: 'John Doe',
  role: 'Admin',
  avatar: 'https://i.pravatar.cc/300',
  items: [
    { label: 'Profile', href: '#profile', icon: FiUser },
    { label: 'Settings', href: '#settings', icon: FiSettings },
    { label: 'Logout', onClick: () => console.log('Logout clicked') },
  ],
};

const notifications = {
  unread: 5,
  items: [
    {
      label: 'New message from Jane',
      href: '#',
      icon: FiMail,
    },
    {
      label: 'Project update',
      href: '#',
      icon: FiInfo,
    },
    {
      label: 'Task completed',
      href: '#',
      icon: FiCheckCircle,
    },
  ],
};

const actions = [
  {
    label: 'New Project',
    icon: FiPlus,
    onClick: () => console.log('Create new project'),
  },
];

// Default navbar
export const Default = {
  args: {
    brand: { name: 'Company', logo: 'https://via.placeholder.com/32' },
    items: menuItems,
    userMenu,
    notifications,
    variant: 'default',
    color: 'light',
  },
};

// Dark theme
export const Dark = {
  args: {
    brand: { name: 'Company', logo: 'https://via.placeholder.com/32' },
    items: menuItems,
    userMenu,
    notifications,
    variant: 'default',
    color: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

// Transparent theme
export const Transparent = {
  args: {
    brand: { name: 'Company', logo: 'https://via.placeholder.com/32' },
    items: menuItems,
    userMenu,
    notifications,
    variant: 'default',
    color: 'transparent',
  },
  parameters: {
    backgrounds: {
      default: 'gradient',
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(to right, #4f46e5, #7c3aed)',
        },
      ],
    },
  },
};

// Floating variant
export const Floating = {
  args: {
    brand: { name: 'Company', logo: 'https://via.placeholder.com/32' },
    items: menuItems,
    userMenu,
    notifications,
    variant: 'floating',
    color: 'light',
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f3f4f6',
        },
      ],
    },
  },
};

// Minimal variant
export const Minimal = {
  args: {
    brand: { name: 'Company', logo: 'https://via.placeholder.com/32' },
    items: menuItems,
    userMenu,
    notifications,
    variant: 'minimal',
    color: 'light',
  },
};

// Size variations
export const Sizes = () => (
  <div className="space-y-8">
    <Navbar
      brand={{ name: 'Small', logo: 'https://via.placeholder.com/24' }}
      items={menuItems.slice(0, 3)}
      size="small"
      color="light"
    />
    <Navbar
      brand={{ name: 'Medium', logo: 'https://via.placeholder.com/32' }}
      items={menuItems.slice(0, 3)}
      size="medium"
      color="light"
    />
    <Navbar
      brand={{ name: 'Large', logo: 'https://via.placeholder.com/40' }}
      items={menuItems.slice(0, 3)}
      size="large"
      color="light"
    />
  </div>
);

// Mobile menu example
export const MobileMenu = {
  args: {
    brand: { name: 'Company', logo: 'https://via.placeholder.com/32' },
    items: menuItems,
    userMenu,
    notifications,
    variant: 'default',
    color: 'light',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

// With search and notifications
export const WithFeatures = {
  args: {
    brand: { name: 'Company', logo: 'https://via.placeholder.com/32' },
    items: menuItems,
    userMenu,
    notifications,
    variant: 'default',
    color: 'light',
  },
};

// Position variations
export const Positions = () => (
  <div className="space-y-8 pt-20">
    <Navbar
      brand={{ name: 'Fixed', logo: 'https://via.placeholder.com/32' }}
      items={menuItems}
      position="fixed"
      color="light"
    />
    <Navbar
      brand={{ name: 'Sticky', logo: 'https://via.placeholder.com/32' }}
      items={menuItems}
      position="sticky"
      color="light"
    />
    <Navbar
      brand={{ name: 'Relative', logo: 'https://via.placeholder.com/32' }}
      items={menuItems}
      position="relative"
      color="light"
    />
  </div>
); 