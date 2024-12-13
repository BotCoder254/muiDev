/**
 * @component Pagination
 * @description A professional pagination component with multiple variants and customization options.
 * 
 * @example
 * // Basic usage
 * <Pagination
 *   totalItems={100}
 *   itemsPerPage={10}
 *   currentPage={1}
 *   onPageChange={(page) => console.log(`Page changed to ${page}`)}
 * />
 * 
 * @example
 * // With custom styling and features
 * <Pagination
 *   totalItems={500}
 *   itemsPerPage={20}
 *   currentPage={5}
 *   onPageChange={handlePageChange}
 *   variant="pills"
 *   color="primary"
 *   size="large"
 *   showFirstLast
 *   showPageSize
 *   pageSizeOptions={[10, 20, 50, 100]}
 *   onPageSizeChange={handlePageSizeChange}
 * />
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage = 1,
  siblingCount = 1,
  variant = 'default',
  size = 'medium',
  color = 'primary',
  showFirstLast = false,
  showPageSize = false,
  pageSizeOptions = [10, 25, 50, 100],
  showItemsPerPage = false,
  className,
  onPageChange,
  onPageSizeChange,
  ...props
}) => {
  const [pageSize, setPageSize] = useState(itemsPerPage);
  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  useEffect(() => {
    setPageSize(itemsPerPage);
  }, [itemsPerPage]);

  const totalPages = Math.ceil(totalItems / pageSize);

  const sizes = {
    small: {
      text: 'text-sm',
      icon: 'w-4 h-4',
      padding: 'px-2 py-1',
      select: 'h-8',
    },
    medium: {
      text: 'text-base',
      icon: 'w-5 h-5',
      padding: 'px-3 py-1.5',
      select: 'h-10',
    },
    large: {
      text: 'text-lg',
      icon: 'w-6 h-6',
      padding: 'px-4 py-2',
      select: 'h-12',
    },
  };

  const colors = {
    primary: {
      text: 'text-gray-600',
      hover: 'hover:text-blue-600 hover:bg-blue-50',
      active: 'bg-blue-50 text-blue-600',
      border: 'border-gray-200',
      focus: 'focus:ring-blue-500',
      disabled: 'text-gray-300',
    },
    secondary: {
      text: 'text-gray-600',
      hover: 'hover:text-gray-900 hover:bg-gray-100',
      active: 'bg-gray-100 text-gray-900',
      border: 'border-gray-200',
      focus: 'focus:ring-gray-500',
      disabled: 'text-gray-300',
    },
    white: {
      text: 'text-gray-500',
      hover: 'hover:text-gray-700 hover:bg-gray-50',
      active: 'bg-white text-gray-700 shadow-sm',
      border: 'border-gray-100',
      focus: 'focus:ring-gray-400',
      disabled: 'text-gray-300',
    },
  };

  const variants = {
    default: {
      container: 'inline-flex shadow-sm rounded-md',
      item: 'border-y first:border-l first:rounded-l-md last:border-r last:rounded-r-md',
    },
    pills: {
      container: 'inline-flex gap-1',
      item: 'rounded-full border',
    },
    minimal: {
      container: 'inline-flex gap-1',
      item: 'rounded-md',
    },
  };

  const getPageNumbers = () => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages <= totalBlocks) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(activePage - siblingCount, 1);
    const rightSiblingIndex = Math.min(activePage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      return [...Array.from({ length: leftItemCount }, (_, i) => i + 1), '...', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      return [1, '...', ...Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1)];
    }

    return [
      1,
      '...',
      ...Array.from(
        { length: rightSiblingIndex - leftSiblingIndex + 1 },
        (_, i) => leftSiblingIndex + i
      ),
      '...',
      totalPages,
    ];
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setActivePage(page);
      onPageChange?.(page);
    }
  };

  const handlePageSizeChange = (e) => {
    const newPageSize = Number(e.target.value);
    setPageSize(newPageSize);
    onPageSizeChange?.(newPageSize);
  };

  const PageButton = ({ page, isActive, disabled, children, onClick }) => (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={`
        ${sizes[size].padding}
        ${sizes[size].text}
        ${variants[variant].item}
        ${disabled ? colors[color].disabled : isActive ? colors[color].active : colors[color].text}
        ${!disabled && !isActive && colors[color].hover}
        ${colors[color].border}
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 ${colors[color].focus}
        disabled:cursor-not-allowed
        flex items-center justify-center
        min-w-[2.5em]
      `}
    >
      {children || page}
    </motion.button>
  );

  return (
    <div className={`flex items-center gap-4 ${className || ''}`} {...props}>
      <nav className={variants[variant].container}>
        {showFirstLast && (
          <PageButton
            onClick={() => handlePageChange(1)}
            disabled={activePage === 1}
          >
            <FiChevronsLeft className={sizes[size].icon} />
          </PageButton>
        )}
        <PageButton
          onClick={() => handlePageChange(activePage - 1)}
          disabled={activePage === 1}
        >
          <FiChevronLeft className={sizes[size].icon} />
        </PageButton>

        <AnimatePresence mode="wait">
          {getPageNumbers().map((page, index) => (
            <PageButton
              key={index}
              page={page}
              isActive={page === activePage}
              disabled={page === '...'}
              onClick={() => page !== '...' && handlePageChange(page)}
            />
          ))}
        </AnimatePresence>

        <PageButton
          onClick={() => handlePageChange(activePage + 1)}
          disabled={activePage === totalPages}
        >
          <FiChevronRight className={sizes[size].icon} />
        </PageButton>
        {showFirstLast && (
          <PageButton
            onClick={() => handlePageChange(totalPages)}
            disabled={activePage === totalPages}
          >
            <FiChevronsRight className={sizes[size].icon} />
          </PageButton>
        )}
      </nav>

      {showPageSize && (
        <div className="flex items-center gap-2">
          <label className={`${sizes[size].text} ${colors[color].text}`}>
            Items per page:
          </label>
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            className={`
              ${sizes[size].select}
              ${sizes[size].text}
              ${colors[color].text}
              ${colors[color].border}
              rounded-md
              border
              bg-white
              focus:outline-none focus:ring-2 focus:ring-offset-2 ${colors[color].focus}
              cursor-pointer
              px-2
            `}
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {showItemsPerPage && (
        <div className={`${sizes[size].text} ${colors[color].text}`}>
          {`${Math.min((activePage - 1) * pageSize + 1, totalItems)}-${Math.min(activePage * pageSize, totalItems)} of ${totalItems} items`}
        </div>
      )}
    </div>
  );
};

Pagination.propTypes = {
  /** Total number of items */
  totalItems: PropTypes.number.isRequired,
  /** Number of items per page */
  itemsPerPage: PropTypes.number.isRequired,
  /** Current active page */
  currentPage: PropTypes.number,
  /** Number of siblings to show on each side of current page */
  siblingCount: PropTypes.number,
  /** Visual style variant */
  variant: PropTypes.oneOf(['default', 'pills', 'minimal']),
  /** Size preset */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Color theme */
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  /** Whether to show first/last page buttons */
  showFirstLast: PropTypes.bool,
  /** Whether to show page size selector */
  showPageSize: PropTypes.bool,
  /** Available page size options */
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  /** Whether to show items per page info */
  showItemsPerPage: PropTypes.bool,
  /** Additional CSS classes */
  className: PropTypes.string,
  /** Called when page changes */
  onPageChange: PropTypes.func,
  /** Called when page size changes */
  onPageSizeChange: PropTypes.func,
};

export default Pagination; 