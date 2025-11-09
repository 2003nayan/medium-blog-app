/**
 * Utility functions for the blog application
 */

/**
 * Calculate reading time for a given text content
 * @param content - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(content: string, wordsPerMinute = 200): number {
  // Handle edge cases
  if (!content || typeof content !== 'string') {
    return 1; // Return minimum 1 minute for empty or invalid content
  }

  // Split by whitespace and filter out empty strings
  const words = content.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // Return minimum 1 minute even for very short content
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

/**
 * Generate a preview excerpt from content
 * @param content - The full text content
 * @param maxLength - Maximum length of preview (default: 150)
 * @returns Truncated preview with ellipsis
 */
export function generatePreview(content: string, maxLength = 150): string {
  if (!content || typeof content !== 'string') {
    return '';
  }

  const trimmed = content.trim();

  if (trimmed.length <= maxLength) {
    return trimmed;
  }

  return trimmed.substring(0, maxLength).trim() + '...';
}

/**
 * Generate a unique hash from a string for use as a React key
 * Simple hash function for short strings
 * @param str - The string to hash
 * @returns A numeric hash
 */
export function simpleHash(str: string): number {
  let hash = 0;
  if (!str || str.length === 0) return hash;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  return Math.abs(hash);
}
