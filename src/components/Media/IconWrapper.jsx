import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

// Enhanced variants with more sophisticated hover effects
const variants = {
  default: {
    container: 'bg-transparent',
    icon: 'text-gray-600 dark:text-gray-400',
    hover: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    active: 'bg-gray-200 dark:bg-gray-700',
  },
  primary: {
    container: 'bg-primary-50 dark:bg-primary-900/10',
    icon: 'text-primary-600 dark:text-primary-400',
    hover: 'hover:bg-primary-100 dark:hover:bg-primary-900/20',
    active: 'bg-primary-200 dark:bg-primary-900/30',
  },
  secondary: {
    container: 'bg-secondary-50 dark:bg-secondary-900/10',
    icon: 'text-secondary-600 dark:text-secondary-400',
    hover: 'hover:bg-secondary-100 dark:hover:bg-secondary-900/20',
    active: 'bg-secondary-200 dark:bg-secondary-900/30',
  },
  success: {
    container: 'bg-green-50 dark:bg-green-900/10',
    icon: 'text-green-600 dark:text-green-400',
    hover: 'hover:bg-green-100 dark:hover:bg-green-900/20',
    active: 'bg-green-200 dark:bg-green-900/30',
  },
  warning: {
    container: 'bg-yellow-50 dark:bg-yellow-900/10',
    icon: 'text-yellow-600 dark:text-yellow-400',
    hover: 'hover:bg-yellow-100 dark:hover:bg-yellow-900/20',
    active: 'bg-yellow-200 dark:bg-yellow-900/30',
  },
  error: {
    container: 'bg-red-50 dark:bg-red-900/10',
    icon: 'text-red-600 dark:text-red-400',
    hover: 'hover:bg-red-100 dark:hover:bg-red-900/20',
    active: 'bg-red-200 dark:bg-red-900/30',
  },
  info: {
    container: 'bg-blue-50 dark:bg-blue-900/10',
    icon: 'text-blue-600 dark:text-blue-400',
    hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/20',
    active: 'bg-blue-200 dark:bg-blue-900/30',
  },
};

// Enhanced sizes with more options
const sizes = {
  '2xs': 'p-0.5',
  xs: 'p-1',
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
  xl: 'p-5',
  '2xl': 'p-6',
};

const iconSizes = {
  '2xs': 'w-2 h-2',
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-7 h-7',
  '2xl': 'w-8 h-8',
};

