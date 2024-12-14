import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiType, FiEdit2, FiCopy } from 'react-icons/fi';

const Heading = ({
  level = 1,
  children,
  variant = 'default',
  align = 'left',
  weight = 'bold',
  gradient = false,
  animate = true,
  icon,
  className = '',
  copyable = false,
  editable = false,
  onEdit,
  highlight = false,
  letterSpacing = 'normal',
  ...props
}) => {
  const Tag = `h${level}`;
  
  const variants = {
    default: 'text-gray-900 dark:text-white',
    primary: 'text-primary-600 dark:text-primary-400',
    secondary: 'text-gray-600 dark:text-gray-300',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    error: 'text-red-600 dark:text-red-400',
  };

  const sizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl lg:text-3xl',
    5: 'text-lg md:text-xl lg:text-2xl',
    6: 'text-base md:text-lg lg:text-xl',
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const letterSpacings = {
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
  };

  const baseClasses = `
    ${sizes[level]}
    ${weights[weight]}
    ${alignments[align]}
    ${letterSpacings[letterSpacing]}
    ${gradient ? 'bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent' : variants[variant]}
    ${highlight ? 'relative inline-block after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-primary-500/30 after:rounded-full' : ''}
    leading-tight
    transition-all duration-300
  `;

  const headingContent = (
    <div className="group relative inline-flex items-center gap-3">
      {icon && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-primary-500 dark:text-primary-400"
        >
          {icon}
        </motion.span>
      )}
      <span className="relative">
        {children}
      </span>
      {(copyable || editable) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="ml-3 inline-flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copyable && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopy}
              className="p-1.5 text-gray-400 hover:text-primary-500 transition-colors rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20"
              title="Copy text"
            >
              <FiCopy className="w-4 h-4" />
            </motion.button>
          )}
          {editable && onEdit && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onEdit}
              className="p-1.5 text-gray-400 hover:text-primary-500 transition-colors rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20"
              title="Edit text"
            >
              <FiEdit2 className="w-4 h-4" />
            </motion.button>
          )}
        </motion.div>
      )}
    </div>
  );

  return animate ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Tag className={`${baseClasses} ${className}`} {...props}>
        {headingContent}
      </Tag>
    </motion.div>
  ) : (
    <Tag className={`${baseClasses} ${className}`} {...props}>
      {headingContent}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'error']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  weight: PropTypes.oneOf(['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold']),
  gradient: PropTypes.bool,
  animate: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
  copyable: PropTypes.bool,
  editable: PropTypes.bool,
  onEdit: PropTypes.func,
  highlight: PropTypes.bool,
  letterSpacing: PropTypes.oneOf(['tight', 'normal', 'wide', 'wider', 'widest']),
};

export default Heading; 