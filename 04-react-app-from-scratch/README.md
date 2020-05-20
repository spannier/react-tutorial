# React App from scratch
This example shows, how to create a React-App from scratch.

## Create React App
Create React apps with no build configuration.
- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App

## Quick Overview
Create a folder and open it in your Terminal. Execute the following commands:
```sh
npx create-react-app my-app
cd my-app
npm start
```

### Setup (Optional)
You can find a documentation on this [blog-page](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658).

To get started, create a new directory for your React app.
Then, initialize your project with `npm init` and open it in an editor of your choice.
It’s also a pretty good time to `git init` as well.

In your new project folder, create the following structure:
```
.
+-- public
+-- src
```
Thinking ahead a little bit, we’ll eventually want to build our app
and we’ll probably want to exclude the built version and our node modules from commits,
so let’s go ahead and add a `.gitignore` file excluding (at least) the directories `node_modules` and `dist`.

### Realted GitHub Page
The related GitHub Page for this example can be found [here](https://github.com/facebook/create-react-app).
