import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "magicstories13@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const emailContent = `
      <h2>Thank you for submitting your story details!</h2>

      <p>Hello ${data.parentName},</p>

      <p>We've received your story details for <strong>${data.childName}</strong>! Our team is already working on crafting a magical, personalized audio adventure for your child. Here's a quick recap of what you shared:</p>

      <ul>
        <li><strong>Child's Name:</strong> ${data.childName}</li>
        <li><strong>Age:</strong> ${data.childAge}</li>
        <li><strong>Pronouns:</strong> ${data.childPronouns}</li>
        <li><strong>Favorite Toy/Stuffed Animal/Pet:</strong> ${data.favoriteToy}</li>
        <li><strong>Favorite Activities:</strong> ${data.favoriteActivities}</li>
        <li><strong>Favorite Place:</strong> ${data.favoritePlace}</li>
        <li><strong>Favorite Color:</strong> ${data.favoriteColor}</li>
        <li><strong>Special Interests or Themes:</strong> ${data.specialInterests || "Not specified"}</li>
        <li><strong>Special Skill or Dream:</strong> ${data.specialSkill}</li>
        <li><strong>Description of Child:</strong> ${data.childDescription}</li>
        ${data.childFear ? `<li><strong>Fear They're Working Through:</strong> ${data.childFear}</li>` : ""}
        ${data.storyLesson ? `<li><strong>Story Lesson/Theme:</strong> ${data.storyLesson}</li>` : ""}
      </ul>

      <p>We'll deliver the first story to your inbox soon. If you have any updates or want to tweak these details, feel free to reply to this email.</p>

      <p>We can't wait for <strong>${data.childName}</strong> to embark on their magical story journey! 🌟</p>

      <p>Warmly,</p>
      <p>The Magic Stories Team</p>
    `

    await transporter.sendMail({
      from: "magicstories13@gmail.com",
      to: data.parentEmail,
      subject: "✨ Your Child's Story Details Have Been Submitted!",
      html: emailContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

