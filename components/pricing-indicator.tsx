"use client"

import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type Step = {
  id: number
  name: string
  path: RegExp
}

const steps: Step[] = [
  { id: 1, name: "Details", path: /^\/create-story/ },
  { id: 2, name: "Payment", path: /^\/subscription-plans/ },
  { id: 3, name: "Review", path: /^\/payment-success/ },
]

export function ProgressIndicator() {
  const pathname = usePathname()

  // Find the current step based on the pathname
  const currentStepId = steps.findIndex((step) => step.path.test(pathname)) + 1

  if (currentStepId === 0) return null // Don't show on other pages

  return (
    <div className="w-full py-4 px-4 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Progress bar */}
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${((currentStepId - 1) / (steps.length - 1)) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500 transition-all duration-500"
            ></div>
          </div>

          {/* Steps */}
          <div className="flex justify-between">
            {steps.map((step) => (
              <div key={step.id} className="text-center">
                <div
                  className={cn(
                    "w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all duration-500",
                    step.id < currentStepId
                      ? "bg-orange-500 text-white border-orange-500"
                      : step.id === currentStepId
                        ? "border-orange-500 text-orange-500"
                        : "border-gray-300 text-gray-400",
                  )}
                >
                  {step.id < currentStepId ? "✓" : step.id}
                </div>
                <div
                  className={cn(
                    "mt-2 text-xs font-medium",
                    step.id === currentStepId ? "text-orange-500" : "text-gray-500",
                  )}
                >
                  {step.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

