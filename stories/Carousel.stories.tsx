import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Carousel> = {
  title: "Molecules/Carousel",
  component: Carousel,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation",
    },
  },
  args: { orientation: "horizontal" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Carousel {...args} className="mx-auto w-full max-w-xs">
      <CarouselContent>
        {["Slide 1", "Slide 2", "Slide 3"].map((slide, i) => (
          <CarouselItem key={i}>
            <div className="flex aspect-square items-center justify-center rounded-md border bg-muted p-6">
              {slide}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
