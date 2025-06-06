import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CodeCopy } from "@/components/code-copy"

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 py-24 animate-fade-in">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-intentive-purple to-intentive-pink bg-clip-text text-transparent">
              Intentive.dev
            </h1>
            <p className="text-2xl mb-4">Declarative Intent Graph QL for chat, search, & workflows.</p>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Unify intent across channels with one declarative spec. MIT-licensed and extensible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="bg-gradient-to-r from-intentive-purple to-intentive-pink hover:from-purple-600 hover:to-pink-600 text-white"
              >
                <Link href="https://github.com/agenticaivc/intentive" target="_blank" rel="noopener noreferrer">
                  Star on GitHub
                </Link>
              </Button>
              <Link
                href="https://github.com/agenticaivc/intentive#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-intentive-purple hover:text-intentive-pink transition-colors"
              >
                Read the spec →
              </Link>
            </div>
          </div>
        </section>

        {/* Value Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Intentive?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Single Source of Truth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Define canonical intent graphs that serve as the single source of truth across your entire
                    application ecosystem.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Works Everywhere</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Seamlessly integrate with React, Node, Temporal, Salesforce, and more. One spec to rule them all.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Open & Extensible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>MIT licensed with pluggable resolvers. Extend and customize to fit your specific needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Start Code */}
        <section className="py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Quick Start</h2>
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg overflow-x-auto relative">
              <CodeCopy code={`# ⚡ 15-Second Start\ngit clone https://github.com/agenticaivc/intentive.git && \\\ncd intentive && pnpm install && \\\nnpm run payroll:demo\n\n# Expected: 🎉 Payroll success!\n\n# 🚀 API Testing\nnpm run gateway:dev &\ncurl -X POST http://localhost:4000/intent -H "Content-Type: application/json" -d '{"ask":"Test"}'`} />
              <pre className="font-mono text-sm">
                <code>{`# ⚡ 15-Second Start
git clone https://github.com/agenticaivc/intentive.git && \\
cd intentive && pnpm install && \\
npm run payroll:demo

# Expected: 🎉 Payroll success!

# 🚀 API Testing
npm run gateway:dev &
curl -X POST http://localhost:4000/intent -H "Content-Type: application/json" -d '{"ask":"Test"}'`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8">Check out our documentation and examples on GitHub.</p>
            <Button
              asChild
              className="bg-gradient-to-r from-intentive-purple to-intentive-pink hover:from-purple-600 hover:to-pink-600 text-white"
            >
              <Link href="https://github.com/agenticaivc/intentive#readme" target="_blank" rel="noopener noreferrer">
                Read the Docs
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="bg-gray-100 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-700 pt-10 mt-20"
        role="contentinfo"
      >
        <div className="container mx-auto max-w-3xl px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300">© {currentYear} Intentive.dev</p>
          <div className="mt-4 sm:mt-0">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/agenticaivc/intentive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </>
  )
}
