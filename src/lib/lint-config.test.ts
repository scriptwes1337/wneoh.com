import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { createRequire } from 'node:module'
import { afterEach, describe, expect, it } from 'vitest'

const require = createRequire(import.meta.url)
const { getRootDirs } = require('@next/eslint-plugin-next/dist/utils/get-root-dirs.js') as {
  getRootDirs(context: { cwd: string; settings: { next?: { rootDir?: string | (string | number)[] } } }): string[]
}
let fixture: string | undefined
afterEach(() => { if (fixture) fs.rmSync(fixture, { recursive: true, force: true }); fixture = undefined })

describe('Next.js lint directory matcher', () => {
  it('uses the safe matcher rather than the vulnerable fast-glob chain', () => {
    const pluginRequire = createRequire(require.resolve('@next/eslint-plugin-next'))
    const manifest = pluginRequire('fast-glob/package.json') as { name: string }
    expect(manifest.name).toBe('fast-glob')
    const matcherRequire = createRequire(pluginRequire.resolve('fast-glob'))
    expect(matcherRequire('tinyglobby/package.json').version).toBe('0.2.17')
    expect(() => matcherRequire.resolve('braces')).toThrow()
  })
  it('preserves default roots and expands strings and arrays into directories only', () => {
    fixture = fs.mkdtempSync(path.join(os.tmpdir(), 'wneoh-lint-'))
    fs.mkdirSync(path.join(fixture, 'apps/blog'), { recursive: true })
    fs.mkdirSync(path.join(fixture, 'apps/admin'), { recursive: true })
    fs.writeFileSync(path.join(fixture, 'apps/file.txt'), 'not a directory')
    expect(getRootDirs({ cwd: fixture, settings: {} })).toEqual([fixture])
    const roots = [path.join(fixture, 'apps/admin'), path.join(fixture, 'apps/blog')]
    expect(getRootDirs({ cwd: fixture, settings: { next: { rootDir: `${fixture}/apps/*` } } }).sort()).toEqual(roots)
    expect(getRootDirs({ cwd: fixture, settings: { next: { rootDir: [`${fixture}/apps/{admin,blog}`, 42] } } }).sort()).toEqual(roots)
  })
})
