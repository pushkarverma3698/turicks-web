import type { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { DecorativeOrbs } from "@/components/decorative-orbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  title: "About Us - Turicks",
  description:
    "Learn about Turicks, our mission, values, and the talented team building tailored SaaS solutions for organizations.",
  keywords: [
    "About Turicks",
    "SaaS company",
    "custom software",
    "AI-driven solutions",
    "team",
    "mission and values",
  ],
  openGraph: {
    title: "About Us - Turicks",
    description:
      "Learn about Turicks, our mission, values, and the talented team building tailored SaaS solutions for organizations.",
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: "Turicks",
    images: [
      {
        url: `${SITE_URL}/globe.svg`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Turicks",
    description:
      "Learn about Turicks, our mission, values, and the talented team building tailored SaaS solutions for organizations.",
    images: [`${SITE_URL}/globe.svg`],
  },
  alternates: {
    canonical: "/about",
  },
};

const teamMembers = [
  {
    name: "Partha Das",
    role: "CEO & Co-Founder",
    initials: "PD",
    bio: "I am a SaaS leader and CEO with 15+ years of experience scaling enterprise software businesses across global markets. I've built sales and partner ecosystems from the ground up, led multi-region expansions, and closed high-value enterprise deals across industries. At Turicks, my focus is on building a product-led, customer-first SaaS organization—one that combines strong technology with clear business outcomes. I believe the future of SaaS belongs to companies that execute relentlessly, listen deeply to customers, and scale with purpose.",
    imagePath: "/ceo.jpeg",
  },
  {
    name: "Amit Pandey",
    role: "CTO",
    initials: "AP",
    bio: "I lead engineering at Turicks, focusing on building reliable, scalable SaaS products. My work spans system architecture, product development, and delivering secure, maintainable solutions that help customers move faster with confidence.",
  },
  {
    name: "Akash Bhatti",
    role: "CIO",
    initials: "AB",
    bio: "I oversee information strategy at Turicks—aligning systems, data, and internal processes to support secure operations and scalable delivery. My focus is on making technology enable faster decisions, cleaner workflows, and better outcomes for customers.",
  },
  // Additional team members will be added soon
];

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We're committed to solving real problems and creating value for organizations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We stay ahead of technology trends to deliver cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description:
      "Your success is our success. We prioritize understanding your needs.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We work closely with our clients throughout the entire development process.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <DecorativeOrbs className="opacity-60" />
        <div className="container mx-auto px-4 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Turicks
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              We are a team of passionate developers, designers, and strategists
              dedicated to building AI-driven, automated tailored SaaS solutions
              that transform how organizations operate.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-y bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8">
              <ImagePlaceholder
                label="Our Story Image - Office workspace, team meeting, or company culture photo. Should represent your organization's values, team collaboration, and work environment. Professional yet approachable."
                aspectRatio="wide"
              />
            </div>
            <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Turicks was founded with a simple yet powerful vision: to create
                software solutions that truly fit the unique needs of each
                organization. We recognized that many businesses were struggling
                with generic, one-size-fits-all software that didn&apos;t align
                with their specific workflows and requirements.
              </p>
              <p>
                Starting as a small team of developers, we began by building
                custom solutions for local organizations, including a
                comprehensive school management system. The success of these
                projects reinforced our belief that tailored software could
                significantly improve operational efficiency and user
                satisfaction.
              </p>
              <p>
                Today, we&apos;ve grown into a full-service agency that combines
                our expertise in SaaS development with a deep understanding of
                organizational needs. We continue to build both ready-made
                solutions and custom projects, always maintaining our commitment
                to quality, innovation, and client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Values</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            The principles that guide everything we do.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="border-y bg-muted/50 py-20" id="team">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Team</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Meet the talented individuals who make Turicks possible.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                      <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-primary/20">
                        {member.imagePath ? (
                          <Image
                            src={member.imagePath}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Avatar className="h-24 w-24">
                            <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                              {member.initials}
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
