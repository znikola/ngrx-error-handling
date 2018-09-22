# TODO:

1. Flatten store's structure

# NGRX Error Handling

A showcase app for handling **silent** errors that can occur in ngrx's effects.

Clicking on the `Get Vehicle` button (with the default value in the corresponding input field) will throw a 404 error, which is caught and logged to the console, despite the fact that `vehicle.reducer.ts` doesn't react to `LoadVehicleFail` action.

Clicking on the `Cause error` button will throw a plain JavaScript `Error`, which should be caught by a custom `ErrorHandler`.

## Mechanism and the idea

Before we take a look at all available features, we are going to explain the mechanism used.

### `ErrorAction` and `GlobalError`

`ErrorAction` extends ngrx's `Action` and adds a property of type `GlobalError`. By doing this, failure actions can choose which class to extend, effectively opting in or out of the global error handling mechanism. (see also [how to skip error hanlding](#skip-global-error-handling))

### `GlobalErrorHandlingEffect`

`GlobalErrorHandlingEffect` is located in `global-error-handling.effect.ts` file. It is subscribed to the ngrx's stream of actions, and handles failure actions by filtering actions with `globalError` and `globalError.error` objects.

The advantages of using an effect over a reducer or meta reducer are:

1. In reducers, we need to define a slice of state, whereas in effect we don't
2. Dependenct injection - we can inject services into effects
3. As error handling is a side effect, it's more natural to do it in an effect

### `GlobalErrorHandler`

`GlobalErrorHandler` (located in `global-error-handler.ts` file) leverages [Angular's built-in](https://angular.io/api/core/ErrorHandler#example) mechanism for handling JavaScript's `Error`s.

It `console.log`s errors and calls a service that sends them to the server.

### Flow

There are two key flows:

1. A failure action is dispatched -> `global-error-handling.effect.ts` -> `global-error-handler.ts` -> `error-reporting.service.ts`

2. A JavaScript `Error` is thrown -> `global-error-handler.ts` -> `error-reporting.service.ts`

## Features

### Handle silent failures

Silent failures will happen when a failure action is dispatched (usually from an effect) to which no reducer reacts. Hence, the failure will fail silently.

To test this, just comment out `GlobalErrorHandlingModule` from `app.module.ts`' `imports` array.

### Custom error handling per action

Nothing has changed, and it's still posible to handle specific failure actions, like you are used to.

There's only one thing to decide in this case: do you also want have the global error handling enabled for that particular action, i.e. send it to the server.

In case you don't want it, there are two posible ways to skip it:

1. Instead of extending `ErrorAction`, use regular `Action` from ngrx
2. See [this](#skip-global-error-handling)

### Skip global error handling

There might be a case when we want to skip the error handling for a certain action. For these cases use an optional flag `skipErrorHandling` available on `GlobalError` object.

The check is performed in `global-error-handling.effect.ts`, and if the `skipErrorHandling` is raised, the `GlobalErrorHandler` won't be called.

## Install

To install, run `yarn install` or `npm install`.

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).
