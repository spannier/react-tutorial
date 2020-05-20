# Demo Project aem-react
This is an example project, which shows, how React works together with AEM.<br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites
+ Node 8.9.0 (or higher) - https://nodejs.org/dist/latest-v8.x/ (or higher)
+ Java 1.8 (or higher) - https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
+ Maven 3.5.2 (or higher) - https://archive.apache.org/dist/maven/maven-3/3.5.2/binaries/
+ AEM 6.4 with Service pack 2 (or higher: AEM 6.5 with latest Service pack)

## Installation / Preparation
The installation is divided in **two diffent parts**:
+ `npm create-react-app init <NAME-OF-YOUR-APPLIKATION>`<br>
Example: `npm create-react-app init aem-react`<br>
to install an initial basic React-Project with all needed source-files, configuration a.s.o..

+ `npm install bootstrap`<br>
This step is necessary to get all related CSS-files

+ Create a separate folder and checkout GIT-Project _aem-spa-react_<br>
`git clone https://github.com/anandkilli/aem-spa-react`

+ Inside folder `public` remove all files except<br>
`favicon.ico`<br>
`index.html`<br> (replace content with related `index.html` of project _aem-spa-react_)
`manifest.json` (remove related icons inside, which you removed before)


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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
