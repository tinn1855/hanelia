import { Toggle } from "@/components/ui/toggle";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Toggle> = {
  title: "Atoms/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
      description: "Variant",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "Size",
    },
    disabled: {
      control: "boolean",
      description: "Disabled",
    },
    children: {
      control: "text",
      description: "Content",
    },
  },
  args: { children: "Toggle", variant: "default", size: "default" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
