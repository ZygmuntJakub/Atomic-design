import React from "react";

import Home from "./Home";

export default {
  title: "4 - Templates/Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const Primary = Template.bind({});
