const testimonials = [
    {
      quote: "Hearing my daughter's name in the story lit up her face — she couldn't stop listening!",
      author: "Sarah M.",
    },
    {
      quote: "I've never seen my son so engaged — he keeps asking when the next story will arrive!",
      author: "Michael T.",
    },
  ]
  
  export function Testimonials({ background = "bg-white" }: { background?: string }) {
    return (
      <section className={`py-24 px-4 ${background}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Parents Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-pink-50 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-right font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  