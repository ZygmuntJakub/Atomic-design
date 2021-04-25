import React from "react";

import Button from "./Button";
import { type } from "./constants";

export default {
  title: "1 - Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: type.primary,
  label: "Button",
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
  type: type.primaryOutlined,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: type.secondary,
  label: "Button",
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  type: type.secondaryOutlined,
  label: "Button",
};
