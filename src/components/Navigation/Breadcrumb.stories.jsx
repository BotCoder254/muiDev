/**
 * @component Breadcrumb
 * @description A professional breadcrumb navigation component with multiple variants and customization options.
 * 
 * @example
 * ```jsx
 * // Basic usage
 * import { Breadcrumb } from './components/Navigation';
 * 
 * function MyComponent() {
 *   const items = [
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'Current Page' }
 *   ];
 * 
 *   return <Breadcrumb items={items} />;
 * }
 * 
 * // With custom styling and icons
 * import { FiHome, FiSettings } from 'react-icons/fi';
 * 
 * const items = [
 *   { label: 'Home', href: '/', icon: FiHome },
 *   { label: 'Settings', href: '/settings', icon: FiSettings },
 *   { label: 'Profile' }
 * ];
 * 
 * <Breadcrumb
 *   items={items}
 *   variant="pills"
 *   color="primary"
 *   size="large"
 *   maxItems={5}
 *   showHomeIcon
 * />
 * ```
 */

import React from 'react';
import Breadcrumb from './Breadcrumb';
import {
  FiChevronRight,
  FiSlash,
  FiCircle,
  FiArrowRight,
  FiHome,
  FiSettings,
  FiUser,
  FiShield
} from 'react-icons/fi';

export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile breadcrumb navigation component with multiple variants and features.',
      },
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'white'],
      description: 'Color theme of the breadcrumb',
    },
    variant: {
      control: 'select',
      options: ['default', 'pills', 'bordered'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the breadcrumb items',
    },
    maxItems: {
      control: 'number',
      description: 'Maximum number of visible items (0 for all)',
    },
    showHomeIcon: {
      control: 'boolean',
      description: 'Whether to show the home icon',
    },
  },
};

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops', href: '/products/electronics/laptops' },
  { label: 'MacBook Pro' },
];

// Default breadcrumb
export const Default = {
  args: {
    items,
    color: 'primary',
  },
};

// With custom separator
export const WithCustomSeparator = {
  args: {
    items,
    separatorIcon: <FiSlash />,
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

// Size variations
export const Sizes = () => (
  <div className="space-y-6">
    <Breadcrumb
      items={items}
      size="small"
      color="primary"
    />
    <Breadcrumb
      items={items}
      size="medium"
      color="primary"
    />
    <Breadcrumb
      items={items}
      size="large"
      color="primary"
    />
  </div>
);

// Color variations
export const Colors = () => (
  <div className="space-y-6">
    <Breadcrumb
      items={items}
      color="primary"
      variant="pills"
    />
    <Breadcrumb
      items={items}
      color="secondary"
      variant="pills"
    />
    <Breadcrumb
      items={items}
      color="white"
      variant="pills"
    />
  </div>
);

// With icons
export const WithIcons = {
  args: {
    items: [
      { label: 'Dashboard', href: '/', icon: FiHome },
      { label: 'Settings', href: '/settings', icon: FiSettings },
      { label: 'Profile', href: '/settings/profile', icon: FiUser },
      { label: 'Security', icon: FiShield },
    ],
    variant: 'pills',
    color: 'primary',
  },
};

// With truncation
export const Truncated = {
  args: {
    items: items.map(item => ({
      ...item,
      label: item.label.repeat(3), // Make labels longer
    })),
    maxItems: 3,
    color: 'primary',
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
};

// Separator variations
export const Separators = () => (
  <div className="space-y-6">
    <Breadcrumb
      items={items}
      separatorIcon={<FiChevronRight />}
      color="primary"
    />
    <Breadcrumb
      items={items}
      separatorIcon={<FiSlash />}
      color="primary"
    />
    <Breadcrumb
      items={items}
      separatorIcon={<FiCircle className="w-1.5 h-1.5" />}
      color="primary"
    />
    <Breadcrumb
      items={items}
      separatorIcon={<FiArrowRight />}
      color="primary"
    />
  </div>
);

// Without home icon
export const WithoutHomeIcon = {
  args: {
    items,
    showHomeIcon: false,
    color: 'primary',
  },
};

// Responsive example
export const Responsive = {
  args: {
    items: items.concat(items), // Double the items
    maxItems: 5,
    color: 'primary',
    variant: 'pills',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl mx-auto">
        <Story />
      </div>
    ),
  ],
}; 