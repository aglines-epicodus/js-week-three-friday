# Twin Peaks Character Roster

#### An Epicodus independent project

#### By Andrew Glines

## Description

This app will allow users to view, create, edit, and delete characters from the popular television and online streaming program, "Twin Peaks".

### Specs
| Behavior | User Input | Web Output |
| -------- | ---------- | ---------- |
| The app will show the intro page | User navigates to http://localhost:4200 | Intro page is shown |
| The app will show current members | User navigates to character list in top nav bar | All current characters will be displayed |
| The app will show character details and description | User clicks on a character's name | The app will show that character's details |
| An admin can create a new character | User clicks on Admin in top nav bar, enters info, then clicks Update | New character will be displayed |
| An admin can edit a character | User clicks on Admin in top nav bar, enters info, then clicks Update | Edited info of character will be displayed |
| An admin can delete a character | User clicks on Admin in top nav bar, then clicks Delete | Character will be deleted |


### Setup

- Run `npm install` and `bower install`.
- Install Firebase - `npm install angularfire2@4.0.0-rc.0 firebase --save`
- Run `npm install promise-polyfill --save-exact`
- You will need a Firebase API key, saved to a file called api-keys.ts, in this format:

  ```typescript
  export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };```
- Run `ng serve` for a dev server. Navigate to http://localhost:4200/ in a web browser to view the project.


# JsWeekThreeFriday

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Support and contact details

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.

## Technologies Used
* Angular
* Firebase
* HTML
* Bootstrap

### License
This software is licensed under the MIT license.

Copyright (c) 2017 Andrew Glines and Epicodus
