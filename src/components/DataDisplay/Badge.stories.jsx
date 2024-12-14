import React from 'react';
import Badge from './Badge';
import { FiStar, FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

export default {
  title: 'Data Display/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge component with various styles and animations.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    rounded: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large', 'full'],
    },
    removable: { control: 'boolean' },
    pulse: { control: 'boolean' },
    glow: { control: 'boolean' },
    outline: { control: 'boolean' },
  },
};

// Default badge
export const Default = {
  args: {
    children: 'Default Badge',
  },
};

// All variants
export const Variants = () => (
  <div className="flex flex-wrap gap-4">
    <Badge variant="default">Default</Badge>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="info">Info</Badge>
  </div>
);

// All sizes
export const Sizes = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Badge size="small">Small</Badge>
    <Badge size="medium">Medium</Badge>
    <Badge size="large">Large</Badge>
  </div>
);

// Rounded variants
export const RoundedVariants = () => (
  <div className="flex flex-wrap gap-4">
    <Badge rounded="none">Square</Badge>
    <Badge rounded="small">Small Rounded</Badge>
    <Badge rounded="medium">Medium Rounded</Badge>
    <Badge rounded="large">Large Rounded</Badge>
    <Badge rounded="full">Fully Rounded</Badge>
  </div>
);

// With icons
export const WithIcons = () => (
  <div className="flex flex-wrap gap-4">
    <Badge icon={<FiStar />} variant="primary">Featured</Badge>
    <Badge icon={<FiTrendingUp />} variant="success">Trending Up</Badge>
    <Badge icon={<FiTrendingDown />} variant="error">Trending Down</Badge>
  </div>
);

// Removable badges
export const Removable = () => {
  const [badges, setBadges] = React.useState([
    { id: 1, text: 'React', variant: 'primary' },
    { id: 2, text: 'Vue', variant: 'success' },
    { id: 3, text: 'Angular', variant: 'error' },
  ]);

  const handleRemove = (id) => {
    setBadges(badges.filter(badge => badge.id !== id));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map(badge => (
        <Badge
          key={badge.id}
          variant={badge.variant}
          removable
          onRemove={() => handleRemove(badge.id)}
        >
          {badge.text}
        </Badge>
      ))}
    </div>
  );
};

// Animated badges
export const Animated = () => (
  <div className="flex flex-wrap gap-4">
    <Badge pulse variant="primary">Pulsing</Badge>
    <Badge glow variant="success">Glowing</Badge>
    <Badge pulse glow variant="warning">Pulsing & Glowing</Badge>
  </div>
);

// Outline style
export const Outlined = () => (
  <div className="flex flex-wrap gap-4">
    <Badge outline variant="primary">Primary</Badge>
    <Badge outline variant="success">Success</Badge>
    <Badge outline variant="warning">Warning</Badge>
    <Badge outline variant="error">Error</Badge>
  </div>
);

// Status indicators
export const StatusIndicators = () => (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-4">
      <Badge variant="success" icon={<FiStar />}>Online</Badge>
      <Badge variant="error" icon={<FiStar />}>Offline</Badge>
      <Badge variant="warning" icon={<FiStar />}>Away</Badge>
    </div>
    <div className="flex flex-wrap gap-4">
      <Badge variant="success" pulse>Active Now</Badge>
      <Badge variant="warning" glow>Processing</Badge>
      <Badge variant="error" pulse glow>Critical</Badge>
    </div>
  </div>
);

// Interactive example
export const Interactive = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex flex-wrap gap-4">
      <Badge
        variant={count > 0 ? 'success' : 'error'}
        icon={count > 0 ? <FiTrendingUp /> : <FiTrendingDown />}
        pulse={count > 5}
        glow={count > 10}
      >
        Count: {count}
      </Badge>
      <button
        onClick={() => setCount(prev => prev + 1)}
        className="px-3 py-1 bg-primary-500 text-white rounded-lg"
      >
        Increment
      </button>
      <button
        onClick={() => setCount(prev => Math.max(0, prev - 1))}
        className="px-3 py-1 bg-gray-500 text-white rounded-lg"
      >
        Decrement
      </button>
    </div>
  );
}; 