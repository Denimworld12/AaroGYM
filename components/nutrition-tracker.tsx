"use client"

import { useState } from "react"
import { Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

const macroData = [
  { name: "Protein", value: 165, target: 180 },
  { name: "Carbs", value: 220, target: 220 },
  { name: "Fat", value: 55, target: 67 },
]

const mealData = [
  {
    name: "Breakfast",
    time: "7:30 AM",
    foods: [
      { name: "Protein Oatmeal", calories: 350, protein: 25, carbs: 45, fat: 10 },
      { name: "Banana", calories: 105, protein: 1, carbs: 27, fat: 0 },
    ],
    totalCalories: 455,
  },
  {
    name: "Lunch",
    time: "12:30 PM",
    foods: [
      { name: "Chicken Salad", calories: 450, protein: 40, carbs: 25, fat: 20 },
      { name: "Whole Grain Bread", calories: 150, protein: 5, carbs: 30, fat: 2 },
    ],
    totalCalories: 600,
  },
  {
    name: "Snack",
    time: "3:30 PM",
    foods: [
      { name: "Protein Shake", calories: 150, protein: 25, carbs: 5, fat: 3 },
      { name: "Apple", calories: 95, protein: 0, carbs: 25, fat: 0 },
    ],
    totalCalories: 245,
  },
  {
    name: "Dinner",
    time: "7:00 PM",
    foods: [
      { name: "Salmon", calories: 350, protein: 40, carbs: 0, fat: 20 },
      { name: "Brown Rice", calories: 150, protein: 3, carbs: 32, fat: 1 },
      { name: "Roasted Vegetables", calories: 100, protein: 2, carbs: 20, fat: 2 },
    ],
    totalCalories: 600,
  },
]

export function NutritionTracker() {
  const [searchTerm, setSearchTerm] = useState("")

  const totalCalories = mealData.reduce((sum, meal) => sum + meal.totalCalories, 0)
  const targetCalories = 2200
  const caloriePercentage = Math.min(100, Math.round((totalCalories / targetCalories) * 100))

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Calories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalCalories} / {targetCalories}
            </div>
            <p className="text-xs text-muted-foreground">{caloriePercentage}% of daily goal</p>
            <Progress value={caloriePercentage} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Protein</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {macroData[0].value}g / {macroData[0].target}g
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((macroData[0].value / macroData[0].target) * 100)}% of daily goal
            </p>
            <Progress value={Math.round((macroData[0].value / macroData[0].target) * 100)} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Carbs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {macroData[1].value}g / {macroData[1].target}g
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((macroData[1].value / macroData[1].target) * 100)}% of daily goal
            </p>
            <Progress value={Math.round((macroData[1].value / macroData[1].target) * 100)} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Fat</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {macroData[2].value}g / {macroData[2].target}g
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.round((macroData[2].value / macroData[2].target) * 100)}% of daily goal
            </p>
            <Progress value={Math.round((macroData[2].value / macroData[2].target) * 100)} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Macronutrient Breakdown</CardTitle>
            <CardDescription>Distribution of your daily macronutrients</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={macroData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {macroData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Add Food</CardTitle>
            <CardDescription>Search for foods to add to your daily log</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search foods..."
                  className="w-full pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="rounded-md border">
                <div className="p-3 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Chicken Breast (100g)</h4>
                      <p className="text-sm text-muted-foreground">165 calories</p>
                    </div>
                    <Button size="sm">Add</Button>
                  </div>
                </div>
                <div className="p-3 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Brown Rice (100g)</h4>
                      <p className="text-sm text-muted-foreground">112 calories</p>
                    </div>
                    <Button size="sm">Add</Button>
                  </div>
                </div>
                <div className="p-3 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Broccoli (100g)</h4>
                      <p className="text-sm text-muted-foreground">34 calories</p>
                    </div>
                    <Button size="sm">Add</Button>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Olive Oil (1 tbsp)</h4>
                      <p className="text-sm text-muted-foreground">119 calories</p>
                    </div>
                    <Button size="sm">Add</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Today's Food Log</CardTitle>
              <CardDescription>All meals and snacks logged for today</CardDescription>
            </div>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Meal
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
              <TabsTrigger value="lunch">Lunch</TabsTrigger>
              <TabsTrigger value="dinner">Dinner</TabsTrigger>
              <TabsTrigger value="snacks">Snacks</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 mt-4">
              {mealData.map((meal, index) => (
                <div key={index} className="rounded-md border">
                  <div className="p-3 bg-muted/50 flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{meal.name}</h3>
                      <p className="text-sm text-muted-foreground">{meal.time}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{meal.totalCalories} calories</p>
                    </div>
                  </div>
                  <div className="p-3">
                    {meal.foods.map((food, foodIndex) => (
                      <div key={foodIndex} className="flex justify-between py-1 border-b last:border-0">
                        <div>
                          <p className="text-sm">{food.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{food.calories} cal</p>
                          <p className="text-xs text-muted-foreground">
                            P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="breakfast">
              <div className="rounded-md border mt-4">
                <div className="p-3 bg-muted/50 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Breakfast</h3>
                    <p className="text-sm text-muted-foreground">7:30 AM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">455 calories</p>
                  </div>
                </div>
                <div className="p-3">
                  {mealData[0].foods.map((food, foodIndex) => (
                    <div key={foodIndex} className="flex justify-between py-1 border-b last:border-0">
                      <div>
                        <p className="text-sm">{food.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{food.calories} cal</p>
                        <p className="text-xs text-muted-foreground">
                          P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="lunch">
              <div className="rounded-md border mt-4">
                <div className="p-3 bg-muted/50 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Lunch</h3>
                    <p className="text-sm text-muted-foreground">12:30 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">600 calories</p>
                  </div>
                </div>
                <div className="p-3">
                  {mealData[1].foods.map((food, foodIndex) => (
                    <div key={foodIndex} className="flex justify-between py-1 border-b last:border-0">
                      <div>
                        <p className="text-sm">{food.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{food.calories} cal</p>
                        <p className="text-xs text-muted-foreground">
                          P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="dinner">
              <div className="rounded-md border mt-4">
                <div className="p-3 bg-muted/50 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Dinner</h3>
                    <p className="text-sm text-muted-foreground">7:00 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">600 calories</p>
                  </div>
                </div>
                <div className="p-3">
                  {mealData[3].foods.map((food, foodIndex) => (
                    <div key={foodIndex} className="flex justify-between py-1 border-b last:border-0">
                      <div>
                        <p className="text-sm">{food.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{food.calories} cal</p>
                        <p className="text-xs text-muted-foreground">
                          P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="snacks">
              <div className="rounded-md border mt-4">
                <div className="p-3 bg-muted/50 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">Snack</h3>
                    <p className="text-sm text-muted-foreground">3:30 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">245 calories</p>
                  </div>
                </div>
                <div className="p-3">
                  {mealData[2].foods.map((food, foodIndex) => (
                    <div key={foodIndex} className="flex justify-between py-1 border-b last:border-0">
                      <div>
                        <p className="text-sm">{food.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm">{food.calories} cal</p>
                        <p className="text-xs text-muted-foreground">
                          P: {food.protein}g | C: {food.carbs}g | F: {food.fat}g
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

