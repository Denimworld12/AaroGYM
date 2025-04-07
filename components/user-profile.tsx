"use client"

import type React from "react"

import { useState } from "react"
import { Save, User, FileUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"

interface UserProfileProps {
  userData: any
  setUserData: (data: any) => void
}

export function UserProfile({ userData, setUserData }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: userData?.name || "",
    age: userData?.age || "",
    weight: userData?.weight || "",
    height: userData?.height || "",
    gender: "male",
    goal: "weight-loss",
    activityLevel: "moderate",
    dietType: "balanced",
    allergies: "",
    healthConditions: [],
    mealPreferences: "",
    lifestyle: {
      smoking: false,
      drinking: false,
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      lifestyle: {
        ...prev.lifestyle,
        [name]: checked,
      },
    }))
  }

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData((prev) => {
      const healthConditions = [...(prev.healthConditions || [])]

      if (checked) {
        if (!healthConditions.includes(value)) {
          healthConditions.push(value)
        }
      } else {
        const index = healthConditions.indexOf(value)
        if (index !== -1) {
          healthConditions.splice(index, 1)
        }
      }

      return {
        ...prev,
        healthConditions,
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Update user data in state and localStorage
    setUserData({
      ...userData,
      ...formData,
    })

    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...userData,
        ...formData,
      }),
    )

    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">User Profile</CardTitle>
              <CardDescription className="text-gray-400">
                Manage your personal information and preferences
              </CardDescription>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? "default" : "outline"}
              className={
                isEditing
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                  : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
              }
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-800">
              <TabsTrigger
                value="personal"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                value="fitness"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                Fitness Goals
              </TabsTrigger>
              <TabsTrigger
                value="diet"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                Diet Preferences
              </TabsTrigger>
              <TabsTrigger
                value="health"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                Health Conditions
              </TabsTrigger>
            </TabsList>

            <form onSubmit={handleSubmit}>
              <TabsContent value="personal" className="space-y-4 mt-4">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="relative">
                      <div className="h-32 w-32 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
                        <User className="h-12 w-12 text-white" />
                      </div>
                      {isEditing && (
                        <Button
                          size="sm"
                          className="absolute bottom-0 right-0 rounded-full bg-gray-800 hover:bg-gray-700"
                        >
                          Change
                        </Button>
                      )}
                    </div>
                    <div className="text-center">
                      <h3 className="font-medium text-white">{userData?.name || "User"}</h3>
                      <p className="text-sm text-gray-400">Member since April 2025</p>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender" className="text-gray-300">
                          Gender
                        </Label>
                        <Select
                          disabled={!isEditing}
                          value={formData.gender}
                          onValueChange={(value) => handleSelectChange("gender", value)}
                        >
                          <SelectTrigger id="gender" className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700 text-white">
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-gray-300">
                          Age
                        </Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          value={formData.age}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight" className="text-gray-300">
                          Weight (kg)
                        </Label>
                        <Input
                          id="weight"
                          name="weight"
                          type="number"
                          value={formData.weight}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="height" className="text-gray-300">
                          Height (cm)
                        </Label>
                        <Input
                          id="height"
                          name="height"
                          type="number"
                          value={formData.height}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="fitness" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="goal" className="text-gray-300">
                        Primary Fitness Goal
                      </Label>
                      <Select
                        disabled={!isEditing}
                        value={formData.goal}
                        onValueChange={(value) => handleSelectChange("goal", value)}
                      >
                        <SelectTrigger id="goal" className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select goal" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                          <SelectItem value="weight-loss">Weight Loss</SelectItem>
                          <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                          <SelectItem value="strength">Strength Training</SelectItem>
                          <SelectItem value="endurance">Endurance</SelectItem>
                          <SelectItem value="flexibility">Flexibility</SelectItem>
                          <SelectItem value="general">General Fitness</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="activityLevel" className="text-gray-300">
                        Activity Level
                      </Label>
                      <Select
                        disabled={!isEditing}
                        value={formData.activityLevel}
                        onValueChange={(value) => handleSelectChange("activityLevel", value)}
                      >
                        <SelectTrigger id="activityLevel" className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select activity level" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                          <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                          <SelectItem value="light">Light (1-3 days per week)</SelectItem>
                          <SelectItem value="moderate">Moderate (3-5 days per week)</SelectItem>
                          <SelectItem value="active">Active (6-7 days per week)</SelectItem>
                          <SelectItem value="very-active">Very Active (twice per day)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Preferred Workout Days</Label>
                      <div className="grid grid-cols-4 gap-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                          <div key={day} className="flex items-center space-x-2">
                            <Switch id={`day-${day}`} disabled={!isEditing} />
                            <Label htmlFor={`day-${day}`} className="text-gray-300">
                              {day}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="limitations" className="text-gray-300">
                        Physical Limitations or Injuries
                      </Label>
                      <Textarea
                        id="limitations"
                        placeholder="Describe any physical limitations or injuries"
                        disabled={!isEditing}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="diet" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="dietType" className="text-gray-300">
                        Diet Type
                      </Label>
                      <Select
                        disabled={!isEditing}
                        value={formData.dietType}
                        onValueChange={(value) => handleSelectChange("dietType", value)}
                      >
                        <SelectTrigger id="dietType" className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Select diet type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                          <SelectItem value="balanced">Balanced</SelectItem>
                          <SelectItem value="high-protein">High Protein</SelectItem>
                          <SelectItem value="low-carb">Low Carb</SelectItem>
                          <SelectItem value="keto">Ketogenic</SelectItem>
                          <SelectItem value="vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="vegan">Vegan</SelectItem>
                          <SelectItem value="paleo">Paleo</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="allergies" className="text-gray-300">
                        Food Allergies
                      </Label>
                      <Textarea
                        id="allergies"
                        name="allergies"
                        value={formData.allergies}
                        onChange={handleChange}
                        placeholder="List any food allergies"
                        disabled={!isEditing}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="mealPreferences" className="text-gray-300">
                        Meal Preferences
                      </Label>
                      <Textarea
                        id="mealPreferences"
                        name="mealPreferences"
                        value={formData.mealPreferences}
                        onChange={handleChange}
                        placeholder="Describe your meal preferences and times"
                        disabled={!isEditing}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Dietary Restrictions</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Gluten-Free", "Dairy-Free", "Nut-Free", "Soy-Free", "Low-Sodium", "Low-Sugar"].map(
                          (restriction) => (
                            <div key={restriction} className="flex items-center space-x-2">
                              <Checkbox id={`restriction-${restriction}`} disabled={!isEditing} />
                              <Label htmlFor={`restriction-${restriction}`} className="text-gray-300">
                                {restriction}
                              </Label>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="health" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Health Conditions</Label>
                      <div className="space-y-2">
                        {["Diabetes", "Hypertension", "PCOS", "Thyroid", "Heart Disease", "Arthritis"].map(
                          (condition) => (
                            <div key={condition} className="flex items-center space-x-2">
                              <Checkbox
                                id={`condition-${condition}`}
                                disabled={!isEditing}
                                checked={formData.healthConditions.includes(condition)}
                                onCheckedChange={(checked) => handleCheckboxChange(condition, checked as boolean)}
                              />
                              <Label htmlFor={`condition-${condition}`} className="text-gray-300">
                                {condition}
                              </Label>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-300">Lifestyle Habits</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="smoking" className="text-gray-300">
                            Smoking
                          </Label>
                          <Switch
                            id="smoking"
                            disabled={!isEditing}
                            checked={formData.lifestyle.smoking}
                            onCheckedChange={(checked) => handleSwitchChange("smoking", checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="drinking" className="text-gray-300">
                            Alcohol Consumption
                          </Label>
                          <Switch
                            id="drinking"
                            disabled={!isEditing}
                            checked={formData.lifestyle.drinking}
                            onCheckedChange={(checked) => handleSwitchChange("drinking", checked)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label className="text-gray-300">Upload Medical Reports</Label>
                      <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
                        <FileUp className="h-8 w-8 text-gray-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-400 mb-2">Drag and drop files here or click to browse</p>
                        <p className="text-xs text-gray-500">Supported formats: PDF, JPG, PNG (max 10MB)</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-4 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                          disabled={!isEditing}
                        >
                          Upload Files
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {isEditing && (
                <div className="mt-6 flex justify-end">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              )}
            </form>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

