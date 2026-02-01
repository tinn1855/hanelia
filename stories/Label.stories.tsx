import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Content",
    },
  },
  args: { children: "Label" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
