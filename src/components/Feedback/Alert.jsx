/**
 * @component Alert
 * @description A professional alert component with animations and rich features.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX,
  FiInfo,
  FiCheckCircle,
  FiAlertTriangle,
  FiAlertCircle,
  FiArrowRight,
} from 'react-icons/fi';

const Alert = ({
  type = 'info',
  title,
  description,
  variant = 'default',
  size = 'medium',
  icon: CustomIcon,
  action,
  actionIcon: ActionIcon = FiArrowRight,
  onAction,
  onClose,
  dismissible = true,
  children,
  className = '',
  ...props
}) => {
  const variants = {
    default: {
      container: `
        bg-white dark:bg-gray-800
        border
        ${type === 'info' ? 'border-blue-200 dark:border-blue-800' :
          type === 'success' ? 'border-green-200 dark:border-green-800' :
          type === 'warning' ? 'border-yellow-200 dark:border-yellow-800' :
          type === 'error' ? 'border-red-200 dark:border-red-800' :
          'border-gray-200 dark:border-gray-700'}
      `,
      icon: `
        ${type === 'info' ? 'text-blue-500 dark:text-blue-400' :
          type === 'success' ? 'text-green-500 dark:text-green-400' :
          type === 'warning' ? 'text-yellow-500 dark:text-yellow-400' :
          type === 'error' ? 'text-red-500 dark:text-red-400' :
          'text-gray-500 dark:text-gray-400'}
      `,
      title: 'text-gray-900 dark:text-white',
      description: 'text-gray-600 dark:text-gray-300',
    },
    filled: {
      container: `
        ${type === 'info' ? 'bg-blue-500 text-white' :
          type === 'success' ? 'bg-green-500 text-white' :
          type === 'warning' ? 'bg-yellow-500 text-white' :
          type === 'error' ? 'bg-red-500 text-white' :
          'bg-gray-500 text-white'}
      `,
      icon: 'text-white',
      title: 'text-white',
      description: 'text-white/90',
    },
    outlined: {
      container: `
        border-2
        ${type === 'info' ? 'border-blue-500 dark:border-blue-400' :
          type === 'success' ? 'border-green-500 dark:border-green-400' :
          type === 'warning' ? 'border-yellow-500 dark:border-yellow-400' :
          type === 'error' ? 'border-red-500 dark:border-red-400' :
          'border-gray-500 dark:border-gray-400'}
      `,
      icon: `
        ${type === 'info' ? 'text-blue-500 dark:text-blue-400' :
          type === 'success' ? 'text-green-500 dark:text-green-400' :
          type === 'warning' ? 'text-yellow-500 dark:text-yellow-400' :
          type === 'error' ? 'text-red-500 dark:text-red-400' :
          'text-gray-500 dark:text-gray-400'}
      `,
      title: 'text-gray-900 dark:text-white',
      description: 'text-gray-600 dark:text-gray-300',
    },
  };

  const sizes = {
    small: {
      container: 'p-3',
      icon: 'w-4 h-4',
      title: 'text-sm',
      description: 'text-xs',
    },
    medium: {
      container: 'p-4',
      icon: 'w-5 h-5',
      title: 'text-base',
      description: 'text-sm',
    },
    large: {
      container: 'p-5',
      icon: 'w-6 h-6',
      title: 'text-lg',
      description: 'text-base',
    },
  };

  const getIcon = () => {
    if (CustomIcon) return CustomIcon;
    switch (type) {
      case 'info':
        return FiInfo;
      case 'success':
        return FiCheckCircle;
      case 'warning':
        return FiAlertTriangle;
      case 'error':
        return FiAlertCircle;
      default:
        return FiInfo;
    }
  };

  const Icon = getIcon();

  const alertAnimation = {
    initial: { opacity: 0, y: -10, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`
          relative rounded-lg shadow-sm overflow-hidden
          ${variants[variant].container}
          ${sizes[size].container}
          ${className}
        `}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={alertAnimation}
        {...props}
      >
        <div className="flex gap-3">
          {Icon && (
            <div className={`flex-shrink-0 ${variants[variant].icon}`}>
              <Icon className={sizes[size].icon} />
            </div>
          )}

          <div className="flex-1 min-w-0">
            {title && (
              <h3 className={`
                font-medium
                ${sizes[size].title}
                ${variants[variant].title}
              `}>
                {title}
              </h3>
            )}

            {description && (
              <p className={`
                mt-1
                ${sizes[size].description}
                ${variants[variant].description}
              `}>
                {description}
              </p>
            )}

            {children && (
              <div className="mt-3">
                {children}
              </div>
            )}

            {action && (
              <div className="mt-4">
                <button
                  onClick={onAction}
                  className={`
                    inline-flex items-center gap-2
                    ${variant === 'filled'
                      ? 'text-white hover:text-white/90'
                      : type === 'info'
                      ? 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
                      : type === 'success'
                      ? 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300'
                      : type === 'warning'
                      ? 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300'
                      : type === 'error'
                      ? 'text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300'
                      : 'text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }
                    ${sizes[size].description}
                    font-medium
                    focus:outline-none
                    focus:underline
                  `}
                >
                  {action}
                  {ActionIcon && <ActionIcon className={sizes[size].icon} />}
                </button>
              </div>
            )}
          </div>

          {dismissible && (
            <button
              onClick={onClose}
              className={`
                flex-shrink-0 -mt-1 -mr-1 p-1
                rounded-full
                transition-colors
                ${variant === 'filled'
                  ? 'hover:bg-white/10'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'}
              `}
            >
              <span className="sr-only">Dismiss</span>
              <FiX className={sizes[size].icon} />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  title: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.elementType,
  action: PropTypes.string,
  actionIcon: PropTypes.elementType,
  onAction: PropTypes.func,
  onClose: PropTypes.func,
  dismissible: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Alert; 