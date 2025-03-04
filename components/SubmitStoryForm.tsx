"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Pencil } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type FormData = {
  parentName: string
  parentEmail: string
  childName: string
  childAge: string
  childPronouns: string
  favoriteToy: string
  favoriteActivities: string
  favoritePlace: string
  favoriteColor: string
  specialInterests: string
  specialSkill: string
  childDescription: string
  childFear: string
  storyLesson: string
}

type Props = {
  initialData?: Partial<FormData>
}

export function SubmitStoryForm({ initialData = {} }: Props) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    parentName: initialData.parentName || "",
    parentEmail: initialData.parentEmail || "",
    childName: initialData.childName || "",
    childAge: initialData.childAge || "",
    childPronouns: initialData.childPronouns || "",
    favoriteToy: initialData.favoriteToy || "",
    favoriteActivities: initialData.favoriteActivities || "",
    favoritePlace: initialData.favoritePlace || "",
    favoriteColor: initialData.favoriteColor || "",
    specialInterests: initialData.specialInterests || "",
    specialSkill: initialData.specialSkill || "",
    childDescription: initialData.childDescription || "",
    childFear: initialData.childFear || "",
    storyLesson: initialData.storyLesson || "",
  })
  const [tempFormData, setTempFormData] = useState<FormData>(formData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempFormData({ ...tempFormData, [e.target.name]: e.target.value })
  }

  const handleAgeChange = (value: string) => {
    setTempFormData({ ...tempFormData, childAge: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const dataToSubmit = isEditing ? tempFormData : formData

      // Submit to Google Sheets
      const sheetResponse = await fetch("/api/submit-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      })

      if (!sheetResponse.ok) {
        throw new Error("Failed to submit to Google Sheets")
      }

      // Send confirmation email using the new endpoint
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      })

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json()
        throw new Error(errorData.error || "Failed to send confirmation email")
      }

      if (isEditing) {
        setFormData(tempFormData)
        setIsEditing(false)
      } else {
        localStorage.removeItem("storyFormData")
        router.push("/thank-you")
      }

    } catch (error) {
      console.error("Error submitting story:", error)
    }
  }

  const handleCancel = () => {
    setTempFormData(formData)
    setIsEditing(false)
  }

  const ReviewField = ({ label, value }: { label: string; value: string }) => (
    <div className="mb-6">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-lg">{value || "Not specified"}</div>
    </div>
  )

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-bold">Review Your Details</h2>
          <p className="text-gray-600">
            Take a final look at your personalized story info and submit to get the magic started!
          </p>
        </div>
        {!isEditing && (
          <Button variant="ghost" className="text-gray-500 hover:text-orange-500" onClick={() => setIsEditing(true)}>
            <Pencil className="h-4 w-4 mr-2" />
            Edit
          </Button>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {isEditing ? (
          // Edit Form
          <>
            <div className="space-y-4">
              <div>
                <Label htmlFor="parentName">Your Name</Label>
                <Input
                  id="parentName"
                  name="parentName"
                  value={tempFormData.parentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="parentEmail">Your Email</Label>
                <Input
                  id="parentEmail"
                  name="parentEmail"
                  type="email"
                  value={tempFormData.parentEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="childName">Child's first name</Label>
                <Input
                  id="childName"
                  name="childName"
                  value={tempFormData.childName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="childAge">Child's age</Label>
                <Select onValueChange={handleAgeChange} value={tempFormData.childAge}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 18 }, (_, i) => (
                      <SelectItem key={i} value={String(i + 1)}>
                        {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="childPronouns">Child's Pronouns</Label>
                <Input
                  id="childPronouns"
                  name="childPronouns"
                  value={tempFormData.childPronouns}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="favoriteToy">Favorite toy/stuffed animal/pet</Label>
                <Input
                  id="favoriteToy"
                  name="favoriteToy"
                  value={tempFormData.favoriteToy}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="favoriteActivities">Favorite Activities (sports, hobbies)</Label>
                <Input
                  id="favoriteActivities"
                  name="favoriteActivities"
                  value={tempFormData.favoriteActivities}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="favoritePlace">Favorite Place</Label>
                <Input
                  id="favoritePlace"
                  name="favoritePlace"
                  value={tempFormData.favoritePlace}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="favoriteColor">Favorite color</Label>
                <Input
                  id="favoriteColor"
                  name="favoriteColor"
                  value={tempFormData.favoriteColor}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="specialInterests">Any special interests or themes?</Label>
                <Input
                  id="specialInterests"
                  name="specialInterests"
                  value={tempFormData.specialInterests}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="specialSkill">Special skill or dream</Label>
                <Input
                  id="specialSkill"
                  name="specialSkill"
                  value={tempFormData.specialSkill}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="childDescription">A few words to describe your child</Label>
                <Input
                  id="childDescription"
                  name="childDescription"
                  value={tempFormData.childDescription}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="childFear">
                  A fear they're working through (darkness, heights, being alone) (Optional)
                </Label>
                <Input id="childFear" name="childFear" value={tempFormData.childFear} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="storyLesson">
                  Anything you'd like the story to gently teach or inspire? (kindness, patience, bravery) (Optional)
                </Label>
                <Input id="storyLesson" name="storyLesson" value={tempFormData.storyLesson} onChange={handleChange} />
              </div>
            </div>
            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                Submit Changes
              </Button>
            </div>
          </>
        ) : (
          // Review Mode
          <>
            <div className="space-y-4">
              <ReviewField label="Your Name" value={formData.parentName} />
              <ReviewField label="Your Email" value={formData.parentEmail} />
              <ReviewField label="Child's Name" value={formData.childName} />
              <ReviewField label="Child's Age" value={formData.childAge} />
              <ReviewField label="Child's Pronouns" value={formData.childPronouns} />
              <ReviewField label="Favorite Toy/Pet" value={formData.favoriteToy} />
              <ReviewField label="Favorite Activities" value={formData.favoriteActivities} />
              <ReviewField label="Favorite Place" value={formData.favoritePlace} />
              <ReviewField label="Favorite Color" value={formData.favoriteColor} />
              <ReviewField label="Special Interests" value={formData.specialInterests} />
              <ReviewField label="Special Skill or Dream" value={formData.specialSkill} />
              <ReviewField label="Description of Child" value={formData.childDescription} />
              {formData.childFear && <ReviewField label="Fear They're Working Through" value={formData.childFear} />}
              {formData.storyLesson && <ReviewField label="Story Lesson/Theme" value={formData.storyLesson} />}
            </div>
            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Submit Your Story Details
              <span className="ml-2 animate-pulse">→</span>
            </Button>
          </>
        )}
      </form>
    </div>
  )
}
