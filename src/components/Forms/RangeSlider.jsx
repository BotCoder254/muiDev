/**
 * @component RangeSlider
 * @description A professional range slider component with rich features and animations.
 */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  FiMinus,
  FiPlus,
  FiVolume2,
  FiVolume1,
  FiVolumeX,
  FiSun,
  FiMoon,
  FiDollarSign,
  FiPercent,
} from 'react-icons/fi';

const RangeSlider = ({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  label,
  helperText,
  showValue = true,
  showLimits = true,
  showTicks = false,
  tickCount = 5,
  formatValue = (value) => value,
  variant = 'default',
  size = 'medium',
  color = 'primary',
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
  success,
  onChange,
  onChangeEnd,
  className,
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState(
    value !== undefined ? value : defaultValue !== undefined ? defaultValue : min
  );
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const sliderRef = useRef(null);
  
  // Motion values for smooth animations
  const progress = useMotionValue(((currentValue - min) / (max - min)) * 100);
  const springProgress = useSpring(progress, { damping: 20, stiffness: 300 });
  const scale = useSpring(1);

  useEffect(() => {
    if (value !== undefined) {
      setCurrentValue(value);
      progress.set(((value - min) / (max - min)) * 100);
    }
  }, [value, min, max, progress]);

  const sizes = {
    small: {
      track: 'h-1',
      thumb: 'w-3 h-3',
      text: 'text-sm',
      label: 'mb-1',
      helper: 'mt-1',
      tooltip: 'text-xs py-1 px-2',
      icon: 'w-4 h-4',
    },
    medium: {
      track: 'h-2',
      thumb: 'w-4 h-4',
      text: 'text-base',
      label: 'mb-1.5',
      helper: 'mt-1.5',
      tooltip: 'text-sm py-1.5 px-2.5',
      icon: 'w-5 h-5',
    },
    large: {
      track: 'h-3',
      thumb: 'w-5 h-5',
      text: 'text-lg',
      label: 'mb-2',
      helper: 'mt-2',
      tooltip: 'text-base py-2 px-3',
      icon: 'w-6 h-6',
    },
  };

  const colors = {
    primary: {
      track: 'bg-gray-200',
      progress: 'bg-blue-500',
      thumb: 'bg-white border-blue-500',
      text: 'text-gray-700',
      helper: 'text-gray-500',
      error: 'text-red-500',
      success: 'text-green-500',
      tooltip: 'bg-blue-500 text-white',
      disabled: 'bg-gray-100',
      icon: 'text-blue-500',
      iconDisabled: 'text-gray-400',
    },
    secondary: {
      track: 'bg-gray-200',
      progress: 'bg-gray-700',
      thumb: 'bg-white border-gray-700',
      text: 'text-gray-700',
      helper: 'text-gray-500',
      error: 'text-red-500',
      success: 'text-green-500',
      tooltip: 'bg-gray-700 text-white',
      disabled: 'bg-gray-100',
      icon: 'text-gray-700',
      iconDisabled: 'text-gray-400',
    },
    white: {
      track: 'bg-gray-600',
      progress: 'bg-white',
      thumb: 'bg-gray-800 border-white',
      text: 'text-gray-100',
      helper: 'text-gray-300',
      error: 'text-red-400',
      success: 'text-green-400',
      tooltip: 'bg-white text-gray-900',
      disabled: 'bg-gray-700',
      icon: 'text-white',
      iconDisabled: 'text-gray-500',
    },
  };

  const variants = {
    default: {
      track: 'rounded-full',
      thumb: 'rounded-full shadow-md border-2',
      tooltip: 'rounded-lg shadow-lg',
    },
    flat: {
      track: 'rounded-none',
      thumb: 'rounded-none shadow-none border-2',
      tooltip: 'rounded-none shadow-lg',
    },
    soft: {
      track: 'rounded-full shadow-inner',
      thumb: 'rounded-full shadow-lg border-0',
      tooltip: 'rounded-xl shadow-lg',
    },
  };

  const getIcon = () => {
    if (icon) return icon;
    if (currentValue === min) return FiVolumeX;
    if (currentValue < (max - min) / 2) return FiVolume1;
    return FiVolume2;
  };

  const calculateValue = (position) => {
    if (!sliderRef.current) return currentValue;

    const { width, left } = sliderRef.current.getBoundingClientRect();
    let percent = (position - left) / width;
    percent = Math.min(1, Math.max(0, percent));

    let newValue = min + (max - min) * percent;
    newValue = Math.round(newValue / step) * step;
    newValue = Math.min(max, Math.max(min, newValue));

    return newValue;
  };

  const handleMouseDown = (e) => {
    if (disabled) return;
    
    const newValue = calculateValue(e.clientX);
    setCurrentValue(newValue);
    progress.set(((newValue - min) / (max - min)) * 100);
    onChange?.(newValue);
    setIsDragging(true);
    setShowTooltip(true);
    scale.set(1.2);

    const handleMouseMove = (e) => {
      const newValue = calculateValue(e.clientX);
      setCurrentValue(newValue);
      progress.set(((newValue - min) / (max - min)) * 100);
      onChange?.(newValue);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setShowTooltip(false);
      scale.set(1);
      onChangeEnd?.(currentValue);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTouchStart = (e) => {
    if (disabled) return;
    
    const newValue = calculateValue(e.touches[0].clientX);
    setCurrentValue(newValue);
    progress.set(((newValue - min) / (max - min)) * 100);
    onChange?.(newValue);
    setIsDragging(true);
    setShowTooltip(true);
    scale.set(1.2);

    const handleTouchMove = (e) => {
      const newValue = calculateValue(e.touches[0].clientX);
      setCurrentValue(newValue);
      progress.set(((newValue - min) / (max - min)) * 100);
      onChange?.(newValue);
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setShowTooltip(false);
      scale.set(1);
      onChangeEnd?.(currentValue);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;

    let newValue = currentValue;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        newValue = Math.min(max, currentValue + step);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        newValue = Math.max(min, currentValue - step);
        break;
      case 'Home':
        newValue = min;
        break;
      case 'End':
        newValue = max;
        break;
      default:
        return;
    }

    setCurrentValue(newValue);
    progress.set(((newValue - min) / (max - min)) * 100);
    onChange?.(newValue);
    onChangeEnd?.(newValue);
  };

  const renderTicks = () => {
    const ticks = [];
    const interval = (max - min) / (tickCount - 1);

    for (let i = 0; i < tickCount; i++) {
      const value = min + interval * i;
      const position = ((value - min) / (max - min)) * 100;

      ticks.push(
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className={`
            absolute
            w-0.5
            ${sizes[size].track}
            ${colors[color].track}
            transform
            -translate-x-1/2
          `}
          style={{ left: `${position}%` }}
        />
      );
    }

    return ticks;
  };

  const Icon = getIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`space-y-2 ${className || ''}`}
    >
      {/* Label and value */}
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Icon && iconPosition === 'left' && (
              <Icon className={`
                ${sizes[size].icon}
                ${disabled ? colors[color].iconDisabled : colors[color].icon}
                transition-colors
                duration-200
              `} />
            )}
            {label && (
              <motion.label
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`
                  font-medium
                  ${sizes[size].text}
                  ${sizes[size].label}
                  ${colors[color].text}
                `}
              >
                {label}
              </motion.label>
            )}
          </div>
          {showValue && (
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`
                ${sizes[size].text}
                ${colors[color].text}
              `}
            >
              {formatValue(currentValue)}
            </motion.span>
          )}
        </div>
      )}

      {/* Slider */}
      <div
        ref={sliderRef}
        className={`
          relative
          ${sizes[size].track}
          ${variants[variant].track}
          ${colors[color].track}
          ${disabled ? colors[color].disabled : ''}
          cursor-pointer
        `}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={currentValue}
        aria-disabled={disabled}
        {...props}
      >
        {/* Progress bar */}
        <motion.div
          className={`
            absolute
            top-0
            left-0
            h-full
            ${variants[variant].track}
            ${colors[color].progress}
            ${disabled ? 'opacity-50' : ''}
          `}
          style={{ width: springProgress }}
        />

        {/* Ticks */}
        {showTicks && renderTicks()}

        {/* Thumb */}
        <motion.div
          className={`
            absolute
            top-1/2
            ${sizes[size].thumb}
            ${variants[variant].thumb}
            ${colors[color].thumb}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-grab active:cursor-grabbing'}
            transform
            -translate-x-1/2
            -translate-y-1/2
          `}
          style={{
            left: springProgress,
            scale,
          }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: -8 }}
                exit={{ opacity: 0, y: -20 }}
                className={`
                  absolute
                  bottom-full
                  left-1/2
                  transform
                  -translate-x-1/2
                  ${variants[variant].tooltip}
                  ${colors[color].tooltip}
                  ${sizes[size].tooltip}
                  whitespace-nowrap
                  pointer-events-none
                `}
              >
                {formatValue(currentValue)}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Limits */}
      {showLimits && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <span className={`
            ${sizes[size].text}
            ${colors[color].helper}
          `}>
            {formatValue(min)}
          </span>
          <span className={`
            ${sizes[size].text}
            ${colors[color].helper}
          `}>
            {formatValue(max)}
          </span>
        </motion.div>
      )}

      {/* Helper text */}
      {(helperText || error || success) && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            ${sizes[size].text}
            ${sizes[size].helper}
            ${error ? colors[color].error : success ? colors[color].success : colors[color].helper}
          `}
        >
          {error || success || helperText}
        </motion.p>
      )}
    </motion.div>
  );
};

RangeSlider.propTypes = {
  /** Minimum value */
  min: PropTypes.number,
  /** Maximum value */
  max: PropTypes.number,
  /** Step increment */
  step: PropTypes.number,
  /** Current value (controlled) */
  value: PropTypes.number,
  /** Default value (uncontrolled) */
  defaultValue: PropTypes.number,
  /** Field label */
  label: PropTypes.string,
  /** Helper text */
  helperText: PropTypes.string,
  /** Whether to show current value */
  showValue: PropTypes.bool,
  /** Whether to show min/max limits */
  showLimits: PropTypes.bool,
  /** Whether to show tick marks */
  showTicks: PropTypes.bool,
  /** Number of tick marks */
  tickCount: PropTypes.number,
  /** Value formatter function */
  formatValue: PropTypes.func,
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'flat', 'soft']),
  /** Size preset */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color theme */
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  /** Custom icon component */
  icon: PropTypes.elementType,
  /** Icon position */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /** Whether the slider is disabled */
  disabled: PropTypes.bool,
  /** Error message */
  error: PropTypes.string,
  /** Success message */
  success: PropTypes.string,
  /** Change handler */
  onChange: PropTypes.func,
  /** Change end handler */
  onChangeEnd: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default RangeSlider; 