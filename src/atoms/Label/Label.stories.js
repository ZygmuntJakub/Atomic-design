import React from "react";

import Label from "./Label";

export default {
  title: "1 - Atoms/Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: "Lorem ipsum",
};
