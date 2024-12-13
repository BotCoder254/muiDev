import React from 'react';
import Loader from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    variant: {
      control: 'select',
      options: ['spinner', 'dots', 'pulse', 'progress', 'bounce', 'circular'],
    },
    size: {
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white'],
    },
    textPosition: {
      control: 'select',
      options: ['top', 'bottom', 'right'],
    },
    speed: {
      control: 'select',
      options: ['slow', 'normal', 'fast'],
    },
    text: {
      control: 'text',
    },
    fullWidth: {
      control: 'boolean',
    },
    overlay: {
      control: 'boolean',
    },
    blur: {
      control: 'boolean',
    },
    progress: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    indeterminate: {
      control: 'boolean',
    },
  },
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div className="p-8 flex items-center justify-center min-h-[200px]">
        <Story />
      </div>
    ),
  ],
};

// Basic spinner loader
export const Spinner = {
  args: {
    variant: 'spinner',
    size: 'medium',
    color: 'primary',
    text: 'Loading...',
  },
};

// Dots loader with text
export const Dots = {
  args: {
    variant: 'dots',
    size: 'medium',
    color: 'primary',
    text: 'Processing...',
    textPosition: 'bottom',
  },
};

// Pulse loader
export const Pulse = {
  args: {
    variant: 'pulse',
    size: 'large',
    color: 'success',
    speed: 'normal',
  },
};

// Progress loader
export const Progress = {
  args: {
    variant: 'progress',
    size: 'medium',
    color: 'primary',
    progress: 75,
    indeterminate: false,
    text: '75% Complete',
    fullWidth: true,
  },
};

// Bounce loader
export const Bounce = {
  args: {
    variant: 'bounce',
    size: 'medium',
    color: 'warning',
    speed: 'normal',
    text: 'Please wait...',
  },
};

// Circular progress
export const CircularProgress = {
  args: {
    variant: 'circular',
    size: 'large',
    color: 'info',
    progress: 65,
    indeterminate: false,
    text: 'Uploading...',
  },
};

// Overlay loader
export const OverlayLoader = {
  args: {
    variant: 'spinner',
    size: 'xl',
    color: 'white',
    overlay: true,
    blur: true,
    text: 'Processing your request...',
  },
};

// Size variations
export const SizeVariations = () => (
  <div className="flex flex-col items-start gap-8">
    <div className="flex items-center gap-8">
      <Loader variant="spinner" size="tiny" color="primary" text="Tiny" textPosition="right" />
      <Loader variant="spinner" size="small" color="primary" text="Small" textPosition="right" />
      <Loader variant="spinner" size="medium" color="primary" text="Medium" textPosition="right" />
      <Loader variant="spinner" size="large" color="primary" text="Large" textPosition="right" />
      <Loader variant="spinner" size="xl" color="primary" text="XL" textPosition="right" />
    </div>
    <div className="flex items-center gap-8">
      <Loader variant="dots" size="tiny" color="info" />
      <Loader variant="dots" size="small" color="info" />
      <Loader variant="dots" size="medium" color="info" />
      <Loader variant="dots" size="large" color="info" />
      <Loader variant="dots" size="xl" color="info" />
    </div>
    <div className="flex items-center gap-8">
      <Loader variant="circular" size="tiny" color="success" progress={75} />
      <Loader variant="circular" size="small" color="success" progress={75} />
      <Loader variant="circular" size="medium" color="success" progress={75} />
      <Loader variant="circular" size="large" color="success" progress={75} />
      <Loader variant="circular" size="xl" color="success" progress={75} />
    </div>
  </div>
);

// Color variations
export const ColorVariations = () => (
  <div className="grid grid-cols-3 gap-8">
    <Loader variant="spinner" color="primary" text="Primary" />
    <Loader variant="dots" color="secondary" text="Secondary" />
    <Loader variant="pulse" color="success" text="Success" />
    <Loader variant="bounce" color="danger" text="Danger" />
    <Loader variant="circular" color="warning" text="Warning" indeterminate />
    <Loader variant="spinner" color="info" text="Info" />
    <div className="p-4 bg-gray-800 rounded">
      <Loader variant="dots" color="light" text="Light" />
    </div>
    <Loader variant="pulse" color="dark" text="Dark" />
    <div className="p-4 bg-gray-800 rounded">
      <Loader variant="bounce" color="white" text="White" />
    </div>
  </div>
);

// Text positions
export const TextPositions = () => (
  <div className="flex flex-col gap-8">
    <Loader variant="spinner" text="Top position" textPosition="top" />
    <Loader variant="dots" text="Bottom position" textPosition="bottom" />
    <Loader variant="circular" text="Right position" textPosition="right" progress={60} />
  </div>
);

// Speed variations
export const SpeedVariations = () => (
  <div className="flex gap-12">
    <Loader variant="spinner" speed="slow" text="Slow" />
    <Loader variant="dots" speed="normal" text="Normal" />
    <Loader variant="bounce" speed="fast" text="Fast" />
  </div>
);

// Progress variations
export const ProgressVariations = () => (
  <div className="flex flex-col gap-8 w-full max-w-md">
    <Loader
      variant="progress"
      progress={30}
      color="primary"
      text="Uploading files..."
      fullWidth
    />
    <Loader
      variant="circular"
      progress={65}
      color="success"
      text="Processing..."
      size="large"
    />
    <Loader
      variant="progress"
      indeterminate
      color="info"
      text="Please wait..."
      fullWidth
    />
  </div>
); 