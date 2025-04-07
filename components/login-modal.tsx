"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required"
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = "Please enter a valid age"
    }

    if (!formData.weight.trim()) {
      newErrors.weight = "Weight is required"
    } else if (isNaN(Number(formData.weight)) || Number(formData.weight) <= 0) {
      newErrors.weight = "Please enter a valid weight"
    }

    if (!formData.height.trim()) {
      newErrors.height = "Height is required"
    } else if (isNaN(Number(formData.height)) || Number(formData.height) <= 0) {
      newErrors.height = "Please enter a valid height"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Store user data in localStorage
      localStorage.setItem("userData", JSON.stringify(formData))
      localStorage.setItem("isLoggedIn", "true")

      // Close modal and redirect to dashboard
      onClose()
      router.push("/dashboard")
    }
  }

  const handleGuestLogin = () => {
    // Set minimal guest data
    const guestData = {
      name: "Guest User",
      age: "30",
      weight: "70",
      height: "170",
    }

    localStorage.setItem("userData", JSON.stringify(guestData))
    localStorage.setItem("isLoggedIn", "true")

    // Close modal and redirect to dashboard
    onClose()
    router.push("/dashboard")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-md bg-gradient-to-b from-gray-900 to-black p-6 rounded-xl shadow-2xl border border-gray-800"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Get Started
              </h2>
              <p className="text-gray-400 mt-2">Enter your details to personalize your fitness journey</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="age" className="text-gray-300">
                  Age
                </Label>
                <Input
                  id="age"
                  name="age"
                  type="number"
                  value={formData.age}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Your age"
                />
                {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
              </div>

              <div>
                <Label htmlFor="weight" className="text-gray-300">
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  name="weight"
                  type="number"
                  value={formData.weight}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Your weight in kg"
                />
                {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
              </div>

              <div>
                <Label htmlFor="height" className="text-gray-300">
                  Height (cm)
                </Label>
                <Input
                  id="height"
                  name="height"
                  type="number"
                  value={formData.height}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white"
                  placeholder="Your height in cm"
                />
                {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white"
              >
                Start My Fitness Journey
              </Button>

              <div className="text-center">
                <button type="button" onClick={handleGuestLogin} className="text-gray-400 hover:text-white text-sm">
                  Continue as Guest
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

