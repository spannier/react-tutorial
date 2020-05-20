# react-tutorial
This workspaces contains a few sub-projects with different approaches regarding React.

## React - Helpfully information to get started
You can find some helpfully information below, when you get started with REACT.

### Important information to relevant REACT-Infopages
* [getting-started](https://reactjs.org/docs/getting-started.html)
* [add-react-to-a-website](https://reactjs.org/docs/add-react-to-a-website.html)

### Additional React-Pages
* [Hands on React-Page](https://reactjs.org/tutorial/tutorial.html)
* [Hello Wold - Easy example](https://reactjs.org/docs/hello-world.html)

## View the full example source code
You can download example source code [here](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605).

## Minify your React-Code
This minify-step is described on this [page](https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3).
In production, it is recommended to minify any JavaScript code that is included with your application. **Minification can help your website load several times faster,** especially as the size of your JavaScript source code grows.

Here's one way to set it up:

1. [Install Node.js](https://nodejs.org/)
2. Run `npm init -y` in your project folder (**don't skip this step!**)
3. Run `npm install terser`

Now, to minify a file called `like_button.js`, run in the terminal:

```
npx terser -c -m -o like_button.min.js -- like_button.js
```

This will produce a file called `like_button.min.js` with the minified code in the same directory.
If you're typing this often, you can [create an npm script](https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633) to give this command a name.

