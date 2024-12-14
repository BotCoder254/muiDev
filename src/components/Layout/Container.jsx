import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMaximize2,
  FiMinimize2,
  FiX,
  FiChevronUp,
  FiChevronDown,
  FiSettings,
  FiRefreshCw,
} from 'react-icons/fi';

const Container = ({
  children,
  maxWidth = '7xl',
  padding = true,
  centered = true,
  fluid = false,
  collapsible = false,
  removable = false,
  customizable = false,
  className = '',
  onRemove,
  animate = true,
  variant = 'default',
  ...props
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [isCustomizing, setIsCustomizing] = React.useState(false);
  const [settings, setSettings] = React.useState({
    padding: padding ? 'default' : 'none',
    rounded: true,
    shadow: true,
    border: false,
  });

  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    '3xl': 'max-w-[1920px]',
    '4xl': 'max-w-[2560px]',
    '5xl': 'max-w-[3440px]',
    '6xl': 'max-w-[3840px]',
    '7xl': 'max-w-[4096px]',
    full: 'max-w-full',
  };

  const paddingClasses = {
    none: '',
    small: 'px-2 py-1 sm:px-3 sm:py-2',
    default: 'px-4 py-2 sm:px-6 sm:py-4',
    large: 'px-6 py-4 sm:px-8 sm:py-6',
    xlarge: 'px-8 py-6 sm:px-12 sm:py-8',
  };

  const variants = {
    default: 'bg-white dark:bg-gray-800',
    primary: 'bg-primary-50 dark:bg-primary-900/10',
    secondary: 'bg-gray-50 dark:bg-gray-900/50',
    transparent: 'bg-transparent',
  };

  const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  const contentAnimation = {
    collapsed: { height: 0, opacity: 0 },
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: 'easeOut' },
        opacity: { duration: 0.2, ease: 'easeOut' },
      },
    },
  };

  const buttonAnimation = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={animate ? containerAnimation : undefined}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`
          ${fluid ? 'w-full' : maxWidthClasses[maxWidth]}
          ${centered ? 'mx-auto' : ''}
          ${paddingClasses[settings.padding]}
          ${variants[variant]}
          ${settings.rounded ? 'rounded-lg' : ''}
          ${settings.shadow ? 'shadow-lg dark:shadow-gray-900/10' : ''}
          ${settings.border ? 'border border-gray-200 dark:border-gray-700' : ''}
          ${className}
        `}
        {...props}
      >
        {(collapsible || removable || customizable) && (
          <div className="flex items-center justify-end gap-2 mb-4">
            {customizable && (
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setIsCustomizing(!isCustomizing)}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiSettings className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </motion.button>
            )}
            {collapsible && (
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isCollapsed ? (
                  <FiChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                ) : (
                  <FiChevronUp className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                )}
              </motion.button>
            )}
            {removable && (
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                onClick={onRemove}
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <FiX className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </motion.button>
            )}
          </div>
        )}

        <AnimatePresence>
          {isCustomizing && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg"
            >
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Padding
                  </label>
                  <select
                    value={settings.padding}
                    onChange={(e) => setSettings({ ...settings, padding: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                  >
                    {Object.keys(paddingClasses).map((key) => (
                      <option key={key} value={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.rounded}
                      onChange={(e) => setSettings({ ...settings, rounded: e.target.checked })}
                      className="rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Rounded</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.shadow}
                      onChange={(e) => setSettings({ ...settings, shadow: e.target.checked })}
                      className="rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Shadow</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.border}
                      onChange={(e) => setSettings({ ...settings, border: e.target.checked })}
                      className="rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Border</span>
                  </label>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          variants={collapsible ? contentAnimation : undefined}
          initial={isCollapsed ? 'collapsed' : 'expanded'}
          animate={isCollapsed ? 'collapsed' : 'expanded'}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Container; 