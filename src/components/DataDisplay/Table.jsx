import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiArrowUp,
  FiArrowDown,
  FiSearch,
  FiFilter,
  FiRefreshCw,
  FiDownload,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
  FiEdit,
  FiTrash2,
  FiEye,
  FiMoreVertical,
  FiCheck,
  FiX,
} from 'react-icons/fi';

const Table = ({
  data = [],
  columns = [],
  className = '',
  striped = true,
  hoverable = true,
  bordered = false,
  compact = false,
  sortable = true,
  filterable = true,
  pagination = true,
  pageSize = 10,
  selectable = false,
  actions = [],
  onRowClick,
  onRowSelect,
  loading = false,
  emptyMessage = 'No data available',
  ...props
}) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [columnFilters, setColumnFilters] = useState({});
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [showColumnCustomizer, setShowColumnCustomizer] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState(
    columns.reduce((acc, col) => ({ ...acc, [col.key]: true }), {})
  );

  // Animation variants
  const tableAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const rowAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  };

  const buttonAnimation = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const dropdownAnimation = {
    initial: { opacity: 0, scale: 0.95, y: -10 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  };

  // Sort and filter logic
  const sortedAndFilteredData = useMemo(() => {
    let processedData = [...data];

    // Apply column filters
    Object.entries(columnFilters).forEach(([key, value]) => {
      if (value) {
        processedData = processedData.filter(item => 
          String(item[key]).toLowerCase().includes(value.toLowerCase())
        );
      }
    });

    // Apply global filter
    if (filterText) {
      processedData = processedData.filter(item =>
        columns.some(column =>
          String(item[column.key]).toLowerCase().includes(filterText.toLowerCase())
        )
      );
    }

    // Apply sorting
    if (sortConfig.key) {
      processedData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];
        
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return processedData;
  }, [data, sortConfig, filterText, columnFilters, columns]);

  // Pagination logic
  const totalPages = Math.ceil(sortedAndFilteredData.length / pageSize);
  const paginatedData = pagination
    ? sortedAndFilteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedAndFilteredData;

  const handleSort = (key) => {
    if (!sortable) return;
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleColumnFilter = (key, value) => {
    setColumnFilters(prev => ({
      ...prev,
      [key]: value,
    }));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowSelect = (rowId) => {
    setSelectedRows(prev => {
      const next = new Set(prev);
      if (next.has(rowId)) {
        next.delete(rowId);
      } else {
        next.add(rowId);
      }
      onRowSelect?.(Array.from(next));
      return next;
    });
  };

  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
      onRowSelect?.([]);
    } else {
      const allIds = paginatedData.map((_, index) => index);
      setSelectedRows(new Set(allIds));
      onRowSelect?.(allIds);
    }
  };

  const toggleColumnVisibility = (key) => {
    setVisibleColumns(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const exportToCSV = () => {
    const visibleCols = columns.filter(col => visibleColumns[col.key]);
    const headers = visibleCols.map(col => col.title).join(',');
    const rows = sortedAndFilteredData.map(item =>
      visibleCols.map(col => item[col.key]).join(',')
    ).join('\\n');
    
    const csvContent = `data:text/csv;charset=utf-8,${headers}\\n${rows}`;
    const link = document.createElement('a');
    link.href = encodeURI(csvContent);
    link.download = 'table-export.csv';
    link.click();
  };

  return (
    <motion.div
      className={`overflow-hidden rounded-lg shadow-lg ${className}`}
      variants={tableAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Table Controls */}
      <div className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {filterable && (
            <div className="flex items-center gap-2">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setShowFilters(!showFilters)}
                className={`p-2 rounded-lg ${showFilters ? 'bg-primary-500 text-white' : 'bg-gray-100 dark:bg-gray-700'}`}
              >
                <FiFilter className="w-5 h-5" />
              </motion.button>
            </div>
          )}
          <div className="flex items-center gap-2">
            <motion.button
              variants={buttonAnimation}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setShowColumnCustomizer(!showColumnCustomizer)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FiSettings className="w-5 h-5" />
            </motion.button>
            <motion.button
              variants={buttonAnimation}
              whileHover="hover"
              whileTap="tap"
              onClick={exportToCSV}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FiDownload className="w-5 h-5" />
            </motion.button>
            <motion.button
              variants={buttonAnimation}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                setFilterText('');
                setColumnFilters({});
                setSortConfig({ key: null, direction: 'asc' });
                setSelectedRows(new Set());
              }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FiRefreshCw className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Column Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {columns.filter(col => visibleColumns[col.key]).map(column => (
                <div key={column.key} className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {column.title}
                  </label>
                  <input
                    type="text"
                    value={columnFilters[column.key] || ''}
                    onChange={(e) => handleColumnFilter(column.key, e.target.value)}
                    placeholder={`Filter ${column.title.toLowerCase()}...`}
                    className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Column Customizer */}
        <AnimatePresence>
          {showColumnCustomizer && (
            <motion.div
              variants={dropdownAnimation}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute right-4 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10"
            >
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Customize Columns
                </h3>
                <div className="space-y-2">
                  {columns.map(column => (
                    <label
                      key={column.key}
                      className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <input
                        type="checkbox"
                        checked={visibleColumns[column.key]}
                        onChange={() => toggleColumnVisibility(column.key)}
                        className="rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                      />
                      {column.title}
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              {selectable && (
                <th className="px-6 py-3">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === paginatedData.length}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                  />
                </th>
              )}
              {columns.filter(col => visibleColumns[col.key]).map(column => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key)}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider ${
                    sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600' : ''
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {column.title}
                    {sortable && sortConfig.key === column.key && (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        {sortConfig.direction === 'asc' ? (
                          <FiArrowUp className="w-4 h-4" />
                        ) : (
                          <FiArrowDown className="w-4 h-4" />
                        )}
                      </motion.span>
                    )}
                  </div>
                </th>
              ))}
              {actions.length > 0 && (
                <th className="px-6 py-3 text-right">Actions</th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            <AnimatePresence>
              {paginatedData.map((row, index) => (
                <motion.tr
                  key={index}
                  variants={rowAnimation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={() => onRowClick?.(row)}
                  className={`
                    ${hoverable ? 'hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer' : ''}
                    ${striped && index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : ''}
                    ${selectedRows.has(index) ? 'bg-primary-50 dark:bg-primary-900/20' : ''}
                  `}
                >
                  {selectable && (
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(index)}
                        onChange={() => handleRowSelect(index)}
                        onClick={(e) => e.stopPropagation()}
                        className="rounded border-gray-300 text-primary-500 focus:ring-primary-500"
                      />
                    </td>
                  )}
                  {columns.filter(col => visibleColumns[col.key]).map(column => (
                    <td
                      key={column.key}
                      className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100 ${
                        bordered ? 'border border-gray-200 dark:border-gray-700' : ''
                      } ${compact ? 'py-2' : ''}`}
                    >
                      {column.render ? column.render(row[column.key], row) : row[column.key]}
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className="px-6 py-4 text-right space-x-2">
                      {actions.map((action, actionIndex) => (
                        <motion.button
                          key={actionIndex}
                          variants={buttonAnimation}
                          whileHover="hover"
                          whileTap="tap"
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick(row);
                          }}
                          className={`p-1.5 rounded-lg ${action.className || 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                        >
                          {action.icon || <FiMoreVertical className="w-4 h-4" />}
                        </motion.button>
                      ))}
                    </td>
                  )}
                </motion.tr>
              ))}
            </AnimatePresence>
            {paginatedData.length === 0 && !loading && (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0) + (actions.length > 0 ? 1 : 0)}
                  className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && totalPages > 1 && (
        <div className="bg-white dark:bg-gray-800 px-4 py-3 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing {((currentPage - 1) * pageSize) + 1} to {Math.min(currentPage * pageSize, sortedAndFilteredData.length)} of {sortedAndFilteredData.length} entries
            </div>
            <div className="flex items-center gap-2">
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
              >
                <FiChevronsLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
              >
                <FiChevronLeft className="w-5 h-5" />
              </motion.button>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = currentPage - 2 + i;
                if (pageNum > 0 && pageNum <= totalPages) {
                  return (
                    <motion.button
                      key={pageNum}
                      variants={buttonAnimation}
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-lg ${
                        currentPage === pageNum
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700'
                      }`}
                    >
                      {pageNum}
                    </motion.button>
                  );
                }
                return null;
              })}
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
              >
                <FiChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                variants={buttonAnimation}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 disabled:opacity-50"
              >
                <FiChevronsRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Table; 