# Changelog

## [2.0.2] - 2022-08-28

### Changed

- Fixed TypeScript type checking for `Array` at Scope.

## [2.0.1] - 2022-07-13

### Changed

- Fixed TypeScript type checking for `boolean` at Scope.

## [2.0.0] - 2022-06-13

### Changed

- Function `createMultiGlobalStates` renamed to  `createMultiGlobalScopes`.
- Function `createGlobalState` renamed to  `createGlobalScope`.
- Function `useGlobalState` renamed to  `useGlobalScope`.
- Function `withGlobalState` renamed to  `withGlobalScope`.
- Class `new GlobalScope()` should be used for definition inside nested scopes instead of function `Scope`.
- Class `new GlobalReducer()` should be used for definition inside nested scopes.
- `useGlobalScope` returns `Scope` object

### Added

- Added functions `createGlobalState`, `createGlobalReducer`, `useGlobalState`, `useGlobalReducer`.
- Added `Scope` object;


## [1.2.0] - 2022-06-13

### Added

- Added function `createMultiGlobalStates` for creating multi and/or nested scopes.
- Added otional param `useScope` for `createGlobalState` that allows to have references through scopes.

## [1.1.0] - 2022-05-12

### Added

- Added function `withGlobalState`. It allows to use Global State at Class Components.

## [1.0.0] - 2022-05-03

### Added

- Created functions `createGlobalState` and `useGlobalState` which allows to use Global State at Function Components.
