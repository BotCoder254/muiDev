/**
 * @component Form
 * @description A professional form component with validation, rich features, and multiple variants.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiX,
  FiUser,
  FiMail,
  FiLock,
  FiPhone,
  FiCalendar,
  FiDollarSign,
  FiMapPin,
  FiGlobe,
  FiCreditCard,
  FiFile,
  FiImage,
  FiSearch,
  FiLink,
  FiEye,
  FiEyeOff,
} from 'react-icons/fi';

const Form = ({
  children,
  onSubmit,
  variant = 'default',
  size = 'medium',
  color = 'primary',
  layout = 'vertical',
  disabled = false,
  loading = false,
  showLabels = true,
  showHelperText = true,
  showValidationIcons = true,
  className,
  ...props
}) => {
  const layouts = {
    vertical: 'space-y-4',
    horizontal: 'grid grid-cols-12 gap-6',
    inline: 'flex items-start space-x-4',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!disabled && !loading) {
      onSubmit?.(e);
    }
  };

  const formClasses = `
    ${layouts[layout]}
    ${className || ''}
  `;

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className={formClasses}
      noValidate
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        return React.cloneElement(child, {
          variant,
          size,
          color,
          disabled: disabled || child.props.disabled,
          showLabel: showLabels && child.props.showLabel !== false,
          showHelperText: showHelperText && child.props.showHelperText !== false,
          showValidationIcon: showValidationIcons && child.props.showValidationIcon !== false,
        });
      })}
    </motion.form>
  );
};

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  helperText,
  error,
  success,
  required,
  disabled,
  readOnly,
  autoFocus,
  autoComplete,
  variant = 'default',
  size = 'medium',
  color = 'primary',
  showLabel = true,
  showHelperText = true,
  showValidationIcon = true,
  icon,
  onChange,
  onBlur,
  onFocus,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isDirty, setIsDirty] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const sizes = {
    small: {
      text: 'text-sm',
      spacing: 'space-y-3',
      input: 'h-8',
      label: 'mb-1',
      helper: 'mt-1',
      icon: 'w-4 h-4',
      padding: 'px-3 py-1',
    },
    medium: {
      text: 'text-base',
      spacing: 'space-y-4',
      input: 'h-10',
      label: 'mb-1.5',
      helper: 'mt-1.5',
      icon: 'w-5 h-5',
      padding: 'px-4 py-2',
    },
    large: {
      text: 'text-lg',
      spacing: 'space-y-5',
      input: 'h-12',
      label: 'mb-2',
      helper: 'mt-2',
      icon: 'w-6 h-6',
      padding: 'px-5 py-2.5',
    },
  };

  const colors = {
    primary: {
      text: 'text-gray-900',
      label: 'text-gray-700',
      helper: 'text-gray-500',
      border: 'border-gray-300',
      hover: 'hover:border-blue-500',
      focus: 'focus:border-blue-500 focus:ring-blue-500',
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      success: 'border-green-500 focus:border-green-500 focus:ring-green-500',
      errorText: 'text-red-500',
      successText: 'text-green-500',
      disabled: 'bg-gray-100 text-gray-400 border-gray-200',
      icon: 'text-gray-400',
      iconHover: 'hover:text-gray-500',
      iconFocus: 'text-blue-500',
    },
    secondary: {
      text: 'text-gray-900',
      label: 'text-gray-700',
      helper: 'text-gray-500',
      border: 'border-gray-300',
      hover: 'hover:border-gray-400',
      focus: 'focus:border-gray-500 focus:ring-gray-500',
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
      success: 'border-green-500 focus:border-green-500 focus:ring-green-500',
      errorText: 'text-red-500',
      successText: 'text-green-500',
      disabled: 'bg-gray-100 text-gray-400 border-gray-200',
      icon: 'text-gray-400',
      iconHover: 'hover:text-gray-500',
      iconFocus: 'text-gray-500',
    },
    white: {
      text: 'text-white',
      label: 'text-gray-100',
      helper: 'text-gray-300',
      border: 'border-gray-600',
      hover: 'hover:border-gray-500',
      focus: 'focus:border-gray-400 focus:ring-gray-400',
      error: 'border-red-400 focus:border-red-400 focus:ring-red-400',
      success: 'border-green-400 focus:border-green-400 focus:ring-green-400',
      errorText: 'text-red-400',
      successText: 'text-green-400',
      disabled: 'bg-gray-800 text-gray-500 border-gray-700',
      icon: 'text-gray-500',
      iconHover: 'hover:text-gray-400',
      iconFocus: 'text-white',
    },
  };

  const variants = {
    default: {
      container: '',
      fieldset: 'space-y-1',
      input: 'rounded-md',
    },
    filled: {
      container: '',
      fieldset: 'space-y-1',
      input: 'rounded-md bg-gray-100 border-transparent',
    },
    outlined: {
      container: '',
      fieldset: 'space-y-1',
      input: 'rounded-md bg-transparent',
    },
    underlined: {
      container: '',
      fieldset: 'space-y-1',
      input: 'rounded-none border-t-0 border-x-0 px-0',
    },
  };

  const getInputIcon = () => {
    if (icon) return icon;
    switch (type) {
      case 'email':
        return FiMail;
      case 'password':
        return FiLock;
      case 'tel':
        return FiPhone;
      case 'date':
        return FiCalendar;
      case 'number':
        return FiDollarSign;
      case 'url':
        return FiLink;
      case 'search':
        return FiSearch;
      case 'file':
        return FiFile;
      default:
        return type === 'text' ? FiUser : null;
    }
  };

  const InputIcon = getInputIcon();

  const handleChange = (e) => {
    setIsDirty(true);
    onChange?.(e);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const fieldClasses = `
    block
    w-full
    ${sizes[size].input}
    ${sizes[size].text}
    ${variants[variant].input}
    ${colors[color].text}
    ${colors[color].border}
    ${!disabled && !error && !success && colors[color].hover}
    ${!disabled && !error && !success && colors[color].focus}
    ${error && colors[color].error}
    ${success && colors[color].success}
    ${disabled && colors[color].disabled}
    ${InputIcon ? 'pl-10' : ''}
    ${type === 'password' ? 'pr-10' : ''}
    border
    transition-all
    duration-200
    focus:outline-none focus:ring-2 focus:ring-opacity-50
    disabled:cursor-not-allowed
    ${className || ''}
  `;

  const ValidationIcon = () => {
    if (!showValidationIcon || (!error && !success)) return null;

    return (
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <FiAlertCircle className={`${sizes[size].icon} ${colors[color].errorText}`} />
            </motion.div>
          )}
          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <FiCheckCircle className={`${sizes[size].icon} ${colors[color].successText}`} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={variants[variant].fieldset}
    >
      {showLabel && label && (
        <motion.label
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          htmlFor={name}
          className={`
            block
            ${sizes[size].text}
            ${sizes[size].label}
            ${colors[color].label}
            font-medium
          `}
        >
          {label}
          {required && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className={colors[color].errorText}
            >
              *
            </motion.span>
          )}
        </motion.label>
      )}
      <div className="relative">
        {InputIcon && (
          <div className={`
            absolute
            inset-y-0
            left-0
            flex
            items-center
            pl-3
            pointer-events-none
            transition-colors
            duration-200
            ${isFocused ? colors[color].iconFocus : colors[color].icon}
          `}>
            <InputIcon className={sizes[size].icon} />
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          className={fieldClasses}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={`${name}-helper`}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-3
              transition-colors
              duration-200
              ${colors[color].icon}
              ${colors[color].iconHover}
            `}
          >
            {showPassword ? (
              <FiEyeOff className={sizes[size].icon} />
            ) : (
              <FiEye className={sizes[size].icon} />
            )}
          </button>
        )}
        <ValidationIcon />
      </div>
      {showHelperText && (helperText || error || success) && (
        <AnimatePresence mode="wait">
          <motion.p
            key={error || success || helperText}
            id={`${name}-helper`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`
              ${sizes[size].text}
              ${sizes[size].helper}
              ${error ? colors[color].errorText : success ? colors[color].successText : colors[color].helper}
            `}
          >
            {error || success || helperText}
          </motion.p>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

Form.Field = FormField;

Form.propTypes = {
  /** Form content */
  children: PropTypes.node,
  /** Submit handler */
  onSubmit: PropTypes.func,
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'filled', 'outlined', 'underlined']),
  /** Size preset */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color theme */
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  /** Layout style */
  layout: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
  /** Whether the form is disabled */
  disabled: PropTypes.bool,
  /** Whether the form is loading */
  loading: PropTypes.bool,
  /** Whether to show field labels */
  showLabels: PropTypes.bool,
  /** Whether to show helper text */
  showHelperText: PropTypes.bool,
  /** Whether to show validation icons */
  showValidationIcons: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

