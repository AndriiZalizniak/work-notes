# ES6 + Babel + Gulp + BrowserSync + WebPack

## Babel

Babel is a compiler for writing next generation JavaScript. [babeljs.io](https://babeljs.io/)

## Technology Stack

- Transpiles ES6+ using [Babel](https://babeljs.io/) and [Browserify](http://browserify.org/)
- SASS compilation using [gulp-sass](https://github.com/dlmanning/gulp-sass)
- Local development environment with [browser-sync](https://www.browsersync.io)

## Structure<br>
- dist 				- distribution folder<br />
- gulp				- scripts for gulp tasks<br />
- src				  - source files<br />
    |-	dev			- directoty sources of delelopment<br />
	  	|-	vendor-css	- css files of framework and so on. This files not need transform<br />
	  	|-	vendor-js	- also but files javascripts<br />
	  	|-	images		- files images to produce<br />
	  	|-	orinalImages		- files images original<br />
	  	|-	js		- javascript files before transform<br />
	  	|-	scss		- files of scss before transform<br />
	  	|-	svg		- files svg to transform<br />
	  |-	build		- directory to serve<br />

## Usage

1. Run `gulp` to set up watches for the development environment and hot reload bowser

## Building

Run `gulp build` to build the app for distribution in the `dist` folder.
