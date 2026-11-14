/**
 * A simple in-memory rate limiter with automated memory bound protections.
 * Note: In serverless environments (like Vercel), this cache is wiped on cold starts.
 * However, it is effective at preventing rapid double-clicks and basic bot spam during active instances.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const MAX_CACHE_SIZE = 5000;
const rateLimitCache = new Map<string, RateLimitRecord>();
let callCounter = 0;

/**
 * Periodically cleans up expired records to prevent memory leaks in long-running processes.
 */
export function cleanupRateLimits() {
  const now = Date.now();
  for (const [key, record] of rateLimitCache.entries()) {
    if (now > record.resetTime) {
      rateLimitCache.delete(key);
    }
  }
}

/**
 * Rate limits an action based on an identifier (like an IP address or email).
 * @param identifier A unique identifier (e.g., IP or email)
 * @param maxRequests Maximum number of requests allowed in the window
 * @param windowMs Time window in milliseconds
 * @returns { success: boolean, retryAfter?: number }
 */
export function rateLimit(
  identifier: string,
  maxRequests: number = 3,
  windowMs: number = 60000
): { success: boolean; retryAfter?: number } {
  // Clamp identifier length to prevent memory abuse
  const cleanId = String(identifier).slice(0, 120);
  const now = Date.now();

  // Automated opportunistic cleanup to prevent memory exhaustion
  callCounter++;
  if (callCounter % 100 === 0 || rateLimitCache.size > 1000) {
    cleanupRateLimits();
    // Enforce hard ceiling if cache exceeds max size under high concurrency
    if (rateLimitCache.size > MAX_CACHE_SIZE) {
      rateLimitCache.clear();
    }
  }

  const record = rateLimitCache.get(cleanId);

  if (!record) {
    // First request
    rateLimitCache.set(cleanId, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true };
  }

  if (now > record.resetTime) {
    // Window expired, reset
    rateLimitCache.set(cleanId, {
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
