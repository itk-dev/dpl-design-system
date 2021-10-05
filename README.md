# DPL Design System

DPL Design System is a library of UI components that should be used as a common base system for "Danmarks Biblioteker" / "Det Digitale Folkebibliotek". The design is implemented with [Storybook](https://storybook.js.org/docs/react/get-started/introduction) / [React](https://reactjs.org/) and is output with HTML markup and css-classes through an addon in Storybook.

The codebase follows the naming that designers have used in Figma closely to ensure consistency.

## Requirements

This project requires the following setup:

- `npm >= 7`
- `node 14`

Check in the terminal which versions you have installed with `npm -v` and `node -v`.

If you don't have the right `npm` version, you can bump it with `nvm install-latest-npm` - which requires you to have [nvm](https://github.com/nvm-sh/nvm) installed.

## Installation

Use the node package manager to install project dependencies:

```bash
npm install
```

## Usage

You can download a `dist.zip` file with `latest` assets (or different tags) under "Releases", and unzip it somewhere within the web root of your project. The assets consist of javascript files, css styles and icons. You can find the html output for a given story under the HTML tab inside storybook.

## Deployment

The latest release is getting rebuild on merge to the main branch, and the tag release points to specific commit.

## Storybook

Spin up storybook by running this command in the terminal:

```bash
npm run storybook
```

When storybook is ready it automatically opens up in a browser with the interface ready to use.

### What is Storybook

[Storybook](https://storybook.js.org/docs/react/get-started/introduction) is an open source tool for building UI components and pages in isolation from your app's business logic, data, and context.
Storybook helps you document components for reuse and automatically visually test your components to prevent bugs.
It promotes the [component-driven](https://componentdriven.org) process and agile development.

It is possible to extend Storybook with an ecosystem of addons that help you do things like fine-tune responsive layouts or verify accessibility.

#### How to use

The Storybook interface is simple and intuitive to use. Browse the project's stories now by navigating to them in the sidebar.
The stories are divided into "Components" and "Atoms" where atoms are the smaller building blocks that can be used to build bigger components.
Each Atom/Component has a corresponding `.stories` file. View their code in the `src/stories` directory to learn how they work.
The `stories` file is used to add the component to the Storybook interface.

#### Addons

Storybook ships with some essential pre-installed [addons](https://storybook.js.org/addons/tag/essentials/) to power the core Storybook experience.

- [Controls](https://storybook.js.org/addons/@storybook/addon-controls/)
- [Actions](https://storybook.js.org/addons/@storybook/addon-actions/)
- [Docs](https://storybook.js.org/addons/@storybook/addon-docs/)
- [Viewport](https://storybook.js.org/addons/@storybook/addon-viewport/)
- [Backgrounds](https://storybook.js.org/addons/@storybook/addon-backgrounds/)
- [Toolbars](https://storybook.js.org/addons/@storybook/addon-toolbars/)
- [Measure](https://storybook.js.org/addons/@storybook/addon-measure/)
- [Outline](https://storybook.js.org/addons/@storybook/addon-outline/)

There are many other helpful addons to customise the usage and experience.
Additional addons used for this project:

- [HTML / storybook-addon-html](https://storybook.js.org/addons/@whitespace/storybook-addon-html/):
  This addon is used to display compiled HTML markup for each story and make it easier for developers to grab the code.
  Because we are developing with React, it is necessary to be able to show the HTML markup with the css-classes to make it easier for other developers that will implement it in the future.
  If a story has controls the HTML markup changes according to the controls that are set.

- [Designs / storybook-addon-designs](https://storybook.js.org/addons/storybook-addon-designs/):
  This addon is used to embed Figma in the addon panel for a better design-development workflow.

- [A11Y](https://storybook.js.org/addons/@storybook/addon-a11y/):
  This addon is used to check the accessibility of the components.

All the addons can be found in `storybook/main.js` directory.

#### Important to notice

**Internal classes**
To display some of the components (fx Colors, Spacing) in a more presentable way, we are using some "internal" css-classes which can be found in the `styles/internal.scss` file.
All css-classes with "internal" in the front should therefore be ignored in the HTML markup.