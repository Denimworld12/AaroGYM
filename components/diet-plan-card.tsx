"use client"

import { Edit, Plus, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function DietPlanCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Current Diet Plan</CardTitle>
            <CardDescription>Your personalized nutrition plan</CardDescription>
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
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Daily Targets</h3>
            <div className="flex justify-between text-sm">
              <span>Calories</span>
              <span>2,200 kcal</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Protein</span>
              <span>180g (33%)</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Carbs</span>
              <span>220g (40%)</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Fat</span>
              <span>67g (27%)</span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Today's Progress</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Calories</span>
                  <span>1,450 / 2,200 kcal</span>
                </div>
                <Progress value={66} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Protein</span>
                  <span>120 / 180g</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Water</span>
                  <span>1.5 / 3L</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="monday">Mon</TabsTrigger>
            <TabsTrigger value="tuesday">Tue</TabsTrigger>
            <TabsTrigger value="wednesday">Wed</TabsTrigger>
            <TabsTrigger value="thursday">Thu</TabsTrigger>
            <TabsTrigger value="friday">Fri</TabsTrigger>
            <TabsTrigger value="saturday">Sat</TabsTrigger>
          </TabsList>
          <TabsContent value="today" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Breakfast</CardTitle>
                  <Badge variant="outline">7:00 AM</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Protein Oatmeal</div>
                    <div className="text-sm text-muted-foreground">
                      1/2 cup oats, 1 scoop protein powder, 1 tbsp almond butter, 1/2 banana, cinnamon
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span>450 kcal</span>
                      <span>30g protein</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Utensils className="mr-2 h-4 w-4" />
                    Log Meal
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Lunch</CardTitle>
                  <Badge variant="outline">12:30 PM</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Chicken & Quinoa Bowl</div>
                    <div className="text-sm text-muted-foreground">
                      5oz grilled chicken, 1/2 cup quinoa, mixed vegetables, olive oil dressing
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span>550 kcal</span>
                      <span>40g protein</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Utensils className="mr-2 h-4 w-4" />
                    Log Meal
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Dinner</CardTitle>
                  <Badge variant="outline">7:00 PM</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Salmon with Vegetables</div>
                    <div className="text-sm text-muted-foreground">
                      6oz baked salmon, 1 cup roasted vegetables, 1/2 cup brown rice
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span>650 kcal</span>
                      <span>45g protein</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Utensils className="mr-2 h-4 w-4" />
                    Log Meal
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md">Snacks</CardTitle>
                  <Badge variant="outline">Various Times</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Morning:</span> Greek yogurt with berries
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Afternoon:</span> Protein shake with banana
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                      <span>550 kcal total</span>
                      <span>45g protein</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Utensils className="mr-2 h-4 w-4" />
                    Log Snacks
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="monday">
            <div className="p-4 text-center text-muted-foreground">
              Monday's meal plan will be similar to today with slight variations
            </div>
          </TabsContent>
          <TabsContent value="tuesday">
            <div className="p-4 text-center text-muted-foreground">
              Tuesday's meal plan will be similar to today with slight variations
            </div>
          </TabsContent>
          <TabsContent value="wednesday">
            <div className="p-4 text-center text-muted-foreground">
              Wednesday's meal plan will be similar to today with slight variations
            </div>
          </TabsContent>
          <TabsContent value="thursday">
            <div className="p-4 text-center text-muted-foreground">
              Thursday's meal plan will be similar to today with slight variations
            </div>
          </TabsContent>
          <TabsContent value="friday">
            <div className="p-4 text-center text-muted-foreground">
              Friday's meal plan will be similar to today with slight variations
            </div>
          </TabsContent>
          <TabsContent value="saturday">
            <div className="p-4 text-center text-muted-foreground">
              Saturday's meal plan will be similar to today with slight variations
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

