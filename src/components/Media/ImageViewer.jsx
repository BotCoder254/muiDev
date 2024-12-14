import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import {
  FiZoomIn,
  FiZoomOut,
  FiRotateCw,
  FiDownload,
  FiX,
  FiMaximize2,
  FiMinimize2,
  FiShare2,
  FiHeart,
  FiInfo,
  FiImage,
  FiCopy,
  FiGrid,
  FiFilter,
  FiShuffle,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

// Sample Unsplash API integration
const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';
const getRandomImage = async () => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}`
    );
    const data = await response.json();
    return {
      src: data.urls.regular,
      alt: data.alt_description,
      info: {
        title: data.description || 'Untitled',
        description: data.description,
        metadata: {
          Author: data.user.name,
          Location: data.location?.name || 'Unknown',
          'Taken on': new Date(data.created_at).toLocaleDateString(),
          Likes: data.likes,
          Downloads: data.downloads,
        },
      },
    };
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
};

const ImageViewer = ({
  images = [], // Array of image objects or strings
  currentImage, // Single image object or string for backward compatibility
  alt = '',
  className = '',
  enableZoom = true,
  enableDownload = true,
  enableRotate = true,
  enableShare = true,
  enableLike = true,
  enableInfo = true,
  enableRandomImage = true,
  enableGrid = true,
  enableEffects = true,
  initialScale = 1,
  maxScale = 4,
  onLike,
  onShare,
  onInfoClick,
  imageInfo,
  gridSize = 4,
  effects = ['none', 'grayscale', 'sepia', 'blur', 'brightness'],
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(initialScale);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [currentEffect, setCurrentEffect] = useState('none');
  const [showGrid, setShowGrid] = useState(false);
  const [showEffects, setShowEffects] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  // Process images array
  const processedImages = images.length > 0 
    ? images.map(img => typeof img === 'string' ? { src: img } : img)
    : currentImage 
      ? [typeof currentImage === 'string' ? { src: currentImage } : currentImage]
      : [];

  const currentImageData = processedImages[currentIndex] || {};

  useEffect(() => {
    if (isOpen) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.3 },
      });
    }
  }, [isOpen, controls]);

  const handleNext = () => {
    if (currentIndex < processedImages.length - 1) {
      setCurrentIndex(prev => prev + 1);
      resetImageState();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      resetImageState();
    }
  };

  const resetImageState = () => {
    setScale(initialScale);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
    controls.start({
      scale: 1,
      rotate: 0,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  const handleZoomIn = async () => {
    await controls.start({
      scale: scale * 1.5 <= maxScale ? scale * 1.5 : maxScale,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
    setScale((prev) => Math.min(prev * 1.5, maxScale));
  };

  const handleZoomOut = async () => {
    await controls.start({
      scale: Math.max(scale / 1.5, initialScale),
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
    setScale((prev) => Math.max(prev / 1.5, initialScale));
  };

  const handleRotate = async () => {
    await controls.start({
      rotate: rotation + 90,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    });
    setRotation((prev) => prev + 90);
  };

  const handleRandomImage = async () => {
    const newImage = await getRandomImage();
    if (newImage) {
      // Implement image change logic
    }
  };

  const handleEffectChange = (effect) => {
    setCurrentEffect(effect);
  };

  const getEffectStyle = () => {
    switch (currentEffect) {
      case 'grayscale':
        return 'filter grayscale';
      case 'sepia':
        return 'filter sepia';
      case 'blur':
        return 'filter blur-sm';
      case 'brightness':
        return 'filter brightness-125';
      default:
        return '';
    }
  };

  const imageAnimation = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  const overlayAnimation = {
    initial: { opacity: 0, backdropFilter: 'blur(0px)' },
    animate: { opacity: 1, backdropFilter: 'blur(8px)' },
    exit: { opacity: 0, backdropFilter: 'blur(0px)' },
  };

  const controlsAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
  };

  const gridAnimation = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImageData.src;
    link.download = currentImageData.filename || 'image.png';
    link.click();
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleShare = () => {
    if (onShare) onShare(currentImageData.src);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (onLike) onLike(!isLiked);
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
    if (onInfoClick) onInfoClick(!showInfo);
  };

  const controlButtons = [
    { icon: FiZoomIn, onClick: handleZoomIn, show: enableZoom, tooltip: 'Zoom In' },
    { icon: FiZoomOut, onClick: handleZoomOut, show: enableZoom, tooltip: 'Zoom Out' },
    { icon: FiRotateCw, onClick: handleRotate, show: enableRotate, tooltip: 'Rotate' },
    { icon: FiDownload, onClick: handleDownload, show: enableDownload, tooltip: 'Download' },
    { icon: isFullscreen ? FiMinimize2 : FiMaximize2, onClick: handleFullscreen, show: true, tooltip: isFullscreen ? 'Exit Fullscreen' : 'Fullscreen' },
    { icon: FiShare2, onClick: handleShare, show: enableShare, tooltip: 'Share' },
    { icon: FiHeart, onClick: handleLike, show: enableLike, tooltip: 'Like', active: isLiked },
    { icon: FiInfo, onClick: handleInfoClick, show: enableInfo && imageInfo, tooltip: 'Info' },
    { icon: FiImage, onClick: handleRandomImage, show: enableRandomImage, tooltip: 'Random Image' },
    { icon: FiGrid, onClick: () => setShowGrid(!showGrid), show: enableGrid, tooltip: 'Grid View' },
    { icon: FiFilter, onClick: () => setShowEffects(!showEffects), show: enableEffects, tooltip: 'Effects' },
    { icon: FiX, onClick: () => setIsOpen(false), show: true, tooltip: 'Close' },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {processedImages.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt={img.alt || alt}
            className={`cursor-zoom-in rounded-lg object-cover shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
            variants={imageAnimation}
            initial="initial"
            animate="animate"
            whileHover="hover"
          />
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={overlayAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`fixed inset-0 z-50 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-8'} bg-black/90`}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Buttons */}
              {processedImages.length > 1 && (
                <>
                  <motion.button
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={currentIndex === 0}
                  >
                    <FiChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                    onClick={handleNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={currentIndex === processedImages.length - 1}
                  >
                    <FiChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}

              <motion.img
                src={currentImageData.src}
                alt={currentImageData.alt || alt}
                className={`max-w-full max-h-[90vh] object-contain rounded-lg ${isFullscreen ? '' : 'shadow-2xl'} ${getEffectStyle()}`}
                animate={controls}
                drag
                dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
                dragElastic={0.1}
                whileTap={{ cursor: 'grabbing' }}
              />

              {/* Thumbnail Navigation */}
              {processedImages.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 rounded-lg"
                >
                  {processedImages.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img.src}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-16 h-16 object-cover rounded cursor-pointer 
                        ${currentIndex === index ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'}`}
                      onClick={() => {
                        setCurrentIndex(index);
                        resetImageState();
                      }}
                      whileHover={{ scale: 1.1 }}
                    />
                  ))}
                </motion.div>
              )}

              {/* Controls */}
              <motion.div
                variants={controlsAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full"
              >
                {controlButtons.map((control, index) => control.show && (
                  <motion.button
                    key={index}
                    onClick={control.onClick}
                    className={`p-2 rounded-full ${control.active ? 'bg-primary-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'} 
                      backdrop-blur-sm transition-all duration-200 group relative`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <control.icon className="w-5 h-5" />
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap"
                    >
                      {control.tooltip}
                    </motion.span>
                  </motion.button>
                ))}
              </motion.div>

              {/* Grid View */}
              <AnimatePresence>
                {showGrid && (
                  <motion.div
                    variants={gridAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-black/80 p-4 rounded-lg overflow-auto"
                  >
                    {Array.from({ length: gridSize * gridSize }).map((_, index) => (
                      <motion.div
                        key={index}
                        className="relative aspect-square rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={currentImageData.src}
                          alt={`Grid item ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Effects Panel */}
              <AnimatePresence>
                {showEffects && (
                  <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    className="absolute top-4 right-4 w-64 bg-black/80 backdrop-blur-lg rounded-lg p-4"
                  >
                    <h3 className="text-white font-semibold mb-4">Effects</h3>
                    <div className="space-y-2">
                      {effects.map((effect) => (
                        <button
                          key={effect}
                          onClick={() => handleEffectChange(effect)}
                          className={`w-full px-3 py-2 rounded-lg text-left text-white hover:bg-white/10 transition-colors
                            ${currentEffect === effect ? 'bg-primary-500' : ''}`}
                        >
                          {effect.charAt(0).toUpperCase() + effect.slice(1)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Info Panel */}
              <AnimatePresence>
                {showInfo && imageInfo && (
                  <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    className="absolute top-0 right-0 bottom-0 w-80 bg-black/70 backdrop-blur-lg p-6 text-white"
                  >
                    <h3 className="text-xl font-semibold mb-4">{imageInfo.title}</h3>
                    <div className="space-y-4">
                      {imageInfo.description && (
                        <p className="text-sm text-gray-300">{imageInfo.description}</p>
                      )}
                      {imageInfo.metadata && (
                        <div className="space-y-2">
                          {Object.entries(imageInfo.metadata).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-sm">
                              <span className="text-gray-400">{key}</span>
                              <span>{value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

ImageViewer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        filename: PropTypes.string,
        info: PropTypes.object,
      })
    ])
  ),
  currentImage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      filename: PropTypes.string,
      info: PropTypes.object,
    })
  ]),
  // ... rest of the existing prop types ...
};

export default ImageViewer; 