import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiAlignLeft, FiCopy, FiEdit2 } from 'react-icons/fi';

const Paragraph = ({
  children,
  variant = 'default',
  size = 'medium',
  align = 'left',
  truncate = false,
  maxLines,
  animate = true,
  icon,
  className = '',
  copyable = false,
  editable = false,
  onEdit,
  highlight = false,
  indent = false,
  dropcap = false,
  ...props
}) => {
  const variants = {
    default: 'text-gray-700 dark:text-gray-300',
    primary: 'text-primary-600 dark:text-primary-400',
    secondary: 'text-gray-500 dark:text-gray-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    error: 'text-red-600 dark:text-red-400',
  };

  const sizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
  };

  const baseClasses = `
    ${sizes[size]}
    ${alignments[align]}
    ${variants[variant]}
    ${truncate ? 'truncate' : ''}
    ${maxLines ? `line-clamp-${maxLines}` : ''}
    ${indent ? 'indent-6' : ''}
    ${highlight ? 'bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded' : ''}
    leading-relaxed
    transition-all duration-300
  `;

  const paragraphContent = (
    <div className="group relative inline-flex items-start gap-3">
      {icon && (
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-primary-500 dark:text-primary-400 mt-1 flex-shrink-0"
        >
          {icon}
        </motion.span>
      )}
      <span className={dropcap ? 'first-letter:text-4xl first-letter:font-bold first-letter:text-primary-600 dark:first-letter:text-primary-400 first-letter:mr-1 first-letter:float-left' : ''}>
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
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {paragraphContent}
    </motion.p>
  ) : (
    <p className={`${baseClasses} ${className}`} {...props}>
      {paragraphContent}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  truncate: PropTypes.bool,
  maxLines: PropTypes.number,
  animate: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
  copyable: PropTypes.bool,
  editable: PropTypes.bool,
  onEdit: PropTypes.func,
  highlight: PropTypes.bool,
  indent: PropTypes.bool,
  dropcap: PropTypes.bool,
};

export default Paragraph; 