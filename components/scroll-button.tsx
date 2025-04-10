"use client"

import { Button } from "@/components/ui/button"

export function ScrollButton() {
  return (
    <Button
      size="lg"
      className="bg-orange-500 hover:bg-orange-600"
      onClick={() => {
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
      }}
    >
      Start Crafting Their First Story
    </Button>
  )
}

