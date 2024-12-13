/**
 * @component Alert
 * @description A professional alert component with animations and rich features.
 */

import React from 'react';
import Alert from './Alert';
import {
  FiInfo,
  FiCheckCircle,
  FiAlertTriangle,
  FiAlertCircle,
  FiX,
  FiExternalLink,
  FiRefreshCw,
  FiArrowRight,
  FiEye,
  FiDownload,
} from 'react-icons/fi';

export default {
  title: 'Feedback/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile alert component with animations and rich features.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Alert type',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size preset',
    },
  },
};

// Default alert
export const Default = {
  args: {
    title: 'Alert Title',
    description: 'This is an alert message.',
    type: 'info',
  },
};

// Different types
export const Types = () => (
  <div className="space-y-4 w-[500px]">
    {[
      { type: 'info', title: 'Information', icon: FiInfo },
      { type: 'success', title: 'Success', icon: FiCheckCircle },
      { type: 'warning', title: 'Warning', icon: FiAlertTriangle },
      { type: 'error', title: 'Error', icon: FiAlertCircle },
    ].map(({ type, title, icon: Icon }) => (
      <Alert
        key={type}
        type={type}
        title={title}
        description={`This is a ${type} alert message.`}
        icon={Icon}
      />
    ))}
  </div>
);

// Different variants
export const Variants = () => (
  <div className="space-y-4 w-[500px]">
    {['default', 'filled', 'outlined'].map((variant) => (
      <Alert
        key={variant}
        variant={variant}
        type="info"
        title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Variant`}
        description={`This is a ${variant} variant alert.`}
        icon={FiInfo}
      />
    ))}
  </div>
);

// Different sizes
export const Sizes = () => (
  <div className="space-y-4 w-[500px]">
    {['small', 'medium', 'large'].map((size) => (
      <Alert
        key={size}
        size={size}
        type="info"
        title={`${size.charAt(0).toUpperCase() + size.slice(1)} Size`}
        description={`This is a ${size} size alert.`}
        icon={FiInfo}
      />
    ))}
  </div>
);

// With actions
export const WithActions = () => (
  <div className="space-y-4 w-[500px]">
    <Alert
      type="info"
      title="Update Available"
      description="A new version of the application is available."
      icon={FiRefreshCw}
      action={{
        label: 'Update Now',
        onClick: () => console.log('Update clicked'),
        icon: FiArrowRight,
      }}
    />

    <Alert
      type="success"
      title="File Uploaded"
      description="Your file has been successfully uploaded to the cloud."
      icon={FiCheckCircle}
      action={{
        label: 'View File',
        onClick: () => console.log('View clicked'),
        icon: FiEye,
      }}
    />

    <Alert
      type="warning"
      title="Storage Space Low"
      description="You're running low on storage space. Consider upgrading your plan."
      icon={FiAlertTriangle}
      action={{
        label: 'Upgrade Plan',
        onClick: () => console.log('Upgrade clicked'),
        icon: FiExternalLink,
      }}
    />

    <Alert
      type="error"
      title="Download Failed"
      description="The file download was interrupted. Please try again."
      icon={FiAlertCircle}
      action={{
        label: 'Retry Download',
        onClick: () => console.log('Retry clicked'),
        icon: FiDownload,
      }}
    />
  </div>
);

// Dismissible
export const Dismissible = () => (
  <div className="space-y-4 w-[500px]">
    {['info', 'success', 'warning', 'error'].map((type) => (
      <Alert
        key={type}
        type={type}
        title={`Dismissible ${type}`}
        description={`This is a dismissible ${type} alert.`}
        onClose={() => console.log(`${type} alert closed`)}
        dismissible
      />
    ))}
  </div>
);

// With custom content
export const WithCustomContent = () => (
  <div className="space-y-4 w-[500px]">
    <Alert
      type="info"
      title="Account Settings"
      description="Your account settings have been updated."
      icon={FiInfo}
      dismissible
    >
      <div className="mt-4 p-4 bg-blue-50 rounded-md">
        <h4 className="text-sm font-medium text-blue-800">Changes made:</h4>
        <ul className="mt-2 text-sm text-blue-700 list-disc list-inside">
          <li>Profile picture updated</li>
          <li>Email preferences changed</li>
          <li>Two-factor authentication enabled</li>
        </ul>
      </div>
    </Alert>

    <Alert
      type="warning"
      title="Browser Update Required"
      description="Your browser version is not supported."
      icon={FiAlertTriangle}
      dismissible
    >
      <div className="mt-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-1/3 h-full bg-yellow-500" />
          </div>
          <span className="text-sm text-yellow-700">33%</span>
        </div>
        <p className="mt-2 text-sm text-yellow-700">
          Downloading latest version...
        </p>
      </div>
    </Alert>
  </div>
);

// Complex example
export const ComplexExample = () => (
  <div className="space-y-4 w-[500px]">
    <Alert
      type="success"
      title="Payment Successful"
      description="Your subscription has been upgraded to the Pro plan."
      icon={FiCheckCircle}
      variant="filled"
      dismissible
    >
      <div className="mt-4 bg-green-600 bg-opacity-20 p-4 rounded-md space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-green-800 font-medium">Amount Paid</span>
          <span className="text-green-800">$29.99</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-800 font-medium">Plan</span>
          <span className="text-green-800">Pro (Annual)</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-green-800 font-medium">Next Billing</span>
          <span className="text-green-800">Jan 1, 2024</span>
        </div>
        <button
          className="mt-2 w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          onClick={() => console.log('View receipt')}
        >
          View Receipt
        </button>
      </div>
    </Alert>

    <Alert
      type="error"
      title="Security Alert"
      description="Unusual login activity detected on your account."
      icon={FiAlertCircle}
      variant="outlined"
      dismissible
    >
      <div className="mt-4 border border-red-200 rounded-md overflow-hidden">
        <div className="p-4 bg-red-50">
          <h4 className="text-sm font-medium text-red-800">Recent Login Attempts</h4>
        </div>
        <div className="divide-y divide-red-200">
          {[
            { location: 'San Francisco, US', time: '2 minutes ago', status: 'Success' },
            { location: 'London, UK', time: '5 minutes ago', status: 'Failed' },
            { location: 'Tokyo, JP', time: '10 minutes ago', status: 'Failed' },
          ].map((attempt, index) => (
            <div key={index} className="p-3 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-900">{attempt.location}</p>
                <p className="text-xs text-gray-500">{attempt.time}</p>
              </div>
              <span
                className={`
                  px-2 py-1 text-xs font-medium rounded-full
                  ${attempt.status === 'Success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                  }
                `}
              >
                {attempt.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <button
          className="flex-1 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          onClick={() => console.log('Secure account')}
        >
          Secure Account
        </button>
        <button
          className="flex-1 py-2 border border-red-600 text-red-600 rounded-md hover:bg-red-50 transition-colors"
          onClick={() => console.log('View activity')}
        >
          View Activity
        </button>
      </div>
    </Alert>
  </div>
); 