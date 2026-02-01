import { Skeleton } from "@/components/ui/skeleton";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Skeleton> = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-12 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[180px]" />
    </div>
  ),
};
