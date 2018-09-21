# TODO:

1. Test production build
2. Extract stacktrace from the error in the effect
3. Write some unit tests
4. Flatten store's structure

# NGRX Error Handling

A showcase app for handling **silent** errors that can occur in ngrx's effects.

Clicking on the `Get Vehicle` button (with the default value in the corresponding input field) will throw a 404 error, which is caught and logged to the console, despite the fact that `vehicle.reducer.ts` doesn't react to `LoadVehicleFail` action.

Clicking on the `Cause error` button will throw a plain JavaScript `Error`, which should be caught by a custom `ErrorHandler`.

## Install

To install, run `yarn install` or `npm install`.

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).
