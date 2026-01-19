import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Turicks",
  description: "Get in touch with Turicks. Have a project in mind? Want to learn more about our products or services? We'd love to hear from you.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
