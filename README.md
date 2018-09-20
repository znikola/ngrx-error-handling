# TODO:

1. Test production build
2. Extract stacktrace from the error in the effect
3. Inject a store in GlobalErrorHandlingModule, where the store wasn't actually defined?

# Ngrx Error Handling

A showcase app for handling errors that can occur in ngrx's effects.

Clicking on `Get Vehicle` will throw 404 error, that's caught and logged to the console, despite the fact that `vehicle.reducer.ts` doesn't react to `LoadVehicleFail` action.

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).
