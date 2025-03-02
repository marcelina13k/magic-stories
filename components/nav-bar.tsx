"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavBar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/subscription-plans" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#footer" },
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
          <div className="flex space-x-8 items-center">
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
          </div>
        </div>
      </div>
    </nav>
  )
}

