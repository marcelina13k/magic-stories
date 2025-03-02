import SubscriptionPlans from "@/components/SubscriptionPlans"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function SubscriptionPlansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <NavBar />
      <SubscriptionPlans />
      <Footer />
    </div>
  )
}

