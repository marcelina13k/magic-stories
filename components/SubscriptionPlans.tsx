"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SubscriptionPlans() {
  const [loading, setLoading] = useState(false)

  const handleSubscription = async (priceId: string) => {
    setLoading(true)

    //create checkout session
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
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose Your Plan</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Plan</CardTitle>
            <CardDescription>Perfect for trying out our service</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$12/month</p>
            <Button
              className="mt-4 w-full bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleSubscription("price_1QxzPoJ8mwOAaXHXSlip1ZWI")}
              disabled={loading}
            >
              {loading ? "Processing..." : "Subscribe Monthly"}
              {!loading && <span className="ml-2 animate-pulse">→</span>}
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
              className="mt-4 w-full bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleSubscription("price_1QxzQCJ8mwOAaXHXEmtM3VH5")}
              disabled={loading}
            >
              {loading ? "Processing..." : "Subscribe Yearly"}
              {!loading && <span className="ml-2 animate-pulse">→</span>}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
