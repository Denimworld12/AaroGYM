"use client"

import { useState } from "react"
import { Loader2, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { generateDietPlan } from "@/lib/ai-diet-generator"

export function DietPlanGeneratorForm() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [dietPlan, setDietPlan] = useState<string | null>(null)

  const handleGenerate = async () => {
    setIsGenerating(true)
    try {
      // In a real app, this would call an API endpoint that uses the AI SDK
      const plan = await generateDietPlan({
        goal: "muscle-gain",
        dietType: "high-protein",
        calories: 2500,
        meals: 5,
        allergies: "",
        preferences: "",
      })
      setDietPlan(plan)
    } catch (error) {
      console.error("Error generating diet plan:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Diet Plan Generator</CardTitle>
          <CardDescription>Generate a personalized meal plan based on your preferences and goals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="goal">Nutrition Goal</Label>
            <Select defaultValue="muscle-gain">
              <SelectTrigger id="goal">
                <SelectValue placeholder="Select your primary goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weight-loss">Weight Loss</SelectItem>
                <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="performance">Athletic Performance</SelectItem>
                <SelectItem value="health">General Health</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="diet-type">Diet Type</Label>
            <Select defaultValue="high-protein">
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
            <Label htmlFor="calories">Daily Calorie Target</Label>
            <Slider id="calories" defaultValue={[2500]} max={4000} min={1500} step={100} className="py-4" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1500</span>
              <span>2000</span>
              <span>2500</span>
              <span>3000</span>
              <span>3500</span>
              <span>4000</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="meals">Meals Per Day</Label>
            <Select defaultValue="5">
              <SelectTrigger id="meals">
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
          <div className="space-y-2">
            <Label htmlFor="allergies">Food Allergies</Label>
            <Textarea id="allergies" placeholder="List any food allergies or intolerances" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferences">Food Preferences</Label>
            <Textarea id="preferences" placeholder="List foods you particularly like or dislike" />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="meal-prep">Meal Prep Friendly</Label>
              <p className="text-sm text-muted-foreground">Optimize for batch cooking and meal prep</p>
            </div>
            <Switch id="meal-prep" defaultChecked />
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
                <Utensils className="mr-2 h-4 w-4" />
                Generate Meal Plan
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI-Generated Meal Plan</CardTitle>
          <CardDescription>Your personalized meal plan will appear here</CardDescription>
        </CardHeader>
        <CardContent>
          {dietPlan ? (
            <div className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <h3 className="font-medium mb-2">High Protein Meal Plan (2,500 calories)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium">Meal 1: Breakfast (7:00 AM)</h4>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Protein Oatmeal: 1 cup oats, 1 scoop protein powder, 1 tbsp almond butter</li>
                      <li>• 1 medium banana</li>
                      <li>• 1 cup unsweetened almond milk</li>
                      <li>
                        <span className="text-muted-foreground">(500 calories, 35g protein)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Meal 2: Mid-Morning Snack (10:00 AM)</h4>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Greek yogurt (1 cup)</li>
                      <li>• 1/4 cup mixed berries</li>
                      <li>• 1 tbsp honey</li>
                      <li>• 2 tbsp granola</li>
                      <li>
                        <span className="text-muted-foreground">(300 calories, 20g protein)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Meal 3: Lunch (1:00 PM)</h4>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• 6oz grilled chicken breast</li>
                      <li>• 1 cup quinoa</li>
                      <li>• 2 cups mixed vegetables</li>
                      <li>• 1 tbsp olive oil</li>
                      <li>
                        <span className="text-muted-foreground">(650 calories, 45g protein)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Meal 4: Afternoon Snack (4:00 PM)</h4>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Protein shake (1 scoop)</li>
                      <li>• 1 medium apple</li>
                      <li>• 2 tbsp peanut butter</li>
                      <li>
                        <span className="text-muted-foreground">(350 calories, 25g protein)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Meal 5: Dinner (7:00 PM)</h4>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• 6oz salmon fillet</li>
                      <li>• 1 cup brown rice</li>
                      <li>• 2 cups roasted vegetables</li>
                      <li>• 1 tbsp olive oil</li>
                      <li>
                        <span className="text-muted-foreground">(700 calories, 40g protein)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong>Daily Totals:</strong> 2,500 calories, 165g protein, 280g carbs, 75g fat
                </p>
                <p className="mb-2">
                  <strong>Hydration:</strong> Aim for 3-4 liters of water daily
                </p>
                <p>
                  <strong>Meal Prep Tips:</strong> Prepare chicken, rice, and vegetables in bulk on Sunday for the week.
                  Store in separate containers for easy assembly.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[400px] text-center">
              <Utensils className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Meal Plan Generated Yet</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Fill out the form on the left and click "Generate Meal Plan" to create your personalized nutrition plan.
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" disabled={!dietPlan}>
            Download PDF
          </Button>
          <Button disabled={!dietPlan}>Save to My Meal Plans</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

