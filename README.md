# smartway-react-native-ui

Design system library for Smartway apps

## Installation

```sh
npm install smartway-react-native-ui
```

## Install new font

In `src\assets\fonts` copy downloaded font

and from `Storybook` folder execute

```sh
npm run link-asset
```

Rebuild app and you can use new added font with :

```
<Text style={{fontFamily: 'FontFileNameWithoutExtension'}} />
```
## launch storybook

```
cd Storybook
npm run start
```

## create a new story for storybook

add a folder in *Storybook/components* with th name of your component
you can use *Storybook/components/TemplateStories.tsx* as ... template
copy it into the folder rename like : *component*.stories.tsx
follow the instruction in the template. see other component to better understand on create a story.

when all it's done you need to relaunch npm run start to add it in story book

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
