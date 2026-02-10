import Link from "next/link";
import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import { NewsletterForm } from "./newsletter-form";

const QUICK_LINKS = [
  { href: "/product", label: "Shop All" },
  { href: "/product?filter=new", label: "New Arrivals" },
  { href: "/product?filter=bestsellers", label: "Best Sellers" },
  { href: "/sale", label: "Sale" },
  { href: "/gift-cards", label: "Gift Cards" },
];

const CUSTOMER_SERVICE_LINKS = [
  { href: "/contact", label: "Contact Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/shipping-returns", label: "Shipping & Returns" },
  { href: "/order-tracking", label: "Order Tracking" },
  { href: "/size-guide", label: "Size Guide" },
];

const SOCIAL_LINKS = [
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://youtube.com", label: "YouTube", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t ">
      <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 font-bold text-foreground transition-opacity hover:opacity-80"
            >
              <span className="text-xl tracking-tight">Hanelia</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your destination for curated fashion and a seamless shopping
              experience. Discover quality, style, and convenience.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground hover:text-foreground rounded-md p-2 transition-colors hover:bg-accent"
                >
                  <Icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <Heading variant="h4" className="mb-4">
              Quick Links
            </Heading>
            <ul className="space-y-2">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading variant="h4" className="mb-4">
              Customer Service
            </Heading>
            <ul className="space-y-2">
              {CUSTOMER_SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Heading variant="h4" className="mb-4">
              Stay Connected
            </Heading>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <NewsletterForm />
            <Link
              href="mailto:support@hanelia.com"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
            >
              <Mail className="size-4" />
              support@hanelia.com
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container mx-auto px-4 py-4 text-center sm:px-6 lg:px-8">
          <p className="text-muted-foreground text-sm">
            © 2026 Hanelia All rights reserved.
            <span className="text-muted-foreground/50">|</span>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className="text-muted-foreground/50">|</span>
            <Link href="/terms">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
