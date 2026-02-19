'use client'

import { useState, useEffect } from 'react'

interface PostInteractionsProps {
  slug: string
  title: string
  initialLikes: number
}

const HeartIcon = ({ filled }: { filled: boolean }) => {
  if (filled) {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

const ShareIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
)

export function PostInteractions({
  slug,
  title,
  initialLikes,
}: PostInteractionsProps) {
  // Like state management - start with default values for SSR
  const [liked, setLiked] = useState<boolean>(false)
  const [likeCount, setLikeCount] = useState<number>(initialLikes)
  const [mounted, setMounted] = useState(false)

  // Share feedback state
  const [shareFeedback, setShareFeedback] = useState(false)

  // Load like state from sessionStorage after mount (client-side only)
  useEffect(() => {
    setMounted(true)
    const stored = sessionStorage.getItem(`blog-likes-${slug}`)
    if (stored === 'true') {
      setLiked(true)
      setLikeCount(initialLikes + 1)
    }
  }, [slug, initialLikes])

  // Don't render interactive elements until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center gap-6 mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <HeartIcon filled={false} />
          <span>{initialLikes}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
          <ShareIcon />
          <span>Share</span>
        </div>
      </div>
    )
  }

  // Like handler
  const handleLike = () => {
    const newLiked = !liked
    setLiked(newLiked)
    setLikeCount((prev) => (newLiked ? prev + 1 : prev - 1))

    if (newLiked) {
      sessionStorage.setItem(`blog-likes-${slug}`, 'true')
    } else {
      sessionStorage.removeItem(`blog-likes-${slug}`)
    }
  }

  // Share handler
  const handleShare = async () => {
    const shareData = {
      title: title,
      url: `${window.location.origin}/blog/${slug}`,
    }

    try {
      // Check if Web Share API is available (mobile devices)
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback: Copy to clipboard (desktop)
        await navigator.clipboard.writeText(shareData.url)
        setShareFeedback(true)
        setTimeout(() => setShareFeedback(false), 2000)
      }
    } catch (err) {
      // User cancelled or error occurred
      console.log('Share cancelled or failed:', err)
    }
  }

  return (
    <div className="flex items-center gap-6 mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      {/* Like Button */}
      <button
        onClick={handleLike}
        aria-label={liked ? 'Unlike this post' : 'Like this post'}
        aria-pressed={liked}
        className={`flex items-center gap-2 text-sm transition-colors duration-200 ${
          liked
            ? 'text-red-500 dark:text-red-400'
            : 'text-neutral-600 dark:text-neutral-400 hover:text-red-500 dark:hover:text-red-400'
        }`}
      >
        <HeartIcon filled={liked} />
        <span>{likeCount}</span>
      </button>

      {/* Share Button */}
      {shareFeedback ? (
        <span className="text-xs text-green-600 dark:text-green-400">
          Link copied!
        </span>
      ) : (
        <button
          onClick={handleShare}
          aria-label="Share this post"
          className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <ShareIcon />
          <span>Share</span>
        </button>
      )}
    </div>
  )
}
