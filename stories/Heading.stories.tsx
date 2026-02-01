import { Heading } from "@/components/ui/heading";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Heading> = {
  title: "Atoms/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["display", "h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Variant",
    },
    children: {
      control: "text",
      description: "Content",
    },
  },
  args: {
    children: "Heading",
    variant: "h1",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
