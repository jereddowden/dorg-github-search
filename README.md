# GitHub Search
## The Challenge
Utilizing the [GitHub REST API](https://developer.github.com/v3/), create a web application in either AngularJS (1.X) or Angular 6 that does the following:

* Provides a search bar where users can search for GitHub users by username
* Display in a tabbed format:
    * Details on the user (name, profile image, username)
    * A list of all repositories (including a link to open the repository page)
    * A list of all starred repositories

## Running the project
* Clone the repo ``git clone git@github.com:jereddowden/dorg-github-search.git``
* CD into the directory ``cd dorg-github-search``
* Install dependencies with [npm](https://nodejs.org) ``npm i``
* Serve the app using ``ng serve``
* Run unit tests on [http://localhost:9876](http://localhost:9876) using ``ng test``
    * If you experience issues with the above command(s), install Angular CLI ``npm i @angular/cli``
* The app should now be running on [http://localhost:4200](http://localhost:4200)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
