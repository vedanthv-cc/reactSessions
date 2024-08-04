import type { Meta, StoryObj } from "@storybook/react";
import { TipSelector } from "./SelectTipsComponent";
import { useState } from "react";

const meta: Meta<typeof TipSelector> = {
  title: "Components/TipSelector",
  component: TipSelector,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selectedTip, setSelectedTip] = useState<number>(args.selectedTip);

    return (
      <TipSelector
        {...args}
        selectedTip={selectedTip}
        onSelectTip={(tip: number) => {
          setSelectedTip(tip);
          args.onSelectTip(tip);
        }}
      />
    );
  },
};
