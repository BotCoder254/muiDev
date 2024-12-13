/**
 * @component Navbar
 * @description A professional and feature-rich navigation bar component with multiple variants and responsive design.
 * 
 * @example
 * // Basic usage
 * <Navbar
 *   brand={{ logo: '/logo.svg', name: 'Company' }}
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'About', href: '/about' }
 *   ]}
 * />
 * 
 * @example
 * // With dropdown menus and user profile
 * <Navbar
 *   brand={{ logo: '/logo.svg', name: 'Company' }}
 *   items={[
 *     {
 *       label: 'Products',
 *       items: [
 *         { label: 'Feature 1', href: '/feature-1' },
 *         { label: 'Feature 2', href: '/feature-2' }
 *       ]
 *     }
 *   ]}
 *   userMenu={{
 *     avatar: '/avatar.jpg',
 *     name: 'John Doe',
 *     items: [
 *       { label: 'Profile', href: '/profile' },
 *       { label: 'Settings', href: '/settings' },
 *       { label: 'Logout', onClick: handleLogout }
 *     ]
 *   }}
 * />
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiUser, FiBell } from 'react-icons/fi';

const Navbar = ({
  brand,
  items = [],
  userMenu,
  notifications,
  variant = 'default',
  position = 'fixed',
  color = 'light',
  size = 'medium',
  className,
  onNotificationClick,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const sizes = {
    small: {
      height: 'h-14',
      padding: 'px-4',
      text: 'text-sm',
      logo: 'h-6',
      icon: 'w-4 h-4',
      avatar: 'w-7 h-7',
    },
    medium: {
      height: 'h-16',
      padding: 'px-6',
      text: 'text-base',
      logo: 'h-8',
      icon: 'w-5 h-5',
      avatar: 'w-8 h-8',
    },
    large: {
      height: 'h-20',
      padding: 'px-8',
      text: 'text-lg',
      logo: 'h-10',
      icon: 'w-6 h-6',
      avatar: 'w-10 h-10',
    },
  };

  const colors = {
    light: {
      nav: 'bg-white border-gray-200',
      text: 'text-gray-700',
      hover: 'hover:text-gray-900 hover:bg-gray-50',
      active: 'text-blue-600',
      dropdown: 'bg-white border-gray-200 shadow-lg',
      button: 'text-gray-500 hover:text-gray-700',
      scroll: 'shadow-md',
    },
    dark: {
      nav: 'bg-gray-900 border-gray-700',
      text: 'text-gray-300',
      hover: 'hover:text-white hover:bg-gray-800',
      active: 'text-blue-400',
      dropdown: 'bg-gray-800 border-gray-700 shadow-lg',
      button: 'text-gray-400 hover:text-white',
      scroll: 'shadow-md shadow-gray-900/20',
    },
    transparent: {
      nav: 'bg-transparent',
      text: 'text-white',
      hover: 'hover:text-gray-200 hover:bg-white/10',
      active: 'text-blue-300',
      dropdown: 'bg-gray-900/90 backdrop-blur-sm border-gray-700 shadow-lg',
      button: 'text-white/90 hover:text-white',
      scroll: 'bg-white/80 backdrop-blur-sm shadow-md',
    },
  };

  const variants = {
    default: {
      nav: 'border-b',
      item: 'px-3 py-2 rounded-md',
      dropdown: 'border rounded-lg',
    },
    floating: {
      nav: 'mx-4 mt-4 rounded-xl border shadow-lg',
      item: 'px-3 py-2 rounded-md',
      dropdown: 'border rounded-lg',
    },
    minimal: {
      nav: '',
      item: 'px-3 py-2',
      dropdown: 'rounded-lg shadow-lg',
    },
  };

  const positions = {
    fixed: 'fixed top-0 left-0 right-0 z-50',
    sticky: 'sticky top-0 z-50',
    relative: 'relative',
  };

  const navClasses = `
    ${positions[position]}
    ${sizes[size].height}
    ${sizes[size].padding}
    ${variants[variant].nav}
    ${colors[color].nav}
    ${isScrolled && colors[color].scroll}
    transition-all duration-200
    ${className || ''}
  `;

  const renderDropdownContent = (items, parent = null) => (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`
        absolute right-0 mt-2 w-48
        ${variants[variant].dropdown}
        ${colors[color].dropdown}
        overflow-hidden
        ${parent === 'user' ? 'right-0' : 'left-0'}
      `}
    >
      <div className="py-1">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={(e) => {
              if (item.onClick) {
                e.preventDefault();
                item.onClick();
              }
              setActiveDropdown(null);
            }}
            className={`
              block px-4 py-2
              ${sizes[size].text}
              ${colors[color].text}
              ${colors[color].hover}
              transition-colors duration-200
            `}
          >
            <div className="flex items-center space-x-2">
              {item.icon && <item.icon className={sizes[size].icon} />}
              <span>{item.label}</span>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );

  return (
    <nav className={navClasses} {...props}>
      <div className="flex items-center justify-between h-full">
        {/* Brand */}
        <div className="flex-shrink-0">
          <a href={brand?.href || '/'} className="flex items-center space-x-3">
            {brand?.logo && (
              <img
                src={brand.logo}
                alt={brand.name}
                className={sizes[size].logo}
              />
            )}
            {brand?.name && (
              <span className={`font-semibold ${sizes[size].text} ${colors[color].text}`}>
                {brand.name}
              </span>
            )}
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {items.map((item, index) => (
            <div key={index} className="relative" ref={dropdownRef}>
              {item.items ? (
                <button
                  onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                  className={`
                    flex items-center space-x-1
                    ${variants[variant].item}
                    ${sizes[size].text}
                    ${colors[color].text}
                    ${colors[color].hover}
                    ${activeDropdown === index ? colors[color].active : ''}
                    transition-colors duration-200
                  `}
                >
                  <span>{item.label}</span>
                  <FiChevronDown className={`
                    ${sizes[size].icon}
                    transform transition-transform duration-200
                    ${activeDropdown === index ? 'rotate-180' : ''}
                  `} />
                </button>
              ) : (
                <a
                  href={item.href}
                  className={`
                    ${variants[variant].item}
                    ${sizes[size].text}
                    ${colors[color].text}
                    ${colors[color].hover}
                    transition-colors duration-200
                  `}
                >
                  {item.label}
                </a>
              )}
              <AnimatePresence>
                {item.items && activeDropdown === index && renderDropdownContent(item.items)}
              </AnimatePresence>
            </div>
          ))}

          {/* Notifications */}
          {notifications && (
            <div className="relative">
              <button
                onClick={() => {
                  setActiveDropdown(activeDropdown === 'notifications' ? null : 'notifications');
                  onNotificationClick?.();
                }}
                className={`
                  relative p-2 rounded-full
                  ${colors[color].button}
                  transition-colors duration-200
                `}
              >
                <FiBell className={sizes[size].icon} />
                {notifications.unread > 0 && (
                  <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-white text-xs items-center justify-center">
                      {notifications.unread}
                    </span>
                  </span>
                )}
              </button>
              <AnimatePresence>
                {activeDropdown === 'notifications' && renderDropdownContent(notifications.items, 'notifications')}
              </AnimatePresence>
            </div>
          )}

          {/* User Menu */}
          {userMenu && (
            <div className="relative ml-3">
              <button
                onClick={() => setActiveDropdown(activeDropdown === 'user' ? null : 'user')}
                className="flex items-center space-x-3"
              >
                {userMenu.avatar ? (
                  <img
                    src={userMenu.avatar}
                    alt={userMenu.name}
                    className={`${sizes[size].avatar} rounded-full object-cover`}
                  />
                ) : (
                  <div className={`
                    ${sizes[size].avatar}
                    rounded-full
                    bg-gray-200
                    flex items-center justify-center
                    ${colors[color].text}
                  `}>
                    <FiUser className={sizes[size].icon} />
                  </div>
                )}
                <div className="hidden lg:block">
                  <div className={`${sizes[size].text} font-medium ${colors[color].text}`}>
                    {userMenu.name}
                  </div>
                  {userMenu.role && (
                    <div className={`text-sm ${colors[color].text} opacity-75`}>
                      {userMenu.role}
                    </div>
                  )}
                </div>
                <FiChevronDown className={`
                  ${sizes[size].icon}
                  ${colors[color].text}
                  transform transition-transform duration-200
                  ${activeDropdown === 'user' ? 'rotate-180' : ''}
                `} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'user' && renderDropdownContent(userMenu.items, 'user')}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-md ${colors[color].button}`}
        >
          {isOpen ? (
            <FiX className={sizes[size].icon} />
          ) : (
            <FiMenu className={sizes[size].icon} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${colors[color].nav} border-t ${variants[variant].nav}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {items.map((item, index) => (
                <div key={index}>
                  {item.items ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === `mobile-${index}` ? null : `mobile-${index}`)}
                        className={`
                          w-full flex items-center justify-between
                          ${variants[variant].item}
                          ${sizes[size].text}
                          ${colors[color].text}
                          ${colors[color].hover}
                          ${activeDropdown === `mobile-${index}` ? colors[color].active : ''}
                        `}
                      >
                        <span>{item.label}</span>
                        <FiChevronDown className={`
                          ${sizes[size].icon}
                          transform transition-transform duration-200
                          ${activeDropdown === `mobile-${index}` ? 'rotate-180' : ''}
                        `} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === `mobile-${index}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4"
                          >
                            {item.items.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.href}
                                onClick={() => {
                                  if (subItem.onClick) {
                                    subItem.onClick();
                                  }
                                  setIsOpen(false);
                                }}
                                className={`
                                  block
                                  ${variants[variant].item}
                                  ${sizes[size].text}
                                  ${colors[color].text}
                                  ${colors[color].hover}
                                `}
                              >
                                {subItem.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        block
                        ${variants[variant].item}
                        ${sizes[size].text}
                        ${colors[color].text}
                        ${colors[color].hover}
                      `}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

Navbar.propTypes = {
  /** Brand configuration */
  brand: PropTypes.shape({
    /** Brand logo URL */
    logo: PropTypes.string,
    /** Brand name */
    name: PropTypes.string,
    /** Brand link URL */
    href: PropTypes.string,
  }),
  /** Navigation items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Item label */
      label: PropTypes.string.isRequired,
      /** Item link URL */
      href: PropTypes.string,
      /** Dropdown items */
      items: PropTypes.arrayOf(
        PropTypes.shape({
          /** Dropdown item label */
          label: PropTypes.string.isRequired,
          /** Dropdown item link URL */
          href: PropTypes.string,
          /** Dropdown item click handler */
          onClick: PropTypes.func,
          /** Dropdown item icon */
          icon: PropTypes.elementType,
        })
      ),
    })
  ),
  /** User menu configuration */
  userMenu: PropTypes.shape({
    /** User avatar URL */
    avatar: PropTypes.string,
    /** User name */
    name: PropTypes.string,
    /** User role */
    role: PropTypes.string,
    /** User menu items */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /** Menu item label */
        label: PropTypes.string.isRequired,
        /** Menu item link URL */
        href: PropTypes.string,
        /** Menu item click handler */
        onClick: PropTypes.func,
        /** Menu item icon */
        icon: PropTypes.elementType,
      })
    ),
  }),
  /** Notifications configuration */
  notifications: PropTypes.shape({
    /** Number of unread notifications */
    unread: PropTypes.number,
    /** Notification items */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        /** Notification label */
        label: PropTypes.string.isRequired,
        /** Notification link URL */
        href: PropTypes.string,
        /** Notification click handler */
        onClick: PropTypes.func,
        /** Notification icon */
        icon: PropTypes.elementType,
      })
    ),
  }),
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'floating', 'minimal']),
  /** Position style */
  position: PropTypes.oneOf(['fixed', 'sticky', 'relative']),
  /** Color theme */
  color: PropTypes.oneOf(['light', 'dark', 'transparent']),
  /** Size preset */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Notification click handler */
  onNotificationClick: PropTypes.func,
};

export default Navbar; 