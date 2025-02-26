import { Mic, Sparkles, Calendar, Clock } from "lucide-react"

const features = [
  {
    icon: <Mic className="h-8 w-8 text-orange-500" />,
    title: "Your Child, the Hero of Every Story",
    description:
      "Each story is crafted using your child's name, favorite things, and magical ideas — making them the star of their own adventure.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-orange-500" />,
    title: "Personalized Audio Magic",
    description:
      "Our high-quality audio stories are professionally narrated, ensuring every tale feels like a magical experience.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-orange-500" />,
    title: "New Adventures, Every Month",
    description:
      "Keep the magic alive — a brand-new, custom-crafted story arrives in your inbox every month, keeping your child excited for the next adventure.",
  },
  {
    icon: <Clock className="h-8 w-8 text-orange-500" />,
    title: "Easy for Parents, Enchanting for Kids",
    description: "No complicated apps or setup — simply share a few fun details about your child, and we do the rest.",
  },
]

export function WhyMagicStories({ background = "bg-white" }: { background?: string }) {
  return (
    <section className={`py-24 px-4 ${background}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Magic Stories?</h2>
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
          Your child doesn't just listen to a story — they become the hero of it. Each personalized audio adventure is
          built around their name, interests, and personality, making every tale uniquely theirs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
