"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface AudioPlayerProps {
  src: string
  title: string
  className?: string
}

export function AudioPlayer({ src, title, className }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
      setError(null)
      setIsLoading(false)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleError = (e: Event) => {
      setError("Unable to load audio file. Please check your connection and try again.")
      setIsPlaying(false)
      setIsLoading(false)
      console.error("Audio error:", e)
    }

    const handleCanPlay = () => {
      setIsLoading(false)
      setError(null)
    }

    // Add event listeners
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("error", handleError)
    audio.addEventListener("canplay", handleCanPlay)

    // Load the audio
    audio.src = src
    audio.load()

    // Cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("error", handleError)
      audio.removeEventListener("canplay", handleCanPlay)
    }
  }, [src])

  const togglePlay = async () => {
    if (!audioRef.current) return

    try {
      setError(null)
      if (audioRef.current.paused) {
        setIsLoading(true)
        await audioRef.current.play()
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    } catch (err) {
      console.error("Playback error:", err)
      setError("Unable to play audio. Please try again.")
      setIsPlaying(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSliderChange = (value: number[]) => {
    const time = value[0]
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 10, duration)
    }
  }

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 10, 0)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className={cn("p-6 rounded-xl backdrop-blur-md bg-white/70 space-y-4", className)}>
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      <audio ref={audioRef} preload="metadata">
        Your browser does not support the audio element.
      </audio>
      {error ? (
        <p className="text-red-500 text-center text-sm">{error}</p>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration || 0)}</span>
          </div>
          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={1}
            onValueChange={handleSliderChange}
            className="w-full"
            disabled={isLoading}
          />
          <div className="flex justify-center items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={skipBackward}
              disabled={isLoading}
              className="hover:bg-orange-100"
            >
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              onClick={togglePlay}
              size="icon"
              disabled={isLoading}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={skipForward}
              disabled={isLoading}
              className="hover:bg-orange-100"
            >
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

