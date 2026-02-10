import Image from "next/image";
import Link from "next/link";

import { Heading } from "@/components/ui/heading";
import { getFeaturedCollections } from "@/lib/mock/products";

export function FeaturedCollections() {
  const collections = getFeaturedCollections();

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading variant="h2" className="mb-8 text-center">
          Featured Collections
        </Heading>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/c/${collection.slug}`}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={collection.imageUrl}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-foreground/40 transition-colors group-hover:bg-foreground/30" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                <span className="text-lg font-semibold">{collection.name}</span>
                <span className="text-sm opacity-90">
                  {collection.productCount} products
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
