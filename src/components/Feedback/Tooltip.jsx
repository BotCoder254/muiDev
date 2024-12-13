/**
 * @component Tooltip
 * @description A professional tooltip component with animations and rich features.
 */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip = ({
  content,
  children,
  position = 'top',
  variant = 'default',
  color = 'primary',
  size = 'medium',
  delay = 0,
  trigger = 'hover',
  showArrow = true,
  icon: Icon,
  showIcon = false,
  maxWidth = 250,
  className = '',
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timeoutRef = useRef(null);

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    let x = 0;
    let y = 0;

    switch (position) {
      case 'top':
        x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2 + scrollX;
        y = triggerRect.top - tooltipRect.height - 8 + scrollY;
        break;
      case 'bottom':
        x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2 + scrollX;
        y = triggerRect.bottom + 8 + scrollY;
        break;
      case 'left':
        x = triggerRect.left - tooltipRect.width - 8 + scrollX;
        y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2 + scrollY;
        break;
      case 'right':
        x = triggerRect.right + 8 + scrollX;
        y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2 + scrollY;
        break;
      default:
        break;
    }

    // Keep tooltip within viewport
    const padding = 8;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    x = Math.min(Math.max(padding, x), viewportWidth - tooltipRect.width - padding);
    y = Math.min(Math.max(padding, y), viewportHeight - tooltipRect.height - padding);

    setTooltipPosition({ x, y });
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    }

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible]);

  const handleMouseEnter = () => {
    if (trigger !== 'hover') return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const handleMouseLeave = () => {
    if (trigger !== 'hover') return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const handleClick = () => {
    if (trigger !== 'click') return;
    setIsVisible(!isVisible);
  };

  const variants = {
    default: {
      container: 'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700',
      arrow: 'border-gray-200 dark:border-gray-700',
    },
    flat: {
      container: 'bg-gray-900 dark:bg-gray-100',
      arrow: 'bg-gray-900 dark:bg-gray-100',
    },
    minimal: {
      container: 'bg-gray-900/90 dark:bg-gray-100/90 backdrop-blur-sm',
      arrow: 'bg-gray-900/90 dark:bg-gray-100/90',
    },
  };

  const colors = {
    primary: 'text-gray-900 dark:text-white',
    info: 'text-blue-900 dark:text-blue-100',
    success: 'text-green-900 dark:text-green-100',
    warning: 'text-yellow-900 dark:text-yellow-100',
    error: 'text-red-900 dark:text-red-100',
  };

  const sizes = {
    small: 'text-xs p-2',
    medium: 'text-sm p-3',
    large: 'text-base p-4',
  };

  const arrowPositions = {
    top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-0 border-l-0',
    bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full rotate-180 border-b-0 border-r-0',
    left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full rotate-90 border-l-0 border-b-0',
    right: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full -rotate-90 border-r-0 border-t-0',
  };

  const tooltipAnimation = {
    initial: {
      opacity: 0,
      scale: 0.9,
      ...(['top', 'bottom'].includes(position)
        ? { y: position === 'top' ? 8 : -8 }
        : { x: position === 'left' ? 8 : -8 }),
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.15,
      },
    },
  };

  return (
    <div
      ref={triggerRef}
      className="inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            className={`
              fixed z-50 max-w-[${maxWidth}px]
              ${variants[variant].container}
              ${colors[color]}
              ${sizes[size]}
              rounded-lg
              ${className}
            `}
            style={{
              left: tooltipPosition.x,
              top: tooltipPosition.y,
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={tooltipAnimation}
            {...props}
          >
            <div className="flex items-center gap-2">
              {showIcon && Icon && (
                <Icon className={`
                  flex-shrink-0
                  ${size === 'small' ? 'w-3 h-3' :
                    size === 'medium' ? 'w-4 h-4' :
                    'w-5 h-5'
                  }
                `} />
              )}
              {content}
            </div>

            {showArrow && (
              <div
                className={`
                  absolute w-2 h-2 transform rotate-45
                  ${variants[variant].arrow}
                  ${arrowPositions[position]}
                  ${variant === 'default' ? 'border border-gray-200 dark:border-gray-700' : ''}
                `}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Tooltip.propTypes = {
  content: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  variant: PropTypes.oneOf(['default', 'flat', 'minimal']),
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  delay: PropTypes.number,
  trigger: PropTypes.oneOf(['hover', 'click']),
  showArrow: PropTypes.bool,
  icon: PropTypes.elementType,
  showIcon: PropTypes.bool,
  maxWidth: PropTypes.number,
  className: PropTypes.string,
};

export default Tooltip; 