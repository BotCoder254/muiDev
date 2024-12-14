import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiChevronDown,
  FiChevronRight,
  FiCheck,
  FiMoreVertical,
  FiStar,
  FiHeart,
  FiZap,
  FiAward,
  FiTrendingUp,
  FiShield,
  FiFlag,
  FiGift,
  FiCoffee,
  FiBell,
  FiBookmark
} from 'react-icons/fi';

const DropdownMenu = ({
  trigger,
  items = [],
  variant = 'default',
  color = 'gray',
  size = 'medium',
  placement = 'bottom-start',
  arrow = true,
  closeOnClick = true,
  closeOnOutsideClick = true,
  nested = false,
  withDividers = false,
  withIcons = true,
  withBadges = false,
  withGlow = false,
  withGradient = false,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const dropdownRef = useRef(null);

  const colors = {
    gray: {
      bg: 'bg-white dark:bg-gray-800',
      text: 'text-gray-700 dark:text-gray-200',
      hover: 'hover:bg-gray-100 dark:hover:bg-gray-700',
      border: 'border-gray-200 dark:border-gray-700',
      trigger: 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700',
      gradient: 'from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700',
      glow: 'shadow-gray-200/50 dark:shadow-gray-900/50',
    },
    primary: {
      bg: 'bg-white dark:bg-gray-800',
      text: 'text-primary-700 dark:text-primary-200',
      hover: 'hover:bg-primary-50 dark:hover:bg-primary-900',
      border: 'border-primary-200 dark:border-primary-700',
      trigger: 'text-primary-700 dark:text-primary-200 hover:bg-primary-50 dark:hover:bg-primary-900',
      gradient: 'from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800',
      glow: 'shadow-primary-200/50 dark:shadow-primary-900/50',
    },
    secondary: {
      bg: 'bg-white dark:bg-gray-800',
      text: 'text-secondary-700 dark:text-secondary-200',
      hover: 'hover:bg-secondary-50 dark:hover:bg-secondary-900',
      border: 'border-secondary-200 dark:border-secondary-700',
      trigger: 'text-secondary-700 dark:text-secondary-200 hover:bg-secondary-50 dark:hover:bg-secondary-900',
      gradient: 'from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800',
      glow: 'shadow-secondary-200/50 dark:shadow-secondary-900/50',
    },
  };

  const variants = {
    default: 'shadow-lg border',
    minimal: 'shadow border',
    flat: '',
  };

  const sizes = {
    small: {
      text: 'text-sm',
      padding: 'px-3 py-1.5',
      trigger: 'text-sm px-2 py-1',
      icon: 'w-4 h-4',
      badge: 'w-4 h-4 text-[10px]',
    },
    medium: {
      text: 'text-base',
      padding: 'px-4 py-2',
      trigger: 'text-base px-3 py-2',
      icon: 'w-5 h-5',
      badge: 'w-5 h-5 text-xs',
    },
    large: {
      text: 'text-lg',
      padding: 'px-5 py-2.5',
      trigger: 'text-lg px-4 py-2.5',
      icon: 'w-6 h-6',
      badge: 'w-6 h-6 text-sm',
    },
  };

  const placements = {
    'bottom-start': 'top-full left-0',
    'bottom-end': 'top-full right-0',
    'top-start': 'bottom-full left-0',
    'top-end': 'bottom-full right-0',
    'right-start': 'left-full top-0',
    'right-end': 'left-full bottom-0',
    'left-start': 'right-full top-0',
    'left-end': 'right-full bottom-0',
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.1,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.02,
      x: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (closeOnOutsideClick && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeOnOutsideClick]);

  const handleItemClick = (item) => {
    if (closeOnClick && !item.items) {
      setIsOpen(false);
      setActiveIndex(-1);
    }
    item.onClick?.();
  };

  const renderTrigger = () => {
    if (React.isValidElement(trigger)) {
      return React.cloneElement(trigger, {
        onClick: () => setIsOpen(!isOpen),
        className: `${trigger.props.className || ''} cursor-pointer`,
      });
    }

    return (
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          inline-flex items-center justify-center rounded-md
          ${colors[color].trigger}
          ${sizes[size].trigger}
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
          transition-all duration-200
        `}
      >
        {trigger || <FiMoreVertical className={sizes[size].icon} />}
        {!nested && (
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="ml-2"
          >
            <FiChevronDown className={sizes[size].icon} />
          </motion.span>
        )}
      </motion.button>
    );
  };

  const renderItems = (menuItems, level = 0) => {
    return menuItems.map((item, index) => {
      if (item.separator) {
        return withDividers ? (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`my-1 border-t ${colors[color].border}`}
          />
        ) : null;
      }

      const hasSubItems = Array.isArray(item.items) && item.items.length > 0;
      const isActive = activeIndex === index;

      return (
        <motion.div key={index} variants={itemVariants} className="relative">
          {hasSubItems ? (
            <DropdownMenu
              trigger={
                <motion.div
                  className={`
                    flex items-center justify-between w-full
                    ${colors[color].text}
                    ${colors[color].hover}
                    ${sizes[size].padding}
                    ${sizes[size].text}
                    cursor-pointer
                  `}
                  whileHover="hover"
                  variants={itemVariants}
                  onHoverStart={() => setActiveIndex(index)}
                >
                  <span className="flex items-center gap-2">
                    {withIcons && item.icon && <item.icon className={sizes[size].icon} />}
                    <span className="relative">
                      {item.label}
                      {withBadges && item.badge && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`
                            absolute -top-1 -right-6
                            flex items-center justify-center
                            ${sizes[size].badge}
                            rounded-full bg-red-500 text-white font-bold
                          `}
                        >
                          {item.badge}
                        </motion.span>
                      )}
                    </span>
                  </span>
                  <FiChevronRight className={sizes[size].icon} />
                </motion.div>
              }
              items={item.items}
              variant={variant}
              color={color}
              size={size}
              placement="right-start"
              arrow={arrow}
              closeOnClick={closeOnClick}
              closeOnOutsideClick={false}
              nested={true}
              withDividers={withDividers}
              withIcons={withIcons}
              withBadges={withBadges}
              className="min-w-[160px]"
            />
          ) : (
            <motion.div
              onClick={() => handleItemClick(item)}
              className={`
                flex items-center justify-between
                ${colors[color].text}
                ${colors[color].hover}
                ${sizes[size].padding}
                ${sizes[size].text}
                cursor-pointer
              `}
              whileHover="hover"
              variants={itemVariants}
            >
              <span className="flex items-center gap-2">
                {withIcons && item.icon && <item.icon className={sizes[size].icon} />}
                <span className="relative">
                  {item.label}
                  {withBadges && item.badge && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`
                        absolute -top-1 -right-6
                        flex items-center justify-center
                        ${sizes[size].badge}
                        rounded-full bg-red-500 text-white font-bold
                      `}
                    >
                      {item.badge}
                    </motion.span>
                  )}
                </span>
              </span>
              {item.selected && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <FiCheck className={sizes[size].icon} />
                </motion.span>
              )}
            </motion.div>
          )}
        </motion.div>
      );
    });
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`} {...props}>
      {renderTrigger()}
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className={`
              absolute z-50 min-w-[160px]
              ${placements[placement]}
              ${withGradient ? `bg-gradient-to-b ${colors[color].gradient}` : colors[color].bg}
              ${colors[color].text}
              ${variants[variant]}
              ${colors[color].border}
              ${withGlow ? `shadow-xl ${colors[color].glow}` : ''}
              rounded-md overflow-hidden
              mt-2
            `}
          >
            {arrow && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`
                  absolute w-3 h-3 transform rotate-45
                  ${withGradient ? `bg-gradient-to-b ${colors[color].gradient}` : colors[color].bg}
                  ${colors[color].border}
                  ${placement.startsWith('bottom') ? '-top-1.5 border-t border-l' : ''}
                  ${placement.startsWith('top') ? '-bottom-1.5 border-b border-r' : ''}
                  ${placement.startsWith('right') ? '-left-1.5 border-l border-t' : ''}
                  ${placement.startsWith('left') ? '-right-1.5 border-r border-b' : ''}
                  ${placement.endsWith('start') ? 'left-4' : ''}
                  ${placement.endsWith('end') ? 'right-4' : ''}
                `}
              />
            )}
            <div className="relative bg-inherit rounded-md overflow-hidden py-1">
              {renderItems(items)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

DropdownMenu.propTypes = {
  trigger: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.elementType,
      onClick: PropTypes.func,
      items: PropTypes.array,
      separator: PropTypes.bool,
      selected: PropTypes.bool,
      badge: PropTypes.node,
    })
  ),
  variant: PropTypes.oneOf(['default', 'minimal', 'flat']),
  color: PropTypes.oneOf(['gray', 'primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  placement: PropTypes.oneOf([
    'bottom-start',
    'bottom-end',
    'top-start',
    'top-end',
    'right-start',
    'right-end',
    'left-start',
    'left-end',
  ]),
  arrow: PropTypes.bool,
  closeOnClick: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  nested: PropTypes.bool,
  withDividers: PropTypes.bool,
  withIcons: PropTypes.bool,
  withBadges: PropTypes.bool,
  withGlow: PropTypes.bool,
  withGradient: PropTypes.bool,
  className: PropTypes.string,
};

export default DropdownMenu; 