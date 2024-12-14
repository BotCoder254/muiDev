import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiGrid,
  FiColumns,
  FiLayout,
  FiMaximize2,
  FiMinimize2,
  FiSettings,
} from 'react-icons/fi';

const Grid = ({
  children,
  cols = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  },
  gap = 'default',
  autoFlow = 'row',
  autoRows = 'auto',
  autoCols = 'auto',
  alignItems = 'stretch',
  justifyItems = 'stretch',
  className = '',
  animate = true,
  customizable = false,
  variant = 'default',
  ...props
}) => {
  const [isCustomizing, setIsCustomizing] = React.useState(false);
  const [settings, setSettings] = React.useState({
    gap,
    autoFlow,
    alignItems,
    justifyItems,
  });

  const gapClasses = {
    none: 'gap-0',
    small: 'gap-2',
    default: 'gap-4',
    large: 'gap-6',
    xlarge: 'gap-8',
  };

  const autoFlowClasses = {
    row: 'grid-flow-row',
    col: 'grid-flow-col',
    dense: 'grid-flow-dense',
    'row-dense': 'grid-flow-row-dense',
    'col-dense': 'grid-flow-col-dense',
  };

  const alignItemsClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  const justifyItemsClasses = {
    start: 'justify-items-start',
    center: 'justify-items-center',
    end: 'justify-items-end',
    stretch: 'justify-items-stretch',
  };

  const variants = {
    default: '',
    bordered: 'divide-x divide-y divide-gray-200 dark:divide-gray-700',
    cells: '[&>*]:border [&>*]:border-gray-200 dark:[&>*]:border-gray-700 [&>*]:rounded-lg [&>*]:p-4',
    cards: '[&>*]:bg-white dark:[&>*]:bg-gray-800 [&>*]:shadow-lg dark:[&>*]:shadow-gray-900/10 [&>*]:rounded-lg [&>*]:p-4',
  };

  const getResponsiveCols = () => {
    const breakpoints = {
      xs: '',
      sm: 'sm:',
      md: 'md:',
      lg: 'lg:',
      xl: 'xl:',
      '2xl': '2xl:',
    };

    return Object.entries(cols)
      .map(([breakpoint, value]) => `${breakpoints[breakpoint]}grid-cols-${value}`)
      .join(' ');
  };

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
          className="h-full"
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
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Auto Flow
                </label>
                <select
                  value={settings.autoFlow}
                  onChange={(e) => setSettings({ ...settings, autoFlow: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                >
                  {Object.keys(autoFlowClasses).map((key) => (
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
                  value={settings.alignItems}
                  onChange={(e) => setSettings({ ...settings, alignItems: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                >
                  {Object.keys(alignItemsClasses).map((key) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Justify Items
                </label>
                <select
                  value={settings.justifyItems}
                  onChange={(e) => setSettings({ ...settings, justifyItems: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm"
                >
                  {Object.keys(justifyItemsClasses).map((key) => (
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
          grid
          ${getResponsiveCols()}
          ${gapClasses[settings.gap]}
          ${autoFlowClasses[settings.autoFlow]}
          ${alignItemsClasses[settings.alignItems]}
          ${justifyItemsClasses[settings.justifyItems]}
          ${variants[variant]}
          ${className}
        `}
        style={{
          gridAutoRows: autoRows,
          gridAutoColumns: autoCols,
        }}
        {...props}
      >
        {renderChildren()}
      </motion.div>
    </div>
  );
};

export default Grid; 