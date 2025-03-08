"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function PricingPlans() {
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
            asChild
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/create-story">
              Get Started with Monthly
              <span className="ml-2 animate-pulse">→</span>
            </Link>
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
            asChild
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/create-story">
              Save 20% with Annual
              <span className="ml-2 animate-pulse">→</span>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

