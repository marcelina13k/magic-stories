"use client"

import { Share2, Wand2, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: <Share2 className="h-8 w-8 text-orange-500" />,
    title: "Share Your Child's Favorites",
    description: "Tell us their name, favorite animals, magical powers, and anything they love.",
  },
  {
    icon: <Wand2 className="h-8 w-8 text-orange-500" />,
    title: "We Create a Magical Tale",
    description: "Our AI-powered storyteller crafts a unique audio adventure starring your child.",
  },
  {
    icon: <Headphones className="h-8 w-8 text-orange-500" />,
    title: "Listen & Enjoy",
    description: "Receive their story straight to your inbox — a new magical tale every month.",
  },
]

function StartButton() {
  return (
    <Button
      size="lg"
      className="bg-orange-500 hover:bg-orange-600"
      onClick={() => {
        document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
      }}
    >
      Start Your Child's Story
    </Button>
  )
}

export function HowItWorks({ background = "bg-white" }: { background?: string }) {
  return (
    <section className={`py-24 px-4 ${background}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Crafting Your Child's Story Is as Easy as 1, 2, 3!
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center md:w-1/3 mb-8 md:mb-0">
              <div className="bg-orange-100 rounded-full p-4 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <StartButton />
        </div>
      </div>
    </section>
  )
}
