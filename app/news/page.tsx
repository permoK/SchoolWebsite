import Image from "next/image"
import Link from "next/link"
import { Calendar, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MovingGradient } from "@/components/moving-gradient"

export default function NewsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">News & Events</h1>
              <p className="text-muted-foreground md:text-xl">
                Stay updated with the latest happenings, announcements, and upcoming events at our school.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
                width={800}
                height={600}
                alt="School event"
                className="mx-auto aspect-video rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Tabs */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="latest" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="latest">Latest News</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="calendar">Academic Calendar</TabsTrigger>
            </TabsList>

            <TabsContent value="latest" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card key={1} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
                      alt="News 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>March 15, 2025</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">New STEM Lab Opening</h3>
                    <p className="text-muted-foreground">
                      Our state-of-the-art STEM laboratory will be opening next month, providing students with
                      cutting-edge resources for science and technology education.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      <Link href="/news/1">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card key={2} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
                      alt="News 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>March 12, 2025</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Annual Arts Festival</h3>
                    <p className="text-muted-foreground">
                      Join us for a celebration of creativity at our Annual Arts Festival featuring student
                      performances, exhibitions, and interactive workshops.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      <Link href="/news/2">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card key={3} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1000&auto=format&fit=crop"
                      alt="News 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>March 11, 2025</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">National Science Competition Winners</h3>
                    <p className="text-muted-foreground">
                      Congratulations to our students who won top prizes at the National Science Competition, showcasing
                      their innovative research projects.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      <Link href="/news/3">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card key={4} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
                      alt="News 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>March 10, 2025</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">New Curriculum Announcement</h3>
                    <p className="text-muted-foreground">
                      We're excited to announce updates to our curriculum that will enhance learning outcomes and
                      prepare students for future challenges.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      <Link href="/news/4">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card key={5} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=1000&auto=format&fit=crop"
                      alt="News 5"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>March 8, 2025</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Community Service Initiative</h3>
                    <p className="text-muted-foreground">
                      Our students have launched a new community service initiative aimed at supporting local
                      environmental conservation efforts.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      <Link href="/news/5">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card key={6} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000&auto=format&fit=crop"
                      alt="News 6"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>March 5, 2025</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">International Exchange Program</h3>
                    <p className="text-muted-foreground">
                      Applications are now open for our International Exchange Program, offering students the
                      opportunity to study abroad for a semester.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      <Link href="/news/6">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button asChild variant="outline">
                  <Link href="/news/archive">
                    View News Archive <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card key={1} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop"
                      alt="Event 1"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-md font-medium">
                      Apr 5
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>April 5, 2025 • 9:00 AM - 12:00 PM</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Spring Open House</h3>
                    <p className="text-muted-foreground">
                      Prospective families are invited to tour our campus, meet faculty, and learn about our programs
                      and admissions process.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      <Link href="/events/1">Event Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card key={2} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
                      alt="Event 2"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-md font-medium">
                      Apr 12
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>April 12, 2025 • 6:00 PM - 9:00 PM</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Annual Fundraising Gala</h3>
                    <p className="text-muted-foreground">
                      Join us for an elegant evening of dinner, entertainment, and auctions to support our scholarship
                      fund and campus improvements.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      <Link href="/events/2">Event Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card key={3} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop"
                      alt="Event 3"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-md font-medium">
                      Apr 20
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>April 20, 2025 • 8:00 AM - 4:00 PM</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Sports Day</h3>
                    <p className="text-muted-foreground">
                      A day of athletic competitions, team events, and physical activities for students of all ages to
                      showcase their sporting talents.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      <Link href="/events/3">Event Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
                <Card key={4} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
                      alt="Event 4"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-md font-medium">
                      Apr 25
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>April 25, 2025 • 10:00 AM - 2:00 PM</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Career Day</h3>
                    <p className="text-muted-foreground">
                      Professionals from various fields will visit our school to share insights about their careers and
                      provide guidance to our students.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button asChild variant="link" className="px-0">
                      <Link href="/events/4">Event Details</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex justify-center">
                <Button asChild variant="outline">
                  <Link href="/events/all">
                    View All Events <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">2025-2026 Academic Calendar</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h4 className="font-bold">Term 1</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                          <div>
                            <p className="font-medium">First Day of School</p>
                            <p className="text-sm text-muted-foreground">September 1, 2025</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                          <div>
                            <p className="font-medium">Mid-Term Break</p>
                            <p className="text-sm text-muted-foreground">October 20-24, 2025</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                          <div>
                            <p className="font-medium">End of Term 1</p>
                            <p className="text-sm text-muted-foreground">December 18, 2025</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold">Term 2</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                          <div>
                            <p className="font-medium">School Reopens</p>
                            <p className="text-sm text-muted-foreground">January 5, 2026</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                          <div>
                            <p className="font-medium">Mid-Term Break</p>
                            <p className="text-sm text-muted-foreground">February 16-20, 2026</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                          <div>
                            <p className="font-medium">End of Term 2</p>
                            <p className="text-sm text-muted-foreground">April 2, 2026</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold">Term 3</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                          <div>
                            <p className="font-medium">School Reopens</p>
                            <p className="text-sm text-muted-foreground">April 19, 2026</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                          <div>
                            <p className="font-medium">Mid-Term Break</p>
                            <p className="text-sm text-muted-foreground">May 31 - June 4, 2026</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <Calendar className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                          <div>
                            <p className="font-medium">Last Day of School</p>
                            <p className="text-sm text-muted-foreground">July 16, 2026</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/resources/academic-calendar">Download Full Calendar</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Stay Updated</h2>
              <p className="md:text-xl">
                Subscribe to our newsletter to receive the latest news, events, and announcements directly in your
                inbox.
              </p>
            </div>
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded-md bg-transparent border-white/20 placeholder:text-white/50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded-md bg-transparent border-white/20 placeholder:text-white/50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <Button type="submit" variant="secondary" className="w-full">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

