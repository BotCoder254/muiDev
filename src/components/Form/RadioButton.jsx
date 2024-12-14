import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCircle, FiCheckCircle, FiAlertCircle, FiRadio } from 'react-icons/fi';

const RadioButton = ({
  checked = false,
  label,
  disabled = false,
  error = false,
  success = false,
  size = 'medium',
  variant = 'primary',
  animate = true,
  className = '',
  onChange,
  helperText,
  required = false,
  name,
  value,
  ...props
}) => {
  const variants = {
    primary: 'border-primary-500',
    secondary: 'border-gray-500',
    success: 'border-green-500',
    warning: 'border-yellow-500',
    error: 'border-red-500',
  };

  const dotColors = {
    primary: 'bg-primary-500',
    secondary: 'bg-gray-500',
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
  };

  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const dotSizes = {
    small: 'w-2 h-2',
    medium: 'w-2.5 h-2.5',
    large: 'w-3 h-3',
  };

  const labelSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const baseClasses = `
    relative
    rounded-full
    border-2
    transition-all
    duration-200
    ${error ? 'border-red-500' : success ? 'border-green-500' : 'border-gray-300 dark:border-gray-600'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${checked ? (error ? 'border-red-500' : success ? 'border-green-500' : variants[variant]) : ''}
    ${sizes[size]}
  `;

  const dotVariants = {
    unchecked: { 
      scale: 0, 
      opacity: 0,
      rotate: -180 
    },
    checked: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25
      }
    },
  };

  const containerVariants = {
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { 
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
  };

  const radio = (
    <div className="inline-flex items-center gap-2 group">
      <div className="relative">
        <input
          type="radio"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="sr-only"
          required={required}
          name={name}
          value={value}
          {...props}
        />
        <motion.div
          className={`${baseClasses} ${className} flex items-center justify-center overflow-hidden`}
          variants={animate ? containerVariants : {}}
          whileHover={!disabled && animate ? "hover" : undefined}
          whileTap={!disabled && animate ? "tap" : undefined}
        >
          {!checked && (
            <motion.div
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <FiRadio className="w-full h-full text-gray-400 p-0.5" />
            </motion.div>
          )}
          <motion.div
            className={`
              rounded-full
              ${dotSizes[size]}
              ${error ? 'bg-red-500' : success ? 'bg-green-500' : dotColors[variant]}
            `}
            initial="unchecked"
            animate={checked ? "checked" : "unchecked"}
            variants={dotVariants}
          />
        </motion.div>
      </div>
      {label && (
        <motion.label
          className={`
            ${labelSizes[size]}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            ${error ? 'text-red-500' : success ? 'text-green-500' : 'text-gray-700 dark:text-gray-200'}
            select-none
            flex
            items-center
            gap-2
          `}
          whileHover={!disabled && animate ? { x: 2 } : undefined}
        >
          {label}
          {required && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-red-500 inline-flex"
            >
              <FiAlertCircle className="w-4 h-4" />
            </motion.span>
          )}
          {success && !error && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-500 inline-flex"
            >
              <FiCheckCircle className="w-4 h-4" />
            </motion.span>
          )}
        </motion.label>
      )}
    </div>
  );

  return (
    <div className="space-y-1">
      {radio}
      <AnimatePresence>
        {helperText && (
          <motion.p
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`text-sm ${error ? 'text-red-500' : success ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'}`}
          >
            {helperText}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
  animate: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  helperText: PropTypes.node,
  required: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default RadioButton; 