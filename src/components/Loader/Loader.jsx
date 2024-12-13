import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * An enhanced loader component with rich animations and styles
 */
const Loader = ({
  variant = 'spinner',
  size = 'medium',
  color = 'primary',
  text,
  textPosition = 'bottom',
  speed = 'normal',
  fullWidth = false,
  overlay = false,
  blur = false,
  progress = 0,
  indeterminate = true,
  className,
  ...props
}) => {
  const sizes = {
    tiny: {
      container: 'w-4 h-4',
      text: 'text-xs',
      wrapper: 'gap-1',
      dot: 'w-1 h-1',
      bar: 'h-1',
      border: 'border-2',
    },
    small: {
      container: 'w-6 h-6',
      text: 'text-sm',
      wrapper: 'gap-2',
      dot: 'w-1.5 h-1.5',
      bar: 'h-1.5',
      border: 'border-2',
    },
    medium: {
      container: 'w-8 h-8',
      text: 'text-base',
      wrapper: 'gap-3',
      dot: 'w-2 h-2',
      bar: 'h-2',
      border: 'border-3',
    },
    large: {
      container: 'w-12 h-12',
      text: 'text-lg',
      wrapper: 'gap-4',
      dot: 'w-2.5 h-2.5',
      bar: 'h-2.5',
      border: 'border-4',
    },
    xl: {
      container: 'w-16 h-16',
      text: 'text-xl',
      wrapper: 'gap-5',
      dot: 'w-3 h-3',
      bar: 'h-3',
      border: 'border-4',
    },
  };

  const colors = {
    primary: 'text-blue-500',
    secondary: 'text-gray-500',
    success: 'text-green-500',
    danger: 'text-red-500',
    warning: 'text-yellow-500',
    info: 'text-cyan-500',
    light: 'text-gray-200',
    dark: 'text-gray-800',
    white: 'text-white',
  };

  const speeds = {
    slow: 2,
    normal: 1.2,
    fast: 0.8,
  };

  // Spinner variant
  const SpinnerVariant = () => (
    <motion.div
      className={`${sizes[size].container} ${sizes[size].border} border-current border-t-transparent rounded-full`}
      animate={{ rotate: 360 }}
      transition={{
        duration: speeds[speed],
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );

  // Dots variant
  const DotsVariant = () => (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${sizes[size].dot} rounded-full bg-current`}
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: speeds[speed],
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  // Pulse variant
  const PulseVariant = () => (
    <div className={`relative ${sizes[size].container}`}>
      <motion.div
        className="absolute inset-0 rounded-full bg-current"
        initial={{ opacity: 0.3, scale: 0.8 }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: speeds[speed],
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="absolute inset-0 rounded-full bg-current opacity-30" />
    </div>
  );

  // Progress variant
  const ProgressVariant = () => (
    <div className={`w-full ${sizes[size].bar} bg-gray-200 rounded-full overflow-hidden`}>
      {indeterminate ? (
        <motion.div
          className="h-full bg-current rounded-full"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: speeds[speed] * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ width: '30%' }}
        />
      ) : (
        <motion.div
          className="h-full bg-current rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      )}
    </div>
  );

  // Bounce variant
  const BounceVariant = () => (
    <div className="flex items-center justify-center space-x-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${sizes[size].dot} rounded-full bg-current`}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: speeds[speed],
            repeat: Infinity,
            delay: index * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );

  // Circular Progress variant
  const CircularVariant = () => (
    <div className={`relative ${sizes[size].container}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 50 50"
      >
        {/* Background circle */}
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          className="stroke-current opacity-20"
          strokeWidth="5"
        />
        {/* Progress circle */}
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          className="stroke-current"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0, rotate: -90 }}
          animate={{ 
            pathLength: indeterminate ? [0, 1, 0] : progress / 100,
            rotate: indeterminate ? 270 : -90 
          }}
          transition={indeterminate ? {
            pathLength: {
              duration: speeds[speed] * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: speeds[speed] * 2,
              repeat: Infinity,
              ease: "linear",
            }
          } : {
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{ 
            transformOrigin: "center",
          }}
        />
      </svg>
      {!indeterminate && progress > 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`${sizes[size].text} font-medium`}>
            {Math.round(progress)}%
          </span>
        </div>
      )}
    </div>
  );

  const getLoaderVariant = () => {
    switch (variant) {
      case 'dots':
        return <DotsVariant />;
      case 'pulse':
        return <PulseVariant />;
      case 'progress':
        return <ProgressVariant />;
      case 'bounce':
        return <BounceVariant />;
      case 'circular':
        return <CircularVariant />;
      default:
        return <SpinnerVariant />;
    }
  };

  const loader = getLoaderVariant();
  const containerClasses = `
    inline-flex
    ${textPosition === 'right' ? 'flex-row' : 'flex-col'}
    items-center
    justify-center
    ${sizes[size].wrapper}
    ${colors[color]}
    ${fullWidth ? 'w-full' : ''}
    ${className || ''}
  `;

  const content = (
    <div className={containerClasses} {...props}>
      {textPosition === 'top' && text && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${sizes[size].text} font-medium`}
        >
          {text}
        </motion.span>
      )}
      {loader}
      {textPosition === 'bottom' && text && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${sizes[size].text} font-medium`}
        >
          {text}
        </motion.span>
      )}
      {textPosition === 'right' && text && (
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className={`${sizes[size].text} font-medium`}
        >
          {text}
        </motion.span>
      )}
    </div>
  );

  if (overlay) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className={`absolute inset-0 bg-black/50 ${blur ? 'backdrop-blur-sm' : ''}`} />
        <div className="relative">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

Loader.propTypes = {
  variant: PropTypes.oneOf(['spinner', 'dots', 'pulse', 'progress', 'bounce', 'circular']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'xl']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white']),
  text: PropTypes.string,
  textPosition: PropTypes.oneOf(['top', 'bottom', 'right']),
  speed: PropTypes.oneOf(['slow', 'normal', 'fast']),
  fullWidth: PropTypes.bool,
  overlay: PropTypes.bool,
  blur: PropTypes.bool,
  progress: PropTypes.number,
  indeterminate: PropTypes.bool,
  className: PropTypes.string,
};

export default Loader; 