import React from 'react';
import ProgressBar from './ProgressBar';

export default {
  title: 'Data Display/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A versatile progress bar component with various styles and animations.',
      },
    },
  },
  argTypes: {
    value: { control: 'number', min: 0, max: 100 },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    valuePosition: {
      control: 'select',
      options: ['top', 'right', 'bottom'],
    },
    striped: { control: 'boolean' },
    animated: { control: 'boolean' },
    showValue: { control: 'boolean' },
  },
};

// Default progress bar
export const Default = {
  args: {
    value: 60,
    label: 'Progress',
  },
};

// All variants
export const Variants = () => (
  <div className="space-y-4 w-full max-w-md">
    <ProgressBar value={60} variant="primary" label="Primary" />
    <ProgressBar value={70} variant="success" label="Success" />
    <ProgressBar value={50} variant="warning" label="Warning" />
    <ProgressBar value={30} variant="error" label="Error" />
    <ProgressBar value={80} variant="info" label="Info" />
  </div>
);

// All sizes
export const Sizes = () => (
  <div className="space-y-4 w-full max-w-md">
    <ProgressBar value={60} size="small" label="Small" />
    <ProgressBar value={60} size="medium" label="Medium" />
    <ProgressBar value={60} size="large" label="Large" />
    <ProgressBar value={60} size="xlarge" label="Extra Large" />
  </div>
);

// Value positions
export const ValuePositions = () => (
  <div className="space-y-8 w-full max-w-md">
    <ProgressBar value={60} valuePosition="top" label="Value on Top" />
    <ProgressBar value={60} valuePosition="right" label="Value on Right" />
    <ProgressBar value={60} valuePosition="bottom" label="Value on Bottom" />
  </div>
);

// With status
export const WithStatus = () => (
  <div className="space-y-4 w-full max-w-md">
    <ProgressBar value={100} variant="success" status="success" label="Completed" />
    <ProgressBar value={60} variant="warning" status="warning" label="In Progress" />
    <ProgressBar value={30} variant="error" status="error" label="Failed" />
  </div>
);

// Striped and animated
export const StripedAndAnimated = () => (
  <div className="space-y-4 w-full max-w-md">
    <ProgressBar value={60} striped label="Striped" />
    <ProgressBar value={60} striped animated label="Striped & Animated" />
    <ProgressBar value={60} animated label="Animated (Pulse)" />
  </div>
);

// Interactive example
export const Interactive = () => {
  const [progress, setProgress] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const getVariant = () => {
    if (progress < 30) return 'error';
    if (progress < 70) return 'warning';
    return 'success';
  };

  return (
    <div className="space-y-4 w-full max-w-md">
      <ProgressBar
        value={progress}
        variant={getVariant()}
        striped
        animated={isRunning}
        label="Download Progress"
        status={progress === 100 ? 'success' : undefined}
      />
      <div className="flex gap-2">
        <button
          onClick={() => {
            setIsRunning(!isRunning);
            if (progress >= 100) setProgress(0);
          }}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg"
        >
          {isRunning ? 'Pause' : progress >= 100 ? 'Restart' : 'Start'}
        </button>
        <button
          onClick={() => {
            setProgress(0);
            setIsRunning(false);
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// Multiple progress bars
export const MultipleProgressBars = () => {
  const tasks = [
    { name: 'Uploading files', progress: 80, variant: 'primary' },
    { name: 'Processing data', progress: 45, variant: 'warning' },
    { name: 'Downloading updates', progress: 90, variant: 'success' },
    { name: 'Installing packages', progress: 20, variant: 'error' },
  ];

  return (
    <div className="space-y-6 w-full max-w-md">
      {tasks.map((task, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{task.name}</span>
            <span className="text-gray-500">{task.progress}%</span>
          </div>
          <ProgressBar
            value={task.progress}
            variant={task.variant}
            size="small"
            striped
            animated={task.progress < 100}
            showValue={false}
          />
        </div>
      ))}
    </div>
  );
}; 