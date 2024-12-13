/**
 * @component Modal
 * @description A professional modal component with animations and rich features.
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiX,
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiAlertTriangle,
  FiHelpCircle,
  FiMaximize2,
  FiMinimize2,
} from 'react-icons/fi';

const Modal = ({
  isOpen = false,
  onClose,
  title,
  description,
  children,
  variant = 'default',
  size = 'medium',
  color = 'primary',
  icon: Icon,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  fullScreen: initialFullScreen = false,
  centered = true,
  showOverlay = true,
  overlayBlur = true,
  className = '',
  footer,
  showMaximize = true,
  draggable = false,
  scrollable = true,
  loading = false,
  ...props
}) => {
  const [fullScreen, setFullScreen] = useState(initialFullScreen);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleEsc = (e) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEsc, onClose]);

  const variants = {
    default: {
      overlay: 'bg-black/50',
      container: 'bg-white dark:bg-gray-800 shadow-xl',
      header: 'border-b border-gray-200 dark:border-gray-700',
      close: 'hover:bg-gray-100 dark:hover:bg-gray-700',
    },
    flat: {
      overlay: 'bg-black/50',
      container: 'bg-white dark:bg-gray-800',
      header: 'bg-gray-50 dark:bg-gray-900',
      close: 'hover:bg-gray-200 dark:hover:bg-gray-600',
    },
    clean: {
      overlay: 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm',
      container: 'bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg',
      header: 'border-b border-gray-200/50 dark:border-gray-700/50',
      close: 'hover:bg-black/5 dark:hover:bg-white/5',
    },
  };

  const colors = {
    primary: 'text-blue-600 dark:text-blue-400',
    info: 'text-blue-500 dark:text-blue-400',
    success: 'text-green-500 dark:text-green-400',
    warning: 'text-yellow-500 dark:text-yellow-400',
    error: 'text-red-500 dark:text-red-400',
  };

  const sizes = {
    small: {
      width: 'max-w-sm',
      text: 'text-sm',
      icon: 'w-5 h-5',
      header: 'p-4',
      body: 'p-4',
      footer: 'p-4',
    },
    medium: {
      width: 'max-w-lg',
      text: 'text-base',
      icon: 'w-6 h-6',
      header: 'p-5',
      body: 'p-5',
      footer: 'p-5',
    },
    large: {
      width: 'max-w-3xl',
      text: 'text-lg',
      icon: 'w-7 h-7',
      header: 'p-6',
      body: 'p-6',
      footer: 'p-6',
    },
    fullWidth: {
      width: 'max-w-full mx-4',
      text: 'text-base',
      icon: 'w-6 h-6',
      header: 'p-5',
      body: 'p-5',
      footer: 'p-5',
    },
  };

  const currentSize = fullScreen ? sizes.fullWidth : sizes[size];
  const currentVariant = variants[variant];

  const modalAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const dragConstraints = {
    top: -100,
    left: -100,
    right: 100,
    bottom: 100,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 flex items-center justify-center">
            {/* Overlay */}
            {showOverlay && (
              <motion.div
                className={`fixed inset-0 ${currentVariant.overlay} ${
                  overlayBlur ? 'backdrop-blur-sm' : ''
                }`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={overlayAnimation}
                onClick={closeOnOverlayClick ? onClose : undefined}
              />
            )}

            {/* Modal */}
            <motion.div
              className={`
                relative ${currentSize.width} w-full ${currentVariant.container} 
                rounded-lg shadow-lg ${className} ${
                fullScreen ? 'fixed inset-0 rounded-none' : ''
              }
              `}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalAnimation}
              drag={draggable && !fullScreen}
              dragConstraints={dragConstraints}
              style={{ x: position.x, y: position.y }}
              onDragEnd={(_, info) => {
                setPosition({
                  x: position.x + info.offset.x,
                  y: position.y + info.offset.y,
                });
              }}
              {...props}
            >
              {/* Header */}
              <div
                className={`
                  ${currentVariant.header} ${currentSize.header}
                  flex items-center justify-between rounded-t-lg
                `}
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <Icon
                      className={`${currentSize.icon} ${colors[color]}`}
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    {title && (
                      <h3
                        className={`font-semibold ${currentSize.text} text-gray-900 dark:text-white`}
                      >
                        {title}
                      </h3>
                    )}
                    {description && (
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {showMaximize && !loading && (
                    <button
                      type="button"
                      className={`p-2 rounded-md ${currentVariant.close}`}
                      onClick={() => setFullScreen(!fullScreen)}
                    >
                      {fullScreen ? (
                        <FiMinimize2
                          className="w-5 h-5 text-gray-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <FiMaximize2
                          className="w-5 h-5 text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  )}
                  {showCloseButton && !loading && (
                    <button
                      type="button"
                      className={`p-2 rounded-md ${currentVariant.close}`}
                      onClick={onClose}
                    >
                      <FiX
                        className="w-5 h-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
              </div>

              {/* Body */}
              <div
                className={`
                  ${currentSize.body}
                  ${scrollable ? 'overflow-y-auto' : ''}
                  ${loading ? 'opacity-50' : ''}
                `}
                style={scrollable ? { maxHeight: 'calc(100vh - 200px)' } : {}}
              >
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
                  </div>
                ) : (
                  children
                )}
              </div>

              {/* Footer */}
              {footer && (
                <div
                  className={`
                    ${currentVariant.header} ${currentSize.footer}
                    rounded-b-lg mt-auto
                  `}
                >
                  {footer}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'flat', 'clean']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'error']),
  icon: PropTypes.elementType,
  showCloseButton: PropTypes.bool,
  closeOnOverlayClick: PropTypes.bool,
  closeOnEsc: PropTypes.bool,
  fullScreen: PropTypes.bool,
  centered: PropTypes.bool,
  showOverlay: PropTypes.bool,
  overlayBlur: PropTypes.bool,
  className: PropTypes.string,
  footer: PropTypes.node,
  showMaximize: PropTypes.bool,
  draggable: PropTypes.bool,
  scrollable: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Modal; 