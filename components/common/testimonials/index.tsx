"use client";

import { useState, useEffect } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heading } from "@/components/ui/heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const TESTIMONIALS = [
  {
    quote:
      "I'm very much of the 'buy less but buy better' persuasion but never really knew where to look. Hanelia changed that.",
    author: "Josh Lochkovic",
  },
  {
    quote:
      "Quality products and fast shipping. Hanelia has become my go-to for unique fashion finds.",
    author: "Sarah Chen",
  },
  {
    quote:
      "The customization options are amazing. I love being able to create something truly unique.",
    author: "Marcus Johnson",
  },
  {
    quote:
      "Best online shopping experience I've had. The products are exactly as described.",
    author: "Emily Davis",
  },
];

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const sync = () => setCurrent(api.selectedScrollSnap());
    api.on("init", sync).on("select", sync);
    return () => {
      api.off("init", sync).off("select", sync);
    };
  }, [api]);

  return (
    <section className="border-t py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading variant="h2" className="mb-10 text-center">
          What Our Customers Say
        </Heading>
        <div className="mx-auto max-w-3xl">
          <Carousel opts={{ loop: true }} setApi={setApi}>
            <CarouselContent>
              {TESTIMONIALS.map((t, i) => (
                <CarouselItem key={i} className="md:basis-full">
                  <blockquote className="rounded-xl border bg-card p-8 text-center sm:p-10">
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex flex-col items-center gap-3">
                      <Avatar size="lg">
                        <AvatarFallback className="text-base">
                          {t.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <cite className="font-semibold not-italic">
                        {t.author}
                      </cite>
                    </div>
                  </blockquote>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="outline"
              className="absolute -left-4 top-1/2 hidden -translate-y-1/2 sm:flex"
              aria-label="Previous testimonial"
            />
            <CarouselNext
              variant="outline"
              className="absolute -right-4 top-1/2 hidden -translate-y-1/2 sm:flex"
              aria-label="Next testimonial"
            />
            <div className="mt-6 flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: i === current ? 24 : 8,
                    backgroundColor:
                      i === current
                        ? "hsl(var(--foreground))"
                        : "hsl(var(--muted-foreground) / 0.5)",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === current ? "true" : undefined}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
