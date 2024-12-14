import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiChevronDown, 
  FiSearch, 
  FiCheck, 
  FiAlertCircle,
  FiX,
  FiList,
  FiFilter,
  FiCheckCircle,
  FiRefreshCw
} from 'react-icons/fi';

const Select = ({
  value,
  onChange,
  options = [],
  label,
  placeholder = 'Select an option',
  disabled = false,
  error = false,
  success = false,
  size = 'medium',
  variant = 'outlined',
  animate = true,
  className = '',
  helperText,
  required = false,
  multiple = false,
  searchable = false,
  clearable = false,
  loading = false,
  maxHeight = 250,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchable && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const sizes = {
    small: 'text-sm py-1.5',
    medium: 'text-base py-2',
    large: 'text-lg py-2.5',
  };

  const variants = {
    outlined: `
      border-2
      ${error
        ? 'border-red-500 focus:border-red-500'
        : success
        ? 'border-green-500 focus:border-green-500'
        : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-400'}
      bg-white
      dark:bg-gray-800
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

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (option) => {
    if (multiple) {
      const newValue = Array.isArray(value) ? value : [];
      const isSelected = newValue.some((item) => item.value === option.value);
      
      onChange(
        isSelected
          ? newValue.filter((item) => item.value !== option.value)
          : [...newValue, option]
      );
    } else {
      onChange(option);
      setIsOpen(false);
    }
    setSearchQuery('');
  };

  const handleClear = (e) => {
    e.stopPropagation();
    onChange(multiple ? [] : null);
    setSearchQuery('');
  };

  const baseClasses = `
    w-full
    rounded-lg
    transition-all
    duration-200
    ${sizes[size]}
    ${variants[variant]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    focus:outline-none
    focus:ring-2
    ${error
      ? 'focus:ring-red-500/20'
      : success
      ? 'focus:ring-green-500/20'
      : 'focus:ring-primary-500/20'}
    ${variant === 'filled' ? 'px-4' : 'px-3'}
  `;

  const renderValue = () => {
    if (!value) return placeholder;
    if (multiple) {
      return Array.isArray(value) && value.length > 0
        ? value.map((v) => v.label).join(', ')
        : placeholder;
    }
    return value.label;
  };

  const selectContent = (
    <div className="relative" ref={containerRef}>
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
          <FiList className="w-4 h-4" />
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
      <div
        className={`relative ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <motion.div
          className={`${baseClasses} ${className} flex items-center justify-between`}
          whileHover={!disabled ? { scale: 1.01 } : undefined}
          whileTap={!disabled ? { scale: 0.99 } : undefined}
        >
          <span className={!value ? 'text-gray-400 dark:text-gray-500' : ''}>
            {renderValue()}
          </span>
          <div className="flex items-center gap-2">
            {loading && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <FiRefreshCw className="w-4 h-4 text-gray-400" />
              </motion.div>
            )}
            {clearable && value && !disabled && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                onClick={handleClear}
              >
                <FiX className="w-4 h-4 text-gray-400" />
              </motion.button>
            )}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
            >
              <FiChevronDown className={`w-5 h-5 ${error ? 'text-red-500' : success ? 'text-green-500' : 'text-gray-400'}`} />
            </motion.div>
          </div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scaleY: 0.95 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -10, scaleY: 0.95 }}
              transition={{ duration: 0.2, type: "spring", stiffness: 500 }}
              className={`
                absolute
                z-50
                w-full
                mt-2
                bg-white
                dark:bg-gray-800
                rounded-lg
                shadow-lg
                border
                border-gray-200
                dark:border-gray-700
                overflow-hidden
              `}
              style={{ maxHeight }}
            >
              {searchable && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-2 border-b border-gray-200 dark:border-gray-700"
                >
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Search options..."
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </motion.div>
              )}
              <div className="overflow-y-auto" style={{ maxHeight: searchable ? maxHeight - 60 : maxHeight }}>
                {loading ? (
                  <div className="p-4 text-center text-gray-500 flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <FiRefreshCw className="w-5 h-5" />
                    </motion.div>
                    Loading...
                  </div>
                ) : filteredOptions.length === 0 ? (
                  <div className="p-4 text-center text-gray-500 flex items-center justify-center gap-2">
                    <FiFilter className="w-5 h-5" />
                    No options found
                  </div>
                ) : (
                  filteredOptions.map((option) => {
                    const isSelected = multiple
                      ? Array.isArray(value) && value.some((item) => item.value === option.value)
                      : value?.value === option.value;

                    return (
                      <motion.div
                        key={option.value}
                        className={`
                          px-4
                          py-2
                          cursor-pointer
                          flex
                          items-center
                          justify-between
                          ${isSelected ? 'bg-primary-50 dark:bg-primary-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}
                        `}
                        onClick={() => handleSelect(option)}
                        whileHover={{ x: 4, backgroundColor: isSelected ? undefined : 'rgba(0,0,0,0.05)' }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className={isSelected ? 'text-primary-600 dark:text-primary-400 font-medium' : ''}>
                          {option.label}
                        </span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500 }}
                          >
                            <FiCheck className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {helperText && (
          <motion.p
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`mt-1.5 text-sm ${error ? 'text-red-500' : success ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'}`}
          >
            {helperText}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

  return animate ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {selectContent}
    </motion.div>
  ) : (
    selectContent
  );
};

Select.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  ]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['outlined', 'filled']),
  animate: PropTypes.bool,
  className: PropTypes.string,
  helperText: PropTypes.node,
  required: PropTypes.bool,
  multiple: PropTypes.bool,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  loading: PropTypes.bool,
  maxHeight: PropTypes.number,
};

export default Select; 