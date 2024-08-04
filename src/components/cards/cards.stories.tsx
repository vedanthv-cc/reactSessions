import { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "./Widget";

const meta: Meta<CardProps> = {
  title: "MyComponents/Card", // Set an appropriate title
  component: Card,
  parameters: {
    layout: "centered", // Center the component in the Canvas
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["warning", "info", "error"],
      },
    },
  },
} as Meta;
export default meta;

type story = StoryObj<CardProps>;

export const Default: story = {
  args: {
    children: [
      <h2 key="title">Heading Of The Card</h2>,
      <p key="content">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>,
    ],
  },
};
export const InfoCard: story = {
  args: {
    type: "info",
    children: [
      <h2 key="title">Info Heading</h2>,
      <p key="content">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>,
    ],
  },
};
export const WarningCard: story = {
  args: {
    type: "warning",
    children: [
      <h2 key="title">Warning Heading</h2>,
      <p key="content">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>,
    ],
  },
};
export const ErrorCard: story = {
  args: {
    type: "error",
    children: [
      <h2 key="title">Error Heading</h2>,
      <p key="content">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>,
    ],
  },
};
