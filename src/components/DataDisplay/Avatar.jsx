import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiUser,
  FiCamera,
  FiEdit,
  FiTrash2,
  FiUpload,
  FiPlus,
} from 'react-icons/fi';

// Shared configuration objects
const sizes = {
  tiny: 'w-6 h-6 text-xs',
  small: 'w-8 h-8 text-sm',
  medium: 'w-12 h-12 text-base',
  large: 'w-16 h-16 text-lg',
  xlarge: 'w-24 h-24 text-xl',
};

const Avatar = ({
  src,
  alt = '',
  size = 'medium',
  variant = 'circle',
  status,
  statusPosition = 'bottom-right',
  interactive = false,
  editable = false,
  removable = false,
  uploadable = false,
  fallback,
  className = '',
  onEdit,
  onRemove,
  onUpload,
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState(false);

  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-500',
    busy: 'bg-red-500',
    away: 'bg-yellow-500',
  };

  const statusPositions = {
    'top-right': '-top-1 -right-1',
    'top-left': '-top-1 -left-1',
    'bottom-right': '-bottom-1 -right-1',
    'bottom-left': '-bottom-1 -left-1',
  };

  const variants = {
    circle: 'rounded-full',
    square: 'rounded-lg',
    rounded: 'rounded-xl',
  };

  const containerAnimation = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    hover: { scale: interactive ? 1.05 : 1 },
    tap: { scale: interactive ? 0.95 : 1 },
  };

  const overlayAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleImageError = () => {
    setError(true);
  };

  const renderFallback = () => {
    if (React.isValidElement(fallback)) return fallback;
    
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
        <FiUser className={`${size === 'tiny' || size === 'small' ? 'w-3 h-3' : 'w-6 h-6'} text-gray-400`} />
      </div>
    );
  };

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (file && onUpload) {
      onUpload(file);
    }
  };

  return (
    <motion.div
      className={`relative inline-block ${className}`}
      variants={containerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className={`
          relative overflow-hidden
          ${sizes[size]}
          ${variants[variant]}
          ${interactive ? 'cursor-pointer' : ''}
        `}
      >
        {src && !error ? (
          <img
            src={src}
            alt={alt}
            onError={handleImageError}
            className="w-full h-full object-cover"
          />
        ) : (
          renderFallback()
        )}

        <AnimatePresence>
          {isHovered && (editable || removable || uploadable) && (
            <motion.div
              variants={overlayAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2"
            >
              {editable && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit?.();
                  }}
                  className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white"
                >
                  <FiEdit className="w-4 h-4" />
                </motion.button>
              )}
              {removable && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove?.();
                  }}
                  className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white"
                >
                  <FiTrash2 className="w-4 h-4" />
                </motion.button>
              )}
              {uploadable && (
                <motion.label
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white cursor-pointer"
                >
                  <FiUpload className="w-4 h-4" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleUpload}
                    onClick={(e) => e.stopPropagation()}
                  />
                </motion.label>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {status && (
        <motion.div
          className={`absolute ${statusPositions[statusPosition]} w-3 h-3 ${statusColors[status]} rounded-full border-2 border-white dark:border-gray-800`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </motion.div>
  );
};

// Avatar Group Component
export const AvatarGroup = ({
  children,
  max = 4,
  size = 'medium',
  spacing = -2,
  className = '',
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  const excess = childrenArray.length - max;

  return (
    <div
      className={`flex items-center ${className}`}
      style={{ marginLeft: `${Math.abs(spacing)}rem` }}
      {...props}
    >
      {childrenArray.slice(0, max).map((child, index) => (
        <div
          key={index}
          style={{ marginLeft: `${spacing}rem` }}
          className="relative"
        >
          {React.cloneElement(child, { size })}
        </div>
      ))}
      {excess > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`
            relative flex items-center justify-center
            bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300
            ${sizes[size]} rounded-full
          `}
          style={{ marginLeft: `${spacing}rem` }}
        >
          <span className="text-sm font-medium">+{excess}</span>
        </motion.div>
      )}
    </div>
  );
};

export default Avatar; 