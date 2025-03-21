"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface HoverImageCardProps {
  title: string
  description: string
  imageUrl: string
}

export function HoverImageCard({ title, description, imageUrl }: HoverImageCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 relative h-64">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className={cn("object-cover transition-all duration-500", isHovered ? "scale-110 blur-sm" : "scale-100")}
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-4 transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          <p className="text-white/90">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

