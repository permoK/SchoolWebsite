import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface StatsCardProps {
  icon: ReactNode
  title: string
  value: string
  description: string
}

export function StatsCard({ icon, title, value, description }: StatsCardProps) {
  return (
    <Card className="backdrop-blur-sm bg-background/80 border-primary/10 hover:border-primary/30 transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <h3 className="font-medium text-lg">{title}</h3>
        {icon}
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{value}</p>
        <p className="text-muted-foreground mt-2">{description}</p>
      </CardContent>
    </Card>
  )
}

