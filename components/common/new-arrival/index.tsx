"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { Heading } from "@/components/ui/heading";
import { getNewArrivals } from "@/lib/mock/products";
import type { Product, ProductBadge } from "@/lib/mock/products";
import { cn } from "@/lib/utils";

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function ProductBadge({ badge }: { badge: ProductBadge }) {
  const label =
    badge === "new"
      ? "New"
      : typeof badge === "object" && "discount" in badge
        ? `-${badge.discount}%`
        : null;
  if (!label) return null;
  return (
    <span className="absolute right-2 top-2 z-10 rounded bg-violet-600 px-2 py-0.5 text-xs font-medium text-white">
      {label}
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [isLiked, setIsLiked] = React.useState(false);
  const hasDiscount = product.originalPrice != null && product.originalPrice > product.price;

  return (
    <Link
      href={`/p/${product.slug}`}
      className="group flex flex-col rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        {product.badge && <ProductBadge badge={product.badge} />}
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <span className="font-medium group-hover:underline">{product.name}</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={cn("size-5", isLiked ? "fill-red-500 text-red-500" : "")}
            />
          </button>
        </div>
        <div className="mt-1 flex items-center gap-2">
          {hasDiscount ? (
            <>
              <span className="font-semibold text-green-600 dark:text-green-400">
                {formatPrice(product.price, product.currency)}
              </span>
              <span className="text-muted-foreground text-sm line-through">
                {formatPrice(product.originalPrice!, product.currency)}
              </span>
            </>
          ) : (
            <span className="font-semibold">
              {formatPrice(product.price, product.currency)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export function NewArrival() {
  const products = getNewArrivals(10);

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <Heading variant="h2" className="mb-2">
            New Arrival
          </Heading>
          <p className="text-muted-foreground text-sm">
            Lorem ipsum dolor sit amet conse ctetu.
          </p>
          <div className="mx-auto mt-3 h-0.5 w-16 bg-foreground" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
