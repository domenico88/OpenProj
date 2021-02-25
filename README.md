# Todo list

> A TODO ReactJS SPA

* [![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)
* [![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger) 
* [![devDependencies Status](https://david-dm.org/dwyl/hapi-auth-jwt2/dev-status.svg)](https://david-dm.org/dwyl/hapi-auth-jwt2?type=dev)


## Table of Contents 


* [Features](#features)
* [Styling](#styling)
* [Tests](#tests)
* [Deployment](#deployment)


### Setup and run


To run in dev mode 

``` shell
$ npm install
$ npm start
```
To run in prod mode 

``` shell
$ npm run build
$ http-server dist
```

## Features

* ADD TODO - Add todo to the list
* UPDATE TODO - Change todo name and description
* REMOVE TODO - Remove todo from the list

There are also other functionalities like 

* START Recording - To register all dispatched actions
* STOP Recording  - To stop registering actions
* PLAY Recording  - To start playing all registered records
* CLEAR Recording - To clear all registered records

## Styling

* For styling I used styled-components they are really easy to use , they are testable and it's easy to use a generic theme to manage all css of the application.

* In the theme.js file you can find some common styles that you can change


## Tests 

> To run tests 

``` shell
$ npm test

```

* To test this app I decided to use JEST as test runner and React testing library for unit tests that allow you to manage directly the physical DOM

## Project structure and scalability

This is how I would have managed the project structure if it was bigger than this:

* /components -> I would have added different subfolders related to a specific area of the SPA and foreach component I would have added a specific styled component if needed.

* /redux/reducers -> In this case I have created only one reducer but in case of more  I would have added a root.js file to combine all reducers.

* /styled_components -> This folder is just for generic styled-components.

## Deployment

This application has been deployed on Heroku, you can find it here `https://truelayer-t.herokuapp.com/`

## If I had more time

### More tests

* I would dedicate some time to create automation tests

* I would dedicate some time to create styled-component tests


### New functionalities

* TODO tags   - e.g "In progress", "Done"
* TODO search - Capability to search a todo by name or description
* TODO order  - Order list by name or creation date
* SUB TODOS   - Capability to add sub todos to a todo
