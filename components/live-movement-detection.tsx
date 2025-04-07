"use client"

import { useState, useRef } from "react"
import { Camera, Mic, MicOff, Play, Volume2, VolumeX } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LiveMovementDetection() {
  const [cameraActive, setCameraActive] = useState(false)
  const [micActive, setMicActive] = useState(false)
  const [speakerActive, setSpeakerActive] = useState(true)
  const [feedback, setFeedback] = useState<string[]>([])
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleCamera = async () => {
    if (cameraActive) {
      // Stop camera
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream
        stream.getTracks().forEach((track) => track.stop())
        videoRef.current.srcObject = null
      }
      setCameraActive(false)
    } else {
      // Start camera
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
        setCameraActive(true)

        // Simulate AI feedback after camera starts
        setTimeout(() => {
          setFeedback([
            "I can see you now! Let's get started with your workout.",
            "Position yourself so your full body is visible in the frame.",
            "Make sure you have enough space around you for the exercises.",
          ])
        }, 2000)
      } catch (err) {
        console.error("Error accessing camera:", err)
      }
    }
  }

  const toggleMic = () => {
    setMicActive(!micActive)
  }

  const toggleSpeaker = () => {
    setSpeakerActive(!speakerActive)
  }

  const startWorkout = () => {
    // Simulate AI coaching feedback
    setFeedback([
      "Great! Let's start with some warm-up exercises.",
      "First, let's do 10 arm circles in each direction.",
      "Keep your back straight and shoulders relaxed.",
    ])

    // Simulate more feedback after a delay
    setTimeout(() => {
      setFeedback((prev) => [
        ...prev,
        "Good form! Now let's move on to shoulder rolls.",
        "Try to keep your movements smooth and controlled.",
      ])
    }, 5000)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Live Movement Detection</CardTitle>
            <CardDescription className="text-gray-400">Get real-time feedback on your exercise form</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4">
              {cameraActive ? (
                <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-gray-700" />
                </div>
              )}
            </div>

            <div className="flex space-x-4">
              <Button
                onClick={toggleCamera}
                variant="outline"
                className={`border-gray-700 ${cameraActive ? "bg-red-600 hover:bg-red-700 text-white" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}
              >
                <Camera className="mr-2 h-4 w-4" />
                {cameraActive ? "Stop Camera" : "Start Camera"}
              </Button>

              <Button
                onClick={toggleMic}
                variant="outline"
                className={`border-gray-700 ${micActive ? "bg-gray-800 text-white" : "text-gray-300 hover:text-white hover:bg-gray-800"}`}
                disabled={!cameraActive}
              >
                {micActive ? (
                  <>
                    <Mic className="mr-2 h-4 w-4" />
                    Mute
                  </>
                ) : (
                  <>
                    <MicOff className="mr-2 h-4 w-4" />
                    Unmute
                  </>
                )}
              </Button>

              <Button
                onClick={toggleSpeaker}
                variant="outline"
                className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                disabled={!cameraActive}
              >
                {speakerActive ? (
                  <>
                    <Volume2 className="mr-2 h-4 w-4" />
                    Audio On
                  </>
                ) : (
                  <>
                    <VolumeX className="mr-2 h-4 w-4" />
                    Audio Off
                  </>
                )}
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={startWorkout}
              className="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white"
              disabled={!cameraActive}
            >
              <Play className="mr-2 h-4 w-4" />
              Start Workout
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Exercise Library</CardTitle>
            <CardDescription className="text-gray-400">Choose an exercise to get form guidance</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="strength">
              <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                <TabsTrigger
                  value="strength"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
                >
                  Strength
                </TabsTrigger>
                <TabsTrigger
                  value="cardio"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
                >
                  Cardio
                </TabsTrigger>
                <TabsTrigger
                  value="flexibility"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-600 data-[state=active]:to-orange-500 data-[state=active]:text-white"
                >
                  Flexibility
                </TabsTrigger>
              </TabsList>

              <TabsContent value="strength" className="mt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Squats
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Push-ups
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Lunges
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Planks
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Deadlifts
                </Button>
              </TabsContent>

              <TabsContent value="cardio" className="mt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Jumping Jacks
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  High Knees
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Burpees
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Mountain Climbers
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Jump Rope
                </Button>
              </TabsContent>

              <TabsContent value="flexibility" className="mt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Hamstring Stretch
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Shoulder Stretch
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Hip Flexor Stretch
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Quad Stretch
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Child's Pose
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">AI Coach Feedback</CardTitle>
            <CardDescription className="text-gray-400">Real-time guidance and form correction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] overflow-y-auto space-y-4 p-2">
              {feedback.length > 0 ? (
                feedback.map((message, index) => (
                  <div key={index} className="flex">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-white font-bold">AI</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3 text-gray-300 max-w-[85%]">{message}</div>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  <p className="text-center">Start your camera and begin a workout to receive AI feedback</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Form Analysis</CardTitle>
            <CardDescription className="text-gray-400">AI-powered posture and movement analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Posture Alignment</span>
                  <span className="text-sm font-medium text-white">85%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Movement Range</span>
                  <span className="text-sm font-medium text-white">70%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "70%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Form Consistency</span>
                  <span className="text-sm font-medium text-white">90%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-400">Balance</span>
                  <span className="text-sm font-medium text-white">65%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-500 rounded-full" style={{ width: "65%" }} />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <h3 className="text-lg font-medium text-white mb-4">Form Improvement Tips</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Keep your back straight during squats
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Engage your core throughout the movement
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Distribute weight evenly between both feet
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  Breathe steadily throughout each exercise
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

