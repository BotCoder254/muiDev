import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiExternalLink, FiArrowRight, FiLink } from 'react-icons/fi';

const Link = ({
  href,
  children,
  variant = 'default',
  size = 'medium',
  external = false,
  underline = 'hover',
  icon = true,
  animate = true,
  className = '',
  onClick,
  highlight = false,
  pill = false,
  elevated = false,
  ...props
}) => {
  const variants = {
    default: 'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300',
    secondary: 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200',
    success: 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300',
    warning: 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300',
    error: 'text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300',
  };

  const sizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const underlines = {
    none: '',
    always: 'underline decoration-2 underline-offset-2',
    hover: 'hover:underline hover:decoration-2 hover:underline-offset-2',
  };

  const baseClasses = `
    ${sizes[size]}
    ${variants[variant]}
    ${underlines[underline]}
    ${highlight ? 'bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded' : ''}
    ${pill ? 'rounded-full border border-current px-4 py-1 hover:bg-primary-50 dark:hover:bg-primary-900/20' : ''}
    ${elevated ? 'shadow-sm hover:shadow-md' : ''}
    inline-flex items-center gap-1.5
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-primary-500/20
  `;

  const linkContent = (
    <>
      <span>{children}</span>
      {icon && (external ? (
        <FiExternalLink className="w-4 h-4" />
      ) : (
        <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
      ))}
    </>
  );

  const linkProps = {
    href,
    className: `group ${baseClasses} ${className}`,
    onClick,
    ...(external && {
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': `${children} (opens in new tab)`,
    }),
    ...props,
  };

  return animate ? (
    <motion.a
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...linkProps}
    >
      {linkContent}
    </motion.a>
  ) : (
    <a {...linkProps}>{linkContent}</a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'secondary', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  external: PropTypes.bool,
  underline: PropTypes.oneOf(['none', 'always', 'hover']),
  icon: PropTypes.bool,
  animate: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  highlight: PropTypes.bool,
  pill: PropTypes.bool,
  elevated: PropTypes.bool,
};

export default Link; 