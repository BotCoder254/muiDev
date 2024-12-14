import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAlertCircle, FiCheck, FiMaximize2, FiMinimize2, FiType, FiEye, FiEyeOff } from 'react-icons/fi';

const Textarea = ({
  value,
  onChange,
  label,
  placeholder = '',
  disabled = false,
  error = false,
  success = false,
  rows = 4,
  maxLength,
  showCount = false,
  size = 'medium',
  variant = 'outlined',
  animate = true,
  className = '',
  helperText,
  required = false,
  autoResize = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [height, setHeight] = useState('auto');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    if (autoResize && value) {
      const textarea = document.createElement('textarea');
      textarea.style.position = 'absolute';
      textarea.style.visibility = 'hidden';
      textarea.style.width = '100%';
      textarea.style.padding = '1rem';
      textarea.value = value;
      document.body.appendChild(textarea);
      const newHeight = textarea.scrollHeight;
      document.body.removeChild(textarea);
      setHeight(`${newHeight}px`);
    }
  }, [value, autoResize]);

  const sizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const variants = {
    outlined: `
      border-2
      ${error
        ? 'border-red-500 focus:border-red-500'
        : success
        ? 'border-green-500 focus:border-green-500'
        : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-400'}
    `,
    filled: `
      border-0
      ${error
        ? 'bg-red-50 dark:bg-red-900/20'
        : success
        ? 'bg-green-50 dark:bg-green-900/20'
        : 'bg-gray-100 dark:bg-gray-800'}
    `,
  };

  const handleResize = (e) => {
    if (autoResize) {
      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const baseClasses = `
    w-full
    rounded-lg
    transition-all
    duration-200
    ${sizes[size]}
    ${variants[variant]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    focus:outline-none
    focus:ring-2
    ${error
      ? 'focus:ring-red-500/20'
      : success
      ? 'focus:ring-green-500/20'
      : 'focus:ring-primary-500/20'}
    placeholder:text-gray-400
    dark:placeholder:text-gray-500
    ${variant === 'filled' ? 'px-4 py-3' : 'p-3'}
  `;

  const textareaContent = (
    <div className="relative">
      {label && (
        <motion.label
          className={`
            block
            mb-2
            ${sizes[size]}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            ${error ? 'text-red-500' : success ? 'text-green-500' : 'text-gray-700 dark:text-gray-200'}
            flex
            items-center
            gap-2
          `}
          initial={animate ? { y: -10, opacity: 0 } : false}
          animate={animate ? { y: 0, opacity: 1 } : false}
        >
          <FiType className="w-4 h-4" />
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
        </motion.label>
      )}
      <div className="relative">
        <motion.div
          className="relative"
          animate={isExpanded ? { height: 'auto', minHeight: '300px' } : { height: 'auto' }}
        >
          <motion.textarea
            value={value}
            onChange={(e) => {
              onChange(e);
              handleResize(e);
            }}
            disabled={disabled}
            placeholder={placeholder}
            rows={rows}
            maxLength={maxLength}
            className={`${baseClasses} ${className}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{ height: autoResize ? height : 'auto' }}
            {...props}
          />
          <motion.div
            className="absolute right-3 top-3 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {(error || success) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {error ? (
                  <FiAlertCircle className="w-5 h-5 text-red-500" />
                ) : (
                  <FiCheck className="w-5 h-5 text-green-500" />
                )}
              </motion.div>
            )}
            <motion.button
              type="button"
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              onClick={() => setIsPreview(!isPreview)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPreview ? (
                <FiEyeOff className="w-4 h-4 text-gray-500" />
              ) : (
                <FiEye className="w-4 h-4 text-gray-500" />
              )}
            </motion.button>
            <motion.button
              type="button"
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isExpanded ? (
                <FiMinimize2 className="w-4 h-4 text-gray-500" />
              ) : (
                <FiMaximize2 className="w-4 h-4 text-gray-500" />
              )}
            </motion.button>
          </motion.div>
        </motion.div>
        {isPreview && value && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`
              mt-2
              p-4
              rounded-lg
              bg-gray-50
              dark:bg-gray-800
              ${sizes[size]}
              prose
              dark:prose-invert
              max-w-none
            `}
          >
            {value}
          </motion.div>
        )}
      </div>
      <div className="flex justify-between mt-1.5">
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
        {showCount && maxLength && (
          <motion.div
            className={`text-sm flex items-center gap-1 ${
              value?.length >= maxLength ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
            }`}
            initial={animate ? { opacity: 0 } : false}
            animate={animate ? { opacity: 1 } : false}
          >
            <span>{value?.length || 0}</span>
            <span>/</span>
            <span>{maxLength}</span>
          </motion.div>
        )}
      </div>
    </div>
  );

  return animate ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {textareaContent}
    </motion.div>
  ) : (
    textareaContent
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  showCount: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['outlined', 'filled']),
  animate: PropTypes.bool,
  className: PropTypes.string,
  helperText: PropTypes.node,
  required: PropTypes.bool,
  autoResize: PropTypes.bool,
};

export default Textarea; 