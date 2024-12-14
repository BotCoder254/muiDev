import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartIcon,
  ShareIcon,
  BookmarkIcon,
  EllipsisHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
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
  images = [],
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
  enableImageNavigation = true,
  imageInterval = 5000,
  ...props
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const processedImages = images.length > 0 
    ? images.map(img => typeof img === 'string' ? { src: img } : img)
    : image 
      ? [typeof image === 'string' ? { src: image } : image]
      : [];

  const currentImage = processedImages[currentImageIndex]?.src || '';

  React.useEffect(() => {
    if (processedImages.length <= 1 || !enableImageNavigation || isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % processedImages.length);
    }, imageInterval);

    return () => clearInterval(interval);
  }, [processedImages.length, enableImageNavigation, imageInterval, isHovered]);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? processedImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      (prev + 1) % processedImages.length
    );
  };

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={currentImage}
          alt={processedImages[currentImageIndex]?.alt || imageAlt}
          className={`
            w-full h-full object-cover
            ${blur ? 'blur-sm scale-110' : ''}
            ${hover ? 'group-hover:scale-110 transition-transform duration-500' : ''}
          `}
        />
      </AnimatePresence>

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

      {enableImageNavigation && processedImages.length > 1 && (
        <>
          <div className={`
            absolute inset-0 flex items-center justify-between
            opacity-0 group-hover:opacity-100 transition-opacity duration-200
          `}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevImage}
              className="ml-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNextImage}
              className="mr-2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </motion.button>
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {processedImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`
                  w-2 h-2 rounded-full transition-all duration-200
                  ${currentImageIndex === index 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/75'}
                `}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </>
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
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
      })
    ])
  ),
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ]),
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
  enableImageNavigation: PropTypes.bool,
  imageInterval: PropTypes.number,
};

export default Card; 