import React from 'react';
import Divider from './Divider';
import { FiStar, FiHeart, FiAward, FiCoffee } from 'react-icons/fi';

export default {
  title: 'DataDisplay/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    type: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
    },
    color: {
      control: 'select',
      options: ['gray', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    spacing: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

// Basic divider
export const Basic = {
  args: {
    variant: 'horizontal',
    type: 'solid',
    color: 'gray',
    spacing: 'medium',
  },
};

// With label
export const WithLabel = {
  args: {
    withLabel: true,
    label: 'Section Divider',
    color: 'primary',
  },
};

// With icon
export const WithIcon = {
  args: {
    withIcon: true,
    icon: FiStar,
    color: 'secondary',
  },
};

// Different types
export const Types = () => (
  <div className="space-y-8">
    <div>
      <p className="text-sm text-gray-500 mb-2">Solid</p>
      <Divider type="solid" />
    </div>
    <div>
      <p className="text-sm text-gray-500 mb-2">Dashed</p>
      <Divider type="dashed" />
    </div>
    <div>
      <p className="text-sm text-gray-500 mb-2">Dotted</p>
      <Divider type="dotted" />
    </div>
  </div>
);

// Different colors
export const Colors = () => (
  <div className="space-y-8">
    <Divider color="gray" withLabel label="Gray" />
    <Divider color="primary" withLabel label="Primary" />
    <Divider color="secondary" withLabel label="Secondary" />
    <Divider color="success" withLabel label="Success" />
    <Divider color="warning" withLabel label="Warning" />
    <Divider color="error" withLabel label="Error" />
  </div>
);

// Different spacings
export const Spacings = () => (
  <div className="space-y-8">
    <div>
      <p className="text-sm text-gray-500 mb-2">Small Spacing</p>
      <Divider spacing="small" />
    </div>
    <div>
      <p className="text-sm text-gray-500 mb-2">Medium Spacing</p>
      <Divider spacing="medium" />
    </div>
    <div>
      <p className="text-sm text-gray-500 mb-2">Large Spacing</p>
      <Divider spacing="large" />
    </div>
  </div>
);

// Vertical divider
export const Vertical = () => (
  <div className="h-32 flex items-center">
    <div className="text-gray-600">Left</div>
    <Divider variant="vertical" className="mx-4" />
    <div className="text-gray-600">Right</div>
  </div>
);

// With icons and labels
export const WithIconsAndLabels = () => (
  <div className="space-y-8">
    <Divider withIcon icon={FiStar} withLabel label="Featured Content" color="primary" />
    <Divider withIcon icon={FiHeart} withLabel label="Popular Items" color="secondary" />
    <Divider withIcon icon={FiAward} withLabel label="Award Winners" color="success" />
    <Divider withIcon icon={FiCoffee} withLabel label="Break Time" color="warning" />
  </div>
);

// Complex example
export const ComplexExample = () => (
  <div className="space-y-8">
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Page Section</h2>
      <Divider
        withIcon
        icon={FiStar}
        withLabel
        label="Featured Content"
        color="primary"
        className="mt-4"
      />
    </div>
    
    <div className="flex justify-between items-center">
      <div className="w-1/3">
        <p className="text-gray-600 dark:text-gray-400">Left Content</p>
      </div>
      <Divider variant="vertical" className="h-24" />
      <div className="w-1/3 text-center">
        <p className="text-gray-600 dark:text-gray-400">Middle Content</p>
      </div>
      <Divider variant="vertical" className="h-24" />
      <div className="w-1/3 text-right">
        <p className="text-gray-600 dark:text-gray-400">Right Content</p>
      </div>
    </div>
    
    <Divider
      withIcon
      icon={FiAward}
      withLabel
      label="End of Section"
      color="secondary"
      type="dashed"
    />
  </div>
); 