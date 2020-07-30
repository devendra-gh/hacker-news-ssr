# hacker-news-ssr

React Server Side Rendering demo project. This project uses [Hacker News API](https://hn.algolia.com/api) under the hood.

Demo: [Click to see DEMO](fgdg)


## Getting Started

This project created for a Meetup talk about Server Side Rendering with React.

There is also a SPA version of same project.

- [Visit Repo](fasdf)
- [Click to see DEMO](fadsfa)


### Installing

First clone project and install dependencies

```sh
$ mkdir react-hacker-news && cd react-hacker-news
$ git clone https://github.com/devendra-gh/hacker-news-ssr.git
$ cd hacker-news-ssr
$ yarn install
```

Run on local

```sh
$ npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000)


## Deployment

Deployment build

```sh
$ npm run build:prod
```

You can deploy this project to:

- [Heroku](https://www.heroku.com/)


## Built With

"dev": "npm run build-server && npm-run-all --parallel dev:\*",
"build-server": "webpack --config webpack.server.js",
"dev:build-server": "webpack --config webpack.server.js --watch",
"dev:build-client": "webpack --config webpack.client.js --watch",
  
 "start": "node build/bundle.js",
"dev:server": "nodemon --watch build --exec \"node build/bundle.js\"",
"build:prod": "rm -rf build && rm -rf public && webpack --config webpack.server.js && webpack -p --config webpack.client.prod.js --mode production",
"heroku-postbuild": "npm install && npm run build:prod",
"webpack-prod": "webpack -p --progress --config webpack.client.prod.js --mode production",
  
 "test": "react-scripts test --env=jest-environment-jsdom-sixteen"


"start": "node build/bundle.js",
"dev": "npm-run-all --parallel dev:*",
"dev:build-client": "webpack --config webpack.client.js --watch",
"dev:build-server": "webpack --config webpack.server.js --watch",
"dev:server": "nodemon --watch build --exec \"node build/bundle.js\"",
"build:prod": "rm -rf build && rm -rf public && webpack  --config webpack.server.js && webpack -p --config webpack.client.prod.js --mode production",
"test": "react-scripts test --env=jest-environment-jsdom-sixteen",
"heroku-prebuild": "echo This runs before Heroku installs dependencies.",
  "heroku-postbuild": "echo This runs after Heroku installs dependencies, but before Heroku prunes and caches dependencies.",
  "heroku-cleanup": "echo This runs after Heroku prunes and caches dependencies."
