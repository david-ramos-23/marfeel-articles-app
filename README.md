# 🚀 Marfeel Articles App

## 📦 Getting Started

1. git clone https://github.com/david-ramos-23/marfeel-articles-app
2. run <code>npm install</code> in project folder
3. <code>npm run start</code>
4. Open [http://localhost:3000](http://localhost:3000)

## ⚙️ Build

The app is build for production and place the code into `build` folder

- The HTML page is generated with `react-static-generator`.

## 🛠️ Tests

The unit tests are located in `src/**/__tests__/`.

- `npm test` runs all the tests

[ x ] actions

[ x ] reducers

[ x ] Hooks

[ x ] `<App />` component - `App.test.tsx`: snapshot & lifecycle testing

[ x ] `<Header />` component - `Header.test.tsx`: snapshot & `handleScroll` method testing

[ x ] `<Articles />` component - `Articles.test.tsx`: snapshot & lifecycle testing

[ x ] `<ArticleList />` component - `ArticleList.test.tsx`: snapshot & lifecycle testing

## ⭐️ Features

[ x ] TypeScript

[ x ] ESLint, Prettier, Lint-Staged, Husky

[ x ] Redux, Redux Thunks & Hooks.
Used different ways to manage the state.

[ x ] StyledComponents
The customizations are loaded through the ThemeProvider. The default theme configuration can be found in `src/store/theme/theme.ts`

[ x ] Jest + enzyme

[ x ] Axios
When the app is launched the default theme is used and after 2 seconds the light theme is loaded, using `axiox-mock-adapter`

[ x ] `react-redux-loading-bar`. As a progress bar displayed on top.

## Requirements

[ x ] Section menu: Should support scroll to the right to reveal more Section links, if present.

[ x ] Vertical scroll behaviour: When a user scrolls 400 pixels, the section menu should be hidden. This functionality should be implemented without the use of any library,

## Considerations

- Avoid any backend development (use mocks if
  possible)

- Aim to spend around 3 hrs. -> It took me around 3 days in total taking into account configuration of environment and troubleshooting.

- Use any test library, although we prefer Jest

- Provide a README explaining how to set up the test.

## Bonus

[ x ] When scrolling 800 pixels only burger is visible

[ x ] When clicking on burger menu the lateral menu
should open, listing all the sections.

[ - ] Consider implementing SSR

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
