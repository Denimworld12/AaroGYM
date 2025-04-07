import type { Metadata } from "next"
import { Clock, Filter, Plus, Search, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DietPlanGeneratorForm } from "@/components/diet-plan-generator-form"
import { NutritionTracker } from "@/components/nutrition-tracker"

export const metadata: Metadata = {
  title: "Nutrition - FitAI",
  description: "Personalized diet plans and nutrition tracking",
}

export default function NutritionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Nutrition</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Generate Meal Plan
            </Button>
          </div>
        </div>
        <Tabs defaultValue="meal-plans" className="space-y-4">
          <TabsList>
            <TabsTrigger value="meal-plans">Meal Plans</TabsTrigger>
            <TabsTrigger value="generator">Meal Plan Generator</TabsTrigger>
            <TabsTrigger value="tracker">Nutrition Tracker</TabsTrigger>
          </TabsList>
          <TabsContent value="meal-plans" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search meal plans..."
                  className="w-full bg-background pl-8 md:w-[300px]"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>High Protein Meal Plan</CardTitle>
                  <CardDescription>Optimized for muscle building</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Utensils className="mr-1 h-4 w-4" />
                      <span>2,500 calories</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>5 meals</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Breakfast</span>
                      <span>Protein Oatmeal</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Lunch</span>
                      <span>Chicken & Quinoa Bowl</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Dinner</span>
                      <span>Salmon with Vegetables</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Snacks</span>
                      <span>Protein Shake, Greek Yogurt</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Full Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Weight Loss Plan</CardTitle>
                  <CardDescription>Calorie-controlled with balanced macros</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Utensils className="mr-1 h-4 w-4" />
                      <span>1,800 calories</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>4 meals</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Breakfast</span>
                      <span>Veggie Egg White Omelet</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Lunch</span>
                      <span>Tuna Salad</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Dinner</span>
                      <span>Lean Turkey & Vegetables</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Snack</span>
                      <span>Apple with Almond Butter</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Full Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Vegetarian Plan</CardTitle>
                  <CardDescription>Plant-based nutrition for active lifestyles</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Utensils className="mr-1 h-4 w-4" />
                      <span>2,200 calories</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>5 meals</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Breakfast</span>
                      <span>Tofu Scramble</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Lunch</span>
                      <span>Lentil & Vegetable Soup</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Dinner</span>
                      <span>Bean & Quinoa Bowl</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Snacks</span>
                      <span>Hummus, Mixed Nuts</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Full Plan</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="generator" className="space-y-4">
            <DietPlanGeneratorForm />
          </TabsContent>
          <TabsContent value="tracker" className="space-y-4">
            <NutritionTracker />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

