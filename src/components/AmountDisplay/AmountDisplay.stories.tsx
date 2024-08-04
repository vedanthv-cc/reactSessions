import type { Meta, StoryObj } from '@storybook/react';
import { TipAmountDisplay, TipAmountDisplayProps } from "./AmountDisplay"

const meta: Meta<typeof TipAmountDisplay> = {
  title: 'Components/TipAmountDisplay',
  component: TipAmountDisplay,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: TipAmountDisplayProps = {
  label: 'Tip Amount',
  amount: 0,
};

export const Default: Story = {
  args: defaultArgs,
};

export const WithAmount: Story = {
  args: {
    label: 'Tip Amount',
    amount: 12.34,
  },
};

export const TotalAmount: Story = {
  args: {
    label: 'Total',
    amount: 123.45,
  },
};
