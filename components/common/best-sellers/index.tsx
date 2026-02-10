"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getBestSellers } from "@/lib/mock/products";

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(price);
}

export function BestSellers() {
  const products = getBestSellers(8);

  return (
    <section className="border-t py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading variant="h2" className="mb-8 text-center">
          Best Sellers
        </Heading>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="relative w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-full pl-2 sm:basis-1/2 sm:pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <Link
                  href={`/p/${product.slug}`}
                  className="group flex flex-col rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="mt-3 flex flex-col gap-1">
                    <span className="font-medium group-hover:underline">
                      {product.name}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {formatPrice(product.price, product.currency)}
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="outline"
            size="icon"
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 lg:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="size-5" />
          </CarouselPrevious>
          <CarouselNext
            variant="outline"
            size="icon"
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:flex"
            aria-label="Next"
          >
            <ChevronRight className="size-5" />
          </CarouselNext>
        </Carousel>
        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/c/all">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
