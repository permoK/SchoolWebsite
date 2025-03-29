import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, ChevronRight, GraduationCap, Users } from "lucide-react"
import { PortableText } from "@portabletext/react"
import { client } from "@/lib/sanity"
import { urlForImage } from "@/lib/sanity/image"

import { Button } from "@/components/ui/button"
import { ProgramCarousel } from "@/components/program-carousel"

export async function generateMetadata(): Promise<Metadata> {
  const home = await client.fetch(`*[_type == "homePage"][0]`)
  
  return {
    title: home?.hero?.title,
    description: home?.hero?.subtitle,
    openGraph: {
      images: home?.hero?.image ? [urlForImage(home.hero.image).url()] : [],
    },
  }
}

export default async function HomePage() {
  const home = await client.fetch(`*[_type == "homePage"][0]`)

  if (!home) {
    return <div>Home page content not found</div>
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        {home.hero?.image && (
          <Image
            src={urlForImage(home.hero.image).url()}
            alt={home.hero.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="container text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{home.hero?.title}</h1>
            {home.hero?.subtitle && (
              <p className="text-xl mb-8">{home.hero.subtitle}</p>
            )}
            {home.hero?.ctaText && home.hero?.ctaLink && (
              <Link href={home.hero.ctaLink}>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  {home.hero.ctaText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      {home.vision && (
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">{home.vision.title}</h2>
                <div className="prose prose-lg">
                  <p>{home.vision.content}</p>
                </div>
              </div>
              {home.vision.image && (
                <div className="relative h-[400px]">
                  <Image
                    src={urlForImage(home.vision.image).url()}
                    alt={home.vision.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Key Highlights Section */}
      {home.highlights && (
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4">{home.highlights.title}</h2>
            {home.highlights.subtitle && (
              <p className="text-xl text-muted-foreground mb-8">
                {home.highlights.subtitle}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {home.highlights.items?.map((item: any) => (
                <div key={item._key} className="text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-4xl font-bold text-primary mb-4">{item.value}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Programs Section */}
      {home.programs && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4">{home.programs.title}</h2>
            {home.programs.subtitle && (
              <p className="text-xl text-muted-foreground mb-8">
                {home.programs.subtitle}
              </p>
            )}
            <ProgramCarousel programs={home.programs.programs} />
          </div>
        </section>
      )}

      {/* News Section */}
      {home.news && (
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4">{home.news.title}</h2>
            {home.news.subtitle && (
              <p className="text-xl text-muted-foreground mb-8">
                {home.news.subtitle}
              </p>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {home.news.items?.map((item: any) => (
                <div key={item._key} className="bg-card rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {home.gallery && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4">{home.gallery.title}</h2>
            {home.gallery.subtitle && (
              <p className="text-xl text-muted-foreground mb-8">
                {home.gallery.subtitle}
              </p>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {home.gallery.images?.map((image: any) => (
                <div key={image._key} className="relative aspect-square">
                  <Image
                    src={urlForImage(image).url()}
                    alt="Gallery image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {home.cta && (
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">{home.cta.title}</h2>
            <p className="text-xl mb-8">{home.cta.content}</p>
            <Link href={home.cta.buttonLink}>
              <Button size="lg" variant="secondary">
                {home.cta.buttonText}
              </Button>
            </Link>
          </div>
        </section>
      )}
    </main>
  )
}

