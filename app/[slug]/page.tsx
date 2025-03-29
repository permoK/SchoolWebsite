import { Metadata } from "next"
import { PortableText } from "@portabletext/react"
import { client } from "@/lib/sanity"
import { urlForImage } from "@/lib/sanity/image"
import Image from "next/image"

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slug = await Promise.resolve(params.slug)
  const page = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]`,
    { slug }
  )
  
  return {
    title: page?.seo?.metaTitle || page?.title,
    description: page?.seo?.metaDescription,
    openGraph: {
      images: page?.seo?.ogImage ? [urlForImage(page.seo.ogImage).url()] : [],
    },
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const slug = await Promise.resolve(params.slug)
  const page = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]`,
    { slug }
  )

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {page.heroImage && (
        <div className="relative h-[60vh] w-full">
          <Image
            src={urlForImage(page.heroImage).url()}
            alt={page.heroTitle || page.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">{page.heroTitle || page.title}</h1>
              {page.heroSubtitle && (
                <p className="text-xl">{page.heroSubtitle}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="container py-12">
        <div className="prose prose-lg max-w-none">
          <PortableText value={page.content} />
        </div>
      </div>
    </div>
  )
} 