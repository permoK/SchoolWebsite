"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MovingGradient } from "@/components/moving-gradient"

const galleryCategories = [
  { id: "campus", name: "Campus" },
  { id: "events", name: "Events" },
  { id: "activities", name: "Activities" },
  { id: "sports", name: "Sports" },
  { id: "arts", name: "Arts & Culture" },
]

const galleryImages = [
  {
    id: 1,
    category: "campus",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
    alt: "School building",
  },
  {
    id: 2,
    category: "campus",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop",
    alt: "School library",
  },
  {
    id: 3,
    category: "campus",
    src: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000&auto=format&fit=crop",
    alt: "School playground",
  },
  {
    id: 4,
    category: "campus",
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
    alt: "School cafeteria",
  },
  {
    id: 5,
    category: "events",
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop",
    alt: "Annual day celebration",
  },
  {
    id: 6,
    category: "events",
    src: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1000&auto=format&fit=crop",
    alt: "Science fair",
  },
  {
    id: 7,
    category: "events",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
    alt: "Graduation ceremony",
  },
  {
    id: 8,
    category: "events",
    src: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=1000&auto=format&fit=crop",
    alt: "Parents meeting",
  },
  {
    id: 9,
    category: "activities",
    src: "https://images.unsplash.com/photo-1581092921461-7031e4bfb83c?q=80&w=1000&auto=format&fit=crop",
    alt: "Robotics club",
  },
  {
    id: 10,
    category: "activities",
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000&auto=format&fit=crop",
    alt: "Debate competition",
  },
  {
    id: 11,
    category: "activities",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop",
    alt: "Coding workshop",
  },
  {
    id: 12,
    category: "activities",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
    alt: "Art and craft",
  },
  {
    id: 13,
    category: "sports",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop",
    alt: "Football match",
  },
  {
    id: 14,
    category: "sports",
    src: "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=1000&auto=format&fit=crop",
    alt: "Basketball tournament",
  },
  {
    id: 15,
    category: "sports",
    src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop",
    alt: "Swimming competition",
  },
  {
    id: 16,
    category: "sports",
    src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop",
    alt: "Athletics day",
  },
  {
    id: 17,
    category: "arts",
    src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000&auto=format&fit=crop",
    alt: "Annual concert",
  },
  {
    id: 18,
    category: "arts",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop",
    alt: "Dance performance",
  },
  {
    id: 19,
    category: "arts",
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
    alt: "Art exhibition",
  },
  {
    id: 20,
    category: "arts",
    src: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?q=80&w=1000&auto=format&fit=crop",
    alt: "Drama production",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">School Gallery</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Explore our vibrant school life through images capturing memorable moments, events, and activities.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              {galleryCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="relative overflow-hidden rounded-lg cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-square">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-medium">{image.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {galleryCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {galleryImages
                    .filter((image) => image.category === category.id)
                    .map((image) => (
                      <div
                        key={image.id}
                        className="relative overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => setSelectedImage(image)}
                      >
                        <div className="aspect-square">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <p className="text-white font-medium">{image.alt}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
            <div className="relative aspect-video">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-black/50 p-4 text-white">
              <p className="font-medium text-lg">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

