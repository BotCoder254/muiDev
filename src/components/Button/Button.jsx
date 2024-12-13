import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  PlusIcon,
  MinusIcon,
  TrashIcon,
  PencilIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';

/**
 * An enhanced button component with rich animations and features
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon = false,
  loading = false,
  iconPosition = 'right',
  iconType = 'arrow',
  fullWidth = false,
  rounded = false,
  elevated = false,
  animated = true,
  ripple = true,
  group = false,
  groupPosition,
  active = false,
  ...props 
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-60 disabled:cursor-not-allowed
    ${rounded ? 'rounded-full' : 'rounded-lg'}
    ${elevated ? 'shadow-md hover:shadow-lg' : ''}
    ${group ? 'focus:relative focus:z-10' : ''}
    ${groupPosition === 'left' ? 'rounded-r-none' : ''}
    ${groupPosition === 'middle' ? 'rounded-none border-l-0' : ''}
    ${groupPosition === 'right' ? 'rounded-l-none border-l-0' : ''}
  `;
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
    outline: 'border-2 border-current text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500',
    info: 'bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500',
    dark: 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500',
    light: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500',
    link: 'text-blue-600 hover:text-blue-700 hover:underline focus:ring-blue-500 shadow-none',
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
  };

  const sizes = {
    tiny: 'px-2 py-1 text-xs gap-1',
    small: 'px-3 py-1.5 text-sm gap-1.5',
    medium: 'px-4 py-2 text-base gap-2',
    large: 'px-6 py-3 text-lg gap-2.5',
    xl: 'px-8 py-4 text-xl gap-3',
  };

  const getIcon = () => {
    const iconClass = size === 'tiny' || size === 'small' ? 'w-4 h-4' : 'w-5 h-5';
    switch (iconType) {
      case 'arrow':
        return <ArrowRightIcon className={iconClass} />;
      case 'success':
        return <CheckCircleIcon className={iconClass} />;
      case 'warning':
        return <ExclamationCircleIcon className={iconClass} />;
      case 'info':
        return <InformationCircleIcon className={iconClass} />;
      case 'add':
        return <PlusIcon className={iconClass} />;
      case 'remove':
        return <MinusIcon className={iconClass} />;
      case 'delete':
        return <TrashIcon className={iconClass} />;
      case 'edit':
        return <PencilIcon className={iconClass} />;
      case 'chevron-down':
        return <ChevronDownIcon className={iconClass} />;
      case 'chevron-up':
        return <ChevronUpIcon className={iconClass} />;
      default:
        return null;
    }
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${active ? 'ring-2' : ''}
  `;

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && getIcon()}
      {loading ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
        />
      ) : (
        children
      )}
      {icon && iconPosition === 'right' && !loading && getIcon()}
    </>
  );

  const buttonVariants = {
    hover: {
      scale: animated ? 1.02 : 1,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: animated ? 0.98 : 1,
      transition: { duration: 0.1 },
    },
  };

  const RippleEffect = () => {
    if (!ripple) return null;
    return (
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        <span className="absolute inset-0 rounded-lg bg-current opacity-0 pointer-events-none group-hover:animate-ripple" />
      </span>
    );
  };

  return (
    <motion.button
      className={`${classes} relative group`}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      {...props}
    >
      {buttonContent}
      <RippleEffect />
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary', 'secondary', 'outline', 'danger', 'success',
    'warning', 'info', 'dark', 'light', 'link', 'ghost'
  ]),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'xl']),
  icon: PropTypes.bool,
  loading: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  iconType: PropTypes.oneOf([
    'arrow', 'success', 'warning', 'info', 'add',
    'remove', 'delete', 'edit', 'chevron-down', 'chevron-up'
  ]),
  fullWidth: PropTypes.bool,
  rounded: PropTypes.bool,
  elevated: PropTypes.bool,
  animated: PropTypes.bool,
  ripple: PropTypes.bool,
  group: PropTypes.bool,
  groupPosition: PropTypes.oneOf(['left', 'middle', 'right']),
  active: PropTypes.bool,
};

export default Button; 