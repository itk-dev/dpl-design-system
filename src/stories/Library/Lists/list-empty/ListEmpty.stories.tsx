import React from "react";
import { withDesign } from "storybook-addon-designs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListEmpty as ListEmptySB } from "./ListEmpty";

export default {
  title: "Library / Lists / List - empty",
  component: ListEmptySB,
  decorators: [withDesign],
  argTypes: {},
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xouARmJCONbzbZhpD8XpcM/Brugerprofil?node-id=1064%3A56582",
    },
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ListEmptySB>;

const Template: ComponentStory<typeof ListEmptySB> = () => (
  <ListEmptySB />
);

export const ListEmpty = Template.bind({});
