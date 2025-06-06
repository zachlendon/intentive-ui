import Link from "next/link"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

async function getGitHubStars() {
  try {
    const response = await fetch("https://api.github.com/repos/agenticaivc/intentive", { next: { revalidate: 3600 } })
    const data = await response.json()
    return data.stargazers_count || 0
  } catch (error) {
    return 0
  }
}

export default async function Header() {
  const stars = await getGitHubStars()

  return (
    <header className="bg-transparent backdrop-blur-sm dark:bg-black/60 text-black dark:text-white shadow-md w-full">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Intentive.dev
        </Link>
        <div className="flex items-center gap-6">
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
            <Link 
              href="/docs" 
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Documentation
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button variant="ghost" size="icon" asChild className="hover:bg-gray-100/10">
              <Link
                href="https://github.com/agenticaivc/intentive"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
              >
                <Github className="h-5 w-5" />
                {stars > 0 && <span className="ml-1 text-xs">⭐ {stars}</span>}
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
