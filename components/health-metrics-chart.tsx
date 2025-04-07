"use client"

import { useTheme } from "next-themes"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    date: "Apr 1",
    weight: 185,
    steps: 8000,
    calories: 2200,
    sleep: 7.2,
  },
  {
    date: "Apr 2",
    weight: 184.5,
    steps: 9500,
    calories: 2300,
    sleep: 7.5,
  },
  {
    date: "Apr 3",
    weight: 184.5,
    steps: 7800,
    calories: 2100,
    sleep: 6.8,
  },
  {
    date: "Apr 4",
    weight: 184,
    steps: 10200,
    calories: 2400,
    sleep: 8.0,
  },
  {
    date: "Apr 5",
    weight: 183.5,
    steps: 8500,
    calories: 2250,
    sleep: 7.4,
  },
  {
    date: "Apr 6",
    weight: 183,
    steps: 9800,
    calories: 2350,
    sleep: 7.8,
  },
  {
    date: "Apr 7",
    weight: 182.5,
    steps: 8642,
    calories: 2350,
    sleep: 7.6,
  },
]

export function HealthMetricsChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Tabs defaultValue="weight">
      <TabsList className="mb-4">
        <TabsTrigger value="weight">Weight</TabsTrigger>
        <TabsTrigger value="steps">Steps</TabsTrigger>
        <TabsTrigger value="calories">Calories</TabsTrigger>
        <TabsTrigger value="sleep">Sleep</TabsTrigger>
      </TabsList>
      <TabsContent value="weight">
        <ChartContainer className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
              <XAxis dataKey="date" stroke={isDark ? "#888" : "#333"} />
              <YAxis stroke={isDark ? "#888" : "#333"} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <ChartTooltip>
                        <ChartTooltipContent>
                          <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">{payload[0].payload.date}</p>
                            <p className="text-sm">Weight: {payload[0].value} lbs</p>
                          </div>
                        </ChartTooltipContent>
                      </ChartTooltip>
                    )
                  }
                  return null
                }}
              />
              <Line type="monotone" dataKey="weight" stroke="#2563eb" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </TabsContent>
      <TabsContent value="steps">
        <ChartContainer className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
              <XAxis dataKey="date" stroke={isDark ? "#888" : "#333"} />
              <YAxis stroke={isDark ? "#888" : "#333"} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <ChartTooltip>
                        <ChartTooltipContent>
                          <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">{payload[0].payload.date}</p>
                            <p className="text-sm">Steps: {payload[0].value}</p>
                          </div>
                        </ChartTooltipContent>
                      </ChartTooltip>
                    )
                  }
                  return null
                }}
              />
              <Line type="monotone" dataKey="steps" stroke="#16a34a" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </TabsContent>
      <TabsContent value="calories">
        <ChartContainer className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
              <XAxis dataKey="date" stroke={isDark ? "#888" : "#333"} />
              <YAxis stroke={isDark ? "#888" : "#333"} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <ChartTooltip>
                        <ChartTooltipContent>
                          <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">{payload[0].payload.date}</p>
                            <p className="text-sm">Calories: {payload[0].value}</p>
                          </div>
                        </ChartTooltipContent>
                      </ChartTooltip>
                    )
                  }
                  return null
                }}
              />
              <Line type="monotone" dataKey="calories" stroke="#dc2626" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </TabsContent>
      <TabsContent value="sleep">
        <ChartContainer className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#333" : "#eee"} />
              <XAxis dataKey="date" stroke={isDark ? "#888" : "#333"} />
              <YAxis stroke={isDark ? "#888" : "#333"} />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <ChartTooltip>
                        <ChartTooltipContent>
                          <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium">{payload[0].payload.date}</p>
                            <p className="text-sm">Sleep: {payload[0].value} hours</p>
                          </div>
                        </ChartTooltipContent>
                      </ChartTooltip>
                    )
                  }
                  return null
                }}
              />
              <Line type="monotone" dataKey="sleep" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </TabsContent>
    </Tabs>
  )
}

