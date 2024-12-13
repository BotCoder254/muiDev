/**
 * @component RangeSlider
 * @description A professional range slider component with rich features and animations.
 * 
 * @example
 * ```jsx
 * // Basic usage
 * import { RangeSlider } from './components/Forms';
 * 
 * function MyComponent() {
 *   const handleChange = (value) => {
 *     console.log('Value changed:', value);
 *   };
 * 
 *   return (
 *     <RangeSlider
 *       label="Volume"
 *       min={0}
 *       max={100}
 *       defaultValue={50}
 *       onChange={handleChange}
 *     />
 *   );
 * }
 * 
 * // With custom formatting and validation
 * <RangeSlider
 *   label="Price Range"
 *   min={0}
 *   max={1000}
 *   step={10}
 *   formatValue={(value) => `$${value}`}
 *   variant="soft"
 *   color="primary"
 *   size="large"
 *   showTicks
 *   tickCount={11}
 *   onChange={handleChange}
 *   onChangeEnd={handleChangeEnd}
 * />
 * ```
 */

import React from 'react';
import RangeSlider from './RangeSlider';

export default {
  title: 'Forms/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile range slider component with rich features and animations.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'flat', 'soft'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size preset',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'white'],
      description: 'Color theme',
    },
  },
};

// Default slider
export const Default = {
  args: {
    label: 'Default Slider',
    min: 0,
    max: 100,
    defaultValue: 50,
    helperText: 'Drag the slider to adjust value',
    onChange: (value) => console.log('Value changed:', value),
  },
};

// With ticks and custom formatting
export const WithTicks = {
  args: {
    label: 'Price Range',
    min: 0,
    max: 1000,
    step: 100,
    defaultValue: 500,
    showTicks: true,
    tickCount: 11,
    formatValue: (value) => `$${value}`,
    helperText: 'Select your price range',
  },
};

// Different variants
export const Variants = () => (
  <div className="space-y-8">
    <RangeSlider
      variant="default"
      label="Default variant"
      defaultValue={50}
    />
    <RangeSlider
      variant="flat"
      label="Flat variant"
      defaultValue={50}
    />
    <RangeSlider
      variant="soft"
      label="Soft variant"
      defaultValue={50}
    />
  </div>
);

// Size variations
export const Sizes = () => (
  <div className="space-y-8">
    <RangeSlider
      size="small"
      label="Small size"
      defaultValue={50}
    />
    <RangeSlider
      size="medium"
      label="Medium size"
      defaultValue={50}
    />
    <RangeSlider
      size="large"
      label="Large size"
      defaultValue={50}
    />
  </div>
);

// Color variations
export const Colors = () => (
  <div className="space-y-8">
    <RangeSlider
      color="primary"
      label="Primary color"
      defaultValue={50}
    />
    <RangeSlider
      color="secondary"
      label="Secondary color"
      defaultValue={50}
    />
    <div className="p-8 bg-gray-800 rounded-lg">
      <RangeSlider
        color="white"
        label="White color"
        defaultValue={50}
      />
    </div>
  </div>
);

// With custom step
export const CustomStep = {
  args: {
    label: 'Volume',
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 50,
    showTicks: true,
    tickCount: 11,
    formatValue: (value) => `${value}%`,
    helperText: 'Adjust in 10% increments',
  },
};

// Disabled state
export const Disabled = {
  args: {
    label: 'Disabled Slider',
    defaultValue: 50,
    disabled: true,
    helperText: 'This slider is disabled',
  },
};

// With error
export const WithError = {
  args: {
    label: 'Error State',
    defaultValue: 30,
    error: 'Value must be at least 50',
  },
};

// With success
export const WithSuccess = {
  args: {
    label: 'Success State',
    defaultValue: 70,
    success: 'Perfect value selected',
  },
};

// Complex example
export const ComplexExample = () => {
  const [value, setValue] = React.useState(1500);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
    setError(null);
    setSuccess(null);

    if (newValue < 1000) {
      setError('Minimum budget should be $1,000');
    } else if (newValue > 2000) {
      setError('Maximum budget exceeded');
    } else {
      setSuccess('Budget is within acceptable range');
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-4">
      <RangeSlider
        label="Budget Range"
        min={0}
        max={3000}
        step={100}
        value={value}
        onChange={handleChange}
        onChangeEnd={(value) => console.log('Final value:', value)}
        formatValue={formatCurrency}
        variant="soft"
        color="primary"
        size="large"
        showTicks
        tickCount={7}
        error={error}
        success={success}
        helperText="Select your monthly budget"
      />
      <div className="text-sm text-gray-500">
        Selected budget: {formatCurrency(value)}
      </div>
    </div>
  );
}; 