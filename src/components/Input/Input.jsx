import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  UserIcon,
  LockClosedIcon,
  CreditCardIcon,
  PhoneIcon,
  CalendarIcon,
  LinkIcon,
  GlobeAltIcon,
  HashtagIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';

/**
 * An enhanced input component with rich features and animations
 */
const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  variant = 'default',
  size = 'medium',
  error,
  success,
  disabled,
  label,
  helperText,
  startIcon,
  endIcon,
  clearable = false,
  copyable = false,
  animated = true,
  rounded = false,
  fullWidth = true,
  required = false,
  maxLength,
  pattern,
  prefix,
  suffix,
  loading = false,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const baseClasses = `
    w-full transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-60 disabled:cursor-not-allowed
    ${rounded ? 'rounded-full' : 'rounded-lg'}
  `;
  
  const variants = {
    default: 'border border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    filled: 'border-0 bg-gray-100 focus:bg-white focus:ring-blue-500',
    outlined: 'border-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    underlined: 'border-0 border-b-2 border-gray-300 rounded-none focus:border-blue-500 focus:ring-0',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
    success: 'border-green-500 focus:border-green-500 focus:ring-green-500',
  };

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const labelSizes = {
    small: 'text-xs mb-1',
    medium: 'text-sm mb-1.5',
    large: 'text-base mb-2',
  };

  const getInputIcon = (iconType) => {
    const iconClass = 'w-5 h-5';
    switch (iconType) {
      case 'search':
        return <MagnifyingGlassIcon className={iconClass} />;
      case 'email':
        return <EnvelopeIcon className={iconClass} />;
      case 'user':
        return <UserIcon className={iconClass} />;
      case 'password':
        return <LockClosedIcon className={iconClass} />;
      case 'card':
        return <CreditCardIcon className={iconClass} />;
      case 'phone':
        return <PhoneIcon className={iconClass} />;
      case 'calendar':
        return <CalendarIcon className={iconClass} />;
      case 'link':
        return <LinkIcon className={iconClass} />;
      case 'globe':
        return <GlobeAltIcon className={iconClass} />;
      case 'hash':
        return <HashtagIcon className={iconClass} />;
      case 'chat':
        return <ChatBubbleLeftIcon className={iconClass} />;
      default:
        return null;
    }
  };

  const handleCopy = () => {
    if (value) {
      navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleClear = () => {
    if (onChange) {
      onChange({ target: { value: '' } });
    }
  };

  const classes = `
    ${baseClasses}
    ${variants[error ? 'error' : success ? 'success' : variant]}
    ${sizes[size]}
    ${disabled ? 'bg-gray-50' : 'bg-white'}
    ${startIcon || prefix ? 'pl-10' : ''}
    ${(endIcon || type === 'password' || clearable || copyable || suffix) ? 'pr-10' : ''}
    ${className || ''}
  `;

  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  const inputVariants = {
    focus: { scale: animated ? 1.01 : 1 },
    blur: { scale: 1 },
  };

  const labelVariants = {
    focus: { y: -4, scale: 0.95, color: '#3B82F6' },
    blur: { y: 0, scale: 1, color: '#6B7280' },
  };

  return (
    <div className={`relative ${fullWidth ? 'w-full' : 'inline-block'}`}>
      {label && (
        <motion.label
          initial="blur"
          animate={isFocused ? 'focus' : 'blur'}
          variants={labelVariants}
          className={`block font-medium text-gray-700 ${labelSizes[size]}`}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </motion.label>
      )}
      <div className="relative">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {getInputIcon(startIcon)}
          </div>
        )}
        {prefix && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            {prefix}
          </div>
        )}
        <motion.input
          type={inputType}
          className={classes}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled || loading}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          variants={inputVariants}
          animate={isFocused ? 'focus' : 'blur'}
          maxLength={maxLength}
          pattern={pattern}
          required={required}
          {...props}
        />
        <AnimatePresence>
          {(error || success || type === 'password' || clearable || copyable || endIcon || suffix || loading) && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-2">
              {loading && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full"
                />
              )}
              {error && <ExclamationCircleIcon className="w-5 h-5 text-red-500" />}
              {success && <CheckCircleIcon className="w-5 h-5 text-green-500" />}
              {suffix && (
                <span className="text-gray-500">{suffix}</span>
              )}
              {type === 'password' && !error && !success && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              )}
              {clearable && value && !error && !success && !loading && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              {copyable && !error && !success && !loading && (
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`focus:outline-none transition-colors ${isCopied ? 'text-green-500' : 'text-gray-400 hover:text-gray-500'}`}
                >
                  {isCopied ? (
                    <CheckCircleIcon className="w-5 h-5" />
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                  )}
                </button>
              )}
              {endIcon && !error && !success && !loading && getInputIcon(endIcon)}
            </div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {(error || helperText) && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-1 text-sm ${error ? 'text-red-500' : 'text-gray-500'}`}
          >
            {error || helperText}
          </motion.p>
        )}
      </AnimatePresence>
      {maxLength && (
        <div className="absolute right-0 -bottom-6 text-xs text-gray-500">
          {value?.length || 0}/{maxLength}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'filled', 'outlined', 'underlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  error: PropTypes.string,
  success: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  startIcon: PropTypes.oneOf(['search', 'email', 'user', 'password', 'card', 'phone', 'calendar', 'link', 'globe', 'hash', 'chat']),
  endIcon: PropTypes.oneOf(['search', 'email', 'user', 'password', 'card', 'phone', 'calendar', 'link', 'globe', 'hash', 'chat']),
  clearable: PropTypes.bool,
  copyable: PropTypes.bool,
  animated: PropTypes.bool,
  rounded: PropTypes.bool,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

export default Input; 