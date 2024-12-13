/**
 * @component FileUpload
 * @description A professional file upload component with drag and drop support, preview, and rich features.
 */

import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiUploadCloud,
  FiFile,
  FiImage,
  FiVideo,
  FiMusic,
  FiX,
  FiCheck,
  FiAlertCircle,
  FiPaperclip,
  FiFileText,
  FiFilm,
  FiCode,
  FiArchive,
  FiDownload,
  FiTrash2,
  FiEye,
} from 'react-icons/fi';

const FileUpload = ({
  accept,
  multiple = false,
  maxSize = 5242880, // 5MB
  maxFiles = 5,
  preview = true,
  previewMaxHeight = 200,
  variant = 'default',
  size = 'medium',
  color = 'primary',
  disabled = false,
  error,
  success,
  helperText,
  onChange,
  onError,
  onDelete,
  onPreview,
  className,
  ...props
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState([]);
  const [previewFile, setPreviewFile] = useState(null);
  const fileInputRef = useRef(null);

  const sizes = {
    small: {
      text: 'text-sm',
      icon: 'w-8 h-8',
      padding: 'p-4',
      preview: 'h-24',
      button: 'h-8 px-3 text-sm',
    },
    medium: {
      text: 'text-base',
      icon: 'w-12 h-12',
      padding: 'p-6',
      preview: 'h-32',
      button: 'h-10 px-4',
    },
    large: {
      text: 'text-lg',
      icon: 'w-16 h-16',
      padding: 'p-8',
      preview: 'h-40',
      button: 'h-12 px-5 text-lg',
    },
  };

  const colors = {
    primary: {
      base: 'border-gray-300 bg-white',
      hover: 'hover:border-blue-500',
      active: 'border-blue-500',
      text: 'text-gray-600',
      accent: 'text-blue-500',
      error: 'border-red-500 text-red-500',
      success: 'border-green-500 text-green-500',
      button: 'bg-blue-500 hover:bg-blue-600 text-white',
      buttonOutline: 'border-blue-500 text-blue-500 hover:bg-blue-50',
    },
    secondary: {
      base: 'border-gray-300 bg-white',
      hover: 'hover:border-gray-400',
      active: 'border-gray-400',
      text: 'text-gray-600',
      accent: 'text-gray-500',
      error: 'border-red-500 text-red-500',
      success: 'border-green-500 text-green-500',
      button: 'bg-gray-500 hover:bg-gray-600 text-white',
      buttonOutline: 'border-gray-500 text-gray-500 hover:bg-gray-50',
    },
    white: {
      base: 'border-gray-600 bg-gray-800',
      hover: 'hover:border-gray-500',
      active: 'border-gray-500',
      text: 'text-gray-300',
      accent: 'text-white',
      error: 'border-red-400 text-red-400',
      success: 'border-green-400 text-green-400',
      button: 'bg-white hover:bg-gray-100 text-gray-900',
      buttonOutline: 'border-white text-white hover:bg-white/10',
    },
  };

  const variants = {
    default: {
      container: 'border-2 border-dashed rounded-lg',
      preview: 'rounded-lg',
      button: 'rounded-md',
    },
    filled: {
      container: 'border-2 border-dashed rounded-lg bg-gray-50',
      preview: 'rounded-lg',
      button: 'rounded-md',
    },
    outlined: {
      container: 'border-2 rounded-lg',
      preview: 'rounded-lg',
      button: 'rounded-md',
    },
  };

  const getFileTypeIcon = (file) => {
    const type = file.type || '';
    if (type.startsWith('image/')) return FiImage;
    if (type.startsWith('video/')) return FiVideo;
    if (type.startsWith('audio/')) return FiMusic;
    if (type.startsWith('text/')) return FiFileText;
    if (type.startsWith('application/pdf')) return FiFile;
    if (type.startsWith('application/msword') || type.includes('document')) return FiFileText;
    if (type.startsWith('application/zip') || type.includes('compressed')) return FiArchive;
    if (type.includes('code') || type.includes('javascript') || type.includes('json')) return FiCode;
    return FiFile;
  };

  const validateFile = (file) => {
    const errors = [];

    if (maxSize && file.size > maxSize) {
      errors.push(`File "${file.name}" exceeds maximum size of ${maxSize / 1024 / 1024}MB`);
    }

    if (accept) {
      const acceptedTypes = accept.split(',').map(type => type.trim());
      const fileType = file.type || '';
      const fileExtension = `.${file.name.split('.').pop()}`;
      
      const isAccepted = acceptedTypes.some(type => {
        if (type.startsWith('.')) {
          return fileExtension.toLowerCase() === type.toLowerCase();
        }
        if (type.includes('/*')) {
          const [mainType] = type.split('/');
          return fileType.startsWith(`${mainType}/`);
        }
        return fileType === type;
      });

      if (!isAccepted) {
        errors.push(`File "${file.name}" has an unsupported format`);
      }
    }

    return errors;
  };

  const processFiles = (fileList) => {
    const newFiles = [];
    const newErrors = [];

    Array.from(fileList).forEach((file) => {
      if (!multiple && files.length + newFiles.length >= 1) {
        newErrors.push('Only one file can be uploaded');
        return;
      }

      if (files.length + newFiles.length >= maxFiles) {
        newErrors.push(`Maximum number of files (${maxFiles}) exceeded`);
        return;
      }

      const fileErrors = validateFile(file);
      if (fileErrors.length > 0) {
        newErrors.push(...fileErrors);
      } else {
        newFiles.push(file);
      }
    });

    if (newFiles.length > 0) {
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onChange?.(multiple ? updatedFiles : updatedFiles[0]);
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      onError?.(newErrors);
    }
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (disabled) return;

    const { files: droppedFiles } = e.dataTransfer;
    processFiles(droppedFiles);
  };

  const handleFileSelect = (e) => {
    if (disabled) return;
    processFiles(e.target.files);
    e.target.value = null; // Reset input
  };

  const handleRemoveFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange?.(multiple ? newFiles : newFiles[0]);
    onDelete?.(files[index], index);
  };

  const handlePreviewFile = (file) => {
    setPreviewFile(file);
    onPreview?.(file);
  };

  const renderPreview = (file, index) => {
    const FileIcon = getFileTypeIcon(file);

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2, delay: index * 0.1 }}
        className={`
          relative
          group
          ${variants[variant].preview}
          border
          ${colors[color].base}
          overflow-hidden
          bg-white
        `}
      >
        {file.type.startsWith('image/') && preview ? (
          <div className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className={`
                object-cover
                w-full
                ${sizes[size].preview}
              `}
              style={{ maxHeight: previewMaxHeight }}
            />
            <div className="
              absolute
              inset-0
              bg-black/40
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-200
              flex
              items-center
              justify-center
              gap-2
            ">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePreviewFile(file)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
              >
                <FiEye className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleRemoveFile(index)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white"
              >
                <FiTrash2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        ) : (
          <div className={`
            flex
            items-center
            gap-3
            p-3
            ${colors[color].text}
            group-hover:bg-gray-50
            transition-colors
            duration-200
          `}>
            <FileIcon className={sizes[size].icon} />
            <div className="flex-1 min-w-0">
              <div className="truncate font-medium">{file.name}</div>
              <div className="text-sm opacity-75">
                {(file.size / 1024).toFixed(1)}KB
              </div>
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleRemoveFile(index)}
                className={`
                  p-1.5
                  rounded-full
                  ${colors[color].text}
                  hover:${colors[color].accent}
                  transition-colors
                  duration-200
                `}
              >
                <FiTrash2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  const containerClasses = `
    ${variants[variant].container}
    ${sizes[size].padding}
    ${colors[color].base}
    ${!disabled && !isDragging && colors[color].hover}
    ${isDragging && colors[color].active}
    ${error && colors[color].error}
    ${success && colors[color].success}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    transition-all
    duration-200
    ${className || ''}
  `;

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={containerClasses}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        {...props}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileSelect}
          className="hidden"
          disabled={disabled}
        />
        <motion.div
          animate={{
            scale: isDragging ? 1.05 : 1,
            opacity: isDragging ? 0.7 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className={`
            flex
            flex-col
            items-center
            justify-center
            gap-4
            ${colors[color].text}
            ${sizes[size].text}
          `}
        >
          <motion.div
            animate={{
              y: isDragging ? -10 : 0,
              scale: isDragging ? 1.1 : 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <FiUploadCloud className={`
              ${sizes[size].icon}
              ${colors[color].accent}
            `} />
          </motion.div>
          <div className="text-center">
            <motion.p
              animate={{ scale: isDragging ? 1.05 : 1 }}
              className="font-medium"
            >
              {isDragging ? 'Drop files here' : 'Drag and drop files here'}
            </motion.p>
            <p className="mt-1 opacity-75">
              or <span className={colors[color].accent}>browse</span> to choose files
            </p>
          </div>
          {accept && (
            <p className="text-sm opacity-75">
              Accepted formats: {accept}
            </p>
          )}
          {maxSize && (
            <p className="text-sm opacity-75">
              Maximum file size: {maxSize / 1024 / 1024}MB
            </p>
          )}
        </motion.div>
      </motion.div>

      {/* File previews */}
      {files.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {files.map((file, index) => renderPreview(file, index))}
          </AnimatePresence>
        </div>
      )}

      {/* Error messages */}
      {errors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`flex items-center gap-2 ${colors[color].error}`}
        >
          <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
          <ul className="text-sm list-disc list-inside">
            {errors.map((error, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {error}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Helper text */}
      {helperText && !errors.length && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-sm ${colors[color].text}`}
        >
          {helperText}
        </motion.p>
      )}

      {/* File preview modal */}
      <AnimatePresence>
        {previewFile && previewFile.type.startsWith('image/') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setPreviewFile(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setPreviewFile(null)}
                  className="p-2 rounded-full bg-black/20 hover:bg-black/30 text-white"
                >
                  <FiX className="w-5 h-5" />
                </motion.button>
              </div>
              <img
                src={URL.createObjectURL(previewFile)}
                alt={previewFile.name}
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

FileUpload.propTypes = {
  /** Accepted file types */
  accept: PropTypes.string,
  /** Whether multiple files can be uploaded */
  multiple: PropTypes.bool,
  /** Maximum file size in bytes */
  maxSize: PropTypes.number,
  /** Maximum number of files */
  maxFiles: PropTypes.number,
  /** Whether to show image previews */
  preview: PropTypes.bool,
  /** Maximum preview height in pixels */
  previewMaxHeight: PropTypes.number,
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'filled', 'outlined']),
  /** Size preset */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color theme */
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  /** Whether the upload is disabled */
  disabled: PropTypes.bool,
  /** Error message */
  error: PropTypes.string,
  /** Success message */
  success: PropTypes.string,
  /** Helper text */
  helperText: PropTypes.string,
  /** Change handler */
  onChange: PropTypes.func,
  /** Error handler */
  onError: PropTypes.func,
  /** Delete handler */
  onDelete: PropTypes.func,
  /** Preview handler */
  onPreview: PropTypes.func,
  /** Additional CSS classes */
  className: PropTypes.string,
};

export default FileUpload; 