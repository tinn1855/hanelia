import { Badge } from "@/components/ui/badge";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
      description: "Variant",
    },
    children: {
      control: "text",
      description: "Content",
    },
  },
  args: { children: "Badge", variant: "default" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
