"use client"

import { useEffect, useState } from "react"
import { SubmitStoryForm } from "@/components/SubmitStoryForm"

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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Payment Successful!</h1>
      <p className="mb-4">Thank you for subscribing. Check your email for confirmation.</p>
      {formData ? (
        <>
          <p className="mb-8">
            Take a final look at your personalized story info and submit to get that magic started!
          </p>
          <SubmitStoryForm initialData={formData} />
        </>
      ) : (
        <p className="mb-8">
          We couldn't find your story information. Please fill out the form again to create your personalized story.
        </p>
      )}
    </div>
  )
}
