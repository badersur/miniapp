# miniapp [![Build Status](https://travis-ci.org/badersur/miniapp.svg?branch=master)](https://travis-ci.org/github/badersur/miniapp)

> A minimal electron app using webpack, TypeScript & React.

This project is a work in progress and is based on
[electron-webpack-quick-start](https://github.com/electron-userland/electron-webpack-quick-start)
with support for TypeScript, React and command-line options!

Check out [`electron-webpack`'s documentation](https://webpack.electron.build/)
for more details.

## Getting Started

Simply clone down this repository, install dependencies, and get started
on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly**
recommended, as opposed to using `npm`.

Open the terminal and run the following commands:

```bash
# copy template using git clone
git clone https://github.com/badersur/miniapp

# change current directory to miniapp
cd miniapp

# install dependencies
yarn
```

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create unpacked build for current operating system
yarn dir # or yarn dist:dir

# `yarn compile` & create production build for current operating systems
yarn dist

# create a production build for all supported systems
yarn dist:all
```

## Tracking repos

This app is mainly based on:

-   electron-userland/electron-webpack-quick-start: [d3a683e...master](https://github.com/electron-userland/electron-webpack-quick-start/compare/d3a683e...master)

and I may add extra features from:

-   sindresorhus/electron-boilerplate: [2203d19...master](https://github.com/sindresorhus/electron-boilerplate/compare/2203d19...master)

-   loopmode/react-desktop: [8003675...master](https://github.com/loopmode/react-desktop/compare/8003675...master)
