import Image from "next/image"
import Link from "next/link"
import { ChevronRight, FileText, Calendar, Clock, CreditCard, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdmissionForm } from "@/components/admission-form"
import { MovingGradient } from "@/components/moving-gradient"

export default function AdmissionsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Admissions</h1>
              <p className="text-muted-foreground md:text-xl">
                Join our vibrant learning community. Discover the admissions process and begin your educational journey
                with us.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1000&auto=format&fit=crop"
                width={800}
                height={600}
                alt="Students at school entrance"
                className="mx-auto aspect-video rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Admissions Process</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A step-by-step guide to joining our school community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">1</div>
                <h3 className="font-bold">Inquiry & Tour</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contact our admissions office to schedule a campus tour and learn more about our programs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">2</div>
                <h3 className="font-bold">Application</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete and submit the application form along with all required documents.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">3</div>
                <h3 className="font-bold">Assessment & Interview</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Students undergo an age-appropriate assessment, and parents attend an interview.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">4</div>
                <h3 className="font-bold">Acceptance</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Successful applicants receive an offer letter detailing the next steps.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">5</div>
                <h3 className="font-bold">Enrollment</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete the enrollment process by paying the required fees and submitting additional forms.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-primary">6</div>
                <h3 className="font-bold">Orientation</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Attend the orientation program to familiarize yourself with the school environment and policies.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg">
              <Link href="#application-form">
                Apply Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Admission Requirements</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Documents and information needed for the application process.
              </p>
            </div>
          </div>

          <Tabs defaultValue="documents" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="documents">Required Documents</TabsTrigger>
              <TabsTrigger value="age">Age Requirements</TabsTrigger>
              <TabsTrigger value="fees">Fees & Financial Aid</TabsTrigger>
            </TabsList>

            <TabsContent value="documents" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Required Documents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                      <div>
                        <p className="font-medium">Completed Application Form</p>
                        <p className="text-sm text-muted-foreground">Fill out all sections of the application form</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                      <div>
                        <p className="font-medium">Birth Certificate</p>
                        <p className="text-sm text-muted-foreground">Original and photocopy</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                      <div>
                        <p className="font-medium">Passport-sized Photographs</p>
                        <p className="text-sm text-muted-foreground">4 recent photographs</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                      <div>
                        <p className="font-medium">Previous School Records</p>
                        <p className="text-sm text-muted-foreground">
                          Report cards, transcripts, and transfer certificate
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                      <div>
                        <p className="font-medium">Medical Records</p>
                        <p className="text-sm text-muted-foreground">Immunization records and health information</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <FileText className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                      <div>
                        <p className="font-medium">Parent/Guardian ID</p>
                        <p className="text-sm text-muted-foreground">National ID or passport</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6 space-y-4">
                    <h3 className="text-xl font-bold">Additional Requirements</h3>
                    <p className="text-muted-foreground">
                      Depending on the grade level and specific circumstances, additional documents may be required:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-accent" />
                        Special needs documentation (if applicable)
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-accent" />
                        Custody documents (if applicable)
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-accent" />
                        Visa/residency permits for international students
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 mr-2 text-accent" />
                        Recommendation letters from previous teachers
                      </li>
                    </ul>
                    <div className="pt-4">
                      <Button asChild variant="outline">
                        <Link href="/resources/document-checklist">Download Document Checklist</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="age" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Age Requirements</h3>
                  <p className="text-muted-foreground">
                    Students must meet the following age requirements as of September 1st of the academic year:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Grade Level</th>
                          <th className="text-left py-2 px-4">Age Requirement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">Pre-Kindergarten</td>
                          <td className="py-2 px-4">3 years old</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Kindergarten 1</td>
                          <td className="py-2 px-4">4 years old</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Kindergarten 2</td>
                          <td className="py-2 px-4">5 years old</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Grade 1</td>
                          <td className="py-2 px-4">6 years old</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Grade 2</td>
                          <td className="py-2 px-4">7 years old</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">And so on...</td>
                          <td className="py-2 px-4">Corresponding age</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-muted-foreground mt-4">
                    Exceptions may be considered on a case-by-case basis, taking into account the child's readiness and
                    previous educational experience.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=1000&auto=format&fit=crop"
                    width={800}
                    height={600}
                    alt="Students of different ages"
                    className="mx-auto aspect-video rounded-xl object-cover"
                  />
                  <div className="mt-4 space-y-2">
                    <h4 className="font-bold">Assessment for Grade Placement</h4>
                    <p className="text-muted-foreground">
                      All students undergo an age-appropriate assessment to determine the most suitable grade placement.
                      This assessment evaluates academic readiness, social development, and other relevant factors.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fees" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Tuition & Fees</h3>
                  <p className="text-muted-foreground">
                    Our fee structure for the 2025-2026 academic year is as follows:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Fee Type</th>
                          <th className="text-left py-2 px-4">Amount</th>
                          <th className="text-left py-2 px-4">Frequency</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">Application Fee</td>
                          <td className="py-2 px-4">$100</td>
                          <td className="py-2 px-4">One-time (non-refundable)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Registration Fee</td>
                          <td className="py-2 px-4">$500</td>
                          <td className="py-2 px-4">One-time (new students)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Tuition (Pre-K to KG)</td>
                          <td className="py-2 px-4">$8,000</td>
                          <td className="py-2 px-4">Annual</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Tuition (Grades 1-5)</td>
                          <td className="py-2 px-4">$10,000</td>
                          <td className="py-2 px-4">Annual</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Tuition (Grades 6-8)</td>
                          <td className="py-2 px-4">$12,000</td>
                          <td className="py-2 px-4">Annual</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Tuition (Grades 9-12)</td>
                          <td className="py-2 px-4">$15,000</td>
                          <td className="py-2 px-4">Annual</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="space-y-2 mt-4">
                    <h4 className="font-bold">Additional Fees</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>Technology Fee: $500 per year</li>
                      <li>Books and Materials: $300-600 per year (varies by grade)</li>
                      <li>School Uniform: $200-300 (approximate)</li>
                      <li>Transportation: $1,200-2,000 per year (optional)</li>
                      <li>Lunch Program: $800-1,000 per year (optional)</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6 space-y-4">
                    <h3 className="text-xl font-bold">Payment Options</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CreditCard className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                        <div>
                          <p className="font-medium">Annual Payment</p>
                          <p className="text-sm text-muted-foreground">5% discount when paid in full by July 1st</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CreditCard className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                        <div>
                          <p className="font-medium">Semester Payment</p>
                          <p className="text-sm text-muted-foreground">2% discount when paid in two installments</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CreditCard className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                        <div>
                          <p className="font-medium">Quarterly Payment</p>
                          <p className="text-sm text-muted-foreground">Four equal installments</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CreditCard className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                        <div>
                          <p className="font-medium">Monthly Payment</p>
                          <p className="text-sm text-muted-foreground">
                            Ten equal installments (additional processing fee applies)
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="backdrop-blur-sm bg-background/80 border border-primary/10 rounded-xl p-6 space-y-4">
                    <h3 className="text-xl font-bold">Financial Aid & Scholarships</h3>
                    <p className="text-muted-foreground">
                      We are committed to making quality education accessible. Limited financial aid and merit-based
                      scholarships are available for qualifying families.
                    </p>
                    <div className="pt-2">
                      <Button asChild variant="outline">
                        <Link href="/admissions/financial-aid">Learn About Financial Aid</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Important Dates</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Key deadlines and events for the 2025-2026 admissions cycle.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Calendar className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="text-xl font-bold">Application Deadlines</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                    <div>
                      <p className="font-medium">Early Application</p>
                      <p className="text-sm text-muted-foreground">November 15, 2024</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                    <div>
                      <p className="font-medium">Regular Application</p>
                      <p className="text-sm text-muted-foreground">January 31, 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                    <div>
                      <p className="font-medium">Late Application</p>
                      <p className="text-sm text-muted-foreground">Rolling basis (subject to availability)</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Calendar className="h-8 w-8 text-accent" />
                  <div>
                    <h3 className="text-xl font-bold">Open Houses & Tours</h3>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                    <div>
                      <p className="font-medium">Fall Open House</p>
                      <p className="text-sm text-muted-foreground">October 15, 2024</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                    <div>
                      <p className="font-medium">Winter Open House</p>
                      <p className="text-sm text-muted-foreground">January 10, 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                    <div>
                      <p className="font-medium">Spring Open House</p>
                      <p className="text-sm text-muted-foreground">March 20, 2025</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-accent" />
                    <div>
                      <p className="font-medium">Campus Tours</p>
                      <p className="text-sm text-muted-foreground">Every Tuesday and Thursday (by appointment)</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              We encourage families to apply early as spaces fill quickly. Late applications will be considered on a
              rolling basis, subject to availability.
            </p>
            <Button asChild variant="outline">
              <Link href="/resources/academic-calendar">View Full Academic Calendar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Application Form</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Complete the form below to begin the application process.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <AdmissionForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Answers to common questions about our admissions process.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">What is the student-to-teacher ratio?</h3>
                <p className="text-muted-foreground">
                  Our average student-to-teacher ratio is 15:1, allowing for personalized attention and support for each
                  student.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you offer transportation services?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide transportation services for students living within a 15-mile radius of the school.
                  Additional fees apply.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Is financial aid available?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer need-based financial aid and merit scholarships to qualifying families. Applications for
                  financial assistance should be submitted along with the admissions application.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">What is the admissions assessment like?</h3>
                <p className="text-muted-foreground">
                  The assessment varies by age group. For younger children, it involves observation of play and social
                  interaction. For older students, it includes academic assessments in core subjects and an interview.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Do you accept mid-year transfers?</h3>
                <p className="text-muted-foreground">
                  Yes, we accept mid-year transfers subject to availability. The application process remains the same,
                  and we work closely with families to ensure a smooth transition.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/admissions/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <MovingGradient />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Have Questions?</h2>
              <p className="md:text-xl">
                Our admissions team is here to help. Contact us for more information or to schedule a campus visit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>admissions@schoolname.edu</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Monday-Friday: 8:00 AM - 4:30 PM</span>
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild variant="secondary">
                  <Link href="/contact">
                    Contact Us <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Admissions Office</h3>
                <p className="mb-4">
                  Our admissions office is located at the main entrance of the school campus. Visitors are welcome
                  during office hours.
                </p>
                <p>We look forward to meeting you and sharing more about our school community!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

