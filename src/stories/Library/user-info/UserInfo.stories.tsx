import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { UserInfo as UserInfoSB } from "./UserInfo";

export default {
  title: "Library / User info",
  component: UserInfoSB,
  decorators: [withDesign],
  argTypes: {
    address: {
      defaultValue:
        "The Utonium Residence, 107 Pokey Oaks South, Townsville, USA",
    },
    name: {
      defaultValue: "Professor Utonium",
    },
  },
  parameters: {},
} as ComponentMeta<typeof UserInfoSB>;

const Template: ComponentStory<typeof UserInfoSB> = (props) => (
  <UserInfoSB {...props} />
);

export const UserInfo = Template.bind({});
