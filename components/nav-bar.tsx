"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ContactPopup } from "./contact-popup"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export function NavBar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/#faq" },
  ]

  return (
    <nav
      className={cn(
        "sticky top-0 z-50",
        "backdrop-blur-md bg-white/70 supports-[backdrop-filter]:bg-white/70",
        "border-b border-slate-200/50",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-orange-500">
              Magic Stories
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href ? "text-orange-500" : "text-gray-600 hover:text-gray-900",
                )}
              >
                {item.name}
              </Link>
            ))}
            <ContactPopup />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="sm" className="text-gray-500" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === item.href
                    ? "text-orange-500 bg-orange-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <ContactPopup />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

