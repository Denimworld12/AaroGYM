"use client"

import { useEffect, useRef, useState } from "react"

export function BackgroundBeams({
  className,
}: {
  className?: string
}) {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }
    }

    const element = ref.current
    if (element) {
      element.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`h-full w-full overflow-hidden ${className}`}
      style={{
        position: "relative",
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-50"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,0,0,.1), transparent 40%)`,
        }}
      />
      <svg className="pointer-events-none absolute inset-0 h-full w-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur result="coloredBlur" stdDeviation="4"></feGaussianBlur>
            <feMerge>
              <feMergeNode in="coloredBlur"></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </defs>
        <rect
          width="100%"
          height="100%"
          filter="url(#glow)"
          style={{
            fill: "transparent",
            stroke: "#ff0000",
            strokeWidth: "2",
            strokeDasharray: "20,20",
            strokeDashoffset: "0",
            animation: "dash 2s linear infinite",
          }}
        />
      </svg>
    </div>
  )
}

