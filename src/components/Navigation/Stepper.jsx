import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiCheck,
  FiX,
  FiAlertCircle,
  FiLoader,
  FiChevronRight,
  FiStar,
  FiHeart,
  FiZap,
  FiAward,
  FiFlag,
  FiTrendingUp,
  FiShield,
  FiGift,
  FiCoffee,
  FiBookmark,
} from 'react-icons/fi';

const Stepper = ({
  steps = [],
  activeStep = 0,
  orientation = 'horizontal',
  variant = 'default',
  color = 'primary',
  size = 'medium',
  showLabels = true,
  showNumbers = true,
  animated = true,
  alternativeLabel = false,
  withConnectorAnimation = true,
  withGlow = false,
  withGradient = false,
  withPulse = false,
  withHoverEffect = true,
  className = '',
  onChange,
  ...props
}) => {
  const colors = {
    primary: {
      active: {
        bg: 'bg-primary-500',
        text: 'text-white',
        gradient: 'from-primary-400 to-primary-600',
        glow: 'shadow-primary-500/50',
      },
      completed: {
        bg: 'bg-primary-500',
        text: 'text-white',
        gradient: 'from-primary-400 to-primary-600',
        glow: 'shadow-primary-500/50',
      },
      pending: {
        bg: 'bg-gray-200 dark:bg-gray-700',
        text: 'text-gray-500 dark:text-gray-400',
        gradient: 'from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600',
        glow: 'shadow-gray-400/30',
      },
      connector: 'bg-primary-500',
      pendingConnector: 'bg-gray-200 dark:bg-gray-700',
      hover: 'hover:bg-primary-600',
      text: 'text-primary-500',
      pendingText: 'text-gray-500 dark:text-gray-400',
    },
    secondary: {
      active: {
        bg: 'bg-secondary-500',
        text: 'text-white',
        gradient: 'from-secondary-400 to-secondary-600',
        glow: 'shadow-secondary-500/50',
      },
      completed: {
        bg: 'bg-secondary-500',
        text: 'text-white',
        gradient: 'from-secondary-400 to-secondary-600',
        glow: 'shadow-secondary-500/50',
      },
      pending: {
        bg: 'bg-gray-200 dark:bg-gray-700',
        text: 'text-gray-500 dark:text-gray-400',
        gradient: 'from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600',
        glow: 'shadow-gray-400/30',
      },
      connector: 'bg-secondary-500',
      pendingConnector: 'bg-gray-200 dark:bg-gray-700',
      hover: 'hover:bg-secondary-600',
      text: 'text-secondary-500',
      pendingText: 'text-gray-500 dark:text-gray-400',
    },
    success: {
      active: {
        bg: 'bg-green-500',
        text: 'text-white',
        gradient: 'from-green-400 to-green-600',
        glow: 'shadow-green-500/50',
      },
      completed: {
        bg: 'bg-green-500',
        text: 'text-white',
        gradient: 'from-green-400 to-green-600',
        glow: 'shadow-green-500/50',
      },
      pending: {
        bg: 'bg-gray-200 dark:bg-gray-700',
        text: 'text-gray-500 dark:text-gray-400',
        gradient: 'from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-600',
        glow: 'shadow-gray-400/30',
      },
      connector: 'bg-green-500',
      pendingConnector: 'bg-gray-200 dark:bg-gray-700',
      hover: 'hover:bg-green-600',
      text: 'text-green-500',
      pendingText: 'text-gray-500 dark:text-gray-400',
    },
  };

  const variants = {
    default: '',
    outlined: 'border-2',
    dashed: 'border-2 border-dashed',
    elevated: 'shadow-md',
  };

  const sizes = {
    small: {
      icon: 'w-4 h-4',
      step: 'w-6 h-6',
      connector: 'h-0.5',
      verticalConnector: 'w-0.5',
      text: 'text-sm',
      spacing: 'gap-2',
      verticalSpacing: 'gap-3',
    },
    medium: {
      icon: 'w-5 h-5',
      step: 'w-8 h-8',
      connector: 'h-0.5',
      verticalConnector: 'w-0.5',
      text: 'text-base',
      spacing: 'gap-3',
      verticalSpacing: 'gap-4',
    },
    large: {
      icon: 'w-6 h-6',
      step: 'w-10 h-10',
      connector: 'h-1',
      verticalConnector: 'w-1',
      text: 'text-lg',
      spacing: 'gap-4',
      verticalSpacing: 'gap-5',
    },
  };

  const stepVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    hover: withHoverEffect ? {
      scale: 1.1,
      transition: { duration: 0.2 }
    } : {},
  };

  const connectorVariants = {
    initial: orientation === 'horizontal' ? { scaleX: 0 } : { scaleY: 0 },
    animate: { scale: 1 },
    exit: orientation === 'horizontal' ? { scaleX: 0 } : { scaleY: 0 },
  };

  const labelVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    hover: withHoverEffect ? {
      y: -2,
      transition: { duration: 0.2 }
    } : {},
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

  const getStepIcon = (step, index) => {
    if (index < activeStep) {
      return <FiCheck className={sizes[size].icon} />;
    }
    if (index === activeStep) {
      if (step.loading) {
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <FiLoader className={sizes[size].icon} />
          </motion.div>
        );
      }
      if (step.error) {
        return <FiX className={sizes[size].icon} />;
      }
      if (step.warning) {
        return <FiAlertCircle className={sizes[size].icon} />;
      }
      if (step.icon) {
        return <step.icon className={sizes[size].icon} />;
      }
      return showNumbers ? index + 1 : null;
    }
    if (step.icon) {
      return <step.icon className={sizes[size].icon} />;
    }
    return showNumbers ? index + 1 : null;
  };

  const renderStep = (step, index) => {
    const isCompleted = index < activeStep;
    const isActive = index === activeStep;
    const isPending = index > activeStep;
    const status = isCompleted ? 'completed' : isActive ? 'active' : 'pending';

    return (
      <div
        key={index}
        className={`
          flex
          ${orientation === 'horizontal' ? 'flex-col items-center' : alternativeLabel ? 'flex-row-reverse items-center' : 'flex-col'}
          ${orientation === 'horizontal' ? sizes[size].spacing : sizes[size].verticalSpacing}
          ${index === steps.length - 1 ? '' : orientation === 'horizontal' ? 'flex-1' : ''}
        `}
      >
        <motion.div
          variants={stepVariants}
          initial={animated ? 'initial' : false}
          animate="animate"
          exit="exit"
          whileHover="hover"
          {...pulseAnimation}
          className={`
            relative flex items-center justify-center
            ${sizes[size].step}
            rounded-full
            ${variants[variant]}
            ${withGradient ? `bg-gradient-to-br ${colors[color][status].gradient}` : colors[color][status].bg}
            ${colors[color][status].text}
            ${withGlow ? `shadow-lg ${colors[color][status].glow}` : ''}
            ${!isCompleted && !isActive ? colors[color].hover : ''}
            transition-all duration-200
            cursor-pointer
            ${withHoverEffect ? 'hover:scale-110' : ''}
          `}
          onClick={() => onChange?.(index)}
        >
          {getStepIcon(step, index)}
        </motion.div>

        {showLabels && (
          <motion.div
            variants={labelVariants}
            initial={animated ? 'initial' : false}
            animate="animate"
            whileHover="hover"
            className={`
              ${sizes[size].text}
              ${isCompleted || isActive ? colors[color].text : colors[color].pendingText}
              text-center
              whitespace-nowrap
              transition-colors duration-200
            `}
          >
            {step.label}
            {step.optional && (
              <div className={`${sizes[size].text} text-gray-400 text-sm`}>
                {step.optional}
              </div>
            )}
          </motion.div>
        )}

        {index !== steps.length - 1 && withConnectorAnimation && (
          <motion.div
            variants={connectorVariants}
            initial={animated ? 'initial' : false}
            animate="animate"
            exit="exit"
            className={`
              ${orientation === 'horizontal' ? 'absolute top-4 left-1/2 w-full transform -translate-x-1/2' : 'absolute left-4 h-full transform -translate-x-1/2'}
              ${orientation === 'horizontal' ? sizes[size].connector : sizes[size].verticalConnector}
              ${isCompleted ? colors[color].connector : colors[color].pendingConnector}
              ${orientation === 'horizontal' ? 'origin-left' : 'origin-top'}
              transition-colors duration-200
            `}
          />
        )}
      </div>
    );
  };

  return (
    <div
      className={`
        flex
        ${orientation === 'horizontal' ? 'flex-row' : 'flex-col'}
        ${orientation === 'horizontal' ? sizes[size].spacing : sizes[size].verticalSpacing}
        ${className}
      `}
      {...props}
    >
      <AnimatePresence>
        {steps.map((step, index) => renderStep(step, index))}
      </AnimatePresence>
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
      optional: PropTypes.string,
      loading: PropTypes.bool,
      error: PropTypes.bool,
      warning: PropTypes.bool,
    })
  ).isRequired,
  activeStep: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  variant: PropTypes.oneOf(['default', 'outlined', 'dashed', 'elevated']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showLabels: PropTypes.bool,
  showNumbers: PropTypes.bool,
  animated: PropTypes.bool,
  alternativeLabel: PropTypes.bool,
  withConnectorAnimation: PropTypes.bool,
  withGlow: PropTypes.bool,
  withGradient: PropTypes.bool,
  withPulse: PropTypes.bool,
  withHoverEffect: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Stepper; 