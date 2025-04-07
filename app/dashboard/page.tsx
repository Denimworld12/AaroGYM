"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Activity, Camera, Dumbbell, Home, LogOut, Menu, Moon, Settings, Sun, User, Utensils, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BmiCalculator } from "@/components/bmi-calculator"
import { WorkoutRecommendations } from "@/components/workout-recommendations"
import { NutritionPlan } from "@/components/nutrition-plan"
import { LiveMovementDetection } from "@/components/live-movement-detection"
import { FoodScan } from "@/components/food-scan"
import { UserProfile } from "@/components/user-profile"
import { SettingsPanel } from "@/components/settings-panel"
import { LoginModal } from "@/components/login-modal"

export default function DashboardPage() {
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [theme, setTheme] = useState("dark")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"
    setIsLoggedIn(loggedIn)

    if (loggedIn) {
      // Get user data from localStorage
      const storedUserData = localStorage.getItem("userData")
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData))
      }
    } else {
      // Show login modal if not logged in
      setIsLoginModalOpen(true)
    }

    // Check if mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setSidebarOpen(false)
      }
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    document.documentElement.classList.toggle("dark")
  }

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userData")
    router.push("/")
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-200">Daily Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">8,642</div>
                  <p className="text-xs text-gray-400">+20% from yesterday</p>
                  <Progress
                    value={72}
                    className="mt-2 bg-gray-800"
                    indicatorClassName="bg-gradient-to-r from-red-500 to-orange-500"
                  />
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-200">Calories Burned</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">2,350</div>
                  <p className="text-xs text-gray-400">+15% from yesterday</p>
                  <Progress
                    value={65}
                    className="mt-2 bg-gray-800"
                    indicatorClassName="bg-gradient-to-r from-red-500 to-orange-500"
                  />
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-200">Active Days</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">5/7</div>
                  <p className="text-xs text-gray-400">This week</p>
                  <Progress
                    value={71}
                    className="mt-2 bg-gray-800"
                    indicatorClassName="bg-gradient-to-r from-red-500 to-orange-500"
                  />
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-200">Workout Streak</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">12 days</div>
                  <p className="text-xs text-gray-400">Keep it up!</p>
                  <Progress
                    value={85}
                    className="mt-2 bg-gray-800"
                    indicatorClassName="bg-gradient-to-r from-red-500 to-orange-500"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <BmiCalculator userData={userData} />
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Today's Schedule</CardTitle>
                  <CardDescription className="text-gray-400">Your planned activities for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-red-500/10 p-2">
                        <Dumbbell className="h-4 w-4 text-red-500" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none text-white">Upper Body Workout</p>
                        <p className="text-sm text-gray-400">7:00 AM - 8:00 AM</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                      >
                        Start
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-orange-500/10 p-2">
                        <Utensils className="h-4 w-4 text-orange-500" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none text-white">Protein-Rich Breakfast</p>
                        <p className="text-sm text-gray-400">8:30 AM - 9:00 AM</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                      >
                        View
                      </Button>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-4 rounded-full bg-red-500/10 p-2">
                        <Activity className="h-4 w-4 text-red-500" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none text-white">Afternoon Walk</p>
                        <p className="text-sm text-gray-400">12:30 PM - 1:00 PM</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                      >
                        Start
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case "nutrition":
        return <NutritionPlan isLoggedIn={isLoggedIn} onLoginRequired={() => setIsLoginModalOpen(true)} />
      case "workout":
        return <WorkoutRecommendations userData={userData} />
      case "movement":
        return <LiveMovementDetection />
      case "foodscan":
        return <FoodScan />
      case "profile":
        return <UserProfile userData={userData} setUserData={setUserData} />
      case "settings":
        return <SettingsPanel theme={theme} toggleTheme={toggleTheme} />
      default:
        return null
    }
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white ${theme === "light" ? "light-mode" : ""}`}
    >
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-y-0 left-0 z-50 w-64 bg-black border-r border-gray-800 transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
        >
          <div className="flex h-16 items-center justify-between px-4 border-b border-gray-800">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Working Help Health
              </span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-4 py-6">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{userData?.name || "Guest User"}</p>
                  <p className="text-xs text-gray-400">
                    {userData ? `${userData.age} years, ${userData.weight}kg` : "Welcome!"}
                  </p>
                </div>
              </div>
            </div>

            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "dashboard"
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Home className="mr-3 h-5 w-5" />
                Dashboard
              </button>

              <button
                onClick={() => setActiveTab("nutrition")}
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "nutrition"
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Utensils className="mr-3 h-5 w-5" />
                Nutrition Plan
              </button>

              <button
                onClick={() => setActiveTab("workout")}
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "workout"
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Dumbbell className="mr-3 h-5 w-5" />
                Workout Recommendations
              </button>

              <button
                onClick={() => setActiveTab("movement")}
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "movement"
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Activity className="mr-3 h-5 w-5" />
                Live Movement Detection
              </button>

              <button
                onClick={() => setActiveTab("foodscan")}
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "foodscan"
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Camera className="mr-3 h-5 w-5" />
                Food Scan
              </button>

              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "profile"
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <User className="mr-3 h-5 w-5" />
                Profile
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === "settings"
                    ? "bg-gradient-to-r from-red-600 to-orange-500 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Settings className="mr-3 h-5 w-5" />
                Settings
              </button>
            </nav>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
              >
                <LogOut className="mr-3 h-5 w-5" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
            <div className="flex h-16 items-center justify-between px-4">
              <div className="flex items-center">
                <button onClick={() => setSidebarOpen(true)} className="md:hidden text-gray-400 hover:text-white mr-4">
                  <Menu className="h-6 w-6" />
                </button>
                <h1 className="text-xl font-bold text-white">
                  {activeTab === "dashboard" && "Dashboard"}
                  {activeTab === "nutrition" && "Nutrition Plan"}
                  {activeTab === "workout" && "Workout Recommendations"}
                  {activeTab === "movement" && "Live Movement Detection"}
                  {activeTab === "foodscan" && "Food Scan"}
                  {activeTab === "profile" && "Profile"}
                  {activeTab === "settings" && "Settings"}
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </header>

          <main className="p-4 md:p-6">{renderTabContent()}</main>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  )
}

