# Mars Rovers

Simple simulation of mars-rovers communication and movement using a REST APIs

## Features

- REST API service built on node/express
- Uses Kue for managing jobs
- Uses cluster for parallel processing
- Uses intelligent caching for serving numbers already calculated
- Ability to choose between 3 different algorithms

## Installing the app

1. Install node.js downloading the binnaries from the node.js website
2. Run `npm install`
3. To run tests install mocha using: `npm install -g mocha`

## Using the app

`gulp` or `gulp server`: start the node.js server with nodemon, so the app restarts when files change

`gulp unit-tests`: run unit tests

`gulp watch:unit-tests`: watch unit tests for code changes

`gulp integration-tests`: to run the integration tests. First start the server using `gulp server` command

`gulp watch:integration-tests`: watch integration tests for code changes

## Comments

* The scafolding of the application was done using node-swagger
* Tests are superficial and a production application would need much more edge scenarios that could never crash de server

## Bugs and limitations

* Pagination is not implemented
* Does not check if rovers overlap while moving
* For high sets the system should have pagination, otherwise responses are too big
* Error management does not cover all the app scenarios, its only basic syntatic validation
* The tests scripts should have a coverage tests
* Integration tests fail when the gulp watch restarts the server, in the future they shoul detect if the server is ready to accept requests or start the server
* Integration tests assume values are in cache, they should be rewriten for cached and non-cached values