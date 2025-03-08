import SubscriptionPlans from "@/components/SubscriptionPlans"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ProgressIndicator } from "@/components/progress-indicator"

export default function SubscriptionPlansPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <NavBar />
      <ProgressIndicator />
      <SubscriptionPlans />
      <Footer />
    </div>
  )
}