// Enhanced animations
const animations = {
  pulse: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  spin: {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  },
  bounce: {
    initial: { y: 0 },
    animate: {
      y: [-2, 2, -2],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  shake: {
    initial: { x: 0 },
    animate: {
      x: [-2, 2, -2, 2, -1, 1, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  },
  wave: {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  float: {
    initial: { y: 0 },
    animate: {
      y: [-4, 4],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  },
  glitch: {
    initial: { x: 0, y: 0, opacity: 1 },
    animate: {
      x: [0, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 1, -1, 0],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  }
};

const IconWrapper = ({
  icon: Icon,
  variant = 'default',
  size = 'md',
  rounded = 'md',
  className = '',
  animate = true,
  animation = 'none',
  tooltip,
  tooltipPlacement = 'top',
  tooltipDelay = 0.2,
  badge,
  loading = false,
  disabled = false,
  active = false,
  shadow = false,
  border = false,
  glassmorphism = false,
  gradient = false,
  onClick,
  onDoubleClick,
  onMouseEnter,
  onMouseLeave,
  onLongPress,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const containerVariants = {
    initial: { 
      scale: 1,
      opacity: 1,
      boxShadow: shadow ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
    },
    hover: { 
      scale: animate ? 1.05 : 1,
      boxShadow: shadow ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none'
    },
    tap: { 
      scale: animate ? 0.95 : 1,
      boxShadow: 'none'
    },
    disabled: { 
      opacity: 0.5,
      scale: 1,
      boxShadow: 'none'
    },
  };

  const getAnimationVariant = () => {
    return animations[animation] || {};
  };

  const getTooltipPosition = () => {
    switch (tooltipPlacement) {
      case 'top':
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
      case 'bottom':
        return 'top-full left-1/2 -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2 ml-2';
      default:
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    }
  };

  const handleMouseDown = () => {
    setIsPressed(true);
    if (onLongPress) {
      const timer = setTimeout(() => {
        onLongPress();
      }, 500);
      return () => clearTimeout(timer);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const getGradientClass = () => {
    if (!gradient) return '';
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-primary-400 to-primary-600';
      case 'secondary':
        return 'bg-gradient-to-r from-secondary-400 to-secondary-600';
      case 'success':
        return 'bg-gradient-to-r from-green-400 to-green-600';
      case 'warning':
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600';
      case 'error':
        return 'bg-gradient-to-r from-red-400 to-red-600';
      case 'info':
        return 'bg-gradient-to-r from-blue-400 to-blue-600';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-600';
    }
  };

  return (
    <motion.div
      className={`
        relative inline-flex items-center justify-center
        ${gradient ? getGradientClass() : variants[variant].container}
        ${!gradient && variants[variant].hover}
        ${sizes[size]}
        ${rounded === 'full' ? 'rounded-full' : `rounded-${rounded}`}
        ${onClick && !disabled ? 'cursor-pointer' : ''}
        ${active ? `ring-2 ring-offset-2 ring-${variant}-500` : ''}
        ${shadow ? 'shadow-lg hover:shadow-xl' : ''}
        ${border ? 'border border-gray-200 dark:border-gray-700' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${glassmorphism ? 'backdrop-blur-md bg-opacity-20' : ''}
        transition-all duration-200
        ${className}
      `}
      variants={containerVariants}
      initial="initial"
      animate={disabled ? "disabled" : isPressed ? "tap" : isHovered ? "hover" : "initial"}
      whileHover={disabled ? "disabled" : "hover"}
      whileTap={disabled ? "disabled" : "tap"}
      onClick={disabled ? undefined : onClick}
      onDoubleClick={disabled ? undefined : onDoubleClick}
      onMouseEnter={(e) => {
        setIsHovered(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        onMouseLeave?.(e);
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      {...props}
    >
      <motion.div
        className={`${variants[variant].icon} ${iconSizes[size]} relative`}
        variants={getAnimationVariant()}
        animate={animation !== 'none' ? "animate" : undefined}
      >
        {Icon && <Icon className="w-full h-full" />}

        {/* Loading spinner */}
        {loading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-3/4 h-3/4 border-2 border-current border-t-transparent rounded-full" />
          </motion.div>
        )}

        {/* Enhanced badge with animations */}
        {badge && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className={`
              absolute -top-1 -right-1 min-w-[1.25rem] h-5 
              flex items-center justify-center
              ${typeof badge === 'number' ? 'px-1' : 'px-2'}
              text-xs font-medium text-white
              bg-red-500 rounded-full shadow-lg
              ${badge > 99 ? 'px-2' : ''}
            `}
          >
            {badge > 99 ? '99+' : badge}
          </motion.div>
        )}

        {/* Enhanced tooltip with animations */}
        <AnimatePresence>
          {tooltip && isHovered && (
            <motion.div
              initial={{ opacity: 0, y: tooltipPlacement === 'top' ? 10 : tooltipPlacement === 'bottom' ? -10 : 0, x: tooltipPlacement === 'left' ? 10 : tooltipPlacement === 'right' ? -10 : 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, delay: tooltipDelay }}
              className={`
                absolute ${getTooltipPosition()}
                px-2 py-1 text-xs font-medium text-white
                bg-gray-900 dark:bg-gray-800
                rounded shadow-lg backdrop-blur-sm
                whitespace-nowrap pointer-events-none
                z-50
              `}
            >
              {tooltip}
              <motion.div
                className={`
                  absolute ${tooltipPlacement === 'top' ? 'top-full' : tooltipPlacement === 'bottom' ? 'bottom-full' : tooltipPlacement === 'left' ? 'left-full' : 'right-full'}
                  left-1/2 -translate-x-1/2
                  ${tooltipPlacement === 'top' ? '-mt-1' : tooltipPlacement === 'bottom' ? '-mb-1' : ''}
                `}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <div className={`
                  border-4 border-transparent
                  ${tooltipPlacement === 'top' ? 'border-t-gray-900 dark:border-t-gray-800' : 
                    tooltipPlacement === 'bottom' ? 'border-b-gray-900 dark:border-b-gray-800' :
                    tooltipPlacement === 'left' ? 'border-l-gray-900 dark:border-l-gray-800' :
                    'border-r-gray-900 dark:border-r-gray-800'}
                `} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default IconWrapper; 