import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiInfo, 
  FiAlertCircle, 
  FiTag, 
  FiCheckCircle, 
  FiStar,
  FiHelpCircle,
  FiEdit,
  FiLock
} from 'react-icons/fi';

const Label = ({
  children,
  htmlFor,
  required = false,
  optional = false,
  error = false,
  success = false,
  size = 'medium',
  variant = 'default',
  tooltip,
  animate = true,
  className = '',
  icon,
  editable = false,
  locked = false,
  ...props
}) => {
  const sizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const variants = {
    default: 'text-gray-700 dark:text-gray-200',
    primary: 'text-primary-600 dark:text-primary-400',
    secondary: 'text-gray-600 dark:text-gray-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    error: 'text-red-600 dark:text-red-400',
  };

  const baseClasses = `
    inline-flex
    items-center
    gap-2
    font-medium
    select-none
    ${sizes[size]}
    ${error ? variants.error : success ? variants.success : variants[variant]}
  `;

  const labelVariants = {
    initial: { 
      opacity: 0, 
      y: -10,
      scale: 0.95 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const iconVariants = {
    initial: { 
      opacity: 0, 
      scale: 0,
      rotate: -180 
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25
      }
    },
    hover: {
      scale: 1.1,
      rotate: 15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const tooltipVariants = {
    initial: { 
      opacity: 0, 
      y: -10,
      scale: 0.8 
    },
    hover: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const labelContent = (
    <div className="group relative inline-flex items-center gap-2">
      {icon && (
        <motion.span
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className={error ? 'text-red-500' : success ? 'text-green-500' : 'text-primary-500 dark:text-primary-400'}
        >
          {icon}
        </motion.span>
      )}
      {!icon && (
        <motion.span
          variants={iconVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className={error ? 'text-red-500' : success ? 'text-green-500' : 'text-primary-500 dark:text-primary-400'}
        >
          <FiTag className="w-4 h-4" />
        </motion.span>
      )}
      <span className="relative">
        {children}
        {editable && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            className="ml-1 inline-flex text-gray-400"
          >
            <FiEdit className="w-3.5 h-3.5" />
          </motion.span>
        )}
      </span>
      <AnimatePresence>
        {required && (
          <motion.span
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit={{ scale: 0, opacity: 0 }}
            className="text-red-500 inline-flex"
          >
            <FiAlertCircle className="w-4 h-4" />
          </motion.span>
        )}
        {optional && (
          <motion.span
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit={{ scale: 0, opacity: 0 }}
            className="text-gray-400 dark:text-gray-500 text-sm inline-flex items-center gap-1"
          >
            <FiHelpCircle className="w-3.5 h-3.5" />
            <span>(optional)</span>
          </motion.span>
        )}
        {success && !error && (
          <motion.span
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit={{ scale: 0, opacity: 0 }}
            className="text-green-500 inline-flex"
          >
            <FiCheckCircle className="w-4 h-4" />
          </motion.span>
        )}
        {locked && (
          <motion.span
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit={{ scale: 0, opacity: 0 }}
            className="text-gray-400 dark:text-gray-500 inline-flex"
          >
            <FiLock className="w-4 h-4" />
          </motion.span>
        )}
      </AnimatePresence>
      {tooltip && (
        <div className="relative inline-block">
          <motion.div
            whileHover="hover"
            className="cursor-help"
          >
            <FiInfo className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            <motion.div
              variants={tooltipVariants}
              className="
                absolute
                left-1/2
                -translate-x-1/2
                bottom-full
                mb-2
                px-3
                py-2
                text-sm
                text-white
                bg-gray-900
                dark:bg-gray-700
                rounded-lg
                shadow-lg
                whitespace-nowrap
                pointer-events-none
                z-50
                flex
                items-center
                gap-2
              "
            >
              <FiStar className="w-4 h-4 text-yellow-400" />
              {tooltip}
              <div
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  top-full
                  w-0
                  h-0
                  border-l-[6px]
                  border-l-transparent
                  border-r-[6px]
                  border-r-transparent
                  border-t-[6px]
                  border-t-gray-900
                  dark:border-t-gray-700
                "
              />
            </motion.div>
          </motion.div>
        </div>
      )}
      {error && (
        <motion.span
          variants={iconVariants}
          initial="initial"
          animate="animate"
          className="text-red-500 inline-flex"
        >
          <FiAlertCircle className="w-4 h-4" />
        </motion.span>
      )}
    </div>
  );

  return animate ? (
    <motion.label
      htmlFor={htmlFor}
      className={`${baseClasses} ${className}`}
      variants={labelVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {labelContent}
    </motion.label>
  ) : (
    <label
      htmlFor={htmlFor}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {labelContent}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  optional: PropTypes.bool,
  error: PropTypes.bool,
  success: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'error']),
  tooltip: PropTypes.node,
  animate: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.node,
  editable: PropTypes.bool,
  locked: PropTypes.bool,
};

export default Label; 