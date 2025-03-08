"use client"

import { useEffect, useState } from "react"
import { NavBar } from "@/components/nav-bar"
import { SubmitStoryForm } from "@/components/SubmitStoryForm"
import { ProgressIndicator } from "@/components/progress-indicator"
import { Footer } from "@/components/footer"

export default function PaymentSuccessPage() {
  const [formData, setFormData] = useState<Record<string, string> | null>(null)

  useEffect(() => {
    const savedData = localStorage.getItem("storyFormData")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setFormData(parsedData)
      } catch (error) {
        console.error("Error parsing form data:", error)
        setFormData(null)
      }
    } else {
      setFormData(null)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <NavBar />
      <ProgressIndicator />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Thanks for subscribing!</h1>
        {formData ? (
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <SubmitStoryForm initialData={formData} />
          </div>
        ) : (
          <p className="text-center">
            We couldn't find your story information. Please fill out the form again to create your personalized story.
          </p>
        )}
      </div>
      <Footer />
    </div>
  )
}
