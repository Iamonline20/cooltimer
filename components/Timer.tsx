"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { PlayIcon, PauseIcon, RotateCcwIcon } from "lucide-react"

export default function Timer() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning])

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setTime(0)
    setIsRunning(false)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000)
    const seconds = Math.floor((milliseconds % 60000) / 1000)
    const ms = milliseconds % 1000

    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${ms.toString().padStart(3, "0")}`
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="text-7xl text-white tracking-tight">{formatTime(time)}</div>
      <div className="flex space-x-4">
        <Button
          onClick={toggleTimer}
          className="bg-primary hover:bg-primary/90 text-white rounded-full w-16 h-16 flex items-center justify-center"
        >
          {isRunning ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
        </Button>
        <Button
          onClick={resetTimer}
          className="bg-accent hover:bg-accent/90 text-white rounded-full w-16 h-16 flex items-center justify-center"
        >
          <RotateCcwIcon size={24} />
        </Button>
      </div>
    </div>
  )
}

