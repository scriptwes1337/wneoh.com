import fs from 'fs'
import path from 'path'

export interface DocInfo {
  slug: string
  title: string
  description: string
  filePath: string
  order: number
}

const docsDir = path.join(process.cwd(), 'docs')
const rootDir = process.cwd()

export const docs: DocInfo[] = [
  {
    slug: 'prd',
    title: 'Product Requirements',
    description: 'Living product specification and requirements',
    filePath: path.join(docsDir, 'PRD.md'),
    order: 1,
  },
  {
    slug: 'architecture',
    title: 'Architecture',
    description: 'System architecture and technical decisions',
    filePath: path.join(docsDir, 'ARCHITECTURE.md'),
    order: 2,
  },
  {
    slug: 'design-system',
    title: 'Design System',
    description: 'Visual design system and UI guidelines',
    filePath: path.join(docsDir, 'DESIGN_SYSTEM.md'),
    order: 3,
  },
  {
    slug: 'security',
    title: 'Security',
    description: 'Security architecture and policies',
    filePath: path.join(docsDir, 'SECURITY.md'),
    order: 4,
  },
  {
    slug: 'mcp',
    title: 'MCP Configuration',
    description: 'Model Context Protocol configuration',
    filePath: path.join(docsDir, 'MCP.md'),
    order: 5,
  },
  {
    slug: 'react-grab',
    title: 'React Grab',
    description: 'Component context extraction during development',
    filePath: path.join(docsDir, 'REACT_GRAB.md'),
    order: 6,
  },
  {
    slug: 'changelog',
    title: 'Changelog',
    description: 'History of notable changes',
    filePath: path.join(rootDir, 'CHANGELOG.md'),
    order: 7,
  },
]

export function getDocContent(filePath: string): string {
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return '# Document Not Found\n\nThe requested document could not be loaded.'
  }
}

export function getDocBySlug(slug: string): DocInfo | undefined {
  return docs.find((doc) => doc.slug === slug)
}
