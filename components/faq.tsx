"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What is Magic Stories?",
    answer:
      "Magic Stories is a personalized audio story subscription for kids. Each month, your child receives a magical, tailor-made story crafted from the details you provide — like their name, favorite toy, and special interests.",
  },
  {
    question: "How does it work?",
    answer:
      "It's simple! You choose a plan, share a few fun details about your child, and we create an enchanting audio story just for them. A new story arrives in your inbox every month — no screens, just imagination.",
  },
  {
    question: "What subscription plans are available?",
    answer:
      "We offer two plans:\nMonthly Plan: $12/month — receive a personalized audio story each month.\nAnnual Plan: $99/year — get 12 stories (one each month) for less than $9/story!\nThe annual plan is the best value, saving you over 20%!",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes! You can cancel your subscription anytime by emailing us at magicstories13@gmail.com.",
  },
  {
    question: "What happens after I subscribe?",
    answer:
      "After subscribing, you'll be directed to complete the simple form with your child's details. This helps us craft their story.",
  },
  {
    question: "How personalized are the stories?",
    answer:
      "Every story we create is unique to your child! We use the details you provide — like their name, age, favorite toy, and even their dreams — to shape a story that feels magical and one-of-a-kind.",
  },
  {
    question: "Can I update my child's details?",
    answer:
      "Of course! If your child's interests change or you want to update their details, just reach out to us at magicstories13@gmail.com, and we'll make sure their next story reflects the new info.",
  },
  {
    question: "What if I have more than one child?",
    answer:
      "We suggest creating separate subscriptions so each child can receive their own personalized story. We currently don't offer sibling bundles, but we're exploring that for the future!",
  },
  {
    question: "How and when will we receive the stories?",
    answer:
      "You'll receive a new audio story directly in your email inbox every month. Stories are usually delivered a few days after your subscription begins and on the same day of each month afterwards — a perfect surprise to kick off each month's adventures!",
  },
  {
    question: "What format are the stories in?",
    answer:
      "Stories are delivered as high-quality audio files (MP3) that you can play on any device — phone, tablet, or computer.",
  },
  {
    question: "What makes Magic Stories different from other kids' storytelling apps?",
    answer:
      "Unlike generic apps, Magic Stories crafts personalized audio adventures using the details you share about your child. No screens, no one-size-fits-all plots — just magical, imaginative storytelling that makes your child the star.",
  },
  {
    question: "Are audio stories really beneficial for kids?",
    answer:
      "Audio stories help kids develop:\n• Listening skills\n• Imagination and creativity\n• Focus and attention span\nPlus, they offer a screen-free way to wind down — perfect for bedtime or quiet moments.",
  },
  {
    question: "I have more questions — how can I contact you?",
    answer:
      "We're here to help! Reach out anytime at magicstories13@gmail.com, and we'll get back to you as soon as possible.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 bg-gradient-to-b from-orange-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer.split("\n").map((line, i) => (
                  <p key={i} className="mb-2 last:mb-0">
                    {line}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

