import { ScrollArea } from "@/components/ui/scroll-area";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof ScrollArea> = {
  title: "Atoms/ScrollArea",
  component: ScrollArea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <p className="mb-4 text-sm font-medium">Scroll content</p>
      <div className="space-y-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="text-sm text-muted-foreground">
            Item {i + 1}
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};
