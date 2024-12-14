import React from 'react';
import DropdownMenu from './DropdownMenu';
import {
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiEdit,
  FiTrash2,
  FiPlus,
  FiFolder,
  FiFile,
  FiShare2,
  FiStar,
  FiMoreVertical,
  FiGlobe,
  FiLock,
  FiBell,
  FiMail,
} from 'react-icons/fi';

export default {
  title: 'Navigation/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'minimal', 'flat'],
    },
    color: {
      control: 'select',
      options: ['gray', 'primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    placement: {
      control: 'select',
      options: [
        'bottom-start',
        'bottom-end',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'left-start',
        'left-end',
      ],
    },
  },
};

const defaultItems = [
  { label: 'Profile', icon: FiUser, onClick: () => console.log('Profile clicked') },
  { label: 'Settings', icon: FiSettings, onClick: () => console.log('Settings clicked') },
  { separator: true },
  { label: 'Help', icon: FiHelpCircle, onClick: () => console.log('Help clicked') },
  { label: 'Logout', icon: FiLogOut, onClick: () => console.log('Logout clicked') },
];

// Basic dropdown
export const Basic = {
  args: {
    trigger: 'Click me',
    items: defaultItems,
    variant: 'default',
    color: 'gray',
    size: 'medium',
  },
};

// With custom trigger
export const WithCustomTrigger = {
  args: {
    trigger: (
      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
        <FiMoreVertical className="w-5 h-5" />
      </button>
    ),
    items: defaultItems,
  },
};

// Different variants
export const Variants = () => (
  <div className="flex items-center space-x-4">
    <DropdownMenu
      trigger="Default"
      items={defaultItems}
      variant="default"
    />
    <DropdownMenu
      trigger="Minimal"
      items={defaultItems}
      variant="minimal"
    />
    <DropdownMenu
      trigger="Flat"
      items={defaultItems}
      variant="flat"
    />
  </div>
);

// Different colors
export const Colors = () => (
  <div className="flex items-center space-x-4">
    <DropdownMenu
      trigger="Gray"
      items={defaultItems}
      color="gray"
    />
    <DropdownMenu
      trigger="Primary"
      items={defaultItems}
      color="primary"
    />
    <DropdownMenu
      trigger="Secondary"
      items={defaultItems}
      color="secondary"
    />
  </div>
);

// Different sizes
export const Sizes = () => (
  <div className="flex items-center space-x-4">
    <DropdownMenu
      trigger="Small"
      items={defaultItems}
      size="small"
    />
    <DropdownMenu
      trigger="Medium"
      items={defaultItems}
      size="medium"
    />
    <DropdownMenu
      trigger="Large"
      items={defaultItems}
      size="large"
    />
  </div>
);

// Different placements
export const Placements = () => (
  <div className="grid grid-cols-3 gap-4 p-20">
    <DropdownMenu
      trigger="Top Start"
      items={defaultItems}
      placement="top-start"
    />
    <div className="flex justify-center">
      <DropdownMenu
        trigger="Top End"
        items={defaultItems}
        placement="top-end"
      />
    </div>
    <div className="flex justify-end">
      <DropdownMenu
        trigger="Right Start"
        items={defaultItems}
        placement="right-start"
      />
    </div>
    <DropdownMenu
      trigger="Left Start"
      items={defaultItems}
      placement="left-start"
    />
    <div className="flex justify-center">
      <DropdownMenu
        trigger="Bottom Start"
        items={defaultItems}
        placement="bottom-start"
      />
    </div>
    <div className="flex justify-end">
      <DropdownMenu
        trigger="Bottom End"
        items={defaultItems}
        placement="bottom-end"
      />
    </div>
  </div>
);

// With nested items
export const WithNestedItems = {
  args: {
    trigger: 'File',
    items: [
      {
        label: 'New',
        icon: FiPlus,
        items: [
          { label: 'File', icon: FiFile, onClick: () => console.log('New file') },
          { label: 'Folder', icon: FiFolder, onClick: () => console.log('New folder') },
        ],
      },
      { separator: true },
      {
        label: 'Share',
        icon: FiShare2,
        items: [
          { label: 'Public', icon: FiGlobe, onClick: () => console.log('Make public') },
          { label: 'Private', icon: FiLock, onClick: () => console.log('Make private') },
        ],
      },
      { separator: true },
      { label: 'Delete', icon: FiTrash2, onClick: () => console.log('Delete clicked') },
    ],
  },
};

// With selected items
export const WithSelectedItems = {
  args: {
    trigger: 'Options',
    items: [
      { label: 'Option 1', selected: true },
      { label: 'Option 2' },
      { label: 'Option 3', selected: true },
      { label: 'Option 4' },
    ],
  },
};

// Complex example
export const ComplexExample = () => {
  const [notifications, setNotifications] = React.useState([
    { id: 1, read: false, message: 'New message from John' },
    { id: 2, read: false, message: 'Project update available' },
    { id: 3, read: true, message: 'Your post was liked' },
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* User menu */}
      <DropdownMenu
        trigger={
          <button className="flex items-center space-x-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <img
              src="https://via.placeholder.com/32"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <span>John Doe</span>
          </button>
        }
        items={[
          {
            label: 'Signed in as',
            icon: FiUser,
            items: [
              { label: 'john@example.com', icon: FiMail },
              { label: 'Admin Account', icon: FiStar },
            ],
          },
          { separator: true },
          { label: 'Your Profile', icon: FiUser },
          { label: 'Settings', icon: FiSettings },
          { separator: true },
          { label: 'Sign out', icon: FiLogOut },
        ]}
        placement="bottom-end"
      />

      {/* Notifications menu */}
      <DropdownMenu
        trigger={
          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <FiBell className="w-5 h-5" />
            {notifications.some(n => !n.read) && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </button>
        }
        items={[
          ...notifications.map(notification => ({
            label: notification.message,
            icon: notification.read ? FiMail : FiBell,
            onClick: () => markAsRead(notification.id),
          })),
          { separator: true },
          { label: 'Clear all', icon: FiTrash2, onClick: clearAll },
        ]}
        placement="bottom-end"
      />

      {/* Actions menu */}
      <DropdownMenu
        trigger={
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <FiMoreVertical className="w-5 h-5" />
          </button>
        }
        items={[
          { label: 'Edit', icon: FiEdit },
          { label: 'Share', icon: FiShare2 },
          { separator: true },
          { label: 'Delete', icon: FiTrash2 },
        ]}
        placement="bottom-end"
      />
    </div>
  );
}; 