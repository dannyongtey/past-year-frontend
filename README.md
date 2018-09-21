#   Simple React boilerplate

<br />

<div align="center">
  <a href="https://david-dm.org/framgia/simple-react-boilerplate" title="dependencies status">
    <img src="https://david-dm.org/framgia/simple-react-boilerplate/status.svg"/></a>
  <a href="https://david-dm.org/framgia/simple-react-boilerplate?type=dev" title="devDependencies status">
    <img src="https://david-dm.org/framgia/simple-react-boilerplate/dev-status.svg"/></a>
  <a href="https://travis-ci.org/framgia/simple-react-boilerplate" title="build status">
    <img src="https://travis-ci.org/framgia/simple-react-boilerplate.svg" alt="Build Status" />
  </a>
  <a href='https://coveralls.io/github/framgia/simple-react-boilerplate'>
    <img src='https://coveralls.io/repos/github/framgia/simple-react-boilerplate/badge.svg' alt='Coverage Status' />
  </a>
</div>

<br />

## React v16
- [**React 16.4**](https://reactjs.org/blog/2017/09/26/react-v16.0.html): Newest version of React

## React router v4
- [**React router v4**](https://reacttraining.com/react-router/web/guides/quick-start): Learn once, Route Anywhere

## React Redux
- [**React Redux**](https://redux.js.org/basics/usage-with-react): Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

## Redux saga
- [**Redux saga**](https://redux-saga.js.org/): redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, simple to test, and better at handling failures.

## Bootstrap v4
- [**Bootstrap v4**](https://getbootstrap.com/docs/4.0/getting-started/introduction/): The world’s most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page.

## Testing
- [**Jest**](https://facebook.github.io/jest/docs/en/tutorial-react.html): a very fast test runner with helpful fail messages,
it's has simple configuration, coverage report with a single command line switch also.
- [**Enzyme**](http://airbnb.io/enzyme/docs/api/): Convenient utilities to work with shallow rendering, static rendered markup or DOM rendering. It's also has jQuery-like API to find elements, read props, etc.

## What's next from here?
There are some suggestions for you in order to make this project more completely by your self
- Styling: You can use some following libraries: [**styled-component**](https://www.styled-components.com/), [**css-module**](https://github.com/css-modules/css-modules), [**postcss**](https://github.com/postcss/postcss), [**less**](https://github.com/less/less.js) or [**sass**](https://github.com/sass/node-sass)
- Add some necessary loader modules for webpack: [**file-loader**](https://github.com/webpack-contrib/file-loader), [**image-webpack-loader**](https://github.com/tcoopman/image-webpack-loader), or some [****others****](https://webpack.js.org/loaders/)
- Use memoize with [**reselect**](https://github.com/reduxjs/reselect) for better performance
- Dynamically load reducers for code splitting - [**how Twitter does it.**](http://nicolasgallagher.com/redux-modules-and-code-splitting/)
- Dynamically load sagas for code splitting - You can do it with 'run' or 'runSaga' method of redux-saga (call them in componentDidMount hook and cancel at componentWillUnmount), or make your own HOC to inject saga by your self, it completely depends on you
- Code splitting with [**react-loadable**](https://github.com/jamiebuilds/react-loadable): A higher order component for loading components with dynamic imports.
- Use [**react-helmet**](https://github.com/nfl/react-helmet) for SEO: React Helmet is the most important component when it comes to the SEO of SPA. React Helmet is used to manage the metadata of the corresponding web document that is being served via React components. Being a library on top of React, React Helmet is also executable on the server-side as well as client-side.
The major advantage of React Helmet is the ease of integration without any major changes in the page coding
- Import [**immutable-js**](https://facebook.github.io/immutable-js/): Actually it's just optional, you can have some ideas from [**here**](https://redux.js.org/recipes/using-immutable.js-with-redux#why-should-i-use-an-immutable-focused-library-such-as-immutable-js)
- Use an internationalization library: It can be [**react-intl**](https://github.com/yahoo/react-intl) or [**i18next**](https://github.com/i18next/react-i18next) or [**js-lingui**](https://github.com/lingui/js-lingui)
- Apply some advance config for webpack in order to optimize your product's performance
