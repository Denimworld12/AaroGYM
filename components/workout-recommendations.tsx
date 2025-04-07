"use client"

import { useState, useEffect } from "react"
import { Dumbbell, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface WorkoutRecommendationsProps {
  userData: any
}

export function WorkoutRecommendations({ userData }: WorkoutRecommendationsProps) {
  const [goal, setGoal] = useState("strength")
  const [bmiCategory, setBmiCategory] = useState("")

  useEffect(() => {
    if (userData && userData.weight && userData.height) {
      // Calculate BMI
      const heightInMeters = userData.height / 100
      const bmiValue = userData.weight / (heightInMeters * heightInMeters)

      // Set BMI category
      if (bmiValue < 18.5) {
        setBmiCategory("underweight")
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setBmiCategory("healthy")
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setBmiCategory("overweight")
      } else {
        setBmiCategory("obese")
      }
    }
  }, [userData])

  const workouts = {
    strength: [
      {
        title: "Upper Body Power",
        description: "Focus on chest, shoulders, and arms",
        level: "Intermediate",
        duration: "45 min",
        exercises: [
          { name: "Bench Press", sets: "4 sets x 8 reps" },
          { name: "Shoulder Press", sets: "3 sets x 10 reps" },
          { name: "Bent-Over Rows", sets: "3 sets x 10 reps" },
          { name: "Tricep Extensions", sets: "3 sets x 12 reps" },
          { name: "Bicep Curls", sets: "3 sets x 12 reps" },
        ],
      },
      {
        title: "Lower Body Strength",
        description: "Focus on legs and glutes",
        level: "Advanced",
        duration: "50 min",
        exercises: [
          { name: "Squats", sets: "4 sets x 8 reps" },
          { name: "Deadlifts", sets: "4 sets x 6 reps" },
          { name: "Leg Press", sets: "3 sets x 10 reps" },
          { name: "Walking Lunges", sets: "3 sets x 12 steps" },
          { name: "Calf Raises", sets: "3 sets x 15 reps" },
        ],
      },
      {
        title: "Full Body Strength",
        description: "Comprehensive full body workout",
        level: "Intermediate",
        duration: "60 min",
        exercises: [
          { name: "Deadlifts", sets: "3 sets x 8 reps" },
          { name: "Push-ups", sets: "3 sets x 12 reps" },
          { name: "Pull-ups", sets: "3 sets x 8 reps" },
          { name: "Goblet Squats", sets: "3 sets x 12 reps" },
          { name: "Plank", sets: "3 sets x 45 sec" },
        ],
      },
    ],
    weightloss: [
      {
        title: "HIIT Cardio",
        description: "High-intensity interval training",
        level: "All Levels",
        duration: "30 min",
        exercises: [
          { name: "Jumping Jacks", sets: "45 sec on, 15 sec rest" },
          { name: "Mountain Climbers", sets: "45 sec on, 15 sec rest" },
          { name: "Burpees", sets: "45 sec on, 15 sec rest" },
          { name: "High Knees", sets: "45 sec on, 15 sec rest" },
          { name: "Plank Jacks", sets: "45 sec on, 15 sec rest" },
        ],
      },
      {
        title: "Fat Burning Circuit",
        description: "Full body circuit for maximum calorie burn",
        level: "Intermediate",
        duration: "40 min",
        exercises: [
          { name: "Kettlebell Swings", sets: "3 sets x 15 reps" },
          { name: "Jump Squats", sets: "3 sets x 12 reps" },
          { name: "Push-up to Renegade Row", sets: "3 sets x 10 reps" },
          { name: "Lateral Lunges", sets: "3 sets x 12 each side" },
          { name: "Bicycle Crunches", sets: "3 sets x 20 reps" },
        ],
      },
      {
        title: "Metabolic Conditioning",
        description: "Boost metabolism and burn fat",
        level: "Advanced",
        duration: "45 min",
        exercises: [
          { name: "Box Jumps", sets: "4 sets x 12 reps" },
          { name: "Battle Ropes", sets: "4 sets x 30 sec" },
          { name: "Sled Push", sets: "4 sets x 30 meters" },
          { name: "Medicine Ball Slams", sets: "4 sets x 15 reps" },
          { name: "Rowing Machine", sets: "4 sets x 250 meters" },
        ],
      },
    ],
    flexibility: [
      {
        title: "Dynamic Stretching",
        description: "Improve range of motion",
        level: "All Levels",
        duration: "25 min",
        exercises: [
          { name: "Arm Circles", sets: "2 sets x 30 sec each direction" },
          { name: "Leg Swings", sets: "2 sets x 12 each leg" },
          { name: "Hip Circles", sets: "2 sets x 10 each direction" },
          { name: "Walking Lunges with Twist", sets: "2 sets x 10 each side" },
          { name: "World's Greatest Stretch", sets: "2 sets x 8 each side" },
        ],
      },
      {
        title: "Yoga Flow",
        description: "Enhance flexibility and balance",
        level: "Intermediate",
        duration: "40 min",
        exercises: [
          { name: "Sun Salutations", sets: "5 complete flows" },
          { name: "Warrior Sequence", sets: "Hold each pose for 30 sec" },
          { name: "Standing Balances", sets: "Hold each pose for 30 sec" },
          { name: "Seated Forward Folds", sets: "Hold each pose for 45 sec" },
          { name: "Supine Twists", sets: "Hold each pose for 45 sec" },
        ],
      },
      {
        title: "Mobility Workout",
        description: "Joint mobility and flexibility",
        level: "All Levels",
        duration: "35 min",
        exercises: [
          { name: "Shoulder Mobility Series", sets: "2 sets x 10 reps each" },
          { name: "Hip Mobility Series", sets: "2 sets x 10 reps each" },
          { name: "Ankle Mobility Drills", sets: "2 sets x 10 reps each" },
          { name: "Thoracic Spine Rotations", sets: "2 sets x 8 each side" },
          { name: "Wrist Mobility Series", sets: "2 sets x 10 reps each" },
        ],
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Workout Recommendations</h2>
          <p className="text-gray-400">Personalized workout plans based on your goals and fitness level</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => setGoal("strength")}
            variant={goal === "strength" ? "default" : "outline"}
            className={
              goal === "strength"
                ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
            }
          >
            Strength
          </Button>
          <Button
            onClick={() => setGoal("weightloss")}
            variant={goal === "weightloss" ? "default" : "outline"}
            className={
              goal === "weightloss"
                ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
            }
          >
            Weight Loss
          </Button>
          <Button
            onClick={() => setGoal("flexibility")}
            variant={goal === "flexibility" ? "default" : "outline"}
            className={
              goal === "flexibility"
                ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
            }
          >
            Flexibility
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Search workouts..."
            className="w-full bg-gray-900 border-gray-700 text-white pl-8 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
        <Button
          variant="outline"
          size="sm"
          className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
        >
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workouts[goal as keyof typeof workouts].map((workout, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-red-600 to-orange-500" />
            <CardHeader>
              <CardTitle className="text-white">{workout.title}</CardTitle>
              <CardDescription className="text-gray-400">{workout.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center">
                  <Dumbbell className="mr-1 h-4 w-4 text-orange-500" />
                  <span>{workout.level}</span>
                </div>
                <div className="flex items-center">
                  <span>{workout.duration}</span>
                </div>
              </div>
              <div className="space-y-2">
                {workout.exercises.map((exercise, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-white">{exercise.name}</span>
                    <span className="text-gray-400">{exercise.sets}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white">
                Start Workout
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {bmiCategory && (
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Recommendations Based on Your BMI</CardTitle>
            <CardDescription className="text-gray-400">Personalized suggestions for your body type</CardDescription>
          </CardHeader>
          <CardContent>
            {bmiCategory === "underweight" && (
              <div className="space-y-4">
                <p className="text-gray-300">
                  Based on your BMI, you're classified as{" "}
                  <span className="text-blue-500 font-semibold">underweight</span>. Here are some recommendations:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Focus on strength training to build muscle mass
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Increase caloric intake with nutrient-dense foods
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Include protein with every meal to support muscle growth
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Start with lighter weights and focus on proper form
                  </li>
                </ul>
              </div>
            )}

            {bmiCategory === "healthy" && (
              <div className="space-y-4">
                <p className="text-gray-300">
                  Based on your BMI, you're classified as having a{" "}
                  <span className="text-green-500 font-semibold">healthy weight</span>. Here are some recommendations:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Maintain a balanced approach to fitness with both cardio and strength training
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Focus on performance goals rather than weight loss
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Consider adding variety to your workouts to prevent plateaus
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Maintain a balanced diet that supports your activity level
                  </li>
                </ul>
              </div>
            )}

            {bmiCategory === "overweight" && (
              <div className="space-y-4">
                <p className="text-gray-300">
                  Based on your BMI, you're classified as{" "}
                  <span className="text-yellow-500 font-semibold">overweight</span>. Here are some recommendations:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Combine strength training with cardio for optimal fat loss
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Focus on HIIT workouts for efficient calorie burning
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Start with lower impact exercises to protect joints
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Create a moderate calorie deficit through diet and exercise
                  </li>
                </ul>
              </div>
            )}

            {bmiCategory === "obese" && (
              <div className="space-y-4">
                <p className="text-gray-300">
                  Based on your BMI, you're classified as <span className="text-red-500 font-semibold">obese</span>.
                  Here are some recommendations:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Start with low-impact exercises like walking, swimming, or cycling
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Focus on building consistency with shorter, more frequent workouts
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Include resistance training to preserve muscle mass during weight loss
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-orange-500">•</span>
                    Consider working with a fitness professional for personalized guidance
                  </li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

