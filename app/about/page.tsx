import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MovingGradient } from "@/components/moving-gradient"

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Our School</h1>
              <p className="text-muted-foreground md:text-xl">
                Learn about our history, mission, values, and the dedicated team that makes our school special.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
                width={800}
                height={600}
                alt="School building"
                className="mx-auto aspect-video rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="history">Our History</TabsTrigger>
              <TabsTrigger value="mission">Mission & Vision</TabsTrigger>
              <TabsTrigger value="values">Our Values</TabsTrigger>
            </TabsList>
            <TabsContent value="history" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Our Journey Through Time</h2>
                  <p className="text-muted-foreground">
                    Founded in 1985, our school began with just 50 students and 5 teachers in a small building. Over the
                    decades, we've grown into a premier educational institution with state-of-the-art facilities and a
                    reputation for academic excellence.
                  </p>
                  <p className="text-muted-foreground">
                    Through the years, we've adapted to changing educational needs while maintaining our core commitment
                    to providing quality education. Our alumni have gone on to achieve remarkable success in various
                    fields, a testament to the strong foundation they received here.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we continue to build on our rich heritage while embracing innovation and modern teaching
                    methodologies to prepare our students for the challenges of the 21st century.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?q=80&w=1000&auto=format&fit=crop"
                    width={800}
                    height={600}
                    alt="Historical school photo"
                    className="mx-auto aspect-video rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mission" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                  <p className="text-muted-foreground">
                    To provide a nurturing and inclusive learning environment that empowers students to achieve academic
                    excellence, develop critical thinking skills, and become responsible global citizens who contribute
                    positively to society.
                  </p>
                  <h2 className="text-3xl font-bold mt-8">Our Vision</h2>
                  <p className="text-muted-foreground">
                    We envision a learning community where every student is empowered to reach their full potential,
                    becoming lifelong learners who are equipped with the knowledge, skills, and values needed to thrive
                    in an ever-changing world.
                  </p>
                </div>
                <div className="relative">
                  <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6 space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Academic Excellence</h3>
                      <p className="text-muted-foreground">
                        We strive for the highest standards of educational achievement through innovative teaching
                        methods and a comprehensive curriculum.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Character Development</h3>
                      <p className="text-muted-foreground">
                        We nurture ethical values, integrity, and social responsibility in our students.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Global Perspective</h3>
                      <p className="text-muted-foreground">
                        We prepare students to be culturally aware and ready to contribute in our interconnected world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="values" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-bold">Excellence</h3>
                    <p className="text-muted-foreground">
                      We pursue the highest standards in all aspects of education and encourage our students to strive
                      for excellence in everything they do.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-bold">Integrity</h3>
                    <p className="text-muted-foreground">
                      We promote honesty, ethical behavior, and accountability in our students, staff, and all our
                      interactions.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-bold">Respect</h3>
                    <p className="text-muted-foreground">
                      We value diversity and foster an environment of mutual respect, empathy, and understanding.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-bold">Innovation</h3>
                    <p className="text-muted-foreground">
                      We embrace creativity, critical thinking, and innovative approaches to teaching and learning.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-bold">Community</h3>
                    <p className="text-muted-foreground">
                      We build strong partnerships between students, parents, staff, and the wider community.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-2">
                    <h3 className="text-xl font-bold">Responsibility</h3>
                    <p className="text-muted-foreground">
                      We encourage personal and social responsibility, environmental stewardship, and global
                      citizenship.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Faculty</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the dedicated educators who inspire and guide our students every day.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Card key={1} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
                    alt="Teacher 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-muted-foreground">English Literature</p>
                </div>
              </CardContent>
            </Card>
            <Card key={2} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop"
                    alt="Teacher 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Michael Chen</h3>
                  <p className="text-sm text-muted-foreground">Mathematics</p>
                </div>
              </CardContent>
            </Card>
            <Card key={3} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1000&auto=format&fit=crop"
                    alt="Teacher 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Emily Rodriguez</h3>
                  <p className="text-sm text-muted-foreground">Science</p>
                </div>
              </CardContent>
            </Card>
            <Card key={4} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1000&auto=format&fit=crop"
                    alt="Teacher 4"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">David Okafor</h3>
                  <p className="text-sm text-muted-foreground">History</p>
                </div>
              </CardContent>
            </Card>
            <Card key={5} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=80&w=1000&auto=format&fit=crop"
                    alt="Teacher 5"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Priya Patel</h3>
                  <p className="text-sm text-muted-foreground">Computer Science</p>
                </div>
              </CardContent>
            </Card>
            <Card key={6} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=1000&auto=format&fit=crop"
                    alt="Teacher 6"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">James Wilson</h3>
                  <p className="text-sm text-muted-foreground">Physical Education</p>
                </div>
              </CardContent>
            </Card>
            <Card key={7} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
                    alt="Teacher 7"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Maria Sanchez</h3>
                  <p className="text-sm text-muted-foreground">Art & Design</p>
                </div>
              </CardContent>
            </Card>
            <Card key={8} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?q=80&w=1000&auto=format&fit=crop"
                    alt="Teacher 8"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Robert Kim</h3>
                  <p className="text-sm text-muted-foreground">Music</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline">
              <Link href="/about/faculty">
                View All Faculty <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our School Community</h2>
              <p className="md:text-xl">
                We invite you to become part of our vibrant learning community. Schedule a visit to experience our
                campus and meet our faculty and students.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild variant="secondary">
                  <Link href="/admissions">
                    Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Schedule a Visit <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Users className="h-32 w-32 opacity-80" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

