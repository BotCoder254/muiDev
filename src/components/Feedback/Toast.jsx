/**
 * @component Toast
 * @description A professional toast notification component with animations and rich features.
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX,
  FiInfo,
  FiCheckCircle,
  FiAlertTriangle,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi';

const Toast = ({
  id,
  type = 'default',
  title,
  description,
  duration = 5000,
  position = 'top-right',
  variant = 'default',
  icon: CustomIcon,
  action,
  actionIcon: ActionIcon,
  onAction,
  onClose,
  showProgress = true,
  pauseOnHover = true,
  dismissible = true,
  className = '',
  ...props
}) => {
  const timerRef = useRef(null);

  useEffect(() => {
    if (duration && onClose) {
      startTimer();
    }
    return () => clearTimer();
  }, [duration, onClose]);

  const startTimer = () => {
    clearTimer();
    timerRef.current = setTimeout(onClose, duration);
  };

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      clearTimer();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover && duration) {
      startTimer();
    }
  };

  const variants = {
    default: {
      container: 'bg-white dark:bg-gray-800 shadow-lg',
      icon: 'text-gray-400',
    },
    filled: {
      container: `
        ${type === 'info' ? 'bg-blue-500 text-white' :
          type === 'success' ? 'bg-green-500 text-white' :
          type === 'warning' ? 'bg-yellow-500 text-white' :
          type === 'error' ? 'bg-red-500 text-white' :
          type === 'loading' ? 'bg-purple-500 text-white' :
          'bg-gray-500 text-white'}
      `,
      icon: 'text-white',
    },
    minimal: {
      container: `
        ${type === 'info' ? 'bg-blue-50 text-blue-900 dark:bg-blue-900/10 dark:text-blue-100' :
          type === 'success' ? 'bg-green-50 text-green-900 dark:bg-green-900/10 dark:text-green-100' :
          type === 'warning' ? 'bg-yellow-50 text-yellow-900 dark:bg-yellow-900/10 dark:text-yellow-100' :
          type === 'error' ? 'bg-red-50 text-red-900 dark:bg-red-900/10 dark:text-red-100' :
          type === 'loading' ? 'bg-purple-50 text-purple-900 dark:bg-purple-900/10 dark:text-purple-100' :
          'bg-gray-50 text-gray-900 dark:bg-gray-900/10 dark:text-gray-100'}
      `,
      icon: `
        ${type === 'info' ? 'text-blue-500 dark:text-blue-400' :
          type === 'success' ? 'text-green-500 dark:text-green-400' :
          type === 'warning' ? 'text-yellow-500 dark:text-yellow-400' :
          type === 'error' ? 'text-red-500 dark:text-red-400' :
          type === 'loading' ? 'text-purple-500 dark:text-purple-400' :
          'text-gray-500 dark:text-gray-400'}
      `,
    },
  };

  const positions = {
    'top-left': 'top-0 left-0',
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-0 right-0',
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
      case 'loading':
        return FiLoader;
      default:
        return null;
    }
  };

  const Icon = getIcon();

  const toastAnimation = {
    initial: {
      opacity: 0,
      y: position.includes('top') ? -20 : 20,
      scale: 0.9,
    },
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
      scale: 0.9,
      x: 100,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`
          fixed ${positions[position]} m-4 max-w-sm w-full
          pointer-events-auto flex z-50 ${className}
        `}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={toastAnimation}
        {...props}
      >
        <div
          className={`
            w-full rounded-lg shadow-lg overflow-hidden
            ${variants[variant].container}
            ${pauseOnHover ? 'hover:shadow-xl transition-shadow duration-200' : ''}
          `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative p-4">
            <div className="flex items-start">
              {Icon && (
                <div className={`flex-shrink-0 ${variants[variant].icon}`}>
                  {type === 'loading' ? (
                    <Icon className="w-5 h-5 animate-spin" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
              )}
              <div className="ml-3 w-0 flex-1">
                {title && (
                  <p className="text-sm font-medium">
                    {title}
                  </p>
                )}
                {description && (
                  <p className="mt-1 text-sm opacity-90">
                    {description}
                  </p>
                )}
                {action && (
                  <div className="mt-3 flex gap-3">
                    <button
                      onClick={onAction}
                      className={`
                        inline-flex items-center px-3 py-2 border border-transparent
                        text-sm leading-4 font-medium rounded-md shadow-sm
                        ${variant === 'filled'
                          ? 'bg-white/20 hover:bg-white/30'
                          : 'bg-primary-500 text-white hover:bg-primary-600'
                        }
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-primary-500 transition-colors duration-200
                      `}
                    >
                      {ActionIcon && <ActionIcon className="mr-2 -ml-1 w-4 h-4" />}
                      {action}
                    </button>
                  </div>
                )}
              </div>
              {dismissible && (
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    className={`
                      rounded-md inline-flex text-gray-400
                      hover:text-gray-500 focus:outline-none
                      ${variant === 'filled' ? 'text-white/80 hover:text-white' : ''}
                    `}
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <FiX className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
          {showProgress && duration && (
            <motion.div
              className={`
                h-1 origin-left
                ${variant === 'filled'
                  ? 'bg-white/20'
                  : type === 'info'
                  ? 'bg-blue-500'
                  : type === 'success'
                  ? 'bg-green-500'
                  : type === 'warning'
                  ? 'bg-yellow-500'
                  : type === 'error'
                  ? 'bg-red-500'
                  : type === 'loading'
                  ? 'bg-purple-500'
                  : 'bg-gray-500'
                }
              `}
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

Toast.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['default', 'info', 'success', 'warning', 'error', 'loading']),
  title: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ]),
  variant: PropTypes.oneOf(['default', 'filled', 'minimal']),
  icon: PropTypes.elementType,
  action: PropTypes.string,
  actionIcon: PropTypes.elementType,
  onAction: PropTypes.func,
  onClose: PropTypes.func,
  showProgress: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  dismissible: PropTypes.bool,
  className: PropTypes.string,
};

export default Toast; 