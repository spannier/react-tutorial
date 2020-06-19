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
## React Tutorial with game: Tic-Tac-Toe
Check inside `04-react-app-from-scratch` the sub-project `01-basic-tic-tac-toe-tutorial`.
It contains a fully working Tic-Tac-Toe Game from the [React-Tutorial](https://reactjs.org/tutorial/tutorial.html#declaring-a-winner).

-   There are a couple of files with the form `<number>-index.js`.
    - Every `<number>-index.js` represents a (sub-)chapter of the React-Tutorial.
    - You can replace these `<number>-index.js` to `index.js` to get the **coding-state** of the sub-chapter
    and to see the result of the sub-chapter.
-   If you have changed it to `index.js`, you can start it with `npm start`
-   Please note: `Final-index.js` represents the **latest version**

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
