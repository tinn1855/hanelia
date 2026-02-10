"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setIsLoading(true);
    setMessage("idle");
    // Simulate API call
    setTimeout(() => {
      setEmail("");
      setIsLoading(false);
      setMessage("success");
    }, 500);
  }

  return (
    <section className="border-t bg-muted/30 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Heading variant="h2" className="mb-4">
            Join Our Newsletter
          </Heading>
          <p className="text-muted-foreground mb-8">
            Subscribe for exclusive offers, new arrivals, and style inspiration.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 min-w-0 flex-1 sm:max-w-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
              aria-label="Email address"
            />
            <Button
              type="submit"
              size="lg"
              className="h-12 px-8"
              disabled={isLoading}
            >
              {isLoading ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <Send className="size-4" />
                </>
              )}
            </Button>
          </form>
          {message === "success" && (
            <p className="mt-4 text-sm text-green-600 dark:text-green-400">
              Thanks for subscribing! Check your inbox for a welcome email.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
