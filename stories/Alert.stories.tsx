import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Alert> = {
  title: "Molecules/Alert",
  component: Alert,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "Variant",
    },
  },
  args: { variant: "default" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Alert {...args} className="w-[400px]">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components using the cli.</AlertDescription>
    </Alert>
  ),
};
