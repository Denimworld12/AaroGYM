"use client"

import { useState } from "react"
import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export function UserProfileCard() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>User Profile</CardTitle>
            <CardDescription>Manage your personal information and preferences</CardDescription>
          </div>
          <Button variant={isEditing ? "default" : "outline"} onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="fitness">Fitness Goals</TabsTrigger>
            <TabsTrigger value="diet">Diet Preferences</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="personal" className="space-y-4 mt-4">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center space-y-2">
                <div className="relative">
                  <div className="h-32 w-32 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-12 w-12 text-muted-foreground" />
                  </div>
                  {isEditing && (
                    <Button size="sm" className="absolute bottom-0 right-0 rounded-full">
                      Change
                    </Button>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-sm text-muted-foreground">Member since April 2025</p>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="John Doe" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john.doe@example.com" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" defaultValue="32" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select disabled={!isEditing} defaultValue="male">
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height (cm)</Label>
                    <Input id="height" type="number" defaultValue="180" disabled={!isEditing} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (kg)</Label>
                    <Input id="weight" type="number" defaultValue="82" disabled={!isEditing} />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="fitness" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fitness-goal">Primary Fitness Goal</Label>
                  <Select disabled={!isEditing} defaultValue="strength">
                    <SelectTrigger id="fitness-goal">
                      <SelectValue placeholder="Select goal" />
                    </SelectTrigger>
                    <SelectContent>
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
                  <Label htmlFor="activity-level">Activity Level</Label>
                  <Select disabled={!isEditing} defaultValue="moderate">
                    <SelectTrigger id="activity-level">
                      <SelectValue placeholder="Select activity level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedentary">Sedentary (little to no exercise)</SelectItem>
                      <SelectItem value="light">Light (1-3 days per week)</SelectItem>
                      <SelectItem value="moderate">Moderate (3-5 days per week)</SelectItem>
                      <SelectItem value="active">Active (6-7 days per week)</SelectItem>
                      <SelectItem value="very-active">Very Active (twice per day)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience-level">Experience Level</Label>
                  <Select disabled={!isEditing} defaultValue="intermediate">
                    <SelectTrigger id="experience-level">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="workout-days">Preferred Workout Days</Label>
                  <div className="grid grid-cols-4 gap-2">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                      <div key={day} className="flex items-center space-x-2">
                        <Switch
                          id={`day-${day}`}
                          defaultChecked={["Mon", "Wed", "Fri"].includes(day)}
                          disabled={!isEditing}
                        />
                        <Label htmlFor={`day-${day}`}>{day}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workout-time">Preferred Workout Time</Label>
                  <Select disabled={!isEditing} defaultValue="morning">
                    <SelectTrigger id="workout-time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="early-morning">Early Morning (5-7 AM)</SelectItem>
                      <SelectItem value="morning">Morning (7-11 AM)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (11 AM-4 PM)</SelectItem>
                      <SelectItem value="evening">Evening (4-8 PM)</SelectItem>
                      <SelectItem value="night">Night (8-11 PM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="limitations">Physical Limitations or Injuries</Label>
                  <Textarea
                    id="limitations"
                    placeholder="Describe any physical limitations or injuries"
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="diet" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="diet-type">Diet Type</Label>
                  <Select disabled={!isEditing} defaultValue="balanced">
                    <SelectTrigger id="diet-type">
                      <SelectValue placeholder="Select diet type" />
                    </SelectTrigger>
                    <SelectContent>
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
                  <Label htmlFor="calorie-goal">Daily Calorie Goal</Label>
                  <Input id="calorie-goal" type="number" defaultValue="2200" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meal-count">Meals Per Day</Label>
                  <Select disabled={!isEditing} defaultValue="4">
                    <SelectTrigger id="meal-count">
                      <SelectValue placeholder="Select number of meals" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 meals</SelectItem>
                      <SelectItem value="4">4 meals</SelectItem>
                      <SelectItem value="5">5 meals</SelectItem>
                      <SelectItem value="6">6 meals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="allergies">Food Allergies</Label>
                  <Textarea id="allergies" placeholder="List any food allergies" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dislikes">Food Dislikes</Label>
                  <Textarea id="dislikes" placeholder="List foods you dislike" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label>Dietary Restrictions</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {["Gluten-Free", "Dairy-Free", "Nut-Free", "Soy-Free", "Low-Sodium", "Low-Sugar"].map(
                      (restriction) => (
                        <div key={restriction} className="flex items-center space-x-2">
                          <Switch id={`restriction-${restriction}`} disabled={!isEditing} />
                          <Label htmlFor={`restriction-${restriction}`}>{restriction}</Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="settings" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Notifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="workout-reminders">Workout Reminders</Label>
                      <p className="text-sm text-muted-foreground">Receive reminders for scheduled workouts</p>
                    </div>
                    <Switch id="workout-reminders" defaultChecked disabled={!isEditing} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="meal-reminders">Meal Reminders</Label>
                      <p className="text-sm text-muted-foreground">Receive reminders for scheduled meals</p>
                    </div>
                    <Switch id="meal-reminders" defaultChecked disabled={!isEditing} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="progress-updates">Progress Updates</Label>
                      <p className="text-sm text-muted-foreground">Receive weekly progress updates</p>
                    </div>
                    <Switch id="progress-updates" defaultChecked disabled={!isEditing} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="tips-updates">Tips & Advice</Label>
                      <p className="text-sm text-muted-foreground">Receive personalized tips and advice</p>
                    </div>
                    <Switch id="tips-updates" defaultChecked disabled={!isEditing} />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Privacy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="data-collection">Data Collection</Label>
                      <p className="text-sm text-muted-foreground">Allow collection of workout and nutrition data</p>
                    </div>
                    <Switch id="data-collection" defaultChecked disabled={!isEditing} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="personalized-ai">Personalized AI</Label>
                      <p className="text-sm text-muted-foreground">Allow AI to personalize recommendations</p>
                    </div>
                    <Switch id="personalized-ai" defaultChecked disabled={!isEditing} />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Connected Devices</h3>
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-medium">Fitness Watch</h4>
                      <p className="text-sm text-muted-foreground">Connected on April 1, 2025</p>
                    </div>
                    <Button variant="outline" size="sm" disabled={!isEditing}>
                      Disconnect
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full" disabled={!isEditing}>
                    Connect New Device
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

