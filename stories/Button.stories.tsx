import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Button variant",
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      description: "Size button",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    children: {
      control: "text",
      description: "Button content",
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
    variant: "default",
    size: "default",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
