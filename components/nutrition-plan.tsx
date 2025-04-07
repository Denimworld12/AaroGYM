"use client"

import { useState, useEffect } from "react"
import { Clock, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface NutritionPlanProps {
  isLoggedIn: boolean
  onLoginRequired: () => void
}

export function NutritionPlan({ isLoggedIn, onLoginRequired }: NutritionPlanProps) {
  const [dietType, setDietType] = useState("balanced")

  useEffect(() => {
    // If not logged in, trigger login modal
    if (!isLoggedIn) {
      onLoginRequired()
    }
  }, [isLoggedIn, onLoginRequired])

  if (!isLoggedIn) {
    return null
  }

  const dietPlans = {
    balanced: {
      calories: 2200,
      macros: {
        protein: { value: 110, target: 110, percentage: 20 },
        carbs: { value: 275, target: 275, percentage: 50 },
        fat: { value: 73, target: 73, percentage: 30 },
      },
      meals: [
        {
          name: "Breakfast",
          time: "7:30 AM",
          food: "Oatmeal with berries, nuts, and Greek yogurt",
          calories: 450,
          macros: "20g protein, 60g carbs, 15g fat",
        },
        {
          name: "Lunch",
          time: "12:30 PM",
          food: "Grilled chicken salad with mixed vegetables and olive oil dressing",
          calories: 550,
          macros: "35g protein, 40g carbs, 25g fat",
        },
        {
          name: "Snack",
          time: "3:30 PM",
          food: "Apple with almond butter",
          calories: 250,
          macros: "7g protein, 30g carbs, 12g fat",
        },
        {
          name: "Dinner",
          time: "7:00 PM",
          food: "Baked salmon with quinoa and roasted vegetables",
          calories: 650,
          macros: "40g protein, 65g carbs, 20g fat",
        },
        {
          name: "Evening Snack",
          time: "9:00 PM",
          food: "Cottage cheese with berries",
          calories: 200,
          macros: "15g protein, 20g carbs, 5g fat",
        },
      ],
    },
    highprotein: {
      calories: 2400,
      macros: {
        protein: { value: 180, target: 180, percentage: 30 },
        carbs: { value: 240, target: 240, percentage: 40 },
        fat: { value: 80, target: 80, percentage: 30 },
      },
      meals: [
        {
          name: "Breakfast",
          time: "7:00 AM",
          food: "Protein pancakes with Greek yogurt and berries",
          calories: 500,
          macros: "35g protein, 50g carbs, 15g fat",
        },
        {
          name: "Mid-Morning Snack",
          time: "10:00 AM",
          food: "Protein shake with banana",
          calories: 250,
          macros: "25g protein, 25g carbs, 5g fat",
        },
        {
          name: "Lunch",
          time: "1:00 PM",
          food: "Grilled chicken breast with sweet potato and broccoli",
          calories: 550,
          macros: "40g protein, 60g carbs, 15g fat",
        },
        {
          name: "Afternoon Snack",
          time: "4:00 PM",
          food: "Turkey and avocado roll-ups",
          calories: 300,
          macros: "25g protein, 10g carbs, 20g fat",
        },
        {
          name: "Dinner",
          time: "7:30 PM",
          food: "Lean beef stir-fry with mixed vegetables and brown rice",
          calories: 650,
          macros: "45g protein, 70g carbs, 20g fat",
        },
        {
          name: "Before Bed",
          time: "9:30 PM",
          food: "Casein protein with almond milk",
          calories: 150,
          macros: "25g protein, 5g carbs, 3g fat",
        },
      ],
    },
    lowcarb: {
      calories: 1900,
      macros: {
        protein: { value: 142, target: 142, percentage: 30 },
        carbs: { value: 95, target: 95, percentage: 20 },
        fat: { value: 105, target: 105, percentage: 50 },
      },
      meals: [
        {
          name: "Breakfast",
          time: "8:00 AM",
          food: "Vegetable omelet with avocado",
          calories: 450,
          macros: "25g protein, 10g carbs, 35g fat",
        },
        {
          name: "Lunch",
          time: "12:30 PM",
          food: "Grilled chicken salad with olive oil and nuts",
          calories: 550,
          macros: "40g protein, 15g carbs, 35g fat",
        },
        {
          name: "Snack",
          time: "3:30 PM",
          food: "Cheese and cucumber slices",
          calories: 200,
          macros: "12g protein, 5g carbs, 15g fat",
        },
        {
          name: "Dinner",
          time: "7:00 PM",
          food: "Baked salmon with asparagus and cauliflower rice",
          calories: 550,
          macros: "45g protein, 15g carbs, 35g fat",
        },
        {
          name: "Evening Snack",
          time: "9:00 PM",
          food: "Greek yogurt with a few berries and nuts",
          calories: 150,
          macros: "15g protein, 8g carbs, 7g fat",
        },
      ],
    },
  }

  const selectedPlan = dietPlans[dietType as keyof typeof dietPlans]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Nutrition Plan</h2>
          <p className="text-gray-400">AI-generated meal plans tailored to your goals</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => setDietType("balanced")}
            variant={dietType === "balanced" ? "default" : "outline"}
            className={
              dietType === "balanced"
                ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
            }
          >
            Balanced
          </Button>
          <Button
            onClick={() => setDietType("highprotein")}
            variant={dietType === "highprotein" ? "default" : "outline"}
            className={
              dietType === "highprotein"
                ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
            }
          >
            High Protein
          </Button>
          <Button
            onClick={() => setDietType("lowcarb")}
            variant={dietType === "lowcarb" ? "default" : "outline"}
            className={
              dietType === "lowcarb"
                ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                : "border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
            }
          >
            Low Carb
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Daily Nutrition Overview</CardTitle>
            <CardDescription className="text-gray-400">
              {dietType === "balanced" && "A balanced diet with even macronutrient distribution"}
              {dietType === "highprotein" && "Higher protein intake to support muscle growth and recovery"}
              {dietType === "lowcarb" && "Reduced carbohydrates with higher fat and protein intake"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Daily Calories</span>
                  <span className="text-sm font-medium text-white">{selectedPlan.calories} kcal</span>
                </div>
                <Progress
                  value={100}
                  className="h-2 bg-gray-800"
                  indicatorClassName="bg-gradient-to-r from-red-500 to-orange-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Protein ({selectedPlan.macros.protein.percentage}%)</span>
                  <span className="text-sm font-medium text-white">
                    {selectedPlan.macros.protein.value}g / {selectedPlan.macros.protein.target}g
                  </span>
                </div>
                <Progress
                  value={(selectedPlan.macros.protein.value / selectedPlan.macros.protein.target) * 100}
                  className="h-2 bg-gray-800"
                  indicatorClassName="bg-red-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Carbs ({selectedPlan.macros.carbs.percentage}%)</span>
                  <span className="text-sm font-medium text-white">
                    {selectedPlan.macros.carbs.value}g / {selectedPlan.macros.carbs.target}g
                  </span>
                </div>
                <Progress
                  value={(selectedPlan.macros.carbs.value / selectedPlan.macros.carbs.target) * 100}
                  className="h-2 bg-gray-800"
                  indicatorClassName="bg-orange-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Fat ({selectedPlan.macros.fat.percentage}%)</span>
                  <span className="text-sm font-medium text-white">
                    {selectedPlan.macros.fat.value}g / {selectedPlan.macros.fat.target}g
                  </span>
                </div>
                <Progress
                  value={(selectedPlan.macros.fat.value / selectedPlan.macros.fat.target) * 100}
                  className="h-2 bg-gray-800"
                  indicatorClassName="bg-yellow-500"
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <h3 className="text-lg font-medium text-white mb-4">Nutrition Tips</h3>
              <ul className="space-y-2 text-gray-300">
                {dietType === "balanced" && (
                  <>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Aim for a variety of colorful fruits and vegetables
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Include whole grains as your primary carbohydrate source
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Balance meals with protein, carbs, and healthy fats
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Stay hydrated by drinking at least 2-3 liters of water daily
                    </li>
                  </>
                )}
                {dietType === "highprotein" && (
                  <>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Distribute protein intake evenly throughout the day
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Consume protein within 30 minutes after workouts
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Include both animal and plant-based protein sources
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Stay hydrated to support protein metabolism
                    </li>
                  </>
                )}
                {dietType === "lowcarb" && (
                  <>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Focus on non-starchy vegetables for carbohydrates
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Include healthy fats like avocados, nuts, and olive oil
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Maintain adequate protein intake to preserve muscle mass
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-orange-500">•</span>
                      Increase electrolyte intake to prevent imbalances
                    </li>
                  </>
                )}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Meal Plan</CardTitle>
            <CardDescription className="text-gray-400">Your daily meal schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedPlan.meals.map((meal, index) => (
                <div key={index} className="rounded-md border border-gray-800 overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center">
                      <Utensils className="h-4 w-4 text-orange-500 mr-2" />
                      <span className="font-medium text-white">{meal.name}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{meal.time}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-300 mb-2">{meal.food}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{meal.calories} calories</span>
                      <span className="text-gray-400">{meal.macros}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white">
              Generate Custom Meal Plan
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Alternative Meal Suggestions</CardTitle>
          <CardDescription className="text-gray-400">
            Swap options based on your preferences and available ingredients
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-gray-800 p-4">
              <h3 className="font-medium text-white mb-2">Breakfast Alternatives</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Protein smoothie with spinach, banana, and almond milk
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Egg white frittata with vegetables and feta cheese
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Whole grain toast with avocado and poached eggs
                </li>
              </ul>
            </div>

            <div className="rounded-md border border-gray-800 p-4">
              <h3 className="font-medium text-white mb-2">Lunch Alternatives</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Turkey and vegetable wrap with hummus
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Lentil soup with a side salad
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Quinoa bowl with roasted vegetables and chickpeas
                </li>
              </ul>
            </div>

            <div className="rounded-md border border-gray-800 p-4">
              <h3 className="font-medium text-white mb-2">Dinner Alternatives</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Grilled white fish with steamed vegetables
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Turkey meatballs with zucchini noodles
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Stir-fried tofu with mixed vegetables and brown rice
                </li>
              </ul>
            </div>

            <div className="rounded-md border border-gray-800 p-4">
              <h3 className="font-medium text-white mb-2">Snack Alternatives</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Greek yogurt with berries and a drizzle of honey
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Protein bar (look for low sugar options)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Hard-boiled eggs with a piece of fruit
                </li>
              </ul>
            </div>

            <div className="rounded-md border border-gray-800 p-4">
              <h3 className="font-medium text-white mb-2">Vegetarian Options</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Lentil and vegetable curry with brown rice
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Black bean burgers with sweet potato wedges
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Spinach and feta omelette with whole grain toast
                </li>
              </ul>
            </div>

            <div className="rounded-md border border-gray-800 p-4">
              <h3 className="font-medium text-white mb-2">Quick Meal Ideas</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Rotisserie chicken with pre-cut vegetables
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Canned tuna mixed with pre-cooked quinoa
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Microwaveable protein bowl with added greens
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

