import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { PricingPlans } from "@/components/PricingPlans"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <NavBar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Choose Your Plan</h1>
        <PricingPlans />
      </div>
      <Footer />
    </div>
  )
}

