import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiLayout,
  FiAlignCenter,
  FiAlignLeft,
  FiAlignRight,
  FiSettings,
  FiMaximize2,
  FiMinimize2,
} from 'react-icons/fi';

const FlexboxWrapper = ({
  children,
  direction = 'row',
  wrap = 'wrap',
  justify = 'start',
  align = 'stretch',
  gap = 'default',
  className = '',
  animate = true,
  customizable = false,
  variant = 'default',
  responsive = true,
  ...props
}) => {
  const [isCustomizing, setIsCustomizing] = React.useState(false);
  const [settings, setSettings] = React.useState({
    direction,
    wrap,
    justify,
    align,
    gap,
  });

  const directionClasses = {
    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    col: 'flex-col',
    'col-reverse': 'flex-col-reverse',
  };

  const wrapClasses = {
    wrap: 'flex-wrap',
    nowrap: 'flex-nowrap',
    'wrap-reverse': 'flex-wrap-reverse',
  };

  const justifyClasses = {
    start: 'justify-start',
    end: 'justify-end',
    center: 'justify-center',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const alignClasses = {
    start: 'items-start',
    end: 'items-end',
    center: 'items-center',
    baseline: 'items-baseline',
    stretch: 'items-stretch',
  };

  const gapClasses = {
    none: 'gap-0',
    small: 'gap-2',
    default: 'gap-4',
    large: 'gap-6',
    xlarge: 'gap-8',
  };

  const variants = {
    default: '',
    bordered: 'divide-x divide-gray-200 dark:divide-gray-700',
    cards: '[&>*]:bg-white dark:[&>*]:bg-gray-800 [&>*]:shadow-lg dark:[&>*]:shadow-gray-900/10 [&>*]:rounded-lg [&>*]:p-4',
    outline: 'border border-gray-200 dark:border-gray-700 rounded-lg p-4',
  };

  const responsiveClasses = responsive
    ? {
        sm: 'sm:flex-row',
        md: 'md:flex-row',
        lg: 'lg:flex-row',
        xl: 'xl:flex-row',
      }
    : {};

  const containerAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const buttonAnimation = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;

      return (
        <motion.div
          variants={animate ? itemAnimation : undefined}
          custom={index}
          className="flex-shrink-0"
        >
          {child}
        </motion.div>
      );
    });
  };

  return (
    <div className="space-y-4">
      {customizable && (
        <div className="flex justify-end">
          <motion.button
            variants={buttonAnimation}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setIsCustomizing(!isCustomizing)}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <FiSettings className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </motion.button>
        </div>
      )}

      <AnimatePresence>
        {isCustomizing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Direction
                </label>
                <select
                  value={settings.direction}
                  onChange={(e) => setSettings({ ...settings, direction: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                >
                  {Object.keys(directionClasses).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Wrap
                </label>
                <select
                  value={settings.wrap}
                  onChange={(e) => setSettings({ ...settings, wrap: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                >
                  {Object.keys(wrapClasses).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Justify Content
                </label>
                <select
                  value={settings.justify}
                  onChange={(e) => setSettings({ ...settings, justify: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                >
                  {Object.keys(justifyClasses).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Align Items
                </label>
                <select
                  value={settings.align}
                  onChange={(e) => setSettings({ ...settings, align: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                >
                  {Object.keys(alignClasses).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Gap
                </label>
                <select
                  value={settings.gap}
                  onChange={(e) => setSettings({ ...settings, gap: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                >
                  {Object.keys(gapClasses).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        variants={animate ? containerAnimation : undefined}
        initial="hidden"
        animate="visible"
        className={`
          flex
          ${directionClasses[settings.direction]}
          ${wrapClasses[settings.wrap]}
          ${justifyClasses[settings.justify]}
          ${alignClasses[settings.align]}
          ${gapClasses[settings.gap]}
          ${variants[variant]}
          ${responsive ? 'flex-col' : ''}
          ${responsive ? Object.values(responsiveClasses).join(' ') : ''}
          ${className}
        `}
        {...props}
      >
        {renderChildren()}
      </motion.div>
    </div>
  );
};

export default FlexboxWrapper; 