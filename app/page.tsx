import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Lock } from "lucide-react"
import { ScrollButton } from "@/components/scroll-button"
import { TallyForm } from "@/components/tally-form"
import { NavBar } from "@/components/nav-bar"
import { CharacterCard } from "@/components/character-card"
import { AudioPlayer } from "@/components/audio-player"

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
  imageUrl: "/charlie-avatar.png", // Updated to use local path
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-4 text-center pt-24 bg-gradient-to-b from-orange-50 to-pink-50">
        <div className="space-y-6 max-w-6xl mx-auto">
          <h1 className="tracking-tighter text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="block mb-2">Personalized Audio Adventures,</span>
            <span className="block">Where Your Child Is The Star</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            We create one-of-a-kind audio stories designed just for your little one — crafted from the details you
            provide and delivered straight to your inbox.
          </p>
          <ScrollButton />
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="py-12 px-4 bg-gradient-to-b from-pink-50 to-orange-50">
        <div className="mx-auto max-w-md">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join the Waitlist</h2>
            <p className="text-gray-600">Be the first to know when we launch!</p>
          </div>
          <TallyForm />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Experience the Magic</h2>
            <p className="text-gray-600 text-lg">
            Meet Charlie — a brave explorer whose story was crafted from his favorite things. Your child’s journey will be just as magical.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <CharacterCard info={characterInfo} />
            <div className="md:self-center">
              <AudioPlayer
                src="/charlie-audio.mp3" // Updated to use local path
                title="Charlie's Volcano Adventure"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-orange-50">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscription Plans (Coming Soon)</h2>
            <p className="text-gray-600">Join the wait list and be the first to find out when we launch!</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-6 opacity-60">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Monthly Plan</h3>
                  <Lock className="text-gray-400" />
                </div>
                <div className="text-3xl font-bold">$ / month</div>
                <p className="text-gray-600">Perfect for trying out our service</p>
                <Button disabled className="w-full">
                  Coming Soon
                </Button>
              </div>
            </Card>
            <Card className="p-6 opacity-60">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">Annual Plan</h3>
                  <Lock className="text-gray-400" />
                </div>
                <div className="text-3xl font-bold">$ / year</div>
                <p className="text-gray-600">Best value for committed listeners</p>
                <Button disabled className="w-full">
                  Coming Soon
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