FormField.propTypes = {
  /** Field label */
  label: PropTypes.string,
  /** Field name */
  name: PropTypes.string.isRequired,
  /** Input type */
  type: PropTypes.string,
  /** Field value */
  value: PropTypes.any,
  /** Default value */
  defaultValue: PropTypes.any,
  /** Placeholder text */
  placeholder: PropTypes.string,
  /** Helper text */
  helperText: PropTypes.string,
  /** Error message */
  error: PropTypes.string,
  /** Success message */
  success: PropTypes.string,
  /** Whether the field is required */
  required: PropTypes.bool,
  /** Whether the field is disabled */
  disabled: PropTypes.bool,
  /** Whether the field is read-only */
  readOnly: PropTypes.bool,
  /** Whether the field should auto-focus */
  autoFocus: PropTypes.bool,
  /** Auto-complete value */
  autoComplete: PropTypes.string,
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'filled', 'outlined', 'underlined']),
  /** Size preset */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color theme */
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  /** Whether to show the label */
  showLabel: PropTypes.bool,
  /** Whether to show helper text */
  showHelperText: PropTypes.bool,
  /** Whether to show validation icon */
  showValidationIcon: PropTypes.bool,
  /** Custom icon component */
  icon: PropTypes.elementType,
  /** Change handler */
  onChange: PropTypes.func,
  /** Blur handler */
  onBlur: PropTypes.func,
  /** Focus handler */
  onFocus: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Form; 