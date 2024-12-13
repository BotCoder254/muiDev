/**
 * @component Tooltip
 * @description A professional tooltip component with animations and rich features.
 */

import React from 'react';
import Tooltip from './Tooltip';
import {
  FiHelpCircle,
  FiInfo,
  FiAlertCircle,
  FiAlertTriangle,
  FiCheckCircle,
  FiSettings,
  FiUser,
  FiLock,
  FiKey,
  FiShield,
} from 'react-icons/fi';

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile tooltip component with animations and rich features.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Tooltip position',
    },
    variant: {
      control: 'select',
      options: ['default', 'flat', 'minimal'],
      description: 'Visual style variant',
    },
    color: {
      control: 'select',
      options: ['primary', 'info', 'success', 'warning', 'error'],
      description: 'Color theme',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size preset',
    },
  },
};

// Default tooltip
export const Default = {
  args: {
    content: 'This is a tooltip',
    children: (
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Hover me
      </button>
    ),
  },
};

// Different positions
export const Positions = () => (
  <div className="grid grid-cols-2 gap-8 p-16">
    {['top', 'bottom', 'left', 'right'].map((position) => (
      <Tooltip
        key={position}
        content={`${position} tooltip`}
        position={position}
      >
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          {position}
        </button>
      </Tooltip>
    ))}
  </div>
);

// Different variants
export const Variants = () => (
  <div className="flex gap-8">
    {['default', 'flat', 'minimal'].map((variant) => (
      <Tooltip
        key={variant}
        content={`${variant} variant`}
        variant={variant}
      >
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          {variant}
        </button>
      </Tooltip>
    ))}
  </div>
);

// Different colors
export const Colors = () => (
  <div className="flex gap-8">
    {['primary', 'info', 'success', 'warning', 'error'].map((color) => (
      <Tooltip
        key={color}
        content={`${color} tooltip`}
        color={color}
        icon={
          color === 'primary' ? FiHelpCircle :
          color === 'info' ? FiInfo :
          color === 'success' ? FiCheckCircle :
          color === 'warning' ? FiAlertTriangle :
          FiAlertCircle
        }
        showIcon
      >
        <button
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
          {color}
        </button>
      </Tooltip>
    ))}
  </div>
);

// With icons
export const WithIcons = () => (
  <div className="flex gap-8">
    {[
      { icon: FiSettings, text: 'Settings' },
      { icon: FiUser, text: 'Profile' },
      { icon: FiLock, text: 'Security' },
      { icon: FiKey, text: 'Access' },
      { icon: FiShield, text: 'Privacy' },
    ].map(({ icon: Icon, text }) => (
      <Tooltip
        key={text}
        content={`View ${text.toLowerCase()}`}
        icon={Icon}
        showIcon
      >
        <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
          <Icon className="w-5 h-5" />
        </button>
      </Tooltip>
    ))}
  </div>
);

// Different sizes
export const Sizes = () => (
  <div className="flex gap-8">
    {['small', 'medium', 'large'].map((size) => (
      <Tooltip
        key={size}
        content={`${size} tooltip`}
        size={size}
        icon={FiInfo}
        showIcon
      >
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          {size}
        </button>
      </Tooltip>
    ))}
  </div>
);

// With delay
export const WithDelay = () => (
  <div className="flex gap-8">
    {[0, 500, 1000].map((delay) => (
      <Tooltip
        key={delay}
        content={`Delayed by ${delay}ms`}
        delay={delay}
      >
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          {delay}ms delay
        </button>
      </Tooltip>
    ))}
  </div>
);

// Click trigger
export const ClickTrigger = () => (
  <div className="flex gap-8">
    <Tooltip
      content="Click triggered tooltip"
      trigger="click"
    >
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Click me
      </button>
    </Tooltip>
  </div>
);

// Complex example
export const ComplexExample = () => (
  <div className="p-8 bg-white rounded-lg shadow-lg space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">Security Settings</h2>
      <Tooltip
        content="Learn more about security settings"
        icon={FiHelpCircle}
        showIcon
        color="info"
      >
        <button className="text-gray-400 hover:text-blue-500">
          <FiHelpCircle className="w-5 h-5" />
        </button>
      </Tooltip>
    </div>

    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiLock className="w-5 h-5 text-blue-500" />
          <span>Two-factor authentication</span>
        </div>
        <Tooltip
          content="Enable two-factor authentication for enhanced security"
          position="left"
          icon={FiShield}
          showIcon
          color="success"
        >
          <button className="w-12 h-6 bg-blue-500 rounded-full relative">
            <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
          </button>
        </Tooltip>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiKey className="w-5 h-5 text-yellow-500" />
          <span>API Access</span>
        </div>
        <Tooltip
          content="Manage API keys and access tokens"
          position="left"
          icon={FiKey}
          showIcon
          color="warning"
        >
          <button className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-50">
            Manage Keys
          </button>
        </Tooltip>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FiShield className="w-5 h-5 text-red-500" />
          <span>Security Log</span>
        </div>
        <Tooltip
          content="View recent security events and alerts"
          position="left"
          icon={FiAlertCircle}
          showIcon
          color="error"
        >
          <button className="text-red-500 hover:text-red-600">
            3 alerts
          </button>
        </Tooltip>
      </div>
    </div>
  </div>
); 