import { Shield, Truck, RotateCcw, Headphones } from "lucide-react";

const TRUST_ITEMS = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $50",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated customer service",
  },
];

export function TrustBar() {
  return (
    <section className="border-y bg-muted/50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-center gap-4"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-background">
                <Icon className="size-6 text-foreground" />
              </div>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
