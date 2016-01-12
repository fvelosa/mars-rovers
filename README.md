# Mars Rovers

Simple simulation of mars-rovers communication and movement using a REST APIs

## Features

- REST API service built on node/express
- API written using swagger editor
- Uses swagger-express-mw to generate API endpoints and controllers
- Uses gulp
- Has simple integration and unit-tests

## Installing the app

1. Install node.js downloading the binnaries from the node.js website
2. Run `npm install`
3. To run tests install mocha using: `npm install -g mocha`
4. To view the REST and test the API using swagger-ui install swagger using: `npm install -g swagger`

## Using the app

`gulp` or `gulp server`: start the node.js server with nodemon, so the app restarts when files change

`gulp unit-tests`: run unit tests

`gulp watch:unit-tests`: watch unit tests for code changes

`gulp integration-tests`: to run the integration tests. First start the server using `gulp server` command

`gulp watch:integration-tests`: watch integration tests for code changes

`swagger project edit`: to view and test the REST API using swagger

## Comments

* The scafolding of the application was done using node-swagger
* Tests are superficial and a production application would need much more edge scenarios that could never crash de server

## Bugs and limitations

* Not all endpoints are implemented, only the main ones for testing the app
* Rovers move immediatly after a new route is inserted
* Does not check if rovers overlap while moving
* For high sets the system should have pagination, otherwise responses are too big
* Error management does not cover all the app scenarios, its only basic syntatic validation
* The tests scripts should have a coverage tests
* Integration tests fail when the gulp watch restarts the server, in the future they shoul detect if the server is ready to accept requests or start the server
* Integration tests assume cache is empty, they should be rewriten for cached and non-cached values
* The system does not have persistency, all values are in memmory