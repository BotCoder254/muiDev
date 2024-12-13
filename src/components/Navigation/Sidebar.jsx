import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowTrendingUpIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

const Sidebar = ({
  brand,
  brandLogo,
  menuItems = [],
  footer,
  variant = 'default',
  position = 'left',
  size = 'medium',
  color = 'white',
  expanded = true,
  collapsible = true,
  overlay = false,
  blur = false,
  shadow = true,
  bordered = false,
  rounded = false,
  showStatus = false,
  className,
  onExpandedChange,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [activeGroup, setActiveGroup] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [statusData, setStatusData] = useState({
    type: 'success',
    message: 'All systems operational',
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggle = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onExpandedChange?.(newExpanded);
  };

  const handleGroupClick = (groupId) => {
    setActiveGroup(activeGroup === groupId ? null : groupId);
  };

  const sizes = {
    small: {
      width: 'w-56',
      collapsedWidth: 'w-16',
      padding: 'p-2',
      brand: 'text-lg',
      item: 'text-sm px-3 py-2',
      icon: 'w-5 h-5',
      logo: 'w-8 h-8',
      spacing: 'gap-2',
      badge: 'w-4 h-4 text-[10px]',
    },
    medium: {
      width: 'w-64',
      collapsedWidth: 'w-20',
      padding: 'p-3',
      brand: 'text-xl',
      item: 'text-base px-4 py-2.5',
      icon: 'w-6 h-6',
      logo: 'w-10 h-10',
      spacing: 'gap-3',
      badge: 'w-5 h-5 text-[11px]',
    },
    large: {
      width: 'w-72',
      collapsedWidth: 'w-24',
      padding: 'p-4',
      brand: 'text-2xl',
      item: 'text-lg px-5 py-3',
      icon: 'w-7 h-7',
      logo: 'w-12 h-12',
      spacing: 'gap-4',
      badge: 'w-6 h-6 text-xs',
    },
  };

  const colors = {
    primary: {
      bg: 'bg-blue-600',
      text: 'text-white',
      hover: 'hover:bg-blue-700/50',
      active: 'bg-blue-700',
      border: 'border-blue-700',
      muted: 'text-blue-100',
      ring: 'focus:ring-blue-400',
      gradient: 'bg-gradient-to-b from-blue-600 to-indigo-600',
    },
    secondary: {
      bg: 'bg-gray-800',
      text: 'text-white',
      hover: 'hover:bg-gray-700/50',
      active: 'bg-gray-700',
      border: 'border-gray-700',
      muted: 'text-gray-300',
      ring: 'focus:ring-gray-400',
      gradient: 'bg-gradient-to-b from-gray-800 to-gray-900',
    },
    white: {
      bg: 'bg-white',
      text: 'text-gray-800',
      hover: 'hover:bg-gray-100',
      active: 'bg-gray-100',
      border: 'border-gray-200',
      muted: 'text-gray-500',
      ring: 'focus:ring-gray-200',
      gradient: 'bg-gradient-to-b from-gray-50 to-white',
    },
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      hover: 'hover:bg-gray-800/50',
      active: 'bg-gray-800',
      border: 'border-gray-700',
      muted: 'text-gray-300',
      ring: 'focus:ring-gray-400',
      gradient: 'bg-gradient-to-b from-gray-900 to-gray-800',
    },
  };

  const variants = {
    default: '',
    floating: 'mt-4 mb-4 rounded-xl',
    minimal: 'border-r',
    gradient: 'bg-gradient-to-b',
  };

  const positions = {
    left: 'left-0',
    right: 'right-0',
  };

  const baseClasses = `
    h-screen
    ${isExpanded ? sizes[size].width : sizes[size].collapsedWidth}
    ${sizes[size].padding}
    ${variants[variant]}
    ${positions[position]}
    ${variant === 'gradient' ? colors[color].gradient : colors[color].bg}
    ${colors[color].text}
    ${shadow ? 'shadow-lg' : ''}
    ${bordered ? `border ${colors[color].border}` : ''}
    ${rounded ? 'rounded-r-2xl' : ''}
    ${overlay ? 'fixed z-50' : 'relative'}
    ${blur && overlay ? 'backdrop-blur-md backdrop-saturate-150' : ''}
    ${scrolled ? 'shadow-md' : ''}
    transition-all duration-300
  `;

  const MenuItem = ({ item, isActive, level = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isGroup = Array.isArray(item.children);
    const isGroupActive = activeGroup === item.id;
    const showChildren = isExpanded && isGroupActive;

    return (
      <>
        <motion.div
          className={`
            ${level > 0 ? 'ml-4' : ''}
            ${isGroup ? 'cursor-pointer' : ''}
          `}
        >
          <motion.a
            href={!isGroup ? item.href : undefined}
            className={`
              ${sizes[size].item}
              ${isActive || isGroupActive ? colors[color].active : colors[color].hover}
              rounded-lg
              flex items-center
              ${sizes[size].spacing}
              transition-all duration-200
              relative
              group
              ${item.disabled ? 'opacity-50 cursor-not-allowed' : ''}
              focus:outline-none focus:ring-2 ${colors[color].ring}
            `}
            onClick={isGroup ? () => handleGroupClick(item.id) : undefined}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={!item.disabled && { scale: 1.02 }}
            whileTap={!item.disabled && { scale: 0.98 }}
          >
            {item.icon && (
              <item.icon className={`
                ${sizes[size].icon}
                ${isActive ? '' : colors[color].muted}
                transition-colors duration-200
                flex-shrink-0
              `} />
            )}
            <AnimatePresence>
              {(isExpanded || isHovered) && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="whitespace-nowrap flex-1 truncate"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
            {item.badge && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`
                  ${sizes[size].badge}
                  ${item.badge.variant === 'success' ? 'bg-green-500' : ''}
                  ${item.badge.variant === 'warning' ? 'bg-yellow-500' : ''}
                  ${item.badge.variant === 'error' ? 'bg-red-500' : ''}
                  ${item.badge.variant === 'info' ? 'bg-blue-500' : ''}
                  text-white font-bold rounded-full
                  flex items-center justify-center
                  ${!isExpanded && !isHovered ? 'hidden' : ''}
                `}
              >
                {item.badge.content}
              </motion.span>
            )}
            {isGroup && (
              <motion.div
                animate={{ rotate: isGroupActive ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isGroupActive ? (
                  <ChevronUpIcon className={`${sizes[size].icon} ${colors[color].muted}`} />
                ) : (
                  <ChevronDownIcon className={`${sizes[size].icon} ${colors[color].muted}`} />
                )}
              </motion.div>
            )}
            {!isExpanded && isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className={`
                  absolute left-full top-0 ml-2
                  ${sizes[size].item}
                  ${colors[color].bg}
                  shadow-lg rounded-lg
                  whitespace-nowrap
                  z-50
                  flex items-center gap-2
                `}
              >
                {item.label}
                {item.badge && (
                  <span className={`
                    ${sizes[size].badge}
                    ${item.badge.variant === 'success' ? 'bg-green-500' : ''}
                    ${item.badge.variant === 'warning' ? 'bg-yellow-500' : ''}
                    ${item.badge.variant === 'error' ? 'bg-red-500' : ''}
                    ${item.badge.variant === 'info' ? 'bg-blue-500' : ''}
                    text-white font-bold rounded-full
                    flex items-center justify-center
                  `}>
                    {item.badge.content}
                  </span>
                )}
              </motion.div>
            )}
          </motion.a>
        </motion.div>
        <AnimatePresence>
          {showChildren && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              {item.children.map((child, index) => (
                <MenuItem
                  key={index}
                  item={child}
                  isActive={child.active}
                  level={level + 1}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  return (
    <motion.aside
      className={`${baseClasses} ${className || ''}`}
      {...props}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3 min-w-0">
            {brandLogo && (
              <motion.img
                src={brandLogo}
                alt={brand}
                className={sizes[size].logo}
                whileHover={{ scale: 1.05 }}
              />
            )}
            {brand && isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className={`${sizes[size].brand} font-bold tracking-tight truncate`}
              >
                {brand}
              </motion.span>
            )}
          </div>
          {collapsible && (
            <motion.button
              onClick={handleToggle}
              className={`
                ${sizes[size].item}
                ${colors[color].hover}
                rounded-lg
                flex items-center justify-center
                focus:outline-none focus:ring-2 ${colors[color].ring}
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 0 : 180 }}
                transition={{ duration: 0.2 }}
              >
                {isExpanded ? (
                  <ChevronLeftIcon className={sizes[size].icon} />
                ) : (
                  <ChevronRightIcon className={sizes[size].icon} />
                )}
              </motion.div>
            </motion.button>
          )}
        </div>

        {/* Status Indicator */}
        {showStatus && isExpanded && (
          <div className={`
            mb-4 p-3 rounded-lg
            ${statusData.type === 'success' ? 'bg-green-500/10 text-green-500' : ''}
            ${statusData.type === 'warning' ? 'bg-yellow-500/10 text-yellow-500' : ''}
            ${statusData.type === 'error' ? 'bg-red-500/10 text-red-500' : ''}
          `}>
            <div className="flex items-center gap-2">
              {statusData.type === 'success' && <ArrowTrendingUpIcon className="w-5 h-5" />}
              {statusData.type === 'warning' && <ExclamationTriangleIcon className="w-5 h-5" />}
              {statusData.type === 'error' && <ArrowPathIcon className="w-5 h-5 animate-spin" />}
              <span className="text-sm font-medium">{statusData.message}</span>
            </div>
          </div>
        )}

        {/* Menu Items */}
        <div className="flex-1 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              isActive={item.active}
            />
          ))}
        </div>

        {/* Footer */}
        {footer && (
          <div className="mt-6">
            {isExpanded ? (
              footer
            ) : (
              <div className="flex justify-center">
                {React.Children.map(footer.props.children, (child) =>
                  child?.props?.icon ? React.cloneElement(child, {
                    className: sizes[size].icon,
                  }) : null
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </motion.aside>
  );
};

Sidebar.propTypes = {
  brand: PropTypes.string,
  brandLogo: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      icon: PropTypes.elementType,
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      badge: PropTypes.shape({
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
      }),
      children: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  footer: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'floating', 'minimal', 'gradient']),
  position: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'white', 'dark']),
  expanded: PropTypes.bool,
  collapsible: PropTypes.bool,
  overlay: PropTypes.bool,
  blur: PropTypes.bool,
  shadow: PropTypes.bool,
  bordered: PropTypes.bool,
  rounded: PropTypes.bool,
  showStatus: PropTypes.bool,
  className: PropTypes.string,
  onExpandedChange: PropTypes.func,
};

export default Sidebar; 