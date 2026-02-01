import { Spinner } from "@/components/ui/spinner";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Spinner> = {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => <Spinner {...args} />,
};
