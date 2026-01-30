import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function ContactFloater() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label="Contact us"
    >
      <MessageCircle className="h-5 w-5" />
      Contact us
    </Link>
  );
}
