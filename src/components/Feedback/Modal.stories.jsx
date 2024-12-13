/**
 * @component Modal
 * @description A professional modal component with animations and rich features.
 */

import React, { useState } from 'react';
import Modal from './Modal';
import {
  FiSettings,
  FiTrash2,
  FiUpload,
  FiDownload,
  FiShare2,
  FiEdit3,
  FiUser,
  FiUsers,
  FiLock,
  FiUnlock,
  FiMail,
  FiPhone,
  FiInfo,
  FiCheckCircle,
  FiAlertTriangle,
  FiAlertCircle,
  FiImage,
} from 'react-icons/fi';

export default {
  title: 'Feedback/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile modal component with animations and rich features.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'clean', 'flat'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size preset',
    },
    color: {
      control: 'select',
      options: ['primary', 'info', 'success', 'warning', 'error'],
      description: 'Color theme',
    },
  },
};

// Default modal
export const Default = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    description: 'This is a description of the modal content.',
    children: (
      <div className="space-y-4">
        <p>This is the modal content.</p>
        <p>You can add any content here.</p>
      </div>
    ),
  },
};

// With custom icon
export const WithIcon = {
  args: {
    isOpen: true,
    title: 'Settings',
    description: 'Manage your account settings and preferences.',
    icon: FiSettings,
    children: (
      <div className="space-y-4">
        <p>Configure your settings here.</p>
      </div>
    ),
  },
};

// Different variants
export const Variants = () => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <div className="space-y-4">
      {['default', 'clean', 'flat'].map((variant) => (
        <div key={variant}>
          <button
            onClick={() => setOpenModal(variant)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Open {variant} modal
          </button>
          <Modal
            isOpen={openModal === variant}
            onClose={() => setOpenModal(null)}
            title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Modal`}
            description="This is a description of the modal content."
            variant={variant}
            icon={FiSettings}
          >
            <p>This is a {variant} modal variant.</p>
          </Modal>
        </div>
      ))}
    </div>
  );
};

// Different sizes
export const Sizes = () => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <div className="space-y-4">
      {['small', 'medium', 'large'].map((size) => (
        <div key={size}>
          <button
            onClick={() => setOpenModal(size)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Open {size} modal
          </button>
          <Modal
            isOpen={openModal === size}
            onClose={() => setOpenModal(null)}
            title={`${size.charAt(0).toUpperCase() + size.slice(1)} Modal`}
            description="This is a description of the modal content."
            size={size}
            icon={FiSettings}
          >
            <p>This is a {size} modal size.</p>
          </Modal>
        </div>
      ))}
    </div>
  );
};

// Different colors
export const Colors = () => {
  const [openModal, setOpenModal] = useState(null);

  const modalConfigs = {
    primary: { icon: FiSettings, title: 'Settings' },
    info: { icon: FiInfo, title: 'Information' },
    success: { icon: FiCheckCircle, title: 'Success' },
    warning: { icon: FiAlertTriangle, title: 'Warning' },
    error: { icon: FiAlertCircle, title: 'Error' },
  };

  return (
    <div className="space-y-4">
      {Object.entries(modalConfigs).map(([color, config]) => (
        <div key={color}>
          <button
            onClick={() => setOpenModal(color)}
            className={`
              px-4 py-2 rounded-md text-white
              ${color === 'primary' ? 'bg-blue-500 hover:bg-blue-600' :
                color === 'info' ? 'bg-blue-500 hover:bg-blue-600' :
                color === 'success' ? 'bg-green-500 hover:bg-green-600' :
                color === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600' :
                'bg-red-500 hover:bg-red-600'
              }
            `}
          >
            Open {color} modal
          </button>
          <Modal
            isOpen={openModal === color}
            onClose={() => setOpenModal(null)}
            title={config.title}
            description={`This is a ${color} modal example.`}
            color={color}
            icon={config.icon}
          >
            <p>This is a {color} modal color.</p>
          </Modal>
        </div>
      ))}
    </div>
  );
};

// Complex example
export const ComplexExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'user',
    notifications: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Open User Settings
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="User Settings"
        description="Manage your account settings and preferences"
        icon={FiUser}
        color="primary"
        variant="default"
        size="large"
        footer={
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Save Changes
            </button>
          </div>
        }
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <FiUser className="text-blue-500" />
              Profile Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Role Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <FiLock className="text-blue-500" />
              Role & Permissions
            </h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">Role</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
              </select>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <FiMail className="text-blue-500" />
              Notifications
            </h3>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="notifications"
                checked={formData.notifications}
                onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
                className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
              />
              <label htmlFor="notifications" className="text-sm text-gray-700">
                Receive email notifications
              </label>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

// Full screen example
export const FullScreenExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Open Full Screen Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Image Gallery"
        description="Browse and manage your images"
        icon={FiImage}
        fullScreen
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center"
            >
              <FiImage className="w-8 h-8 text-gray-400" />
            </div>
          ))}
        </div>
      </Modal>
    </>
  );
}; 