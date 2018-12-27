# reactpress

Starter theme for Wordpress

### Progress

| Statut  | Tasks | Percentage |
| ------------- | ------------- | ------------- |
| 🚧   | Development  | 0% |
| 🚧   | Tests  | 0% |
| 🚧   | Production  | 0% |

## Technologies used
- react
- react-router
- babel
- browserify (just for quickly start project)

## In progress or in the near future
- REST API Wordpress
- prop-types or typescript or flow for typechecking ?
- tree-shaking
- 404 error (At the moment .htaccess redirect 404 error to index.html => patch to resolve url 404 not found);
- finish the processing of the request in Nav.js

## Improvements to plan
- method fetch in components/Nav.js
- config yml file
- browserStack test with Karma

## Fix bugs
- **@import in scss file with sass-loader**
sometimes resolves js file instead of scss file : https://github.com/webpack-contrib/sass-loader/pull/558.
*Today it's fix by adding .scss at the end of import (ex: @import 'util/util.scss').*

## Thoughts
- organize https://css-tricks.com/methods-organize-css/
--beautiful code http://csscomb.com/
- scss
-- file with mixins
-- file with utilities functions
-- @extend http://sass-lang.com/guide
-- Operators http://sass-lang.com/guide
- grid
- rem
- retina
-- devicePixelRatio (!compatibility)
