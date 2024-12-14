import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCheck,
  FiX,
  FiAlertCircle,
  FiClock,
  FiZap,
  FiActivity,
  FiLoader,
  FiRefreshCw,
} from 'react-icons/fi';

const ProgressBar = ({
  value = 0,
  max = 100,
  variant = 'primary',
  size = 'medium',
  showValue = true,
  showIcon = true,
  animated = true,
  striped = false,
  indeterminate = false,
  label,
  description,
  className = '',
  ...props
}) => {
  const normalizedValue = Math.min(Math.max(0, value), max);
  const percentage = (normalizedValue / max) * 100;

  const variants = {
    primary: {
      bar: 'bg-primary-500 dark:bg-primary-400',
      background: 'bg-primary-100 dark:bg-primary-900/30',
      text: 'text-primary-700 dark:text-primary-300',
    },
    success: {
      bar: 'bg-green-500 dark:bg-green-400',
      background: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-700 dark:text-green-300',
    },
    warning: {
      bar: 'bg-yellow-500 dark:bg-yellow-400',
      background: 'bg-yellow-100 dark:bg-yellow-900/30',
      text: 'text-yellow-700 dark:text-yellow-300',
    },
    error: {
      bar: 'bg-red-500 dark:bg-red-400',
      background: 'bg-red-100 dark:bg-red-900/30',
      text: 'text-red-700 dark:text-red-300',
    },
    info: {
      bar: 'bg-blue-500 dark:bg-blue-400',
      background: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-700 dark:text-blue-300',
    },
  };

  const sizes = {
    small: 'h-2',
    medium: 'h-3',
    large: 'h-4',
    xlarge: 'h-6',
  };

  const getIcon = () => {
    const iconProps = {
      className: `${size === 'small' ? 'w-4 h-4' : size === 'large' ? 'w-6 h-6' : 'w-5 h-5'} ${variants[variant].text}`,
    };

    if (indeterminate) return <FiLoader {...iconProps} className={`${iconProps.className} animate-spin`} />;
    if (percentage === 100) return <FiCheck {...iconProps} />;
    if (percentage >= 80) return <FiZap {...iconProps} />;
    if (percentage >= 50) return <FiActivity {...iconProps} />;
    if (percentage >= 30) return <FiClock {...iconProps} />;
    if (percentage < 30) return <FiAlertCircle {...iconProps} />;
    return null;
  };

  const barAnimation = {
    initial: { width: 0, opacity: 0 },
    animate: {
      width: `${percentage}%`,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const indeterminateAnimation = {
    initial: { x: '-100%' },
    animate: {
      x: '100%',
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  const stripedPattern = `
    repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 25px,
      transparent 25px,
      transparent 50px
    )
  `;

  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {(label || description) && (
        <div className="flex items-center justify-between">
          <div>
            {label && (
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
              </div>
            )}
            {description && (
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {description}
              </div>
            )}
          </div>
          {showValue && !indeterminate && (
            <div className={`text-sm font-medium ${variants[variant].text}`}>
              {percentage.toFixed(1)}%
            </div>
          )}
        </div>
      )}
      
      <div
        className={`
          relative overflow-hidden rounded-full
          ${variants[variant].background}
          ${sizes[size]}
        `}
      >
        <AnimatePresence>
          <motion.div
            variants={animated ? (indeterminate ? indeterminateAnimation : barAnimation) : undefined}
            initial="initial"
            animate="animate"
            className={`
              absolute inset-y-0 left-0 rounded-full
              ${variants[variant].bar}
              ${striped ? 'bg-gradient-to-r' : ''}
            `}
            style={{
              width: animated ? undefined : `${percentage}%`,
              backgroundImage: striped ? stripedPattern : undefined,
            }}
          />
        </AnimatePresence>
      </div>

      {showIcon && (
        <div className="flex items-center justify-end mt-1">
          {getIcon()}
        </div>
      )}
    </div>
  );
};

export default ProgressBar; 