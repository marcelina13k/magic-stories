import { SubmitStoryForm } from "@/components/SubmitStoryForm"

export default function SubmitStoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Congrats! Your child's story is in the works!</h1>
      <SubmitStoryForm />
    </div>
  )
}
