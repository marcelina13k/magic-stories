"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function PersistentCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  // Don't show on these pages
  const excludedPaths = ["/create-story", "/subscription-plans", "/payment-success", "/thank-you", "/pricing"]

  const shouldShow = !excludedPaths.some((path) => pathname.startsWith(path))

  useEffect(() => {
    if (!shouldShow) return

    const handleScroll = () => {
      // Get the position of the main CTA button
      const mainCTA = document.getElementById("main-cta")
      if (!mainCTA) {
        setIsVisible(true)
        return
      }

      const rect = mainCTA.getBoundingClientRect()
      // Show the persistent CTA when the main CTA is out of view
      setIsVisible(rect.bottom < 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [shouldShow])

  if (!shouldShow) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <Button
        asChild
        className="bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-100 animate-pulse"
        size="lg"
      >
        <Link href="/create-story">
          Create Your Story
          <span className="ml-2">→</span>
        </Link>
      </Button>
    </div>
  )
}

