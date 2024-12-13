import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import {
  HeartIcon,
  ShareIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';

/**
 * A modern, animated card component with rich features and interactive elements
 */
const Card = ({
  children,
  variant = 'default',
  padding = 'medium',
  shadow = 'medium',
  hover = true,
  interactive = false,
  loading = false,
  className,
  onClick,
  image,
  imageAlt,
  imagePosition = 'top',
  title,
  subtitle,
  actions,
  footer,
  badges = [],
  showSocialActions = false,
  aspectRatio = '16/9',
  blur = false,
  overlay = false,
  ...props
}) => {
  const baseClasses = 'rounded-xl bg-white overflow-hidden transition-all duration-200';
  
  const variants = {
    default: 'border border-gray-200',
    outlined: 'border-2 border-gray-300',
    elevated: 'border border-gray-100',
    glass: 'backdrop-blur-md bg-white/80 border border-white/20',
    solid: 'bg-gray-900 text-white border-none',
    gradient: 'bg-gradient-to-br from-blue-500 to-purple-600 text-white border-none',
  };

  const paddings = {
    none: '',
    small: 'p-3',
    medium: 'p-5',
    large: 'p-8',
  };

  const shadows = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const hoverEffects = hover ? {
    default: 'hover:border-gray-300 hover:shadow-lg',
    outlined: 'hover:border-gray-400 hover:shadow-md',
    elevated: 'hover:-translate-y-1 hover:shadow-xl',
    glass: 'hover:bg-white/90 hover:shadow-xl',
    solid: 'hover:bg-gray-800 hover:shadow-xl',
    gradient: 'hover:shadow-xl hover:scale-[1.02]',
  } : {};

  const imagePositionClasses = {
    top: 'flex-col',
    bottom: 'flex-col-reverse',
    left: 'flex-row',
    right: 'flex-row-reverse',
    background: 'relative',
  };

  const classes = `
    ${baseClasses}
    ${variants[variant]}
    ${padding !== 'none' && !image ? paddings[padding] : ''}
    ${shadows[shadow]}
    ${hover ? hoverEffects[variant] : ''}
    ${interactive ? 'cursor-pointer' : ''}
    ${imagePosition === 'left' || imagePosition === 'right' ? 'flex' : ''}
    ${className || ''}
  `;

  const ImageComponent = () => (
    <div 
      className={`
        relative overflow-hidden
        ${imagePosition === 'left' || imagePosition === 'right' ? 'w-1/3' : 'w-full'}
        ${imagePosition === 'background' ? 'absolute inset-0' : ''}
      `}
      style={{ aspectRatio }}
    >
      <motion.img
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={image}
        alt={imageAlt}
        className={`
          w-full h-full object-cover
          ${blur ? 'blur-sm scale-110' : ''}
          ${hover ? 'group-hover:scale-110 transition-transform duration-500' : ''}
        `}
      />
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      {badges.length > 0 && (
        <div className="absolute top-2 left-2 flex gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-semibold rounded-full bg-black/50 text-white backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  const SocialActions = () => (
    <div className="flex items-center gap-4 text-gray-500">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="hover:text-red-500"
      >
        <HeartIcon className="w-6 h-6" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="hover:text-blue-500"
      >
        <ShareIcon className="w-6 h-6" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="hover:text-yellow-500"
      >
        <BookmarkIcon className="w-6 h-6" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="ml-auto hover:text-gray-700"
      >
        <EllipsisHorizontalIcon className="w-6 h-6" />
      </motion.button>
    </div>
  );

  const cardContent = (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-[200px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-3 border-current border-t-transparent rounded-full"
          />
        </div>
      ) : (
        <>
          {image && imagePosition === 'background' && <ImageComponent />}
          <div className={`
            ${imagePosition === 'background' ? 'relative z-10' : ''}
            ${imagePosition === 'left' || imagePosition === 'right' ? 'flex-1' : ''}
            ${padding !== 'none' ? paddings[padding] : ''}
          `}>
            {image && imagePosition !== 'background' && <ImageComponent />}
            {(title || subtitle) && (
              <div className="space-y-1 mb-4">
                {title && (
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xl font-semibold"
                  >
                    {title}
                  </motion.h3>
                )}
                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-500 dark:text-gray-400"
                  >
                    {subtitle}
                  </motion.p>
                )}
              </div>
            )}
            {children}
            {showSocialActions && (
              <div className="mt-4 pt-4 border-t">
                <SocialActions />
              </div>
            )}
            {actions && (
              <div className="mt-4 flex gap-2 justify-end">
                {actions}
              </div>
            )}
          </div>
          {footer && (
            <div className={`
              mt-4 pt-4 border-t
              ${padding !== 'none' ? paddings[padding] : ''}
            `}>
              {footer}
            </div>
          )}
        </>
      )}
    </>
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: interactive ? 1.02 : 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: interactive ? 0.98 : 1,
    }
  };

  return (
    <motion.div
      className={`${classes} group`}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      variants={cardVariants}
      onClick={interactive ? onClick : undefined}
      {...props}
    >
      {cardContent}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated', 'glass', 'solid', 'gradient']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  shadow: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xl']),
  hover: PropTypes.bool,
  interactive: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imagePosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right', 'background']),
  title: PropTypes.node,
  subtitle: PropTypes.node,
  actions: PropTypes.node,
  footer: PropTypes.node,
  badges: PropTypes.arrayOf(PropTypes.string),
  showSocialActions: PropTypes.bool,
  aspectRatio: PropTypes.string,
  blur: PropTypes.bool,
  overlay: PropTypes.bool,
};

export default Card; 