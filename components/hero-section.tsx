"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
    title: "Welcome to Our School",
    subtitle: "Where Learning Meets Excellence",
    description: "Providing quality education and nurturing young minds for a brighter future.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    title: "Holistic Education",
    subtitle: "Beyond Academics",
    description: "We focus on developing well-rounded individuals through a balanced curriculum.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000&auto=format&fit=crop",
    title: "State-of-the-Art Facilities",
    subtitle: "Modern Learning Environment",
    description: "Our campus is equipped with the latest technology and resources for optimal learning.",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl space-y-4 backdrop-blur-sm bg-black/20 p-6 rounded-xl">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  {slide.title}
                </h1>
                <h2 className="text-xl font-medium text-white md:text-2xl">{slide.subtitle}</h2>
                <p className="text-white/90 md:text-xl">{slide.description}</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary">
                    <Link href="/admissions">
                      Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    <Link href="/about">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn("w-3 h-3 rounded-full transition-all", index === currentSlide ? "bg-accent" : "bg-white/50")}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

