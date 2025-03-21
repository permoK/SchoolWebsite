"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { MovingGradient } from "@/components/moving-gradient"

interface GradientCardProps {
  children: ReactNode
  className?: string
  gradientOpacity?: number
  gradientSpeed?: number
  gradientIntensity?: number
}

export function GradientCard({
  children,
  className,
  gradientOpacity = 0.2,
  gradientSpeed = 0.08,
  gradientIntensity = 60,
}: GradientCardProps) {
  return (
    <div className={cn("relative overflow-hidden rounded-xl border border-primary/10", className)}>
      <MovingGradient opacity={gradientOpacity} speed={gradientSpeed} colorIntensity={gradientIntensity} />
      <div className="relative z-10 backdrop-blur-sm bg-background/50 p-6">{children}</div>
    </div>
  )
}

