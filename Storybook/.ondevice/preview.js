import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeProvider } from "../components/theme/ThemeProvider";


export const decorators = [withBackgrounds,   Story => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
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
