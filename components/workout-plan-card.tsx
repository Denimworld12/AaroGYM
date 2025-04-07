"use client"

import { useState } from "react"
import { Edit, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function WorkoutPlanCard() {
  const [activeWorkout, setActiveWorkout] = useState("strength")

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Current Workout Plan</CardTitle>
            <CardDescription>Your personalized 4-week workout plan</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit Plan
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Plan
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="week1" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="week1">Week 1</TabsTrigger>
            <TabsTrigger value="week2">Week 2</TabsTrigger>
            <TabsTrigger value="week3">Week 3</TabsTrigger>
            <TabsTrigger value="week4">Week 4</TabsTrigger>
          </TabsList>
          <TabsContent value="week1" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Monday</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge>Upper Body</Badge>
                    <Badge variant="outline">45 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Bench Press</span>
                      <span>3 x 10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shoulder Press</span>
                      <span>3 x 12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Lat Pulldown</span>
                      <span>3 x 12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bicep Curls</span>
                      <span>3 x 15</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tricep Extensions</span>
                      <span>3 x 15</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Workout</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Wednesday</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge>Lower Body</Badge>
                    <Badge variant="outline">50 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Squats</span>
                      <span>4 x 8</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Deadlifts</span>
                      <span>4 x 6</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Leg Press</span>
                      <span>3 x 12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Lunges</span>
                      <span>3 x 10 each</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Calf Raises</span>
                      <span>3 x 15</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Workout</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Friday</CardTitle>
                  <div className="flex items-center justify-between">
                    <Badge>Full Body</Badge>
                    <Badge variant="outline">55 min</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Push-ups</span>
                      <span>3 x 15</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pull-ups</span>
                      <span>3 x 8</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Goblet Squats</span>
                      <span>3 x 12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Dumbbell Rows</span>
                      <span>3 x 12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Plank</span>
                      <span>3 x 45 sec</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Workout</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Week 1 Progress</h3>
              <Progress value={33} className="h-2" />
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>1/3 workouts completed</span>
                <span>33%</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="week2">
            <div className="p-4 text-center text-muted-foreground">
              Week 2 workouts will be available after completing Week 1
            </div>
          </TabsContent>
          <TabsContent value="week3">
            <div className="p-4 text-center text-muted-foreground">
              Week 3 workouts will be available after completing Week 2
            </div>
          </TabsContent>
          <TabsContent value="week4">
            <div className="p-4 text-center text-muted-foreground">
              Week 4 workouts will be available after completing Week 3
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

