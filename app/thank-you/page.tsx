import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <NavBar />
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
          <p className="text-xl mb-8">
            Your story details have been submitted successfully. We're excited to create a magical adventure for your
            child!
          </p>
          <p className="mb-8">
            You should receive a confirmation email shortly with all the details you provided. If you don't see it, please check your spam folder or contact us.
          </p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
