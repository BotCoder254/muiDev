import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiMinus, FiSquare, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

const Checkbox = ({
  checked = false,
  indeterminate = false,
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
  ...props
}) => {
  const variants = {
    primary: 'border-primary-500 bg-primary-500',
    secondary: 'border-gray-500 bg-gray-500',
    success: 'border-green-500 bg-green-500',
    warning: 'border-yellow-500 bg-yellow-500',
    error: 'border-red-500 bg-red-500',
  };

  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const labelSizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const baseClasses = `
    relative
    rounded
    border-2
    transition-all
    duration-200
    ${error ? 'border-red-500' : success ? 'border-green-500' : 'border-gray-300 dark:border-gray-600'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${checked || indeterminate ? (error ? 'border-red-500 bg-red-500' : success ? 'border-green-500 bg-green-500' : variants[variant]) : 'bg-white dark:bg-gray-800'}
    ${sizes[size]}
  `;

  const checkboxVariants = {
    unchecked: { 
      scale: 0.8, 
      opacity: 0,
      rotate: -45 
    },
    checked: { 
      scale: 1, 
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
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

  const renderIcon = () => {
    if (!checked && !indeterminate) return <FiSquare className="text-gray-400 w-full h-full p-0.5" />;
    
    const iconClass = "text-white w-full h-full p-0.5";
    return indeterminate ? (
      <FiMinus className={iconClass} />
    ) : (
      <FiCheck className={iconClass} />
    );
  };

  const checkbox = (
    <div className="inline-flex items-center gap-2 group">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="sr-only"
          required={required}
          {...props}
        />
        <motion.div
          className={`${baseClasses} ${className} overflow-hidden`}
          variants={animate ? containerVariants : {}}
          whileHover={!disabled && animate ? "hover" : undefined}
          whileTap={!disabled && animate ? "tap" : undefined}
        >
          <motion.div
            initial="unchecked"
            animate={checked || indeterminate ? "checked" : "unchecked"}
            variants={checkboxVariants}
            transition={{ duration: 0.2 }}
            className="w-full h-full"
          >
            {renderIcon()}
          </motion.div>
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
      {checkbox}
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

Checkbox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
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
};

export default Checkbox; 