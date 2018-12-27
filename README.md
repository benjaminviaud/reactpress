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
- typescript
- tree-shaking

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
