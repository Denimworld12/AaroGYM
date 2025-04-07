"use client"

import { useEffect, useState } from "react"
import { BarChart3 } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface BmiCalculatorProps {
  userData: any
}

export function BmiCalculator({ userData }: BmiCalculatorProps) {
  const [bmi, setBmi] = useState<number | null>(null)
  const [bmiCategory, setBmiCategory] = useState("")
  const [bmiColor, setBmiColor] = useState("")

  useEffect(() => {
    if (userData && userData.weight && userData.height) {
      calculateBmi(userData.weight, userData.height)
    }
  }, [userData])

  const calculateBmi = (weight: number, height: number) => {
    // BMI = weight(kg) / (height(m))^2
    const heightInMeters = height / 100
    const bmiValue = weight / (heightInMeters * heightInMeters)
    setBmi(Number.parseFloat(bmiValue.toFixed(1)))

    // Set BMI category and color
    if (bmiValue < 18.5) {
      setBmiCategory("Underweight")
      setBmiColor("text-blue-500")
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setBmiCategory("Healthy")
      setBmiColor("text-green-500")
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setBmiCategory("Overweight")
      setBmiColor("text-yellow-500")
    } else {
      setBmiCategory("Obese")
      setBmiColor("text-red-500")
    }
  }

  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-white">BMI Calculator</CardTitle>
        <CardDescription className="text-gray-400">Body Mass Index based on your height and weight</CardDescription>
      </CardHeader>
      <CardContent>
        {bmi ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Your BMI</p>
                <p className="text-3xl font-bold text-white">{bmi}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Category</p>
                <p className={`text-xl font-semibold ${bmiColor}`}>{bmiCategory}</p>
              </div>
            </div>

            <div className="relative pt-6">
              <div className="flex justify-between text-xs text-gray-400 mb-2">
                <span>Underweight</span>
                <span>Healthy</span>
                <span>Overweight</span>
                <span>Obese</span>
              </div>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-full" />
              </div>
              <div
                className="absolute bottom-0 w-4 h-4 rounded-full bg-white border-2 border-gray-900 transform -translate-x-1/2"
                style={{
                  left: `${Math.min(Math.max((bmi / 40) * 100, 0), 100)}%`,
                  bottom: "0.25rem",
                }}
              />
            </div>

            <div className="mt-4 text-sm text-gray-400">
              <p className="mb-2">BMI Categories:</p>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  Underweight: &lt; 18.5
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  Healthy: 18.5 - 24.9
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                  Overweight: 25 - 29.9
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                  Obese: ≥ 30
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6">
            <BarChart3 className="h-12 w-12 text-gray-500 mb-4" />
            <p className="text-gray-400 text-center">Enter your height and weight in your profile to calculate BMI</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

