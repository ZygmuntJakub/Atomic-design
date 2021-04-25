import React from "react";

import Home from "./Home";

export default {
  title: "5 - Pages/Home",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const NotLogged = Template.bind({});
export const Logged = Template.bind({});
Logged.args = {
  logged: true,
};
