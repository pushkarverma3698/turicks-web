import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products - Turicks",
  description: "Explore our SaaS products designed for specific organizational needs, including school management systems and enterprise solutions.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
