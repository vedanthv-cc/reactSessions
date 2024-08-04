import type { Meta, StoryObj } from "@storybook/react";
import { TipCalculator } from "./TipCalculator";

const meta: Meta<typeof TipCalculator> = {
  title: "Components/TipCalculator",
  component: TipCalculator,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
