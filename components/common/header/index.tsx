"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/blog", label: "Blog" },
];

function Logo() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <path
        d="M18 4L32 18L18 32L4 18L18 4Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M18 8L28 18L18 28L8 18L18 8Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path d="M18 12L24 18L18 24L12 18L18 12Z" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="border-b border-border">
        <div className="container mx-auto flex py-2 items-center justify-between px-4">
          <Select defaultValue="usd">
            <SelectTrigger>
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">United States: USD </SelectItem>
              <SelectItem value="eur">Europe: EUR </SelectItem>
              <SelectItem value="gbp">United Kingdom: GBP </SelectItem>
              <SelectItem value="vnd">Vietnam: VND </SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="size-8" asChild>
              <Link href="/search" aria-label="Search">
                <Search className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="size-8" asChild>
              <Link href="/account" aria-label="Account">
                <User className="size-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="size-8" asChild>
              <Link href="/cart" aria-label="Cart">
                <ShoppingCart className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 font-bold text-foreground transition-opacity hover:opacity-80"
        >
          <span className="text-xl tracking-tight">Hanelia</span>
        </Link>

        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-0">
            {NAV_LINKS.map(({ href, label }, index) => (
              <NavigationMenuItem key={href} className="flex items-center">
                {index > 0 && (
                  <span className="text-muted-foreground/50 px-2 text-sm">
                    |
                  </span>
                )}
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-xs font-semibold uppercase tracking-wider"
                    )}
                  >
                    {label.toUpperCase()}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            </SheetHeader>
            <NavigationMenu
              className="mt-8 flex flex-col items-stretch"
              viewport={false}
            >
              <NavigationMenuList className="flex flex-col gap-1">
                {NAV_LINKS.map(({ href, label }) => (
                  <NavigationMenuItem key={href} className="w-full">
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        className="flex h-12 w-full items-center rounded-md px-3 text-sm font-medium uppercase tracking-wider hover:bg-accent hover:text-accent-foreground"
                      >
                        {label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
