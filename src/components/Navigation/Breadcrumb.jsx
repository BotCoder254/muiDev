/**
 * @component Breadcrumb
 * @description A professional breadcrumb navigation component with multiple variants and customization options.
 * 
 * @example
 * // Basic usage
 * const items = [
 *   { label: 'Home', href: '/' },
 *   { label: 'Products', href: '/products' },
 *   { label: 'Category', href: '/products/category' },
 *   { label: 'Item' }
 * ];
 * 
 * <Breadcrumb items={items} />
 * 
 * @example
 * // With icons and custom separator
 * const items = [
 *   { label: 'Dashboard', href: '/', icon: HomeIcon },
 *   { label: 'Settings', href: '/settings', icon: CogIcon },
 *   { label: 'Profile', icon: UserIcon }
 * ];
 * 
 * <Breadcrumb
 *   items={items}
 *   separatorIcon={<ChevronRightIcon />}
 *   variant="pills"
 * />
 */

import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiChevronRight, FiHome } from 'react-icons/fi';

const Breadcrumb = ({
  items = [],
  separatorIcon,
  variant = 'default',
  size = 'medium',
  color = 'primary',
  maxItems = 0,
  showHomeIcon = true,
  className,
  ...props
}) => {
  const sizes = {
    small: {
      text: 'text-sm',
      icon: 'w-3.5 h-3.5',
      spacing: 'space-x-1',
      padding: 'px-2 py-1',
    },
    medium: {
      text: 'text-base',
      icon: 'w-4 h-4',
      spacing: 'space-x-2',
      padding: 'px-3 py-1.5',
    },
    large: {
      text: 'text-lg',
      icon: 'w-5 h-5',
      spacing: 'space-x-3',
      padding: 'px-4 py-2',
    },
  };

  const colors = {
    primary: {
      text: 'text-gray-600',
      hover: 'hover:text-blue-600',
      active: 'text-blue-600',
      separator: 'text-gray-400',
      icon: 'text-gray-400',
      bg: 'bg-gray-100',
      border: 'border-gray-200',
    },
    secondary: {
      text: 'text-gray-600',
      hover: 'hover:text-gray-900',
      active: 'text-gray-900',
      separator: 'text-gray-400',
      icon: 'text-gray-400',
      bg: 'bg-gray-100',
      border: 'border-gray-200',
    },
    white: {
      text: 'text-gray-500',
      hover: 'hover:text-gray-700',
      active: 'text-gray-700',
      separator: 'text-gray-300',
      icon: 'text-gray-300',
      bg: 'bg-white',
      border: 'border-gray-100',
    },
  };

  const variants = {
    default: {
      container: '',
      item: '',
      separator: '',
    },
    pills: {
      container: 'p-2 rounded-lg bg-gray-50/50',
      item: 'rounded-md',
      separator: 'mx-1',
    },
    bordered: {
      container: 'p-2 rounded-lg border',
      item: 'rounded-md',
      separator: 'mx-1',
    },
  };

  const renderSeparator = () => {
    if (separatorIcon) {
      return React.cloneElement(separatorIcon, {
        className: `${sizes[size].icon} ${colors[color].separator}`,
      });
    }
    return (
      <FiChevronRight className={`${sizes[size].icon} ${colors[color].separator}`} />
    );
  };

  const visibleItems = maxItems > 0 && items.length > maxItems
    ? [
        ...items.slice(0, Math.max(1, Math.floor((maxItems - 1) / 2))),
        { label: '...', truncated: true },
        ...items.slice(items.length - Math.floor((maxItems - 1) / 2)),
      ]
    : items;

  const containerClasses = `
    flex items-center flex-wrap
    ${sizes[size].spacing}
    ${variants[variant].container}
    ${variant === 'bordered' && colors[color].border}
    ${className || ''}
  `;

  const itemClasses = (isLast, isTruncated) => `
    ${sizes[size].text}
    ${sizes[size].padding}
    ${variants[variant].item}
    ${isTruncated ? colors[color].separator : isLast ? colors[color].active : colors[color].text}
    ${!isLast && !isTruncated && colors[color].hover}
    transition-colors duration-200
    flex items-center gap-1.5
    ${variant !== 'default' && colors[color].bg}
  `;

  return (
    <nav aria-label="Breadcrumb" className={containerClasses} {...props}>
      <ol className="flex items-center flex-wrap">
        {showHomeIcon && (
          <li>
            <motion.a
              href="/"
              className={itemClasses(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiHome className={`${sizes[size].icon} ${colors[color].icon}`} />
              <span className="sr-only">Home</span>
            </motion.a>
            <span className="mx-2" aria-hidden="true">
              {renderSeparator()}
            </span>
          </li>
        )}
        {visibleItems.map((item, index) => {
          const isLast = index === visibleItems.length - 1;
          const isTruncated = item.truncated;

          return (
            <li key={index} className="flex items-center">
              {isTruncated ? (
                <span className={itemClasses(false, true)}>{item.label}</span>
              ) : (
                <motion.div
                  whileHover={!isLast ? { scale: 1.05 } : {}}
                  whileTap={!isLast ? { scale: 0.95 } : {}}
                >
                  {item.href ? (
                    <a href={item.href} className={itemClasses(isLast)}>
                      {item.icon && (
                        <item.icon className={`${sizes[size].icon} ${colors[color].icon}`} />
                      )}
                      {item.label}
                    </a>
                  ) : (
                    <span className={itemClasses(isLast)} aria-current={isLast ? 'page' : undefined}>
                      {item.icon && (
                        <item.icon className={`${sizes[size].icon} ${colors[color].icon}`} />
                      )}
                      {item.label}
                    </span>
                  )}
                </motion.div>
              )}
              {!isLast && (
                <span className={`mx-2 ${variants[variant].separator}`} aria-hidden="true">
                  {renderSeparator()}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumb.propTypes = {
  /** Array of breadcrumb items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Item label */
      label: PropTypes.string.isRequired,
      /** Item link URL */
      href: PropTypes.string,
      /** Item icon component */
      icon: PropTypes.elementType,
      /** Whether this is a truncated item (internal use) */
      truncated: PropTypes.bool,
    })
  ),
  /** Custom separator icon element */
  separatorIcon: PropTypes.element,
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'pills', 'bordered']),
  /** Size preset */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color theme */
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  /** Maximum number of visible items (0 for all) */
  maxItems: PropTypes.number,
  /** Whether to show the home icon */
  showHomeIcon: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Breadcrumb; 