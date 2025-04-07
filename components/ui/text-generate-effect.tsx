"use client"

import { useEffect, useState } from "react"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [wordArray, setWordArray] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWordArray(words.split(" "))
    }, 0)

    return () => clearTimeout(timeout)
  }, [words])

  useEffect(() => {
    if (currentIndex < wordArray.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 40)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, wordArray])

  return (
    <div className={className}>
      <p className="mt-4 text-gray-400 leading-relaxed">
        {wordArray.map((word, index) => (
          <span
            key={index}
            className={`inline-block ${
              index < currentIndex ? "opacity-100 transform-none" : "opacity-0 translate-y-3"
            } transition-all duration-300`}
          >
            {word}{" "}
          </span>
        ))}
      </p>
    </div>
  )
}

