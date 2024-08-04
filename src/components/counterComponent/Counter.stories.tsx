import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Counter, CounterProps } from "./Counter";

// Define metadata for the Counter story
const meta: Meta<CounterProps> = {
  title: "MyComponents/Counter", // Set an appropriate title
  component: Counter,
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
  tags: ["autodocs"], // Generate Autodocs entry
  // Add argTypes for props you want to control in the Storybook interface
  argTypes: {
    count: { control: { type: "number" } }, // Allow controlling initial count
    setCount: { action: "changed" }, // Log action for onChange prop
    scale: { control: { type: "number" } }, // Allow controlling scale prop
  },
};

export default meta;

type story = StoryObj<CounterProps>;
export const Default: story = {
  args: {
    count: 0,
    scale: 1,
  },
};

export const SetCountToPositiveValue: story = {
  args: {
    count: 10,
  },
};

export const SetCountToNegativeValue: story = {
  args: {
    count: -10,
  },
};

export const InteractiveDefault = () => {
  const [count, setCount] = React.useState(0);

  return <Counter count={count} setCount={setCount} />;
};

// Interactive story where count can be incremented and decremented by scale of 2
export const InteractiveIncrementDecrementByTwo = () => {
  const [count, setCount] = React.useState(0);

  return <Counter count={count} setCount={setCount} scale={2} />;
};
