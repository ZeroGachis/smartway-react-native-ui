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
    "./components/ActionCard/ActionCard.stories.tsx": require("../components/ActionCard/ActionCard.stories.tsx"),
    "./components/Badge/Badge.stories.tsx": require("../components/Badge/Badge.stories.tsx"),
    "./components/BottomSheet/BottomSheet.stories.tsx": require("../components/BottomSheet/BottomSheet.stories.tsx"),
    "./components/Button/Button.stories.tsx": require("../components/Button/Button.stories.tsx"),
    "./components/Card/Card.stories.tsx": require("../components/Card/Card.stories.tsx"),
    "./components/DateSelector/DateSelector.stories.tsx": require("../components/DateSelector/DateSelector.stories.tsx"),
    "./components/Dialog/Dialog.stories.tsx": require("../components/Dialog/Dialog.stories.tsx"),
    "./components/Divider/Divider.stories.tsx": require("../components/Divider/Divider.stories.tsx"),
    "./components/DropDown/DropDown.stories.tsx": require("../components/DropDown/DropDown.stories.tsx"),
    "./components/Keyboard/Keyboard.stories.tsx": require("../components/Keyboard/Keyboard.stories.tsx"),
    "./components/Label/Label.stories.tsx": require("../components/Label/Label.stories.tsx"),
    "./components/Menu/Menu.stories.tsx": require("../components/Menu/Menu.stories.tsx"),
    "./components/ModifyQuantity/ModifyQuantity.stories.tsx": require("../components/ModifyQuantity/ModifyQuantity.stories.tsx"),
    "./components/NumberField/NumberField.stories.tsx": require("../components/NumberField/NumberField.stories.tsx"),
    "./components/NumberSelector/NumberSelector.stories.tsx": require("../components/NumberSelector/NumberSelector.stories.tsx"),
    "./components/PrintState/PrintState.stories.tsx": require("../components/PrintState/PrintState.stories.tsx"),
    "./components/Product/Product.stories.tsx": require("../components/Product/Product.stories.tsx"),
    "./components/SnackBar/SnackBar.stories.tsx": require("../components/SnackBar/SnackBar.stories.tsx"),
    "./components/Tab/Tab.stories.tsx": require("../components/Tab/Tab.stories.tsx"),
    "./components/TextField/TextField.stories.tsx": require("../components/TextField/TextField.stories.tsx"),
    "./components/Toggle/Toggle.stories.tsx": require("../components/Toggle/Toggle.stories.tsx"),
    "./components/TopAppBar/TopAppBar.stories.tsx": require("../components/TopAppBar/TopAppBar.stories.tsx"),
    "./components/Typography/Body.stories.tsx": require("../components/Typography/Body.stories.tsx"),
    "./components/Typography/Headline.stories.tsx": require("../components/Typography/Headline.stories.tsx"),
  };
};

configure(getStories, module, false);
