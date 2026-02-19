/**
 * Check if text contains common placeholder patterns
 */
function isPlaceholderText(text: string): boolean {
  const placeholderPatterns = [
    /compelling summary/i,
    /this appears in/i,
    /meta description/i,
    /blog list/i,
    /your post/i,
  ]

  return placeholderPatterns.some((pattern) => pattern.test(text))
}

/**
 * Extract preview text from blog post content
 * Priority: Use metadata summary if available, otherwise extract from MDX content
 */
export function extractPreview(
  summary: string | undefined,
  content: string,
  maxLength: number = 180
): string {
  // Priority 1: Use metadata summary if available AND not placeholder
  if (summary && summary.trim() && !isPlaceholderText(summary)) {
    return truncateText(summary, maxLength)
  }

  // Priority 2: Extract from content
  const plainText = stripMarkdown(content)
  return truncateText(plainText, maxLength)
}

/**
 * Strip markdown/MDX syntax to get plain text
 */
function stripMarkdown(content: string): string {
  return content
    // Remove images
    .replace(/!\[.*?\]\(.*?\)/g, '')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\(.*?\)/g, '$1')
    // Remove headers
    .replace(/#{1,6}\s/g, '')
    // Remove bold/italic
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // Remove code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code
    .replace(/`([^`]+)`/g, '$1')
    // Clean up extra whitespace
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Truncate text at word boundary with ellipsis
 */
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text

  // Find last space before maxLength
  const truncated = text.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')

  if (lastSpace > 0) {
    return truncated.slice(0, lastSpace) + '...'
  }

  return truncated + '...'
}
