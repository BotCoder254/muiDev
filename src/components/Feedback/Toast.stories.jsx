/**
 * @component Toast
 * @description A professional toast notification component with animations and rich features.
 */

import React, { useState } from 'react';
import Toast from './Toast';
import {
  FiUpload,
  FiDownload,
  FiSave,
  FiTrash2,
  FiShare2,
  FiEdit3,
  FiCopy,
  FiArchive,
  FiMail,
  FiRefreshCw,
  FiInfo,
  FiCheckCircle,
  FiAlertTriangle,
  FiAlertCircle,
  FiExternalLink,
} from 'react-icons/fi';

export default {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile toast notification component with animations and rich features.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error', 'loading'],
      description: 'Toast type',
    },
    variant: {
      control: 'select',
      options: ['default', 'flat', 'minimal'],
      description: 'Visual style variant',
    },
    position: {
      control: 'select',
      options: [
        'top-left',
        'top-center',
        'top-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      description: 'Toast position',
    },
  },
};

// Default toast
export const Default = {
  args: {
    title: 'Toast Title',
    description: 'This is a toast notification.',
    duration: 3000,
  },
};

// Different types
export const Types = () => {
  const [toasts, setToasts] = useState([]);
  let id = 0;

  const addToast = (type) => {
    const newToast = {
      id: `toast-${id++}`,
      type,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Toast`,
      description: `This is a ${type} toast notification.`,
      duration: 5000,
    };
    setToasts([...toasts, newToast]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {['default', 'info', 'success', 'warning', 'error', 'loading'].map((type) => (
          <button
            key={type}
            onClick={() => addToast(type)}
            className={`
              px-4 py-2 rounded-md text-white
              ${type === 'default' ? 'bg-gray-500 hover:bg-gray-600' :
                type === 'info' ? 'bg-blue-500 hover:bg-blue-600' :
                type === 'success' ? 'bg-green-500 hover:bg-green-600' :
                type === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600' :
                type === 'error' ? 'bg-red-500 hover:bg-red-600' :
                'bg-purple-500 hover:bg-purple-600'
              }
            `}
          >
            Show {type}
          </button>
        ))}
      </div>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

// Different positions
export const Positions = () => {
  const [toasts, setToasts] = useState([]);
  let id = 0;

  const addToast = (position) => {
    const newToast = {
      id: `toast-${id++}`,
      type: 'info',
      title: `${position} Toast`,
      description: `This toast appears in the ${position} position.`,
      position,
      duration: 5000,
    };
    setToasts([...toasts, newToast]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {[
          'top-left',
          'top-center',
          'top-right',
          'bottom-left',
          'bottom-center',
          'bottom-right',
        ].map((position) => (
          <button
            key={position}
            onClick={() => addToast(position)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Show {position}
          </button>
        ))}
      </div>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

// With actions
export const WithActions = () => {
  const [toasts, setToasts] = useState([]);
  let id = 0;

  const actions = [
    { text: 'Save', icon: FiSave, type: 'success' },
    { text: 'Delete', icon: FiTrash2, type: 'error' },
    { text: 'Share', icon: FiShare2, type: 'info' },
    { text: 'Edit', icon: FiEdit3, type: 'warning' },
    { text: 'Copy', icon: FiCopy, type: 'default' },
  ];

  const addToast = (action) => {
    const newToast = {
      id: `toast-${id++}`,
      type: action.type,
      title: `${action.text} Action`,
      description: `Click the action button to ${action.text.toLowerCase()}.`,
      icon: action.icon,
      action: action.text,
      actionIcon: action.icon,
      onAction: () => console.log(`${action.text} action clicked`),
      duration: 5000,
    };
    setToasts([...toasts, newToast]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {actions.map((action) => (
          <button
            key={action.text}
            onClick={() => addToast(action)}
            className={`
              px-4 py-2 rounded-md text-white flex items-center gap-2
              ${action.type === 'default' ? 'bg-gray-500 hover:bg-gray-600' :
                action.type === 'info' ? 'bg-blue-500 hover:bg-blue-600' :
                action.type === 'success' ? 'bg-green-500 hover:bg-green-600' :
                action.type === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600' :
                'bg-red-500 hover:bg-red-600'
              }
            `}
          >
            <action.icon className="w-4 h-4" />
            {action.text}
          </button>
        ))}
      </div>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

// Complex example
export const ComplexExample = () => {
  const [toasts, setToasts] = useState([]);
  let id = 0;

  const scenarios = [
    {
      title: 'File Upload',
      description: 'Uploading documents...',
      icon: FiUpload,
      type: 'loading',
      duration: 3000,
      onComplete: (toastId) => {
        updateToast(toastId, {
          type: 'success',
          title: 'Upload Complete',
          description: 'All files have been uploaded successfully.',
          icon: FiCheckCircle,
          duration: 2000,
        });
      },
    },
    {
      title: 'Sync in Progress',
      description: 'Syncing with cloud storage...',
      icon: FiRefreshCw,
      type: 'loading',
      duration: 4000,
      onComplete: (toastId) => {
        updateToast(toastId, {
          type: 'error',
          title: 'Sync Failed',
          description: 'Could not connect to the server.',
          icon: FiAlertCircle,
          action: 'Retry',
          actionIcon: FiRefreshCw,
          duration: 5000,
        });
      },
    },
    {
      title: 'Email Sent',
      description: 'Your message is being delivered...',
      icon: FiMail,
      type: 'loading',
      duration: 2000,
      onComplete: (toastId) => {
        updateToast(toastId, {
          type: 'success',
          title: 'Email Sent',
          description: 'Your message has been sent successfully.',
          icon: FiCheckCircle,
          action: 'View',
          actionIcon: FiExternalLink,
          duration: 3000,
        });
      },
    },
  ];

  const addToast = (scenario) => {
    const toastId = `toast-${id++}`;
    const newToast = {
      id: toastId,
      ...scenario,
    };
    setToasts([...toasts, newToast]);

    if (scenario.onComplete) {
      setTimeout(() => {
        scenario.onComplete(toastId);
      }, scenario.duration);
    }
  };

  const updateToast = (id, updates) => {
    setToasts(toasts.map(toast =>
      toast.id === id ? { ...toast, ...updates } : toast
    ));
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {scenarios.map((scenario, index) => (
          <button
            key={index}
            onClick={() => addToast(scenario)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2"
          >
            <scenario.icon className="w-4 h-4" />
            {scenario.title}
          </button>
        ))}
      </div>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}; 