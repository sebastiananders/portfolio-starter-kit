type RateLimitEntry = {
  count: number
  resetTime: number
}

// In-memory store
const rateLimitStore = new Map<string, RateLimitEntry>()

// Clean up old entries every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now()
  Array.from(rateLimitStore.entries()).forEach(([ip, entry]) => {
    if (now > entry.resetTime) {
      rateLimitStore.delete(ip)
    }
  })
}, 5 * 60 * 1000)

export function checkRateLimit(ip: string): {
  allowed: boolean
  remaining: number
  resetTime: number
} {
  const now = Date.now()
  const hourInMs = 60 * 60 * 1000
  const maxRequests = 10

  let entry = rateLimitStore.get(ip)

  // Create new entry or reset if expired
  if (!entry || now > entry.resetTime) {
    entry = {
      count: 0,
      resetTime: now + hourInMs
    }
    rateLimitStore.set(ip, entry)
  }

  // Check if limit exceeded
  if (entry.count >= maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime
    }
  }

  // Increment count
  entry.count++
  rateLimitStore.set(ip, entry)

  return {
    allowed: true,
    remaining: maxRequests - entry.count,
    resetTime: entry.resetTime
  }
}
