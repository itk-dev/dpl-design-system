import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import { AutosuggestText } from "../autosuggest-text/AutosuggestText";
import {
  AutosuggestMaterial,
  AutosuggestMaterialProps,
} from "./AutosuggestMaterial";
import materialSuggestions from "./material-suggestions";

export default {
  title: "Library / Autosuggest - Material",
  component: AutosuggestMaterial,
  decorators: [withDesign],
  argTypes: {
    materialSuggestions: {
      name: "Material suggestions",
      defaultValue: materialSuggestions,
      control: { type: "array" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/ETOZIfmgGS1HUfio57SOh7/S%C3%B8gning?node-id=4709%3A24976",
    },
  },
} as ComponentMeta<typeof AutosuggestMaterial>;

const Template: ComponentStory<typeof AutosuggestMaterial> = (
  args: AutosuggestMaterialProps
) => (
  // Apart from AutosuggestMaterial, everything else is here just for the story
  // context. AutosuggestMaterial style is directly dependent on the header,
  // search field, and AutosuggestText styling.
  // If you find out this context no longer represents reality, please adjust it.
  <header className="header" style={{ height: "144px" }}>
    <div className="header__logo-desktop">
      <p className="text-body-medium-regular">Context</p>
    </div>
    <div className="header__menu">
      <nav className="header__menu-first">
        <p className="text-body-medium-regular">Context</p>
      </nav>
      <div className="header__menu-second">
        <div className="header__menu-search">
          <input
            className="header__menu-search-input text-body-medium-regular"
            type="text"
            placeholder="This field is here just for context."
          />
          <img
            className="header__menu-search-icon"
            src="icons/basic/icon-search.svg"
            alt="search icon"
          />
          <ul className="autosuggest pb-16">
            <AutosuggestText textSuggestions={["I am a contextual item"]} />
            <AutosuggestMaterial {...args} />
          </ul>
        </div>
      </div>
    </div>
    <div className="header__clock">
      <p className="text-body-medium-regular">Context</p>
    </div>
  </header>
);

export const MaterialSuggestion = Template.bind({});
