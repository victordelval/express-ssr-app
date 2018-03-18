## Table of Contents

- [Short Description](#short-description)
- [Project Dependencies](#project-dependencies)
- [Project Structure](#folder-structure)
- [Available Scripts](#available-scripts)


## Short Description
The objective of the project is to create a basic Express backend with server-side rendering (SSR).


## Project Dependencies

Development and production dependencies:

```
  "devDependencies": {
    "babel-preset-env": "^1.6.1",
    "babel-register": "^6.26.0",
    "morgan": "^1.9.0",
    "nodemon": "^1.14.12"
  },
  "dependencies": {
    "babel-cli": "^6.26.0",
    "body-parser": "^1.18.2",
    "express": "^4.16.2",
    "mongoose": "^5.0.3",
    "pug": "^2.0.1"
  }
```

### Testing

npm i --save-dev got chai cheerio mocha


## Project Structure

The library is located in the "src" folder. The project has the following contents:

```
vanilla-map
    |- node_modules
        |- ...

    |- src
        |- views
            |- home.pug
        |- index.js

    |- .babelrc
    |- .gitignore
    |- nodemon.json
    |- package-lock.json
    |- package.json
    |- README.md

```


## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode. Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

### `npm run watch`
