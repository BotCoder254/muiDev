import React from 'react';
import Heading from './Heading';
import {
  FiAward,
  FiStar,
  FiZap,
  FiFlag,
  FiTrendingUp,
  FiBookmark,
  FiCpu,
  FiBox,
} from 'react-icons/fi';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile heading component with multiple variants, animations, and professional styling.',
      },
    },
  },
  argTypes: {
    level: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Heading level (h1-h6)',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Visual style variant',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    weight: {
      control: 'select',
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
      description: 'Font weight',
    },
    gradient: {
      control: 'boolean',
      description: 'Enable gradient text effect',
    },
    animate: {
      control: 'boolean',
      description: 'Enable animations',
    },
  },
};

// Default heading
export const Default = {
  args: {
    level: 1,
    children: 'Modern Heading Component',
  },
};

// All heading levels
export const AllLevels = () => (
  <div className="space-y-6">
    {[1, 2, 3, 4, 5, 6].map((level) => (
      <Heading key={level} level={level}>
        Heading Level {level}
      </Heading>
    ))}
  </div>
);

// Variants
export const Variants = () => (
  <div className="space-y-6">
    {['default', 'primary', 'secondary', 'success', 'warning', 'error'].map((variant) => (
      <Heading key={variant} level={2} variant={variant}>
        {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
      </Heading>
    ))}
  </div>
);

// With icons
export const WithIcons = () => (
  <div className="space-y-8">
    <Heading level={1} icon={<FiAward className="w-8 h-8" />}>
      Achievement Unlocked
    </Heading>
    <Heading level={2} icon={<FiStar className="w-7 h-7" />} variant="primary">
      Featured Content
    </Heading>
    <Heading level={3} icon={<FiZap className="w-6 h-6" />} variant="success">
      Quick Actions
    </Heading>
    <Heading level={4} icon={<FiFlag className="w-5 h-5" />} variant="warning">
      Important Notice
    </Heading>
  </div>
);

// Gradient headings
export const GradientHeadings = () => (
  <div className="space-y-8">
    <Heading level={1} gradient>
      Gradient Heading One
    </Heading>
    <Heading level={2} gradient icon={<FiTrendingUp className="w-7 h-7" />}>
      Trending Topics
    </Heading>
    <Heading level={3} gradient icon={<FiBookmark className="w-6 h-6" />}>
      Bookmarked Items
    </Heading>
  </div>
);

// Interactive features
export const InteractiveFeatures = () => (
  <div className="space-y-8">
    <Heading level={2} copyable>
      Copyable Heading
    </Heading>
    <Heading
      level={2}
      editable
      onEdit={() => console.log('Edit clicked')}
    >
      Editable Heading
    </Heading>
    <Heading
      level={2}
      copyable
      editable
      onEdit={() => console.log('Edit clicked')}
    >
      Copyable and Editable
    </Heading>
  </div>
);

// Modern feature headings
export const ModernFeatures = () => (
  <div className="space-y-12">
    <div className="text-center">
      <Heading
        level={1}
        gradient
        align="center"
        className="mb-4"
        icon={<FiCpu className="w-10 h-10" />}
      >
        Modern Features
      </Heading>
      <Heading level={3} variant="secondary" align="center" weight="normal">
        Discover our powerful components
      </Heading>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          icon: FiZap,
          title: 'Lightning Fast',
          description: 'Optimized for maximum performance',
        },
        {
          icon: FiBox,
          title: 'Modular Design',
          description: 'Flexible and reusable components',
        },
        {
          icon: FiStar,
          title: 'Premium Quality',
          description: 'Built with attention to detail',
        },
        {
          icon: FiTrendingUp,
          title: 'Scalable Solution',
          description: 'Grows with your application',
        },
      ].map(({ icon: Icon, title, description }) => (
        <div key={title} className="group">
          <Heading
            level={3}
            icon={<Icon className="w-6 h-6" />}
            className="mb-2"
          >
            {title}
          </Heading>
          <p className="text-gray-600 dark:text-gray-300 ml-9">
            {description}
          </p>
        </div>
      ))}
    </div>
  </div>
); 