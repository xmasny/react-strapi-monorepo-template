import React from "react";
import {Meta} from "@storybook/react";
import {Button, type ButtonProps} from "@heroui/react";

import {GithubIcon, HeartFilledIcon, SearchIcon} from "../components/icons";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "tertiary", "outline", "ghost", "danger", "danger-soft"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<typeof Button>;

const defaultProps = {
  children: "Button",
  size: "md",
  variant: "primary",
};

const StateTemplate = (args: ButtonProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handlePress = (e: any) => {
    // eslint-disable-next-line no-console
    console.log("Pressed", e);
    setIsOpen((prev) => !prev);
  };

  return (
    <Button
      {...args}
      aria-label={isOpen ? "Close" : "Open"}
      aria-pressed={isOpen}
      onPress={handlePress}
    >
      {isOpen ? "Close" : "Open"}
    </Button>
  );
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const WithState = {
  render: StateTemplate,

  args: {
    ...defaultProps,
  },
};

export const IsDisabled = {
  args: {
    ...defaultProps,
    isDisabled: true,
  },
};

export const WithIcons = {
  args: {
    ...defaultProps,
    children: (
      <>
        <HeartFilledIcon className="h-5 w-5" />
        Button
        <GithubIcon className="h-5 w-5" />
      </>
    ),
  },
};

export const IconButton = {
  args: {
    ...defaultProps,
    isIconOnly: true,
    children: <SearchIcon className="h-5 w-5" />,
  },
};

export const CustomWithClassNames = {
  args: {
    ...defaultProps,
    className: "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg",
  },
};
