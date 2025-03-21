import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { MovingGradient } from "@/components/moving-gradient"

export function SiteFooter() {
  return (
    <footer className="bg-muted relative overflow-hidden">
      <MovingGradient opacity={0.15} speed={0.05} colorIntensity={40} />
      <div className="container px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">SchoolName</h3>
            <p className="text-muted-foreground mb-4">
              Providing quality education and nurturing young minds for a brighter future.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-primary">
                  Programs & Curriculum
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-muted-foreground hover:text-primary">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">123 School Street, City, Country</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">+1 (123) 456-7890</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">info@schoolname.edu</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">School Hours</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Monday - Friday: 8:00 AM - 3:30 PM</li>
              <li className="text-muted-foreground">Saturday: 9:00 AM - 12:00 PM (Activities)</li>
              <li className="text-muted-foreground">Sunday: Closed</li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Office Hours</h4>
              <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 4:30 PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SchoolName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

