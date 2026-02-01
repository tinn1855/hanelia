import { Input } from "@/components/ui/input";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
      description: "Type",
    },
    placeholder: {
      control: "text",
      description: "Placeholder",
    },
    disabled: {
      control: "boolean",
      description: "Disabled",
    },
  },
  args: { placeholder: "Placeholder...", type: "text" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
