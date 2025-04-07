"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Camera, FileUp, Loader2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function FoodScan() {
  const [image, setImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target?.result as string)
        setAnalysisResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCameraCapture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const analyzeFood = () => {
    if (!image) return

    setIsAnalyzing(true)

    // Simulate AI analysis with a delay
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisResult({
        name: "Grilled Salmon with Vegetables",
        calories: 320,
        protein: 28,
        carbs: 12,
        fat: 18,
        ingredients: ["Salmon fillet", "Broccoli", "Bell peppers", "Olive oil", "Lemon", "Herbs and spices"],
        healthScore: 85,
        alternatives: [
          {
            name: "Baked Cod with Vegetables",
            calories: 280,
            difference: "-40 calories",
          },
          {
            name: "Grilled Chicken with Vegetables",
            calories: 310,
            difference: "-10 calories",
          },
        ],
      })
    }, 2000)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Food Scanner</CardTitle>
            <CardDescription className="text-gray-400">
              Upload or take a photo of your food to get nutritional information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-gray-800 rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                {image ? (
                  <img src={image || "/placeholder.svg"} alt="Food" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-6">
                    <Camera className="h-16 w-16 text-gray-700 mx-auto mb-4" />
                    <p className="text-gray-500">Upload or take a photo of your food</p>
                  </div>
                )}
              </div>

              <div className="flex space-x-4 w-full">
                <Button
                  onClick={handleCameraCapture}
                  variant="outline"
                  className="flex-1 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  <Camera className="mr-2 h-4 w-4" />
                  Take Photo
                </Button>

                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  className="flex-1 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  <FileUp className="mr-2 h-4 w-4" />
                  Upload Image
                </Button>

                <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept="image/*" className="hidden" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={analyzeFood}
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white"
              disabled={!image || isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Analyze Food
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Recent Scans</CardTitle>
            <CardDescription className="text-gray-400">Your food scan history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg border border-gray-800">
                <div className="h-16 w-16 rounded-md bg-gray-800 overflow-hidden flex-shrink-0">
                  <img src="/placeholder.svg?height=64&width=64" alt="Food" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">Chicken Salad</h4>
                  <p className="text-xs text-gray-400">Scanned yesterday</p>
                  <p className="text-xs text-gray-400">320 calories, 28g protein</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  View
                </Button>
              </div>

              <div className="flex items-center space-x-4 p-3 rounded-lg border border-gray-800">
                <div className="h-16 w-16 rounded-md bg-gray-800 overflow-hidden flex-shrink-0">
                  <img src="/placeholder.svg?height=64&width=64" alt="Food" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">Protein Smoothie</h4>
                  <p className="text-xs text-gray-400">Scanned 2 days ago</p>
                  <p className="text-xs text-gray-400">250 calories, 20g protein</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  View
                </Button>
              </div>

              <div className="flex items-center space-x-4 p-3 rounded-lg border border-gray-800">
                <div className="h-16 w-16 rounded-md bg-gray-800 overflow-hidden flex-shrink-0">
                  <img src="/placeholder.svg?height=64&width=64" alt="Food" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">Oatmeal with Berries</h4>
                  <p className="text-xs text-gray-400">Scanned 3 days ago</p>
                  <p className="text-xs text-gray-400">380 calories, 12g protein</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  View
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        {analysisResult ? (
          <>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">{analysisResult.name}</CardTitle>
                <CardDescription className="text-gray-400">Nutritional information and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-400">Calories</p>
                      <p className="text-2xl font-bold text-white">{analysisResult.calories}</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg text-center">
                      <p className="text-sm text-gray-400">Health Score</p>
                      <p className="text-2xl font-bold text-green-500">{analysisResult.healthScore}%</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Protein</span>
                        <span className="text-sm font-medium text-white">{analysisResult.protein}g</span>
                      </div>
                      <Progress
                        value={(analysisResult.protein / 50) * 100}
                        className="h-2 bg-gray-800"
                        indicatorClassName="bg-blue-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Carbs</span>
                        <span className="text-sm font-medium text-white">{analysisResult.carbs}g</span>
                      </div>
                      <Progress
                        value={(analysisResult.carbs / 100) * 100}
                        className="h-2 bg-gray-800"
                        indicatorClassName="bg-orange-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-400">Fat</span>
                        <span className="text-sm font-medium text-white">{analysisResult.fat}g</span>
                      </div>
                      <Progress
                        value={(analysisResult.fat / 70) * 100}
                        className="h-2 bg-gray-800"
                        indicatorClassName="bg-yellow-500"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-white mb-2">Ingredients</h3>
                    <div className="flex flex-wrap gap-2">
                      {analysisResult.ingredients.map((ingredient: string, index: number) => (
                        <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Healthier Alternatives</CardTitle>
                <CardDescription className="text-gray-400">
                  Similar options with different nutritional profiles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {analysisResult.alternatives.map((alt: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-800"
                    >
                      <div>
                        <h4 className="text-sm font-medium text-white">{alt.name}</h4>
                        <p className="text-xs text-gray-400">{alt.calories} calories</p>
                      </div>
                      <span className="text-xs font-medium text-green-500">{alt.difference}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white">
                  Add to Meal Plan
                </Button>
              </CardFooter>
            </Card>
          </>
        ) : (
          <Card className="bg-gray-900 border-gray-800 h-full flex flex-col justify-center items-center p-8">
            <div className="text-center">
              <Search className="h-16 w-16 text-gray-700 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No Analysis Yet</h3>
              <p className="text-gray-400 mb-6">
                Upload a food image and click "Analyze Food" to get detailed nutritional information
              </p>
              <p className="text-sm text-gray-500">
                Our AI can identify thousands of foods and provide accurate nutritional data
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

