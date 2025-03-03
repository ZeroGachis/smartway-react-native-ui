/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./components",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:components(?:[\\\\/](?!\\.)(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/]|[\\\\/]|$)(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./components/Alert/Banner.stories.tsx": require("../components/Alert/Banner.stories.tsx"),
    "./components/Alert/SnackBar.stories.tsx": require("../components/Alert/SnackBar.stories.tsx"),
    "./components/Badge/Badge.stories.tsx": require("../components/Badge/Badge.stories.tsx"),
    "./components/Button/Button.stories.tsx": require("../components/Button/Button.stories.tsx"),
    "./components/Card/Card.stories.tsx": require("../components/Card/Card.stories.tsx"),
    "./components/Colors/Colors.stories.tsx": require("../components/Colors/Colors.stories.tsx"),
    "./components/DateSelector/DateField.stories.tsx": require("../components/DateSelector/DateField.stories.tsx"),
    "./components/DateSelector/DateSelector.stories.tsx": require("../components/DateSelector/DateSelector.stories.tsx"),
    "./components/Divider/Divider.stories.tsx": require("../components/Divider/Divider.stories.tsx"),
    "./components/Modals/Modals.stories.tsx": require("../components/Modals/Modals.stories.tsx"),
    "./components/NumberField/NumberField.stories.tsx": require("../components/NumberField/NumberField.stories.tsx"),
    "./components/Tag/Tag.stories.tsx": require("../components/Tag/Tag.stories.tsx"),
    "./components/TextField/TextField.stories.tsx": require("../components/TextField/TextField.stories.tsx"),
    "./components/Toggle/Toggle.stories.tsx": require("../components/Toggle/Toggle.stories.tsx"),
    "./components/TopAppBar/TopAppBar.stories.tsx": require("../components/TopAppBar/TopAppBar.stories.tsx"),
    "./components/Typography/Body.stories.tsx": require("../components/Typography/Body.stories.tsx"),
    "./components/Typography/Headline.stories.tsx": require("../components/Typography/Headline.stories.tsx"),
    "./components/Typography/Label.stories.tsx": require("../components/Typography/Label.stories.tsx"),
  };
};

configure(getStories, module, false);
