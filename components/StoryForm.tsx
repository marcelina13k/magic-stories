"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SubscriptionPlans from "@/components/SubscriptionPlans"

export default function StoryForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    childName: "",
    childAge: "",
    favoriteToy: "",
    favoriteActivities: "",
    favoriteColor: "",
    specialInterests: "",
    specialSkill: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleAgeChange = (value: string) => {
    setFormData({ ...formData, childAge: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("storyFormData", JSON.stringify(formData))
    setShowPlans(true)
  }

  const [showPlans, setShowPlans] = useState(false)

  if (showPlans) {
    return <SubscriptionPlans formData={formData} />
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
      <Button type="submit">Choose Your Plan</Button>
    </form>
  )
}
