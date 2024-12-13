/**
 * @component Tabs
 * @description A versatile and modern tabs component with multiple variants, animations, and features.
 * 
 * @example
 * // Basic usage
 * const items = [
 *   {
 *     label: 'Tab 1',
 *     value: 'tab1',
 *     content: <div>Tab 1 content</div>
 *   },
 *   {
 *     label: 'Tab 2',
 *     value: 'tab2',
 *     content: <div>Tab 2 content</div>
 *   }
 * ];
 * 
 * <Tabs items={items} />
 * 
 * @example
 * // With icons and badges
 * const items = [
 *   {
 *     label: 'Dashboard',
 *     value: 'dashboard',
 *     icon: HomeIcon,
 *     badge: { content: '5' },
 *     content: <DashboardContent />
 *   }
 * ];
 * 
 * <Tabs
 *   items={items}
 *   variant="pills"
 *   color="primary"
 *   size="large"
 * />
 * 
 * @example
 * // Controlled component
 * const [activeTab, setActiveTab] = useState('tab1');
 * 
 * <Tabs
 *   items={items}
 *   value={activeTab}
 *   onChange={setActiveTab}
 * />
 */

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const Tabs = ({
  items = [],
  variant = 'default',
  size = 'medium',
  color = 'primary',
  orientation = 'horizontal',
  fullWidth = false,
  centered = false,
  animated = true,
  disabled = false,
  defaultValue,
  value,
  onChange,
  className,
  ...props
}) => {
  const [activeTab, setActiveTab] = useState(value || defaultValue || items[0]?.value);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [contentHeight, setContentHeight] = useState('auto');
  const [tabsWidth, setTabsWidth] = useState({});
  const [tabsRect, setTabsRect] = useState({});
  const tabsRef = useRef(null);

  useEffect(() => {
    if (value !== undefined) {
      setActiveTab(value);
    }
  }, [value]);

  useEffect(() => {
    const updateContentHeight = () => {
      const activeContent = document.querySelector(`[data-tab-content="${activeTab}"]`);
      if (activeContent) {
        setContentHeight(activeContent.offsetHeight);
      }
    };

    const updateTabsMetrics = () => {
      if (!tabsRef.current) return;

      const tabElements = tabsRef.current.querySelectorAll('[data-tab-value]');
      const widths = {};
      const rects = {};

      tabElements.forEach((tab) => {
        const value = tab.getAttribute('data-tab-value');
        const rect = tab.getBoundingClientRect();
        widths[value] = tab.offsetWidth;
        rects[value] = {
          left: rect.left - tabsRef.current.getBoundingClientRect().left,
          width: rect.width,
        };
      });

      setTabsWidth(widths);
      setTabsRect(rects);
    };

    updateContentHeight();
    updateTabsMetrics();

    window.addEventListener('resize', updateContentHeight);
    window.addEventListener('resize', updateTabsMetrics);
    return () => {
      window.removeEventListener('resize', updateContentHeight);
      window.removeEventListener('resize', updateTabsMetrics);
    };
  }, [activeTab]);

  const handleTabChange = (tab) => {
    if (disabled || tab.disabled) return;
    if (value === undefined) {
      setActiveTab(tab.value);
    }
    onChange?.(tab.value);
  };

  const sizes = {
    small: {
      text: 'text-sm',
      icon: 'w-4 h-4',
      padding: 'px-3 py-1.5',
      spacing: 'space-x-1',
      indicator: 'h-0.5',
      badge: 'w-4 h-4 text-[10px]',
      content: 'p-3',
    },
    medium: {
      text: 'text-base',
      icon: 'w-5 h-5',
      padding: 'px-4 py-2',
      spacing: 'space-x-2',
      indicator: 'h-0.5',
      badge: 'w-5 h-5 text-[11px]',
      content: 'p-4',
    },
    large: {
      text: 'text-lg',
      icon: 'w-6 h-6',
      padding: 'px-6 py-3',
      spacing: 'space-x-3',
      indicator: 'h-0.5',
      badge: 'w-6 h-6 text-xs',
      content: 'p-6',
    },
  };

  const colors = {
    primary: {
      text: 'text-gray-600',
      hover: 'hover:text-blue-600',
      active: 'text-blue-600',
      indicator: 'bg-blue-600',
      disabled: 'text-gray-300',
      ring: 'focus:ring-blue-200',
      content: 'bg-blue-50/30',
      badge: 'bg-blue-500',
      border: 'border-blue-200',
    },
    secondary: {
      text: 'text-gray-600',
      hover: 'hover:text-gray-900',
      active: 'text-gray-900',
      indicator: 'bg-gray-900',
      disabled: 'text-gray-300',
      ring: 'focus:ring-gray-200',
      content: 'bg-gray-50/30',
      badge: 'bg-gray-500',
      border: 'border-gray-200',
    },
    success: {
      text: 'text-gray-600',
      hover: 'hover:text-green-600',
      active: 'text-green-600',
      indicator: 'bg-green-600',
      disabled: 'text-gray-300',
      ring: 'focus:ring-green-200',
      content: 'bg-green-50/30',
      badge: 'bg-green-500',
      border: 'border-green-200',
    },
    white: {
      text: 'text-gray-400',
      hover: 'hover:text-white',
      active: 'text-white',
      indicator: 'bg-white',
      disabled: 'text-gray-600',
      ring: 'focus:ring-white/20',
      content: 'bg-white/5',
      badge: 'bg-white',
      border: 'border-white/20',
    },
  };

  const variants = {
    default: {
      tab: '',
      indicator: 'absolute bottom-0 left-0 right-0',
      list: 'border-b border-gray-200',
      content: '',
    },
    pills: {
      tab: 'rounded-full',
      indicator: 'absolute inset-0 rounded-full -z-10',
      list: '',
      content: 'rounded-lg',
    },
    bordered: {
      tab: 'border-b-2 border-transparent',
      indicator: 'absolute bottom-0 left-0 right-0',
      list: 'border-b border-gray-200',
      content: 'border rounded-lg',
    },
    lifted: {
      tab: 'border-2 border-transparent rounded-t-lg',
      indicator: 'absolute bottom-0 left-0 right-0 top-0 border-2 rounded-t-lg -z-10',
      list: 'border-b border-gray-200',
      content: 'border-x border-b rounded-b-lg shadow-sm',
    },
    enclosed: {
      tab: 'border border-transparent rounded-t-lg',
      indicator: 'absolute inset-0 border rounded-t-lg -z-10',
      list: 'border-b border-gray-200',
      content: 'border-x border-b rounded-b-lg',
    },
  };

  const orientations = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
  };

  const getTabStyle = (item) => {
    const isActive = item.value === (value || activeTab);
    const isDisabled = disabled || item.disabled;
    const isHovered = hoveredTab === item.value;

    return `
      ${sizes[size].text}
      ${sizes[size].padding}
      ${variants[variant].tab}
      ${isDisabled ? colors[color].disabled : isActive ? colors[color].active : colors[color].text}
      ${!isDisabled && !isActive && colors[color].hover}
      relative
      transition-all
      duration-200
      cursor-pointer
      select-none
      flex
      items-center
      ${sizes[size].spacing}
      ${fullWidth ? 'flex-1 justify-center' : ''}
      ${isDisabled ? 'cursor-not-allowed' : ''}
      focus:outline-none focus:ring-2 ${colors[color].ring}
      ${isHovered && !isActive && !isDisabled ? 'bg-gray-50/50' : ''}
    `;
  };

  const containerClasses = `
    flex
    ${orientations[orientation]}
    ${centered ? 'justify-center' : ''}
    ${variants[variant].list}
    ${className || ''}
  `;

  const currentTab = items.find(item => item.value === (value || activeTab));

  return (
    <div {...props}>
      <div
        ref={tabsRef}
        role="tablist"
        className={containerClasses}
      >
        {items.map((item) => (
          <motion.div
            key={item.value}
            role="tab"
            data-tab-value={item.value}
            aria-selected={item.value === (value || activeTab)}
            tabIndex={disabled || item.disabled ? -1 : 0}
            className={getTabStyle(item)}
            onClick={() => handleTabChange(item)}
            onHoverStart={() => setHoveredTab(item.value)}
            onHoverEnd={() => setHoveredTab(null)}
            whileHover={!disabled && !item.disabled && { scale: 1.02 }}
            whileTap={!disabled && !item.disabled && { scale: 0.98 }}
          >
            {item.icon && (
              <item.icon className={`
                ${sizes[size].icon}
                ${item.value === (value || activeTab) ? '' : 'opacity-75'}
                transition-opacity duration-200
              `} />
            )}
            {item.label}
            {item.badge && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`
                  ${sizes[size].badge}
                  ${colors[color].badge}
                  text-white font-bold
                  rounded-full
                  flex items-center justify-center
                  ml-2
                `}
              >
                {item.badge.content}
              </motion.span>
            )}
            {variant !== 'pills' && item.value === (value || activeTab) && (
              <motion.div
                className={`
                  ${variants[variant].indicator}
                  ${colors[color].indicator}
                  ${sizes[size].indicator}
                `}
                layoutId={animated ? 'indicator' : undefined}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                style={tabsRect[item.value] ? {
                  width: tabsRect[item.value].width,
                  left: tabsRect[item.value].left,
                } : undefined}
              />
            )}
          </motion.div>
        ))}
        {variant === 'pills' && (
          <motion.div
            className={`
              ${variants[variant].indicator}
              ${colors[color].indicator}
              opacity-10
            `}
            layoutId={animated ? 'pill-indicator' : undefined}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            style={tabsRect[activeTab] ? {
              width: tabsRect[activeTab].width,
              left: tabsRect[activeTab].left,
            } : undefined}
          />
        )}
      </div>
      <AnimatePresence mode="wait">
        {currentTab?.content && (
          <motion.div
            key={currentTab.value}
            role="tabpanel"
            data-tab-content={currentTab.value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`
              ${sizes[size].content}
              ${colors[color].content}
              ${variants[variant].content}
              ${colors[color].border}
            `}
            style={{ minHeight: contentHeight }}
          >
            {currentTab.content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Tabs.propTypes = {
  /** Array of tab items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      /** Label text for the tab */
      label: PropTypes.string.isRequired,
      /** Unique value for the tab */
      value: PropTypes.string.isRequired,
      /** Icon component for the tab */
      icon: PropTypes.elementType,
      /** Whether the tab is disabled */
      disabled: PropTypes.bool,
      /** Content to show when tab is active */
      content: PropTypes.node,
      /** Badge configuration */
      badge: PropTypes.shape({
        /** Content to show in the badge */
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    })
  ),
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'pills', 'bordered', 'lifted', 'enclosed']),
  /** Size of the tabs */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color theme */
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'white']),
  /** Tab list orientation */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /** Whether to make tabs take full width */
  fullWidth: PropTypes.bool,
  /** Whether to center the tabs */
  centered: PropTypes.bool,
  /** Whether to animate tab changes */
  animated: PropTypes.bool,
  /** Whether all tabs are disabled */
  disabled: PropTypes.bool,
  /** Initial active tab (uncontrolled) */
  defaultValue: PropTypes.string,
  /** Active tab (controlled) */
  value: PropTypes.string,
  /** Called when active tab changes */
  onChange: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Tabs; 