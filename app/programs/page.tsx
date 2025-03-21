import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MovingGradient } from "@/components/moving-gradient"
import { ProgramCarousel } from "@/components/program-carousel"

export default function ProgramsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Programs & Curriculum</h1>
              <p className="text-muted-foreground md:text-xl">
                Discover our comprehensive educational programs designed to nurture every aspect of a child's
                development.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
                width={800}
                height={600}
                alt="Students in classroom"
                className="mx-auto aspect-video rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Carousel */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Programs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our diverse range of educational programs designed to nurture every aspect of a child's
                development.
              </p>
            </div>
          </div>

          <ProgramCarousel />
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Curriculum Overview</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our curriculum is designed to provide a balanced and comprehensive education that prepares students for
                future success.
              </p>
            </div>
          </div>

          <Tabs defaultValue="cbc" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="cbc">CBC Curriculum</TabsTrigger>
              <TabsTrigger value="stem">STEM Program</TabsTrigger>
              <TabsTrigger value="arts">Arts & Music</TabsTrigger>
              <TabsTrigger value="sports">Physical Education</TabsTrigger>
            </TabsList>

            <TabsContent value="cbc" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Competency-Based Curriculum</h3>
                  <p className="text-muted-foreground">
                    Our CBC curriculum focuses on developing essential competencies and skills rather than just academic
                    knowledge. This approach ensures that students not only learn subject content but also acquire
                    practical skills that are applicable in real-life situations.
                  </p>
                  <p className="text-muted-foreground">
                    The curriculum emphasizes seven core competencies: Communication and Collaboration, Critical
                    Thinking and Problem Solving, Creativity and Imagination, Citizenship, Digital Literacy, Learning to
                    Learn, and Self-efficacy.
                  </p>
                  <div className="pt-4">
                    <h4 className="font-bold mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Learner-centered approach</li>
                      <li>Continuous assessment rather than just examinations</li>
                      <li>Focus on practical skills and competencies</li>
                      <li>Integration of digital technology</li>
                      <li>Emphasis on values and character development</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
                    width={800}
                    height={600}
                    alt="CBC Curriculum"
                    className="mx-auto aspect-video rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stem" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">STEM Program</h3>
                  <p className="text-muted-foreground">
                    Our STEM (Science, Technology, Engineering, and Mathematics) program provides students with hands-on
                    experiences that foster critical thinking, problem-solving, and innovation. Through integrated
                    learning activities, students develop a deep understanding of these disciplines and how they connect
                    to the real world.
                  </p>
                  <p className="text-muted-foreground">
                    The program includes specialized labs, robotics clubs, coding classes, and science fairs that allow
                    students to apply their knowledge and showcase their creativity.
                  </p>
                  <div className="pt-4">
                    <h4 className="font-bold mb-2">Program Highlights:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Robotics and coding workshops</li>
                      <li>Science and innovation fairs</li>
                      <li>Math Olympiad preparation</li>
                      <li>Engineering design challenges</li>
                      <li>Collaboration with industry professionals</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1581092921461-7031e4bfb83c?q=80&w=1000&auto=format&fit=crop"
                    width={800}
                    height={600}
                    alt="STEM Program"
                    className="mx-auto aspect-video rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="arts" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Arts & Music Program</h3>
                  <p className="text-muted-foreground">
                    Our Arts and Music program nurtures creativity and self-expression through a variety of artistic
                    disciplines. Students explore visual arts, music, drama, and dance, developing their talents and
                    gaining an appreciation for diverse cultural expressions.
                  </p>
                  <p className="text-muted-foreground">
                    Regular performances, exhibitions, and cultural events provide opportunities for students to
                    showcase their artistic abilities and build confidence in public presentation.
                  </p>
                  <div className="pt-4">
                    <h4 className="font-bold mb-2">Program Components:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Visual arts (painting, sculpture, digital art)</li>
                      <li>Music (vocal and instrumental)</li>
                      <li>Drama and theater productions</li>
                      <li>Dance (traditional and contemporary)</li>
                      <li>Annual arts festival and performances</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=1000&auto=format&fit=crop"
                    width={800}
                    height={600}
                    alt="Arts & Music Program"
                    className="mx-auto aspect-video rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sports" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Physical Education Program</h3>
                  <p className="text-muted-foreground">
                    Our Physical Education program promotes physical fitness, teamwork, and healthy lifestyle choices.
                    Students participate in a variety of sports and physical activities that develop motor skills,
                    coordination, and physical strength.
                  </p>
                  <p className="text-muted-foreground">
                    The program emphasizes both competitive and recreational sports, ensuring that all students can find
                    activities they enjoy and excel in. Regular inter-house and inter-school competitions foster a
                    spirit of healthy competition and sportsmanship.
                  </p>
                  <div className="pt-4">
                    <h4 className="font-bold mb-2">Sports Offered:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                      <li>Soccer, basketball, volleyball, and athletics</li>
                      <li>Swimming and water sports</li>
                      <li>Tennis and badminton</li>
                      <li>Cricket and hockey</li>
                      <li>Gymnastics and martial arts</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1576458088443-04a19bb13da6?q=80&w=1000&auto=format&fit=crop"
                    width={800}
                    height={600}
                    alt="Physical Education Program"
                    className="mx-auto aspect-video rounded-xl object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Grade Levels</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our educational programs are tailored to meet the needs of students at different developmental stages.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Early Years (Pre-Primary)</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">Ages 3-5</p>
                <p className="text-muted-foreground">
                  A play-based approach to learning that develops foundational skills in literacy, numeracy, creativity,
                  and social interaction.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/programs/early-years">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Primary School</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">Ages 6-11</p>
                <p className="text-muted-foreground">
                  A comprehensive curriculum that builds strong foundations in core subjects while encouraging
                  curiosity, critical thinking, and a love for learning.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/programs/primary">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Middle & High School</h3>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">Ages 12-18</p>
                <p className="text-muted-foreground">
                  An advanced curriculum that prepares students for higher education and future careers through
                  specialized subjects, career guidance, and leadership opportunities.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/programs/secondary">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Experience Our Curriculum</h2>
              <p className="md:text-xl">
                We invite you to visit our campus and see our educational programs in action. Schedule a tour to meet
                our teachers and learn more about how we can support your child's educational journey.
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
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Curriculum Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/resources/curriculum-guide" className="flex items-center text-white hover:underline">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Curriculum Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/academic-calendar" className="flex items-center text-white hover:underline">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Academic Calendar
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/faq" className="flex items-center text-white hover:underline">
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Frequently Asked Questions
                    </Link>
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

