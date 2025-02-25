"use client"

import { cn } from "@/lib/utils"

export function NavBar() {
  const scrollToSection = (id: string) => {
    const element =
      id === "top"
        ? window.scrollTo({ top: 0, behavior: "smooth" })
        : document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={cn(
        "sticky top-0 z-50",
        "backdrop-blur-md bg-white/70 supports-[backdrop-filter]:bg-white/70",
        "border-b border-slate-200/50",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16">
          <div className="flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection("top")}
              className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

