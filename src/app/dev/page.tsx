import Link from 'next/link'
import { docs } from '@/lib/docs'
import { FileText, GitBranch, Shield, Palette, Server, Layers } from 'lucide-react'

const icons = {
  prd: FileText,
  architecture: Server,
  'design-system': Palette,
  security: Shield,
  mcp: Server,
  'react-grab': Layers,
  changelog: GitBranch,
}

export default function DevPage() {
  return (
    <div className="min-h-screen">
      <div className="border-b">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-semibold tracking-tight">Documentation</h1>
          <p className="mt-2 text-muted-foreground">
            Internal development documentation and project context
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc) => {
            const Icon = icons[doc.slug as keyof typeof icons] || FileText
            return (
              <Link
                key={doc.slug}
                href={`/dev/docs/${doc.slug}`}
                className="group rounded-lg border p-6 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-md bg-muted p-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-medium">{doc.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {doc.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 rounded-lg border bg-muted/30 p-6">
          <h2 className="font-medium">About This Interface</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This documentation interface renders Markdown files directly from the repository.
            It provides a browsable view of project documentation including requirements,
            architecture, design system, and security documentation.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            The documentation is stored in the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">docs/</code> directory
            and is intended for development reference only.
          </p>
        </div>
      </div>
    </div>
  )
}
