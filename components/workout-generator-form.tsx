"use client"

import { useState } from "react"
import { Dumbbell, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { generateWorkoutPlan } from "@/lib/ai-workout-generator"

export function WorkoutGeneratorForm() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [workoutPlan, setWorkoutPlan] = useState<string | null>(null)

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      // In a real app, this would call an API endpoint that uses the AI SDK
      const plan = await generateWorkoutPlan({
        goal: "strength",
        level: "intermediate",
        days: 3,
        duration: 45,
        equipment: true,
        limitations: "",
      })
      setWorkoutPlan(plan)
    } catch (error) {
      console.error("Error generating workout plan:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Workout Plan Generator</CardTitle>
          <CardDescription>Generate a personalized workout plan based on your preferences and goals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="goal">Fitness Goal</Label>
            <Select defaultValue="strength">
              <SelectTrigger id="goal">
                <SelectValue placeholder="Select your primary goal" />
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
            <Label htmlFor="level">Experience Level</Label>
            <Select defaultValue="intermediate">
              <SelectTrigger id="level">
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="days">Workouts Per Week</Label>
            <Slider id="days" defaultValue={[3]} max={7} min={1} step={1} className="py-4" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Workout Duration (minutes)</Label>
            <Slider id="duration" defaultValue={[45]} max={90} min={15} step={5} className="py-4" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>15</span>
              <span>30</span>
              <span>45</span>
              <span>60</span>
              <span>75</span>
              <span>90</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="equipment">Equipment Available</Label>
              <p className="text-sm text-muted-foreground">Do you have access to gym equipment?</p>
            </div>
            <Switch id="equipment" defaultChecked />
          </div>
          <div className="space-y-2">
            <Label htmlFor="limitations">Physical Limitations or Injuries</Label>
            <Textarea
              id="limitations"
              placeholder="Describe any physical limitations or injuries that should be considered"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleGenerate} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Dumbbell className="mr-2 h-4 w-4" />
                Generate Workout Plan
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Workout Plan</CardTitle>
          <CardDescription>Your personalized workout plan will appear here</CardDescription>
        </CardHeader>
        <CardContent>
          {workoutPlan ? (
            <div className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <h3 className="font-medium mb-2">3-Day Strength Training Plan</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium">Day 1: Upper Body</h4>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Bench Press: 3 sets x 8-10 reps</li>
                      <li>• Bent-Over Rows: 3 sets x 8-10 reps</li>
                      <li>• Overhead Press: 3 sets x 8-10 reps</li>
                      <li>• Pull-Ups/Lat Pulldowns: 3 sets x 8-10 reps</li>
                      <li>• Bicep Curls: 3 sets x 10-12 reps</li>
                      <li>• Tricep Extensions: 3 sets x 10-12 reps</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Day 2: Lower Body</h4>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Squats: 4 sets x 6-8 reps</li>
                      <li>• Romanian Deadlifts: 3 sets x 8-10 reps</li>
                      <li>• Leg Press: 3 sets x 10-12 reps</li>
                      <li>• Walking Lunges: 3 sets x 10 steps each leg</li>
                      <li>• Leg Curls: 3 sets x 10-12 reps</li>
                      <li>• Calf Raises: 4 sets x 15 reps</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Day 3: Full Body</h4>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Deadlifts: 3 sets x 6-8 reps</li>
                      <li>• Incline Bench Press: 3 sets x 8-10 reps</li>
                      <li>• Pull-Ups: 3 sets x 8-10 reps</li>
                      <li>• Dumbbell Shoulder Press: 3 sets x 8-10 reps</li>
                      <li>• Leg Extensions: 3 sets x 10-12 reps</li>
                      <li>• Plank: 3 sets x 45-60 seconds</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong>Rest:</strong> Take 60-90 seconds between sets, and 2-3 minutes between exercises.
                </p>
                <p className="mb-2">
                  <strong>Warm-up:</strong> 5-10 minutes of light cardio and dynamic stretching before each workout.
                </p>
                <p>
                  <strong>Cool-down:</strong> 5 minutes of static stretching after each workout.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[400px] text-center">
              <Dumbbell className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Workout Plan Generated Yet</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Fill out the form on the left and click "Generate Workout Plan" to create your personalized workout
                routine.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" disabled={!workoutPlan}>
            Download PDF
          </Button>
          <Button disabled={!workoutPlan}>Save to My Workouts</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

