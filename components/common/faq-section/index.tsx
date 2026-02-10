"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heading } from "@/components/ui/heading";

const FAQ_ITEMS = [
  {
    question: "How does Print on Demand (POD) work?",
    answer:
      "POD allows you to order custom-designed products. We print your design on premium products only when you place an order, so there's no inventory or minimum order required. Typical production time is 5–7 business days.",
  },
  {
    question: "What is your shipping policy?",
    answer:
      "We offer free shipping on orders over $50 within the US. Standard shipping takes 5–10 business days. Express shipping (2–4 business days) is available at checkout for an additional fee.",
  },
  {
    question: "Can I return or exchange my order?",
    answer:
      "Yes. We offer a 30-day return policy for unworn, unwashed items with original tags. Custom POD items may have different return eligibility—please check the product page for details. Contact our support team to initiate a return.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive an email with a tracking number and link. You can also track your order by logging into your account and visiting the Order History section.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. All transactions are secured with industry-standard encryption.",
  },
];

export function FAQSection() {
  return (
    <section className="border-t py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Heading variant="h2" className="mb-10 text-center">
          Frequently Asked Questions
        </Heading>
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
