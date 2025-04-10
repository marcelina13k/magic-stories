import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavBar } from "@/components/nav-bar"
import { CharacterCard } from "@/components/character-card"
import { AudioPlayer } from "@/components/audio-player"
import { WhyMagicStories } from "@/components/why-magic-stories"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { FAQ } from "@/components/faq"

const characterInfo = {
  name: "Charlie",
  age: 6,
  favoriteActivities:
    "playing soccer outside with his older brother Sam, searching for hidden dinosaur artifacts in his backyard",
  favoriteAnimal: "stegosaurus",
  favoriteColor: "orange",
  pet: "chocolate lab puppy named Beaver",
  magicalElement: "Charlie loves everything about dinosaurs",
  specialSkill: "Charlie wants to climb a volcano and watch it explode",
  imageUrl: "/charlie-avatar.png",
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center bg-gradient-to-b from-orange-50 to-pink-50">
        <div className="space-y-8 max-w-6xl mx-auto">
          <h1 className="tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="block mb-2">Personalized Audio Adventures,</span>
            <span className="block">Where Your Child Is The Star</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Ignite your child's imagination with one-of-a-kind, magical stories crafted from their favorite things and
            wildest dreams.
          </p>
          <div className="pt-4">
            <Button
              id="main-cta"
              asChild
              className="bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/create-story">
                Start Crafting Their First Story
                <span className="ml-2 animate-pulse">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Experience the Magic</h2>
            <p className="text-gray-600 text-lg">
              Meet Charlie — a brave explorer whose story was crafted from his favorite things. Your child's journey
              will be just as magical.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <CharacterCard info={characterInfo} />
            <div className="md:self-center">
              <AudioPlayer src="/charlie-audio.mp3" title="Charlie's Volcano Adventure" />
            </div>
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/create-story">
                Create Your Child's Story Now
                <span className="ml-2 animate-pulse">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <WhyMagicStories background="bg-gradient-to-b from-orange-50 to-pink-50" />

      <HowItWorks background="bg-gradient-to-b from-pink-50 to-orange-50" />

      <Testimonials background="bg-white" />

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  )
}
