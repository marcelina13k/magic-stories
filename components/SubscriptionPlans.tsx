"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SubscriptionPlans() {
  const [loading, setLoading] = useState(false)

  const handleSubscription = async (priceId: string) => {
    setLoading(true)

    //create cheeckout session
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      })

      const { url } = await response.json()
      if (url) {
        window.location.href = url
      } else {
        console.error("Failed to get checkout URL")
      }
    } catch (error) {
      console.error("Subscription error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Monthly Plan</CardTitle>
          <CardDescription>Perfect for trying out our service</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">$12/month</p>
          <Button
            className="mt-4 w-full"
            onClick={() => handleSubscription("price_1QxgZhR7401oQmTZGcfUiMMz")}
          >
            Subscribe Monthly
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Yearly Plan</CardTitle>
          <CardDescription>Best value for committed listeners</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">$99/year</p>
          <Button
            className="mt-4 w-full"
            onClick={() => handleSubscription("price_1QxgmER7401oQmTZfIBsVnXF")}
          >
            Subscribe Yearly
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
