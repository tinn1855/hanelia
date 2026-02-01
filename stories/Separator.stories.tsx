import { Separator } from "@/components/ui/separator";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Separator> = {
  title: "Atoms/Separator",
  component: Separator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "Orientation",
    },
  },
  args: { orientation: "horizontal" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) =>
    args.orientation === "horizontal" ? (
      <div className="w-[350px] space-y-4">
        <p className="text-sm">Content above</p>
        <Separator {...args} />
        <p className="text-sm">Content below</p>
      </div>
    ) : (
      <div className="flex h-20 items-center gap-4">
        <span className="text-sm">Left</span>
        <Separator {...args} />
        <span className="text-sm">Right</span>
      </div>
    ),
};
