"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GradientCard } from "@/components/gradient-card"

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const programs = [
  {
    id: 1,
    title: "CBC Curriculum",
    description:
      "Our Competency-Based Curriculum focuses on developing essential skills and competencies for real-world success.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
    link: "/programs/cbc",
  },
  {
    id: 2,
    title: "STEM Program",
    description:
      "Specialized focus on Science, Technology, Engineering, and Mathematics with hands-on learning experiences.",
    image: "https://images.unsplash.com/photo-1581092921461-7031e4bfb83c?q=80&w=1000&auto=format&fit=crop",
    link: "/programs/stem",
  },
  {
    id: 3,
    title: "Arts & Music",
    description:
      "Comprehensive programs to nurture creativity, artistic talents, and self-expression through various mediums.",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000&auto=format&fit=crop",
    link: "/programs/arts",
  },
  {
    id: 4,
    title: "Language Immersion",
    description:
      "Develop fluency in multiple languages through our immersive language programs starting from early years.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop",
    link: "/programs/languages",
  },
  {
    id: 5,
    title: "Physical Education",
    description:
      "Promoting physical fitness, teamwork, and healthy lifestyle choices through diverse sports activities.",
    image: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=1000&auto=format&fit=crop",
    link: "/programs/sports",
  },
  {
    id: 6,
    title: "Leadership Development",
    description:
      "Building tomorrow's leaders through programs that cultivate leadership skills and civic responsibility.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=1000&auto=format&fit=crop",
    link: "/programs/leadership",
  },
]

export function ProgramCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="program-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="py-8"
      >
        {programs.map((program) => (
          <SwiperSlide key={program.id}>
            <GradientCard className="h-full" gradientIntensity={70} gradientSpeed={0.08 + program.id * 0.01}>
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">{program.description}</p>
                <Button asChild variant="outline" className="self-start mt-auto">
                  <Link href={program.link}>
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </GradientCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

