"use client"

import { useState } from "react"
import { Globe, Moon, Save, Sun, Volume2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SettingsPanelProps {
  theme: string
  toggleTheme: () => void
}

export function SettingsPanel({ theme, toggleTheme }: SettingsPanelProps) {
  const [language, setLanguage] = useState("english")
  const [voiceGender, setVoiceGender] = useState("female")
  const [notifications, setNotifications] = useState({
    workoutReminders: true,
    mealReminders: true,
    progressUpdates: true,
    tips: true,
  })

  const handleNotificationChange = (name: string, checked: boolean) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: checked,
    }))
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Settings</CardTitle>
          <CardDescription className="text-gray-400">Manage your app preferences and settings</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger
                value="general"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                General
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="privacy"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
              >
                Privacy
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-6 mt-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white">Appearance</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="theme" className="text-gray-300">
                      Dark Mode
                    </Label>
                    <p className="text-sm text-gray-500">Toggle between light and dark theme</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sun className="h-5 w-5 text-gray-500" />
                    <Switch id="theme" checked={theme === "dark"} onCheckedChange={toggleTheme} />
                    <Moon className="h-5 w-5 text-gray-300" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white">Language</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="language" className="text-gray-300">
                      App Language
                    </Label>
                    <p className="text-sm text-gray-500">Select your preferred language</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-gray-500" />
                    <Select value={language} onValueChange={setLanguage}>
                      <SelectTrigger id="language" className="w-[180px] bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white">Voice Assistant</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="voice-gender" className="text-gray-300">
                      Voice Gender
                    </Label>
                    <p className="text-sm text-gray-500">Choose the gender of the AI voice</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="h-5 w-5 text-gray-500" />
                    <Select value={voiceGender} onValueChange={setVoiceGender}>
                      <SelectTrigger id="voice-gender" className="w-[180px] bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Select voice" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white">Session Time</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="session-time" className="text-gray-300">
                      Session Timeout
                    </Label>
                    <p className="text-sm text-gray-500">Set how long before you're automatically logged out</p>
                  </div>
                  <Select defaultValue="30">
                    <SelectTrigger id="session-time" className="w-[180px] bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                      <SelectItem value="never">Never</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6 mt-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white">Notification Preferences</h3>
                <p className="text-sm text-gray-500">Choose which notifications you'd like to receive</p>

                <div className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="workout-reminders" className="text-gray-300">
                        Workout Reminders
                      </Label>
                      <p className="text-sm text-gray-500">Receive reminders for scheduled workouts</p>
                    </div>
                    <Switch
                      id="workout-reminders"
                      checked={notifications.workoutReminders}
                      onCheckedChange={(checked) => handleNotificationChange("workoutReminders", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="meal-reminders" className="text-gray-300">
                        Meal Reminders
                      </Label>
                      <p className="text-sm text-gray-500">Receive reminders for scheduled meals</p>
                    </div>
                    <Switch
                      id="meal-reminders"
                      checked={notifications.mealReminders}
                      onCheckedChange={(checked) => handleNotificationChange("mealReminders", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="progress-updates" className="text-gray-300">
                        Progress Updates
                      </Label>
                      <p className="text-sm text-gray-500">Receive weekly progress updates</p>
                    </div>
                    <Switch
                      id="progress-updates"
                      checked={notifications.progressUpdates}
                      onCheckedChange={(checked) => handleNotificationChange("progressUpdates", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="tips" className="text-gray-300">
                        Tips & Advice
                      </Label>
                      <p className="text-sm text-gray-500">Receive personalized tips and advice</p>
                    </div>
                    <Switch
                      id="tips"
                      checked={notifications.tips}
                      onCheckedChange={(checked) => handleNotificationChange("tips", checked)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white">Notification Channels</h3>
                <p className="text-sm text-gray-500">Choose how you want to receive notifications</p>

                <div className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="push-notifications" className="text-gray-300">
                        Push Notifications
                      </Label>
                      <p className="text-sm text-gray-500">Receive notifications on your device</p>
                    </div>
                    <Switch id="push-notifications" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-notifications" className="text-gray-300">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-gray-500">Receive notifications via email</p>
                    </div>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="privacy" className="space-y-6 mt-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white">Data Collection</h3>
                <p className="text-sm text-gray-500">Manage how your data is collected and used</p>

                <div className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="data-collection" className="text-gray-300">
                        Data Collection
                      </Label>
                      <p className="text-sm text-gray-500">Allow collection of workout and nutrition data</p>
                    </div>
                    <Switch id="data-collection" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="personalized-ai" className="text-gray-300">
                        Personalized AI
                      </Label>
                      <p className="text-sm text-gray-500">Allow AI to personalize recommendations</p>
                    </div>
                    <Switch id="personalized-ai" defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="federated-learning" className="text-gray-300">
                        Federated Learning
                      </Label>
                      <p className="text-sm text-gray-500">Contribute to AI improvement while keeping data on device</p>
                    </div>
                    <Switch id="federated-learning" defaultChecked />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium text-white">Account</h3>
                <p className="text-sm text-gray-500">Manage your account data</p>

                <div className="space-y-4 mt-4">
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    Download My Data
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-red-800 text-red-500 hover:text-white hover:bg-red-900"
                  >
                    Delete My Account
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white">
            <Save className="mr-2 h-4 w-4" />
            Save Settings
          </Button>
        </CardFooter>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Legal</CardTitle>
          <CardDescription className="text-gray-400">Terms, privacy, and other legal information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button variant="link" className="text-gray-300 hover:text-white p-0">
              Terms of Service
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0">
              Privacy Policy
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0">
              Cookie Policy
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0">
              Data Protection
            </Button>
            <Button variant="link" className="text-gray-300 hover:text-white p-0">
              Report a Bug
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

