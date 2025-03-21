"use client"

import { useEffect, useRef } from "react"

interface MovingGradientProps {
  opacity?: number
  speed?: number
  colorIntensity?: number
}

export function MovingGradient({ opacity = 0.3, speed = 0.1, colorIntensity = 80 }: MovingGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let hue = 0

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    const render = () => {
      hue = (hue + speed) % 360

      // Create gradient
      const gradient = ctx.createLinearGradient(
        canvas.width / 2 + (Math.sin(hue / 30) * canvas.width) / 2,
        0,
        canvas.width / 2 + (Math.cos(hue / 30) * canvas.width) / 2,
        canvas.height,
      )

      // Add colors
      gradient.addColorStop(0, `hsla(${hue}, ${colorIntensity}%, 60%, ${opacity / 1.5})`)
      gradient.addColorStop(0.5, `hsla(${(hue + 60) % 360}, ${colorIntensity}%, 60%, ${opacity / 2})`)
      gradient.addColorStop(1, `hsla(${(hue + 120) % 360}, ${colorIntensity}%, 60%, ${opacity / 1.5})`)

      // Fill with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameId = window.requestAnimationFrame(render)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [opacity, speed, colorIntensity])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full`} style={{ opacity }} aria-hidden="true" />
}

