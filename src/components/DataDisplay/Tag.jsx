import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX,
  FiCheck,
  FiAlertCircle,
  FiInfo,
  FiStar,
  FiHeart,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiAward,
  FiFlag
} from 'react-icons/fi';

const Tag = ({
  label,
  variant = 'default',
  color = 'gray',
  size = 'medium',
  icon: CustomIcon,
  closable = false,
  onClose,
  clickable = false,
  onClick,
  status,
  animated = true,
  withGlow = false,
  withPulse = false,
  withGradient = false,
  withBadge = false,
  badgeContent,
  className = '',
  ...props
}) => {
  const colors = {
    gray: {
      bg: 'bg-gray-100 dark:bg-gray-800',
      text: 'text-gray-700 dark:text-gray-300',
      border: 'border-gray-200 dark:border-gray-700',
      hover: 'hover:bg-gray-200 dark:hover:bg-gray-700',
      gradient: 'from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600',
      glow: 'shadow-gray-300 dark:shadow-gray-700',
    },
    primary: {
      bg: 'bg-primary-100 dark:bg-primary-900',
      text: 'text-primary-700 dark:text-primary-300',
      border: 'border-primary-200 dark:border-primary-800',
      hover: 'hover:bg-primary-200 dark:hover:bg-primary-800',
      gradient: 'from-primary-100 to-primary-300 dark:from-primary-900 dark:to-primary-700',
      glow: 'shadow-primary-300 dark:shadow-primary-700',
    },
    secondary: {
      bg: 'bg-secondary-100 dark:bg-secondary-900',
      text: 'text-secondary-700 dark:text-secondary-300',
      border: 'border-secondary-200 dark:border-secondary-800',
      hover: 'hover:bg-secondary-200 dark:hover:bg-secondary-800',
      gradient: 'from-secondary-100 to-secondary-300 dark:from-secondary-900 dark:to-secondary-700',
      glow: 'shadow-secondary-300 dark:shadow-secondary-700',
    },
    success: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-700 dark:text-green-300',
      border: 'border-green-200 dark:border-green-800',
      hover: 'hover:bg-green-200 dark:hover:bg-green-800',
      gradient: 'from-green-100 to-green-300 dark:from-green-900 dark:to-green-700',
      glow: 'shadow-green-300 dark:shadow-green-700',
    },
    warning: {
      bg: 'bg-yellow-100 dark:bg-yellow-900',
      text: 'text-yellow-700 dark:text-yellow-300',
      border: 'border-yellow-200 dark:border-yellow-800',
      hover: 'hover:bg-yellow-200 dark:hover:bg-yellow-800',
      gradient: 'from-yellow-100 to-yellow-300 dark:from-yellow-900 dark:to-yellow-700',
      glow: 'shadow-yellow-300 dark:shadow-yellow-700',
    },
    error: {
      bg: 'bg-red-100 dark:bg-red-900',
      text: 'text-red-700 dark:text-red-300',
      border: 'border-red-200 dark:border-red-800',
      hover: 'hover:bg-red-200 dark:hover:bg-red-800',
      gradient: 'from-red-100 to-red-300 dark:from-red-900 dark:to-red-700',
      glow: 'shadow-red-300 dark:shadow-red-700',
    },
  };

  const variants = {
    default: 'border',
    solid: '',
    outlined: 'bg-transparent border-2',
    soft: 'border',
  };

  const sizes = {
    small: {
      padding: 'px-2 py-0.5',
      text: 'text-xs',
      icon: 'w-3 h-3',
      close: 'w-3 h-3',
      badge: 'w-4 h-4 text-[10px]',
    },
    medium: {
      padding: 'px-3 py-1',
      text: 'text-sm',
      icon: 'w-4 h-4',
      close: 'w-4 h-4',
      badge: 'w-5 h-5 text-xs',
    },
    large: {
      padding: 'px-4 py-1.5',
      text: 'text-base',
      icon: 'w-5 h-5',
      close: 'w-5 h-5',
      badge: 'w-6 h-6 text-sm',
    },
  };

  const statusIcons = {
    success: FiCheck,
    warning: FiAlertCircle,
    error: FiX,
    info: FiInfo,
    star: FiStar,
    heart: FiHeart,
    trending: FiTrendingUp,
    shield: FiShield,
    zap: FiZap,
    award: FiAward,
    flag: FiFlag,
  };

  const Icon = CustomIcon || (status && statusIcons[status]);

  const tagVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  const pulseAnimation = withPulse ? {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  } : {};

  const handleClick = (e) => {
    if (clickable && onClick) {
      onClick(e);
    }
  };

  return (
    <AnimatePresence>
      <motion.span
        initial={animated ? 'initial' : false}
        animate={animated ? 'animate' : false}
        exit="exit"
        whileHover={clickable ? 'hover' : false}
        whileTap={clickable ? 'tap' : false}
        variants={tagVariants}
        {...pulseAnimation}
        className={`
          inline-flex items-center gap-1.5 rounded-full
          ${variants[variant]}
          ${withGradient ? `bg-gradient-to-r ${colors[color].gradient}` : colors[color].bg}
          ${colors[color].text}
          ${colors[color].border}
          ${clickable ? `cursor-pointer ${colors[color].hover}` : ''}
          ${withGlow ? `shadow-lg ${colors[color].glow}` : ''}
          ${sizes[size].padding}
          ${sizes[size].text}
          transition-all duration-200
          ${className}
        `}
        onClick={handleClick}
        {...props}
      >
        {Icon && (
          <motion.span
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            className={`
              ${sizes[size].icon}
              ${status ? colors[color].text : ''}
            `}
          >
            <Icon />
          </motion.span>
        )}
        
        <span className="relative">
          {label}
          {withBadge && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`
                absolute -top-1 -right-2
                flex items-center justify-center
                ${sizes[size].badge}
                rounded-full
                bg-red-500 text-white
                font-bold
              `}
            >
              {badgeContent}
            </motion.span>
          )}
        </span>

        {closable && (
          <motion.button
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              onClose?.(e);
            }}
            className={`
              ml-1 rounded-full
              ${colors[color].hover}
              focus:outline-none
              focus:ring-2
              focus:ring-offset-1
              focus:ring-current
              transition-transform
            `}
          >
            <FiX className={sizes[size].close} />
          </motion.button>
        )}
      </motion.span>
    </AnimatePresence>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'solid', 'outlined', 'soft']),
  color: PropTypes.oneOf(['gray', 'primary', 'secondary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.elementType,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  status: PropTypes.oneOf(['success', 'warning', 'error', 'info', 'star', 'heart', 'trending', 'shield', 'zap', 'award', 'flag']),
  animated: PropTypes.bool,
  withGlow: PropTypes.bool,
  withPulse: PropTypes.bool,
  withGradient: PropTypes.bool,
  withBadge: PropTypes.bool,
  badgeContent: PropTypes.node,
  className: PropTypes.string,
};

export default Tag; 