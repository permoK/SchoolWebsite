"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import { MovingGradient } from "@/components/moving-gradient"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  subject: z.string({
    required_error: "Please select a subject.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We will get back to you shortly.",
      })
      form.reset()
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-muted-foreground md:text-xl">
              We'd love to hear from you. Reach out with any questions, inquiries, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-muted-foreground">
                123 School Street
                <br />
                City, State 12345
                <br />
                Country
              </p>
            </div>
            <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-muted-foreground">
                Main Office: +1 (123) 456-7890
                <br />
                Admissions: +1 (123) 456-7891
                <br />
                Fax: +1 (123) 456-7892
              </p>
            </div>
            <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-muted-foreground">
                General Inquiries: info@schoolname.edu
                <br />
                Admissions: admissions@schoolname.edu
                <br />
                Support: support@schoolname.edu
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="admissions">Admissions</SelectItem>
                              <SelectItem value="academics">Academics</SelectItem>
                              <SelectItem value="events">Events</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter your message" className="min-h-32 resize-none" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>

            {/* Map */}
            <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?q=80&w=1000&auto=format&fit=crop"
                  alt="School location map"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-bold">Office Hours</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-muted-foreground">8:00 AM - 4:30 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-muted-foreground">9:00 AM - 12:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium">Sunday</p>
                    <p className="text-muted-foreground">Closed</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-xl font-bold mb-2">Transportation</h3>
                  <p className="text-muted-foreground">
                    Our school is easily accessible by public transportation. Bus routes 10, 15, and 22 stop directly in
                    front of the school. The nearest subway station is Central Station, a 10-minute walk away.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted relative overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground">Find quick answers to common questions about contacting us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">What are the best hours to call?</h3>
              <p className="text-muted-foreground">
                Our office staff is available to take calls from 8:00 AM to 4:30 PM on weekdays. For urgent matters
                outside these hours, please email us.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">How quickly will I receive a response?</h3>
              <p className="text-muted-foreground">
                We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please
                call our main office.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Can I schedule a campus tour?</h3>
              <p className="text-muted-foreground">
                Yes, campus tours are available by appointment. Please contact our admissions office to schedule a
                visit.
              </p>
            </div>
            <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Who should I contact for specific departments?</h3>
              <p className="text-muted-foreground">
                For specific inquiries, please use the subject dropdown in our contact form to ensure your message
                reaches the right department.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

