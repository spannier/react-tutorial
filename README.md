# react-tutorial
This workspaces contains a few sub-projects with different approaches regarding React.

# Prerequisite installation
* node - Check it with ``node --version`` ==> ``v14.5.0`` or higher
* npm - Check it with ``npm --version `` ==> ``6.14.5`` or higher
* yarn - Check it with ``yarn --version`` ==> ``1.22.4`` or higher<br/>
Yarn is a package manager for your code (see [yarn-website](https://classic.yarnpkg.com/en/docs/getting-started)). It allows you to use and share (e.g. JavaScript) code with other developers from around the world.<br/>
``yarn`` with related configuration-file ``package.json`` is like ``maven``.


## There are NO folders ``node_modules`` inside GIT
Before you can execute / run ``react`` you have to generate the missing folders ``node_modules``.
* Open a console and navigate into related folder with a file ``package.json``
* Execute ``yarn`` or ``yarn install``<br/>
Please note: it can take a couple of minutes before finishing, when you execute it initially.<br/>
The reason is the folder ``node_modules`` with a lot of sub-folders is generated
and very much stuff is downloaded from the web (very similar to initial ``mvm clean install`` without local repository)


## React - Helpfully information to get started
You can find some helpfully information below, when you get started with REACT.

### Important information to relevant REACT-Infopages
* [getting-started](https://reactjs.org/docs/getting-started.html)
* [add-react-to-a-website](https://reactjs.org/docs/add-react-to-a-website.html)

### Additional React-Pages
* [Hands on React-Page](https://reactjs.org/tutorial/tutorial.html)
* [Hello World - Easy example](https://reactjs.org/docs/hello-world.html)

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

