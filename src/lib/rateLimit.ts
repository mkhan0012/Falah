/**
 * A simple in-memory rate limiter.
 * Note: In serverless environments (like Vercel), this cache is wiped on every cold start.
 * However, it is effective at preventing rapid double-clicks and basic bot spam during active instances.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitCache = new Map<string, RateLimitRecord>();

/**
 * Rate limits an action based on an identifier (like an IP address or email).
 * @param identifier A unique identifier (e.g., IP or email)
 * @param maxRequests Maximum number of requests allowed in the window
 * @param windowMs Time window in milliseconds
 * @returns { success: boolean, retryAfter?: number }
 */
export function rateLimit(identifier: string, maxRequests: number = 3, windowMs: number = 60000): { success: boolean, retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitCache.get(identifier);

  if (!record) {
    // First request
    rateLimitCache.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true };
  }

  if (now > record.resetTime) {
    // Window expired, reset
    rateLimitCache.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true };
  }

  if (record.count >= maxRequests) {
    // Rate limit exceeded
    return { 
      success: false, 
      retryAfter: Math.ceil((record.resetTime - now) / 1000) 
    };
  }

  // Increment count
  record.count += 1;
  return { success: true };
}

/**
 * Periodically cleans up expired records to prevent memory leaks in long-running processes.
 * Can be called occasionally, though Map iteration is relatively safe.
 */
export function cleanupRateLimits() {
  const now = Date.now();
  for (const [key, record] of rateLimitCache.entries()) {
    if (now > record.resetTime) {
      rateLimitCache.delete(key);
    }
  }
}
