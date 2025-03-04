"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function StoryForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    childPronouns: "",
    favoriteToy: "",
    favoriteActivities: "",
    favoritePlace: "",
    favoriteColor: "",
    specialInterests: "",
    specialSkill: "",
    childDescription: "",
    childFear: "",
    storyLesson: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAgeChange = (value: string) => {
    setFormData({ ...formData, childAge: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    localStorage.setItem("storyFormData", JSON.stringify(formData))
    router.push("/subscription-plans")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="childName">Child's first name</Label>
        <Input id="childName" name="childName" value={formData.childName} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="childAge">Child's age</Label>
        <Select onValueChange={handleAgeChange} value={formData.childAge}>
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
          value={formData.childPronouns}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="favoriteToy">Favorite toy/stuffed animal/pet</Label>
        <Input id="favoriteToy" name="favoriteToy" value={formData.favoriteToy} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="favoriteActivities">Favorite Activities (sports, hobbies)</Label>
        <Input
          id="favoriteActivities"
          name="favoriteActivities"
          value={formData.favoriteActivities}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="favoritePlace">Favorite Place</Label>
        <Input
          id="favoritePlace"
          name="favoritePlace"
          value={formData.favoritePlace}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="favoriteColor">Favorite color</Label>
        <Input
          id="favoriteColor"
          name="favoriteColor"
          value={formData.favoriteColor}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="specialInterests">Any special interests or themes?</Label>
        <Input
          id="specialInterests"
          name="specialInterests"
          value={formData.specialInterests}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="specialSkill">Special skill or dream</Label>
        <Input id="specialSkill" name="specialSkill" value={formData.specialSkill} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="childDescription">A few words to describe your child</Label>
        <Input
          id="childDescription"
          name="childDescription"
          value={formData.childDescription}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="childFear">A fear they're working through (darkness, heights, being alone) (Optional)</Label>
        <Input id="childFear" name="childFear" value={formData.childFear} onChange={handleChange} />
      </div>
      <div>
        <Label htmlFor="storyLesson">
          Anything you'd like the story to gently teach or inspire? (kindness, patience, bravery) (Optional)
        </Label>
        <Input id="storyLesson" name="storyLesson" value={formData.storyLesson} onChange={handleChange} />
      </div>
      <Button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Choose Your Plan"}
        {!isSubmitting && <span className="ml-2 animate-pulse">→</span>}
      </Button>
    </form>
  )
}
