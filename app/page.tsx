import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, ChevronRight, GraduationCap, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { HeroSection } from "@/components/hero-section"
import { MovingGradient } from "@/components/moving-gradient"
import { StatsCard } from "@/components/stats-card"
import { NewsCard } from "@/components/news-card"
import { ProgramCarousel } from "@/components/program-carousel"

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Vision & Mission */}
      <section className="relative py-16 overflow-hidden">
        <MovingGradient opacity={0.25} colorIntensity={70} />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Vision</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Shaping Tomorrow's Leaders
              </h2>
              <p className="text-muted-foreground md:text-xl">
                We envision a learning community where every student is empowered to reach their full potential,
                becoming responsible global citizens who contribute positively to society.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild>
                  <Link href="/about">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
                  width={800}
                  height={600}
                  alt="Students in classroom"
                  className="mx-auto aspect-video rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Highlights</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What makes our school special and why parents choose us for their children's education.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <StatsCard
              icon={<GraduationCap className="h-10 w-10 text-accent" />}
              title="Academic Excellence"
              value="95%"
              description="Of our students achieve above-average scores in national assessments"
            />
            <StatsCard
              icon={<Users className="h-10 w-10 text-accent" />}
              title="Student-Teacher Ratio"
              value="15:1"
              description="Ensuring personalized attention for every student"
            />
            <StatsCard
              icon={<Calendar className="h-10 w-10 text-accent" />}
              title="Extracurricular Activities"
              value="25+"
              description="Different clubs and activities for holistic development"
            />
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Programs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive educational programs designed to nurture every aspect of a child's development.
              </p>
            </div>
          </div>

          <ProgramCarousel />

          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/programs">
                View All Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest News & Events</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with the latest happenings at our school.
              </p>
            </div>
          </div>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <NewsCard
                  title="Annual Sports Day"
                  date="March 25, 2025"
                  description="Join us for a day of athletic competitions and team spirit"
                  imageUrl="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <NewsCard
                  title="Science Fair Winners"
                  date="March 15, 2025"
                  description="Our students won top prizes at the regional science competition"
                  imageUrl="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1000&auto=format&fit=crop"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <NewsCard
                  title="Parent-Teacher Meeting"
                  date="April 5, 2025"
                  description="Schedule for the upcoming term's parent-teacher conferences"
                  imageUrl="https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=1000&auto=format&fit=crop"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <NewsCard
                  title="New Library Opening"
                  date="April 12, 2025"
                  description="Grand opening of our newly renovated state-of-the-art library"
                  imageUrl="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000&auto=format&fit=crop"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/news">
                View All News & Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">School Gallery</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take a visual tour of our campus and activities.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="School campus"
                  className="w-full h-auto aspect-square object-cover transition-all duration-300 hover:scale-110"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Classroom"
                  className="w-full h-auto aspect-square object-cover transition-all duration-300 hover:scale-110"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Sports field"
                  className="w-full h-auto aspect-square object-cover transition-all duration-300 hover:scale-110"
                />
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1000&auto=format&fit=crop"
                  width={300}
                  height={300}
                  alt="Library"
                  className="w-full h-auto aspect-square object-cover transition-all duration-300 hover:scale-110"
                />
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/gallery">
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <MovingGradient opacity={0.2} speed={0.15} colorIntensity={60} />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our School Family</h2>
              <p className="md:text-xl">
                Take the first step towards providing your child with an exceptional education experience. Applications
                for the next academic year are now open.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild variant="secondary">
                  <Link href="/admissions">
                    Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Upcoming Open Days</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">April 15, 2025</p>
                      <p className="text-sm opacity-90">9:00 AM - 12:00 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">May 10, 2025</p>
                      <p className="text-sm opacity-90">1:00 PM - 4:00 PM</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">June 5, 2025</p>
                      <p className="text-sm opacity-90">9:00 AM - 12:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

