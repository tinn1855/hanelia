"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setEmail("");
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <Input
        type="email"
        placeholder="Your email address"
        className="flex-1"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={isLoading}
      />
      <Button
        type="submit"
        size="icon"
        aria-label="Subscribe"
        disabled={isLoading}
      >
        <Send className="size-4" />
      </Button>
    </form>
  );
}
