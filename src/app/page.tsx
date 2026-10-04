import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'A production-grade agentic development foundation',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6 py-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Next.js Template
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A production-grade agentic development foundation for Next.js applications.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="/dev"
              className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
            >
              View Documentation
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              Next.js Docs
            </a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-left">
            <h3 className="font-medium">Agent Router</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Modular skill system for requirements, engineering, testing, design, security, and documentation.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-left">
            <h3 className="font-medium">Living Documentation</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              PRD, architecture, design system, and security docs that stay synchronized with implementation.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-left">
            <h3 className="font-medium">Quality Gates</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              TDD workflow, test coverage, type checking, and security auditing before every push.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
