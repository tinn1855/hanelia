"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const HERO_SLIDES = [
  {
    label: "Limited Collection",
    title: "Essentials x Mannequin Collaboration",
    subtitle: "Inspired by the French Coastal Town Vibe",
    image: "/placeholder-product.svg",
    shopHref: "/c/featured",
    discoverHref: "/c/all",
  },
  {
    label: "New Arrivals",
    title: "Spread Your Charming With Your Fashion",
    subtitle: "Trendy and classy for the new season",
    image: "/placeholder-product.svg",
    shopHref: "/c/featured",
    discoverHref: "/c/all",
  },
  {
    label: "Sale",
    title: "Up to 50% Off Select Styles",
    subtitle: "Limited time only",
    image: "/placeholder-product.svg",
    shopHref: "/c/sale",
    discoverHref: "/c/all",
  },
];

function HeroSlide({
  label,
  title,
  subtitle,
  image,
  shopHref,
  discoverHref,
}: (typeof HERO_SLIDES)[0]) {
  return (
    <div className="relative flex min-h-[500px] w-full items-center justify-center sm:min-h-[600px] lg:min-h-[700px]">
      <div className="absolute inset-0 bg-linear-to-b from-muted to-muted/80" />
      <Image
        src={image}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-foreground/40" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <Badge>{label}</Badge>
        <Heading
          variant="display"
          as="h1"
          className="mb-4 max-w-3xl text-white"
        >
          {title}
        </Heading>
        <p className="mb-8 max-w-xl  text-white sm:text-xl">{subtitle}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href={shopHref}>Shop Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={discoverHref}>Discover More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
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
    <section className="relative w-full overflow-hidden">
      <Carousel
        opts={{ loop: true, align: "start" }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          {HERO_SLIDES.map((slide, i) => (
            <CarouselItem key={i} className="pl-0">
              <HeroSlide {...slide} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border-0 bg-white/20 text-white hover:bg-white/30 hover:text-white md:left-6 md:size-10"
          aria-label="Previous slide"
        />
        <CarouselNext
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border-0 bg-white/20 text-white hover:bg-white/30 hover:text-white md:right-6 md:size-10"
          aria-label="Next slide"
        />

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className="h-1 rounded-full transition-all aria-[current]:w-8"
              style={{
                width: i === current ? 32 : 8,
                backgroundColor:
                  i === current ? "white" : "rgba(255,255,255,0.5)",
              }}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current ? "true" : undefined}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
