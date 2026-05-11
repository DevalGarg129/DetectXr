// Utility helper functions for various operations

/**
 * Format a risk score as a percentage
 * @param {number} score - Score between 0 and 100
 * @returns {string} Formatted percentage
 */
const formatRiskScore = (score) => {
    return `${Math.round(score)}%`;
};

/**
 * Get color code for risk severity
 * @param {string} severity - Severity level (Low, Medium, High, Critical)
 * @returns {string} Color code (hex or rgb)
 */
const getSeverityColor = (severity) => {
    const colors = {
        'Low': '#10b981',      // Green
        'Medium': '#f59e0b',   // Amber
        'High': '#ef4444',     // Red
        'Critical': '#991b1b', // Dark Red
    };
    return colors[severity] || '#6b7280';
};

/**
 * Format file size in human-readable format
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Truncate text to specified length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} length - Max length
 * @returns {string} Truncated text
 */
const truncateText = (text, length = 100) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
};

/**
 * Compare two timestamps and return human-readable difference
 * @param {Date} date1 - First date
 * @param {Date} date2 - Second date
 * @returns {string} Human-readable time difference
 */
const getTimeDifference = (date1, date2) => {
    const diffMs = Math.abs(date2 - date1);
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays}d ago`;
    if (diffHours > 0) return `${diffHours}h ago`;
    if (diffMins > 0) return `${diffMins}m ago`;
    return `${diffSecs}s ago`;
};

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} Is valid email
 */
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Generate unique ID
 * @returns {string} Unique ID
 */
const generateUniqueId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

module.exports = {
    formatRiskScore,
    getSeverityColor,
    formatFileSize,
    truncateText,
    getTimeDifference,
    isValidEmail,
    generateUniqueId,
};
