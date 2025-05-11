import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MovingGradient } from "@/components/moving-gradient"

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative flex items-center justify-center py-16 md:py-24 flex-1 overflow-hidden">
        <MovingGradient opacity={0.35} speed={0.12} colorIntensity={75} />
        <div className="container relative z-10 px-4 md:px-6 max-w-md text-center">
          <div className="backdrop-blur-md bg-background/80 border border-primary/10 rounded-xl p-6 md:p-8 shadow-lg">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The page you are looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link href="/">
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
