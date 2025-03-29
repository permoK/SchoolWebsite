import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Users } from "lucide-react"
import { PortableText } from "@portabletext/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MovingGradient } from "@/components/moving-gradient"
import { client } from "@/lib/sanity"

interface Pillar {
  title: string
  content: string
}

interface Value {
  title: string
  content: string
}

interface FacultyMember {
  name: string
  role: string
  image: string
}

interface AboutPageData {
  hero: {
    title: string
    subtitle: string
    image: string
  }
  history: {
    title: string
    content: any
    image: string
  }
  mission: {
    missionTitle: string
    missionContent: string
    visionTitle: string
    visionContent: string
    pillars: Pillar[]
  }
  values: Value[]
  faculty: {
    title: string
    subtitle: string
    members: FacultyMember[]
  }
  cta: {
    title: string
    content: string
    primaryButton: {
      text: string
      link: string
    }
    secondaryButton: {
      text: string
      link: string
    }
  }
}

async function getAboutPageData(): Promise<AboutPageData> {
  const query = `*[_type == "aboutPage"][0] {
    hero {
      title,
      subtitle,
      "image": image.asset->url
    },
    history {
      title,
      content,
      "image": image.asset->url
    },
    mission {
      missionTitle,
      missionContent,
      visionTitle,
      visionContent,
      pillars[] {
        title,
        content
      }
    },
    values[] {
      title,
      content
    },
    faculty {
      title,
      subtitle,
      members[] {
        name,
        role,
        "image": image.asset->url
      }
    },
    cta {
      title,
      content,
      primaryButton {
        text,
        link
      },
      secondaryButton {
        text,
        link
      }
    }
  }`

  return await client.fetch(query)
}

export default async function AboutPage() {
  const data = await getAboutPageData()

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.hero.title}</h1>
              <p className="text-muted-foreground md:text-xl">
                {data.hero.subtitle}
              </p>
            </div>
            <div className="relative">
              <Image
                src={data.hero.image}
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
                  <h2 className="text-3xl font-bold">{data.history.title}</h2>
                  <div className="prose prose-muted-foreground">
                    <PortableText value={data.history.content} />
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={data.history.image}
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
                  <h2 className="text-3xl font-bold">{data.mission.missionTitle}</h2>
                  <p className="text-muted-foreground">
                    {data.mission.missionContent}
                  </p>
                  <h2 className="text-3xl font-bold mt-8">{data.mission.visionTitle}</h2>
                  <p className="text-muted-foreground">
                    {data.mission.visionContent}
                  </p>
                </div>
                <div className="relative">
                  <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6 space-y-6">
                    {data.mission.pillars.map((pillar: Pillar, index: number) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-xl font-bold">{pillar.title}</h3>
                        <p className="text-muted-foreground">
                          {pillar.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="values" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-3">
                {data.values.map((value: Value, index: number) => (
                  <Card key={index}>
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-xl font-bold">{value.title}</h3>
                      <p className="text-muted-foreground">
                        {value.content}
                      </p>
                    </CardContent>
                  </Card>
                ))}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.faculty.title}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {data.faculty.subtitle}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.faculty.members.map((member: FacultyMember, index: number) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.cta.title}</h2>
              <p className="md:text-xl">
                {data.cta.content}
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild variant="secondary">
                  <Link href={data.cta.primaryButton.link}>
                    {data.cta.primaryButton.text} <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={data.cta.secondaryButton.link}>
                    {data.cta.secondaryButton.text} <ChevronRight className="ml-2 h-4 w-4" />
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

