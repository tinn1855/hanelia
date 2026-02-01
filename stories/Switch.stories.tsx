import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
      description: "Size",
    },
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
      <Switch {...args} id="switch" />
      <Label htmlFor="switch">Enable</Label>
    </div>
  ),
};
