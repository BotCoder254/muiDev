/**
 * @component Switch
 * @description A professional switch (toggle) component with animations and rich features.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  FiCheck,
  FiX,
  FiSun,
  FiMoon,
  FiBell,
  FiBellOff,
  FiWifi,
  FiWifiOff,
  FiEye,
  FiEyeOff,
  FiVolume2,
  FiVolumeX,
  FiLock,
  FiUnlock,
} from 'react-icons/fi';

const Switch = ({
  checked,
  defaultChecked,
  label,
  description,
  helperText,
  variant = 'default',
  size = 'medium',
  color = 'primary',
  icon,
  iconOn,
  iconOff,
  showIcons = true,
  disabled = false,
  error,
  success,
  onChange,
  className,
  ...props
}) => {
  const [isChecked, setIsChecked] = React.useState(
    checked !== undefined ? checked : defaultChecked || false
  );
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  // Motion values for smooth animations
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 20, stiffness: 300 });
  const scale = useSpring(1);

  React.useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
      x.set(checked ? 1 : 0);
    }
  }, [checked, x]);

  const sizes = {
    small: {
      track: 'w-8 h-4',
      thumb: 'w-3 h-3',
      text: 'text-sm',
      label: 'mb-1',
      helper: 'mt-1',
      gap: 'gap-2',
      icon: 'w-2 h-2',
    },
    medium: {
      track: 'w-10 h-5',
      thumb: 'w-4 h-4',
      text: 'text-base',
      label: 'mb-1.5',
      helper: 'mt-1.5',
      gap: 'gap-3',
      icon: 'w-2.5 h-2.5',
    },
    large: {
      track: 'w-12 h-6',
      thumb: 'w-5 h-5',
      text: 'text-lg',
      label: 'mb-2',
      helper: 'mt-2',
      gap: 'gap-4',
      icon: 'w-3 h-3',
    },
  };

  const colors = {
    primary: {
      track: {
        off: 'bg-gray-200',
        on: 'bg-blue-500',
      },
      thumb: {
        off: 'bg-white',
        on: 'bg-white',
      },
      text: 'text-gray-700',
      helper: 'text-gray-500',
      error: 'text-red-500',
      success: 'text-green-500',
      focus: 'ring-blue-500',
      icon: {
        off: 'text-gray-400',
        on: 'text-blue-500',
      },
      disabled: 'bg-gray-100 text-gray-400',
    },
    secondary: {
      track: {
        off: 'bg-gray-200',
        on: 'bg-gray-700',
      },
      thumb: {
        off: 'bg-white',
        on: 'bg-white',
      },
      text: 'text-gray-700',
      helper: 'text-gray-500',
      error: 'text-red-500',
      success: 'text-green-500',
      focus: 'ring-gray-500',
      icon: {
        off: 'text-gray-400',
        on: 'text-gray-700',
      },
      disabled: 'bg-gray-100 text-gray-400',
    },
    white: {
      track: {
        off: 'bg-gray-600',
        on: 'bg-white',
      },
      thumb: {
        off: 'bg-gray-400',
        on: 'bg-gray-800',
      },
      text: 'text-gray-100',
      helper: 'text-gray-300',
      error: 'text-red-400',
      success: 'text-green-400',
      focus: 'ring-white',
      icon: {
        off: 'text-gray-500',
        on: 'text-white',
      },
      disabled: 'bg-gray-700 text-gray-500',
    },
  };

  const variants = {
    default: {
      track: 'rounded-full',
      thumb: 'rounded-full shadow-md',
    },
    flat: {
      track: 'rounded-none',
      thumb: 'rounded-none shadow-none',
    },
    soft: {
      track: 'rounded-full shadow-inner',
      thumb: 'rounded-full shadow-lg',
    },
  };

  const getIcon = (type) => {
    if (type === 'on' && iconOn) return iconOn;
    if (type === 'off' && iconOff) return iconOff;
    if (icon) return icon;

    // Default icons based on common use cases
    switch (label?.toLowerCase()) {
      case 'dark mode':
      case 'theme':
        return type === 'on' ? FiMoon : FiSun;
      case 'notifications':
      case 'alerts':
        return type === 'on' ? FiBell : FiBellOff;
      case 'wifi':
      case 'connection':
        return type === 'on' ? FiWifi : FiWifiOff;
      case 'visibility':
      case 'show':
        return type === 'on' ? FiEye : FiEyeOff;
      case 'sound':
      case 'volume':
      case 'mute':
        return type === 'on' ? FiVolume2 : FiVolumeX;
      case 'lock':
      case 'security':
        return type === 'on' ? FiLock : FiUnlock;
      default:
        return type === 'on' ? FiCheck : FiX;
    }
  };

  const handleChange = (e) => {
    if (disabled) return;

    const newValue = !isChecked;
    if (checked === undefined) {
      setIsChecked(newValue);
      x.set(newValue ? 1 : 0);
    }
    onChange?.(e, newValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleChange(e);
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovered(true);
      scale.set(1.05);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    scale.set(1);
  };

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true);
      scale.set(1.05);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    scale.set(1);
  };

  const OnIcon = getIcon('on');
  const OffIcon = getIcon('off');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${className || ''}`}
    >
      <div className={`
        inline-flex items-center
        ${sizes[size].gap}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}>
        {/* Switch */}
        <motion.div
          role="switch"
          tabIndex={disabled ? -1 : 0}
          aria-checked={isChecked}
          aria-label={label}
          onClick={handleChange}
          onKeyDown={handleKeyDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
          onBlur={handleBlur}
          animate={{ scale }}
          className={`
            relative
            inline-flex
            flex-shrink-0
            ${sizes[size].track}
            ${variants[variant].track}
            ${isChecked ? colors[color].track.on : colors[color].track.off}
            ${disabled ? colors[color].disabled : ''}
            ${error ? 'ring-2 ring-red-500' : ''}
            ${success ? 'ring-2 ring-green-500' : ''}
            ${isFocused ? `ring-2 ${colors[color].focus}` : ''}
            transition-colors
            duration-200
            ease-in-out
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
          `}
          {...props}
        >
          {/* Track icons */}
          {showIcons && (
            <>
              <span className={`
                absolute
                inset-y-0
                left-0
                flex
                items-center
                justify-center
                w-1/2
                opacity-${isChecked ? '0' : '100'}
                transition-opacity
                duration-200
                ${colors[color].icon.off}
              `}>
                <OffIcon className={sizes[size].icon} />
              </span>
              <span className={`
                absolute
                inset-y-0
                right-0
                flex
                items-center
                justify-center
                w-1/2
                opacity-${isChecked ? '100' : '0'}
                transition-opacity
                duration-200
                ${colors[color].icon.on}
              `}>
                <OnIcon className={sizes[size].icon} />
              </span>
            </>
          )}

          {/* Thumb */}
          <motion.span
            className={`
              pointer-events-none
              ${sizes[size].thumb}
              ${variants[variant].thumb}
              ${isChecked ? colors[color].thumb.on : colors[color].thumb.off}
              absolute
              top-1/2
              transform
              -translate-y-1/2
            `}
            style={{
              x: useTransform(springX, [0, 1], [2, parseFloat(sizes[size].track.split('w-')[1]) * 4 - parseFloat(sizes[size].thumb.split('w-')[1]) * 4 - 2]),
            }}
          />
        </motion.div>

        {/* Label and Description */}
        {(label || description) && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {label && (
              <div className={`
                font-medium
                ${sizes[size].text}
                ${colors[color].text}
              `}>
                {label}
              </div>
            )}
            {description && (
              <div className={`
                ${sizes[size].text}
                ${colors[color].helper}
              `}>
                {description}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Helper text */}
      {(helperText || error || success) && (
        <AnimatePresence mode="wait">
          <motion.p
            key={error || success || helperText}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`
              ${sizes[size].text}
              ${sizes[size].helper}
              ${error ? colors[color].error : success ? colors[color].success : colors[color].helper}
            `}
          >
            {error || success || helperText}
          </motion.p>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

Switch.propTypes = {
  /** Whether the switch is checked (controlled) */
  checked: PropTypes.bool,
  /** Default checked state (uncontrolled) */
  defaultChecked: PropTypes.bool,
  /** Switch label */
  label: PropTypes.string,
  /** Additional description */
  description: PropTypes.string,
  /** Helper text */
  helperText: PropTypes.string,
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'flat', 'soft']),
  /** Size preset */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color theme */
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  /** Custom icon component */
  icon: PropTypes.elementType,
  /** Custom icon for checked state */
  iconOn: PropTypes.elementType,
  /** Custom icon for unchecked state */
  iconOff: PropTypes.elementType,
  /** Whether to show track icons */
  showIcons: PropTypes.bool,
  /** Whether the switch is disabled */
  disabled: PropTypes.bool,
  /** Error message */
  error: PropTypes.string,
  /** Success message */
  success: PropTypes.string,
  /** Change handler */
  onChange: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default Switch; 