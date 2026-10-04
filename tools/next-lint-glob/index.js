import path from 'node:path'
import { globSync as match } from 'tinyglobby'

// Next's lint helper only needs globSync(pattern, { onlyDirectories: true }).
// Preserve fast-glob's absolute/relative path shape without its braces chain.
export function globSync(pattern, options) {
  if (typeof pattern !== 'string' || options?.onlyDirectories !== true) {
    throw new TypeError('Unsupported Next.js lint glob invocation')
  }
  const absolute = path.isAbsolute(pattern)
  return match(pattern, { onlyDirectories: true, absolute }).map(result => result.replace(/\/$/, ''))
}
