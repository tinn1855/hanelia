import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Checked",
    },
    disabled: {
      control: "boolean",
      description: "Disabled",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} id="check" />
      <Label htmlFor="check">Accept terms</Label>
    </div>
  ),
};
