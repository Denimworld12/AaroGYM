"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useTransform, useScroll, useVelocity, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  const y1 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50])

  const velocityY = useVelocity(scrollYProgress)
  const smoothVelocity = useSpring(velocityY, {
    damping: 50,
    stiffness: 400,
  })

  const opacity = useTransform(smoothVelocity, [-0.01, 0, 0.01], [0, 1, 0])

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-4xl mx-auto", className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          style={{
            opacity,
            y: y1,
          }}
          className="absolute left-0 top-0 h-4 w-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500"
        />
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="block" aria-hidden="true">
          <motion.path
            d={`M 1 0 V ${svgHeight} M 1 ${y1} H 12`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            className="stroke-red-500"
          />
          <defs>
            <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor="#ff0000" stopOpacity="0" />
              <stop stopColor="#ff0000" />
              <stop offset="0.5" stopColor="#ff4500" />
              <stop offset="1" stopColor="#ff0000" />
              <stop offset="1" stopColor="#ff0000" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  )
}

