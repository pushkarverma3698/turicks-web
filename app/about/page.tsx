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
import { DecorativeOrbs } from "@/components/decorative-orbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://turicks.com";

export const metadata: Metadata = {
  title: "About Us - Turicks",
  description:
    "Learn about Turicks, our mission, values, and the talented team building tailored SaaS solutions for organizations.",
  keywords: [
    "About Turicks",
    "SaaS company",
    "software development agency",
    "custom software development",
    "SaaS product team",
    "AI-driven solutions",
    "company mission and values",
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
    role: "CEO",
    initials: "PD",
    bio: "I am a SaaS leader and CEO with 15+ years of experience scaling enterprise software businesses across global markets. I've built sales and partner ecosystems, led multi-region expansions, and closed high-value enterprise deals. At Turicks, my focus is on building a product-led, customer-first SaaS organization that combines strong technology with clear business outcomes.",
    imagePath: "/ceo.jpeg",
  },
  {
    name: "Sourav Kumar",
    role: "CTO",
    initials: "SK",
    bio: "I lead engineering at Turicks, focusing on building reliable, scalable SaaS products. My work spans system architecture, product development, and delivering secure, maintainable solutions. I specialize in cloud-native architectures, DevOps practices, and modern tech stacks including microservices and AI integration.",
  },
  {
    name: "Akash Bhatti",
    role: "Designer",
    initials: "AB",
    bio: "I design user experiences and interfaces at Turicks, creating intuitive and visually appealing SaaS products. I specialize in UI/UX design, understanding user needs, and crafting seamless workflows that deliver exceptional user experiences.",
  },
  {
    name: "Sumit Kumar",
    role: "Product Consultant",
    initials: "SM",
    bio: "I specialize in selling software products and helping organizations find the right SaaS solutions. My expertise includes understanding client requirements, demonstrating product value, and closing deals that drive business growth.",
  },
  {
    name: "Manish Sharma",
    role: "Engineer",
    initials: "MS",
    bio: "I develop and maintain software solutions at Turicks, building robust and scalable applications. My expertise includes full-stack development, system architecture, and DevOps practices. I design scalable architectures, implement CI/CD pipelines, manage infrastructure, and ensure reliable deployments. I work on feature development and technical improvements to ensure our products are reliable, performant, and efficiently deployed.",
  },
  {
    name: "Pushkar Verma",
    role: "Engineer",
    initials: "PV",
    bio: "I build and optimize software systems at Turicks, focusing on creating efficient and maintainable code. My work involves developing new features, troubleshooting issues, and collaborating with the team to deliver high-quality solutions. I'm passionate about writing clean code, following best practices, and continuously learning new technologies to improve our products.",
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
