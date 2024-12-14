import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiMinus, FiCircle, FiHash, FiStar, FiHeart, FiArrowRight, FiArrowLeft, FiMoreHorizontal, FiMoreVertical, FiDivideCircle } from 'react-icons/fi';

const Divider = ({
  variant = 'horizontal',
  type = 'solid',
  color = 'gray',
  thickness = 1,
  spacing = 'medium',
  withLabel = false,
  label = '',
  withIcon = false,
  icon: CustomIcon,
  animated = true,
  withDots = false,
  withArrows = false,
  withGradient = false,
  className = '',
  ...props
}) => {
  const colors = {
    gray: {
      bg: 'bg-gray-200 dark:bg-gray-700',
      text: 'text-gray-600 dark:text-gray-300',
      gradient: 'from-gray-200 via-gray-400 to-gray-200 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700'
    },
    primary: {
      bg: 'bg-primary-500',
      text: 'text-primary-600',
      gradient: 'from-primary-200 via-primary-500 to-primary-200'
    },
    secondary: {
      bg: 'bg-secondary-500',
      text: 'text-secondary-600',
      gradient: 'from-secondary-200 via-secondary-500 to-secondary-200'
    },
    success: {
      bg: 'bg-green-500',
      text: 'text-green-600',
      gradient: 'from-green-200 via-green-500 to-green-200'
    },
    warning: {
      bg: 'bg-yellow-500',
      text: 'text-yellow-600',
      gradient: 'from-yellow-200 via-yellow-500 to-yellow-200'
    },
    error: {
      bg: 'bg-red-500',
      text: 'text-red-600',
      gradient: 'from-red-200 via-red-500 to-red-200'
    }
  };

  const types = {
    solid: '',
    dashed: 'border-dashed',
    dotted: 'border-dotted',
    double: 'border-double',
  };

  const spacings = {
    small: 'my-2',
    medium: 'my-4',
    large: 'my-6',
  };

  const lineVariants = {
    initial: { scaleX: 0, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    hover: { scaleX: 1.02, transition: { duration: 0.2 } }
  };

  const verticalLineVariants = {
    initial: { scaleY: 0, opacity: 0 },
    animate: { scaleY: 1, opacity: 1 },
    hover: { scaleY: 1.02, transition: { duration: 0.2 } }
  };

  const labelVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { y: -2, transition: { duration: 0.2 } }
  };

  const iconVariants = {
    initial: { rotate: -90, opacity: 0, scale: 0.8 },
    animate: { rotate: 0, opacity: 1, scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  const renderIcon = () => {
    if (!withIcon) return null;
    const IconComponent = CustomIcon || FiMinus;
    return (
      <motion.div
        variants={iconVariants}
        whileHover="hover"
        className="mx-2"
      >
        <IconComponent className={`w-4 h-4 ${colors[color].text}`} />
      </motion.div>
    );
  };

  const renderDots = () => {
    if (!withDots) return null;
    return (
      <div className="flex items-center space-x-1 mx-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`w-1.5 h-1.5 rounded-full ${colors[color].bg}`}
          />
        ))}
      </div>
    );
  };

  const renderArrows = () => {
    if (!withArrows) return null;
    return (
      <div className="flex items-center space-x-2 mx-2">
        <motion.div
          whileHover={{ x: -2 }}
          className={colors[color].text}
        >
          <FiArrowLeft className="w-4 h-4" />
        </motion.div>
        <motion.div
          whileHover={{ x: 2 }}
          className={colors[color].text}
        >
          <FiArrowRight className="w-4 h-4" />
        </motion.div>
      </div>
    );
  };

  if (variant === 'vertical') {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ duration: 0.5 }}
        className={`inline-block h-full mx-2 ${className}`}
        {...props}
      >
        <motion.div
          variants={verticalLineVariants}
          className={`
            h-full w-px
            ${withGradient ? `bg-gradient-to-b ${colors[color].gradient}` : colors[color].bg}
            ${types[type]}
            ${animated ? 'transform origin-top' : ''}
          `}
        />
      </motion.div>
    );
  }

  if (withLabel || withIcon || withDots || withArrows) {
    return (
      <div className={`flex items-center ${spacings[spacing]} ${className}`} {...props}>
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.5 }}
          variants={lineVariants}
          className={`
            flex-1 h-px
            ${withGradient ? `bg-gradient-to-r ${colors[color].gradient}` : colors[color].bg}
            ${types[type]}
            ${animated ? 'transform origin-left' : ''}
          `}
        />
        {withDots && renderDots()}
        {withArrows && renderArrows()}
        {withIcon && renderIcon()}
        {withLabel && (
          <motion.span
            variants={labelVariants}
            whileHover="hover"
            className={`mx-4 text-sm whitespace-nowrap ${colors[color].text}`}
          >
            {label}
          </motion.span>
        )}
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{ duration: 0.5 }}
          variants={lineVariants}
          className={`
            flex-1 h-px
            ${withGradient ? `bg-gradient-to-r ${colors[color].gradient}` : colors[color].bg}
            ${types[type]}
            ${animated ? 'transform origin-right' : ''}
          `}
        />
      </div>
    );
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      transition={{ duration: 0.5 }}
      className={`${spacings[spacing]} ${className}`}
      {...props}
    >
      <motion.div
        variants={lineVariants}
        className={`
          w-full h-px
          ${withGradient ? `bg-gradient-to-r ${colors[color].gradient}` : colors[color].bg}
          ${types[type]}
          ${animated ? 'transform origin-left' : ''}
        `}
      />
    </motion.div>
  );
};

Divider.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  type: PropTypes.oneOf(['solid', 'dashed', 'dotted', 'double']),
  color: PropTypes.oneOf(['gray', 'primary', 'secondary', 'success', 'warning', 'error']),
  thickness: PropTypes.number,
  spacing: PropTypes.oneOf(['small', 'medium', 'large']),
  withLabel: PropTypes.bool,
  label: PropTypes.string,
  withIcon: PropTypes.bool,
  icon: PropTypes.elementType,
  animated: PropTypes.bool,
  withDots: PropTypes.bool,
  withArrows: PropTypes.bool,
  withGradient: PropTypes.bool,
  className: PropTypes.string,
};

export default Divider; 