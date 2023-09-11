import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { SmartwayDecorator } from "../components/config/SmartwayDecorator";


export const decorators = [withBackgrounds,   Story => (
  <SmartwayDecorator>
    <Story />
  </SmartwayDecorator>
)];
export const parameters = {
  backgrounds: {
    default: "plain",
    values: [
      { name: "plain", value: "white" },
      { name: "warm", value: "hotpink" },
      { name: "cool", value: "deepskyblue" },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
