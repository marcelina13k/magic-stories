"use client"

import { Mail } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function ContactPopup() {
  return (
    <Popover>
      <PopoverTrigger className="text-sm font-medium transition-colors text-gray-600 hover:text-gray-900">
        Contact
      </PopoverTrigger>
      <PopoverContent className="w-auto backdrop-blur-md bg-white/70">
        <div className="flex items-center gap-2 px-2 py-1">
          <Mail className="h-4 w-4 text-orange-500" />
          <a href="mailto:magicstories13@gmail.com" className="text-sm hover:text-orange-500 transition-colors">
            magicstories13@gmail.com
          </a>
        </div>
      </PopoverContent>
    </Popover>
  )
}

