import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import {
  FiPlay,
  FiPause,
  FiVolume2,
  FiVolumeX,
  FiMaximize,
  FiMinimize,
  FiSettings,
  FiSkipBack,
  FiSkipForward,
  FiRotateCw,
  FiDownload,
  FiShare2,
  FiList,
  FiHeart,
  FiBookmark,
  FiFilter,
  FiClock,
  FiImage,
  FiRepeat,
  FiShuffle,
} from 'react-icons/fi';

const VideoPlayer = ({
  src,
  poster,
  className = '',
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  quality = 'auto',
  playbackSpeed = 1,
  showPlaylist = false,
  playlist = [],
  onQualityChange,
  onSpeedChange,
  onPlaylistItemClick,
  onShare,
  onLike,
  onBookmark,
  enableFilters = true,
  enableScreenshot = true,
  enablePiP = true,
  enableRepeat = true,
  enableShuffle = true,
  filters = ['none', 'grayscale', 'sepia', 'contrast', 'brightness'],
  ...props
}) => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showPlaylistPanel, setShowPlaylistPanel] = useState(false);
  const [buffered, setBuffered] = useState(0);
  const [currentFilter, setCurrentFilter] = useState('none');
  const [showFilters, setShowFilters] = useState(false);
  const [isPiP, setIsPiP] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [thumbnails, setThumbnails] = useState([]);
  const [previewTime, setPreviewTime] = useState(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const animationControls = useAnimation();

  // Constants for zoom limits
  const initialScale = 1;
  const maxScale = 4;

  // Animation variants
  const containerAnimation = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  };

  const controlsAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  const buttonAnimation = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  const panelAnimation = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleProgress = () => {
      if (video.buffered.length > 0) {
        setBuffered(video.buffered.end(video.buffered.length - 1));
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('progress', handleProgress);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('progress', handleProgress);
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleKeyPress = (e) => {
    switch (e.key.toLowerCase()) {
      case ' ':
      case 'k':
        e.preventDefault();
        togglePlay();
        break;
      case 'f':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'm':
        e.preventDefault();
        toggleMute();
        break;
      case 'arrowleft':
        e.preventDefault();
        skip(-10);
        break;
      case 'arrowright':
        e.preventDefault();
        skip(10);
        break;
      case 'arrowup':
        e.preventDefault();
        adjustVolume(0.1);
        break;
      case 'arrowdown':
        e.preventDefault();
        adjustVolume(-0.1);
        break;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    videoRef.current.muted = !isMuted;
  };

  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    videoRef.current.volume = value;
    setIsMuted(value === 0);
  };

  const adjustVolume = (delta) => {
    const newVolume = Math.max(0, Math.min(1, volume + delta));
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const handleProgressChange = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const time = pos * duration;
    videoRef.current.currentTime = time;
  };

  const handleProgressHover = (e) => {
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const time = pos * duration;
    setPreviewTime(time);
  };

  const handleProgressLeave = () => {
    setPreviewTime(null);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const skip = (seconds) => {
    videoRef.current.currentTime += seconds;
  };

  const handleSpeedChange = (speed) => {
    videoRef.current.playbackRate = speed;
    if (onSpeedChange) onSpeedChange(speed);
    setShowSettings(false);
  };

  const handleQualityChange = (quality) => {
    if (onQualityChange) onQualityChange(quality);
    setShowSettings(false);
  };

  const handleShare = () => {
    if (onShare) onShare(src);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (onLike) onLike(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    if (onBookmark) onBookmark(!isBookmarked);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleScreenshot = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'screenshot.png';
    link.click();
  };

  const handlePiP = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        setIsPiP(false);
      } else {
        await videoRef.current.requestPictureInPicture();
        setIsPiP(true);
      }
    } catch (error) {
      console.error('PiP failed:', error);
    }
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
  };

  const getFilterStyle = () => {
    switch (currentFilter) {
      case 'grayscale':
        return 'filter grayscale';
      case 'sepia':
        return 'filter sepia';
      case 'contrast':
        return 'filter contrast-125';
      case 'brightness':
        return 'filter brightness-125';
      default:
        return '';
    }
  };

  const generateThumbnails = async () => {
    if (!videoRef.current) return;

    const thumbnailCount = 10;
    const interval = duration / thumbnailCount;
    const newThumbnails = [];

    for (let i = 0; i < thumbnailCount; i++) {
      const time = i * interval;
      const canvas = document.createElement('canvas');
      canvas.width = 160;
      canvas.height = 90;

      videoRef.current.currentTime = time;
      await new Promise(resolve => setTimeout(resolve, 100));
      
      canvas.getContext('2d').drawImage(videoRef.current, 0, 0, 160, 90);
      newThumbnails.push({
        time,
        url: canvas.toDataURL(),
      });
    }

    setThumbnails(newThumbnails);
    videoRef.current.currentTime = currentTime;
  };

  const handleZoomIn = async () => {
    await animationControls.start({
      scale: scale * 1.5 <= maxScale ? scale * 1.5 : maxScale,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
    setScale((prev) => Math.min(prev * 1.5, maxScale));
  };

  const handleZoomOut = async () => {
    await animationControls.start({
      scale: Math.max(scale / 1.5, initialScale),
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
    setScale((prev) => Math.max(prev / 1.5, initialScale));
  };

  const handleRotate = async () => {
    await animationControls.start({
      rotate: rotation + 90,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    });
    setRotation((prev) => prev + 90);
  };

  return (
    <motion.div
      className={`relative group ${className}`}
      variants={containerAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onKeyDown={handleKeyPress}
      tabIndex="0"
    >
      <video
        ref={videoRef}
        className={`w-full rounded-lg shadow-lg ${getFilterStyle()}`}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        {...props}
      />

      {controls && (
        <motion.div
          variants={controlsAnimation}
          initial="initial"
          animate={showControls ? "animate" : "exit"}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
        >
          {/* Progress bar with preview */}
          <div
            className="absolute bottom-16 left-0 right-0"
            onMouseMove={handleProgressHover}
            onMouseLeave={handleProgressLeave}
          >
            {previewTime !== null && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-full mb-2"
                style={{ left: `${(previewTime / duration) * 100}%` }}
              >
                <div className="bg-black rounded p-1">
                  {thumbnails.length > 0 && (
                    <img
                      src={thumbnails[Math.floor((previewTime / duration) * thumbnails.length)].url}
                      alt="Preview"
                      className="w-40 h-24 rounded"
                    />
                  )}
                  <div className="text-white text-xs text-center mt-1">
                    {formatTime(previewTime)}
                  </div>
                </div>
              </motion.div>
            )}

            <div
              ref={progressRef}
              className="h-1 bg-white/30 cursor-pointer group"
              onClick={handleProgressChange}
            >
              {/* Buffered progress */}
              <div
                className="absolute h-full bg-white/20"
                style={{ width: `${(buffered / duration) * 100}%` }}
              />
              {/* Playback progress */}
              <motion.div
                className="absolute h-full bg-primary-500"
                style={{ width: `${(currentTime / duration) * 100}%` }}
                layoutId="progress"
              >
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: showControls ? 1 : 0 }}
                />
              </motion.div>
            </div>
          </div>

          {/* Enhanced controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            {/* Left controls */}
            <div className="flex items-center gap-4">
              {/* Play/Pause with animation */}
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                className="text-white p-2 rounded-full bg-white/10 backdrop-blur-sm"
                onClick={togglePlay}
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isPlaying ? 0 : 180 }}
                >
                  {isPlaying ? (
                    <FiPause className="w-6 h-6" />
                  ) : (
                    <FiPlay className="w-6 h-6" />
                  )}
                </motion.div>
              </motion.button>

              {/* Other controls */}
              <div className="flex items-center gap-4">
                {/* Skip buttons */}
                <motion.button
                  variants={buttonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white"
                  onClick={() => skip(-10)}
                >
                  <FiSkipBack className="w-5 h-5" />
                </motion.button>

                <motion.button
                  variants={buttonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white"
                  onClick={() => skip(10)}
                >
                  <FiSkipForward className="w-5 h-5" />
                </motion.button>

                {/* Volume control */}
                <div className="flex items-center gap-2">
                  <motion.button
                    variants={buttonAnimation}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-white"
                    onClick={toggleMute}
                  >
                    {isMuted ? (
                      <FiVolumeX className="w-6 h-6" />
                    ) : (
                      <FiVolume2 className="w-6 h-6" />
                    )}
                  </motion.button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 accent-primary-500"
                  />
                </div>

                {/* Time display */}
                <div className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-4">
              {/* New controls */}
              {enableScreenshot && (
                <motion.button
                  variants={buttonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white"
                  onClick={handleScreenshot}
                >
                  <FiImage className="w-5 h-5" />
                </motion.button>
              )}

              {enablePiP && (
                <motion.button
                  variants={buttonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  className={`text-white ${isPiP ? 'text-primary-500' : ''}`}
                  onClick={handlePiP}
                >
                  <FiMaximize className="w-5 h-5" />
                </motion.button>
              )}

              {enableRepeat && (
                <motion.button
                  variants={buttonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  className={`text-white ${isRepeating ? 'text-primary-500' : ''}`}
                  onClick={() => setIsRepeating(!isRepeating)}
                >
                  <FiRepeat className="w-5 h-5" />
                </motion.button>
              )}

              {enableShuffle && showPlaylist && (
                <motion.button
                  variants={buttonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  className={`text-white ${isShuffling ? 'text-primary-500' : ''}`}
                  onClick={() => setIsShuffling(!isShuffling)}
                >
                  <FiShuffle className="w-5 h-5" />
                </motion.button>
              )}

              {/* Like button */}
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                className={`text-white ${isLiked ? 'text-red-500' : ''}`}
                onClick={handleLike}
              >
                <FiHeart className="w-5 h-5" />
              </motion.button>

              {/* Bookmark button */}
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                className={`text-white ${isBookmarked ? 'text-yellow-500' : ''}`}
                onClick={handleBookmark}
              >
                <FiBookmark className="w-5 h-5" />
              </motion.button>

              {/* Share button */}
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                className="text-white"
                onClick={handleShare}
              >
                <FiShare2 className="w-5 h-5" />
              </motion.button>

              {/* Settings button */}
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                className="text-white relative"
                onClick={() => setShowSettings(!showSettings)}
              >
                <FiSettings className="w-5 h-5" />
                {showSettings && (
                  <div className="absolute bottom-full right-0 mb-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg overflow-hidden">
                    <div className="p-2 space-y-2">
                      {/* Quality options */}
                      <div className="text-sm font-medium px-3 py-1">Quality</div>
                      {['auto', '1080p', '720p', '480p'].map((q) => (
                        <button
                          key={q}
                          className={`w-full px-3 py-1 text-left text-sm hover:bg-white/10 ${
                            quality === q ? 'text-primary-500' : 'text-white'
                          }`}
                          onClick={() => handleQualityChange(q)}
                        >
                          {q}
                        </button>
                      ))}
                      {/* Playback speed */}
                      <div className="text-sm font-medium px-3 py-1 border-t border-white/10">
                        Playback Speed
                      </div>
                      {[0.5, 1, 1.5, 2].map((speed) => (
                        <button
                          key={speed}
                          className={`w-full px-3 py-1 text-left text-sm hover:bg-white/10 ${
                            playbackSpeed === speed ? 'text-primary-500' : 'text-white'
                          }`}
                          onClick={() => handleSpeedChange(speed)}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.button>

              {/* Playlist button */}
              {showPlaylist && (
                <motion.button
                  variants={buttonAnimation}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-white"
                  onClick={() => setShowPlaylistPanel(!showPlaylistPanel)}
                >
                  <FiList className="w-5 h-5" />
                </motion.button>
              )}

              {/* Fullscreen button */}
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                className="text-white"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? (
                  <FiMinimize className="w-5 h-5" />
                ) : (
                  <FiMaximize className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Enhanced panels */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            variants={panelAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-4 right-4 w-64 bg-black/80 backdrop-blur-lg rounded-lg p-4"
          >
            <h3 className="text-white font-semibold mb-4">Video Filters</h3>
            <div className="space-y-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`w-full px-3 py-2 rounded-lg text-left text-white hover:bg-white/10 transition-colors
                    ${currentFilter === filter ? 'bg-primary-500' : ''}`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Enhanced playlist panel */}
        {showPlaylistPanel && (
          <motion.div
            variants={panelAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-0 right-0 bottom-0 w-80 bg-black/70 backdrop-blur-lg"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold">Playlist</h3>
                <div className="flex gap-2">
                  {enableRepeat && (
                    <motion.button
                      variants={buttonAnimation}
                      whileHover="hover"
                      whileTap="tap"
                      className={`p-1 rounded ${isRepeating ? 'text-primary-500' : 'text-white'}`}
                      onClick={() => setIsRepeating(!isRepeating)}
                    >
                      <FiRepeat className="w-4 h-4" />
                    </motion.button>
                  )}
                  {enableShuffle && (
                    <motion.button
                      variants={buttonAnimation}
                      whileHover="hover"
                      whileTap="tap"
                      className={`p-1 rounded ${isShuffling ? 'text-primary-500' : 'text-white'}`}
                      onClick={() => setIsShuffling(!isShuffling)}
                    >
                      <FiShuffle className="w-4 h-4" />
                    </motion.button>
                  )}
                </div>
              </div>
              <div className="space-y-2 overflow-auto max-h-[calc(100vh-8rem)]">
                {playlist.map((item, index) => (
                  <motion.button
                    key={index}
                    variants={buttonAnimation}
                    whileHover="hover"
                    className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 text-white text-left"
                    onClick={() => onPlaylistItemClick?.(item)}
                  >
                    <div className="relative w-20 h-12 rounded overflow-hidden">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                        <FiPlay className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{item.title}</div>
                      <div className="text-sm text-gray-400 flex items-center gap-2">
                        <FiClock className="w-3 h-3" />
                        {item.duration}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default VideoPlayer; 