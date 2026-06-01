import {Meta} from "@storybook/react";
import {Spinner, type SpinnerProps} from "@heroui/react";

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: ['accent', 'current', 'danger', 'success', 'warning']
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['sm', 'md', 'lg', 'xl']
    }
  },
  decorators: [
    (Story: any) => (
      <div className="ml-4">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Spinner>;

const defaultProps = {
  color: "accent",
  size: "md",
};

const VariantsTemplate = (args: SpinnerProps) => {
  return (
    <div className="flex flex-wrap items-end gap-8 py-4 text-sm text-muted">
      {(["accent", "current", "danger", "success", "warning"] as const).map((color) => (
        <div className="flex flex-col items-center gap-3" key={color}>
          <Spinner {...args} aria-label={`${color} spinner`} color={color} />
          <span>{color}</span>
        </div>
      ))}
    </div>
  );
};

export const Default = {
  args: {
    ...defaultProps,
  },
};

export const WithLabel = {
  args: {
    ...defaultProps,
    "aria-label": "Loading",
  },
  render: (args: SpinnerProps) => (
    <div className="flex items-center gap-3 text-sm text-muted">
      <Spinner {...args} />
      <span>Loading...</span>
    </div>
  ),
};

export const Variants = {
  args:{
    ...defaultProps,
  },
  render:VariantsTemplate,
};
