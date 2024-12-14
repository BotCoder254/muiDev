import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX,
  FiCheck,
  FiAlertCircle,
  FiInfo,
  FiStar,
  FiTrendingUp,
  FiTrendingDown,
  FiBell,
  FiShield,
  FiClock,
  FiHeart,
  FiZap,
  FiAward,
} from 'react-icons/fi';

const Badge = ({
  children,
  variant = 'default',
  size = 'medium',
  rounded = 'medium',
  removable = false,
  icon,
  pulse = false,
  glow = false,
  outline = false,
  interactive = false,
  elevated = false,
  animated = false,
  className = '',
  onRemove,
  onClick,
  ...props
}) => {
  const variants = {
    default: {
      base: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100',
      outline: 'border-gray-500 text-gray-700 dark:text-gray-300',
    },
    primary: {
      base: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-100',
      outline: 'border-primary-500 text-primary-700 dark:text-primary-300',
    },
    success: {
      base: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-100',
      outline: 'border-green-500 text-green-700 dark:text-green-300',
    },
    warning: {
      base: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-100',
      outline: 'border-yellow-500 text-yellow-700 dark:text-yellow-300',
    },
    error: {
      base: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-100',
      outline: 'border-red-500 text-red-700 dark:text-red-300',
    },
    info: {
      base: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-100',
      outline: 'border-blue-500 text-blue-700 dark:text-blue-300',
    },
  };

  const sizes = {
    tiny: 'px-1.5 py-0.5 text-xs',
    small: 'px-2 py-1 text-sm',
    medium: 'px-2.5 py-1.5 text-base',
    large: 'px-3 py-2 text-lg',
  };

  const roundedVariants = {
    none: 'rounded-none',
    small: 'rounded',
    medium: 'rounded-lg',
    large: 'rounded-xl',
    full: 'rounded-full',
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const bounceAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-2, 2, -2],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const getIcon = () => {
    if (React.isValidElement(icon)) return icon;
    
    const iconProps = {
      className: `${size === 'tiny' ? 'w-3 h-3' : size === 'small' ? 'w-3.5 h-3.5' : size === 'large' ? 'w-5 h-5' : 'w-4 h-4'}`,
    };

    const iconMap = {
      success: <FiCheck {...iconProps} />,
      warning: <FiAlertCircle {...iconProps} />,
      error: <FiX {...iconProps} />,
      info: <FiInfo {...iconProps} />,
      notification: <FiBell {...iconProps} />,
      security: <FiShield {...iconProps} />,
      time: <FiClock {...iconProps} />,
      favorite: <FiHeart {...iconProps} />,
      power: <FiZap {...iconProps} />,
      award: <FiAward {...iconProps} />,
      default: <FiStar {...iconProps} />,
    };

    return iconMap[variant] || icon ? iconMap[icon] || iconMap.default : null;
  };

  return (
    <AnimatePresence>
      <motion.span
        variants={animated ? (pulse ? pulseAnimation : bounceAnimation) : undefined}
        initial="initial"
        animate="animate"
        whileHover={interactive ? { scale: 1.05 } : undefined}
        whileTap={interactive ? { scale: 0.95 } : undefined}
        onClick={interactive ? onClick : undefined}
        className={`
          inline-flex items-center gap-1.5 font-medium
          ${sizes[size]}
          ${roundedVariants[rounded]}
          ${outline
            ? `border-2 ${variants[variant].outline}`
            : variants[variant].base
          }
          ${glow ? `shadow-lg shadow-${variant}-500/50` : ''}
          ${elevated ? 'shadow-md hover:shadow-lg transition-shadow' : ''}
          ${interactive ? 'cursor-pointer' : ''}
          ${className}
        `}
        {...props}
      >
        {icon && getIcon()}
        {children}
        {removable && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className={`
              ml-1 hover:bg-black/10 rounded-full p-0.5
              ${size === 'tiny' ? 'ml-0.5' : size === 'large' ? 'ml-2' : 'ml-1'}
            `}
          >
            <FiX className={size === 'tiny' ? 'w-2.5 h-2.5' : size === 'small' ? 'w-3 h-3' : size === 'large' ? 'w-5 h-5' : 'w-4 h-4'} />
          </motion.button>
        )}
      </motion.span>
    </AnimatePresence>
  );
};

export default Badge; 