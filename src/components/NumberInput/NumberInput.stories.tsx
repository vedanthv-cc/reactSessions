import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInput";
import { useState, ChangeEvent } from "react";

const meta = {
  title: "Components/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dollar: Story = {
  args: {
    label: "Bill",
    iconType: "dollar",
  },
  render: (args) => {
    const [value, setValue] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
    };

    return (
      <NumberInput
        label={args.label}
        iconType={args.iconType}
        value={value}
        onChange={handleChange}
        minValue={0}
        errorMessage={
          value && Number(value) <= 0 ? "Value must be greater than 0" : ""
        }
      />
    );
  },
};

export const Person: Story = {
  args: {
    label: "Number of People",
    iconType: "person",
  },
  render: (args) => {
    const [value, setValue] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
    };

    return (
      <NumberInput
        label={args.label}
        iconType={args.iconType}
        value={value}
        onChange={handleChange}
        minValue={1}
        errorMessage={value && Number(value) < 1 ? "Must be at least 1" : ""}
      />
    );
  },
};
