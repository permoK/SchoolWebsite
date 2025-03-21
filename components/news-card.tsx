import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface NewsCardProps {
  title: string
  date: string
  description: string
  imageUrl: string
}

export function NewsCard({ title, date, description, imageUrl }: NewsCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
        </div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="link" className="px-0 text-accent">
          <Link href="/news">Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

