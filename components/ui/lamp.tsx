"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function LampContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,69,0,.15), transparent 80%)`,
          }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
          className="absolute inset-0 z-0 opacity-0 md:opacity-100"
        />
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 z-10 bg-black [mask-image:radial-gradient(transparent,white)] md:[mask-image:radial-gradient(75%_75%_at_50%_50%,transparent_30%,white)]" />
        <div className="absolute inset-auto z-30 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-red-500 opacity-50 blur-[100px]" />
        <div className="relative z-50">{children}</div>
      </div>
    </div>
  )
}

