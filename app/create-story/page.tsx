import StoryForm from "@/components/StoryForm"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ProgressIndicator } from "@/components/progress-indicator"

export default function CreateStoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <NavBar />
      <ProgressIndicator />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Create Your Child's Story</h1>
          <StoryForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}
