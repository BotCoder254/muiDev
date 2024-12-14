import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiChevronDown,
  FiChevronRight,
  FiPlus,
  FiMinus,
  FiEdit,
  FiTrash2,
  FiMaximize2,
  FiMinimize2,
  FiLock,
  FiUnlock,
  FiStar,
  FiInfo,
  FiAlertCircle,
  FiCheckCircle,
} from 'react-icons/fi';

const AccordionItem = ({
  title,
  children,
  icon,
  defaultOpen = false,
  variant = 'default',
  expandIcon = 'chevron',
  editable = false,
  removable = false,
  onEdit,
  onRemove,
  disabled = false,
  highlighted = false,
  locked = false,
  onLockToggle,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    default: {
      container: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
      header: 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700',
      content: 'bg-white dark:bg-gray-800',
    },
    primary: {
      container: 'bg-primary-50 dark:bg-primary-900/10 border border-primary-200 dark:border-primary-700',
      header: 'bg-primary-50 dark:bg-primary-900/10 hover:bg-primary-100 dark:hover:bg-primary-900/20',
      content: 'bg-white dark:bg-gray-800',
    },
    ghost: {
      container: 'border-none',
      header: 'hover:bg-gray-100 dark:hover:bg-gray-700',
      content: 'bg-transparent',
    },
    info: {
      container: 'bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-700',
      header: 'bg-blue-50 dark:bg-blue-900/10 hover:bg-blue-100 dark:hover:bg-blue-900/20',
      content: 'bg-white dark:bg-gray-800',
    },
    success: {
      container: 'bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-700',
      header: 'bg-green-50 dark:bg-green-900/10 hover:bg-green-100 dark:hover:bg-green-900/20',
      content: 'bg-white dark:bg-gray-800',
    },
    warning: {
      container: 'bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-700',
      header: 'bg-yellow-50 dark:bg-yellow-900/10 hover:bg-yellow-100 dark:hover:bg-yellow-900/20',
      content: 'bg-white dark:bg-gray-800',
    },
  };

  const expandIcons = {
    chevron: isOpen ? (
      <FiChevronDown className="w-5 h-5 transform transition-transform duration-200" />
    ) : (
      <FiChevronRight className="w-5 h-5 transform transition-transform duration-200" />
    ),
    plusMinus: isOpen ? (
      <FiMinus className="w-5 h-5" />
    ) : (
      <FiPlus className="w-5 h-5" />
    ),
    maximize: isOpen ? (
      <FiMinimize2 className="w-5 h-5" />
    ) : (
      <FiMaximize2 className="w-5 h-5" />
    ),
  };

  const getStatusIcon = () => {
    if (locked) return <FiLock className="w-4 h-4 text-gray-500 dark:text-gray-400" />;
    if (highlighted) return <FiStar className="w-4 h-4 text-yellow-500" />;
    
    switch (variant) {
      case 'info':
        return <FiInfo className="w-4 h-4 text-blue-500" />;
      case 'success':
        return <FiCheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <FiAlertCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return icon;
    }
  };

  const headerAnimation = {
    hover: {
      backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.05)' : 'transparent',
      transition: { duration: 0.2 },
    },
  };

  const contentAnimation = {
    initial: { height: 0, opacity: 0 },
    animate: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { duration: 0.3, ease: 'easeOut' },
        opacity: { duration: 0.2, ease: 'easeOut' },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: 'easeIn' },
        opacity: { duration: 0.2, ease: 'easeIn' },
      },
    },
  };

  return (
    <div
      className={`
        overflow-hidden rounded-lg transition-shadow duration-200
        ${variants[variant].container}
        ${isOpen ? 'shadow-md' : ''}
        ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
        ${highlighted ? 'ring-2 ring-yellow-400 dark:ring-yellow-500' : ''}
        ${className}
      `}
      {...props}
    >
      <motion.button
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        variants={headerAnimation}
        animate="hover"
        className={`
          w-full px-4 py-3 flex items-center justify-between
          text-left text-gray-900 dark:text-gray-100
          ${variants[variant].header}
          ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <div className="flex items-center gap-3">
          {getStatusIcon()}
          <span className="font-medium">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          {editable && !disabled && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.();
              }}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FiEdit className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </motion.button>
          )}
          {removable && !disabled && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onRemove?.();
              }}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FiTrash2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </motion.button>
          )}
          {locked !== undefined && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onLockToggle?.();
              }}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {locked ? (
                <FiLock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <FiUnlock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              )}
            </motion.button>
          )}
          <span className="text-gray-500 dark:text-gray-400">
            {expandIcons[expandIcon]}
          </span>
        </div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={contentAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`
              px-4 py-3 border-t border-gray-200 dark:border-gray-700
              ${variants[variant].content}
            `}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({
  items = [],
  variant = 'default',
  expandIcon = 'chevron',
  allowMultiple = false,
  className = '',
  ...props
}) => {
  const [openItems, setOpenItems] = useState(
    items.reduce((acc, item, index) => {
      if (item.defaultOpen) acc.add(index);
      return acc;
    }, new Set())
  );

  const handleItemClick = (index) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={`space-y-2 ${className}`} {...props}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          {...item}
          variant={item.variant || variant}
          expandIcon={item.expandIcon || expandIcon}
          isOpen={openItems.has(index)}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion; 