#!/bin/bash

# If using a different setup (i.e. the root folder is 'projects'), change this accordingly
ROOT_SOURCE_FOLDER="src"

function checkFocusedTests {
  echo "Validating that no 'fdescribe' occurrences are present in tests..."
  results=$(grep -rl --include "*.spec.ts" fdescribe ${ROOT_SOURCE_FOLDER} || true)
  if [[ -z "$results" ]]; then
    echo "Success: No 'fdescribe' occurrences detected in tests."
  else
    echo "ERROR: Detected 'fdescribe' occurrence(s) in these files:"
    echo "$results"
    exit 1
  fi
}

function runPrettier {
  echo "Validating code formatting (using prettier)"
  ./node_modules/.bin/prettier --config ./.prettierrc --list-different "${ROOT_SOURCE_FOLDER}/**/*{.ts,.js,.json,.scss}" 2>&1 |  tee prettier.log
  results=$(tail -1 prettier.log | grep ${ROOT_SOURCE_FOLDER} || true)
  if [[ -z "$results" ]]; then
    echo "Success: Codebase has been prettified correctly"
    rm prettier.log
  else
    echo "ERROR: Codebase not prettified. Aborting. Please format your code"
    rm prettier.log
    exit 1
  fi
}

function runTests {
  echo "Running unit tests and code coverage"
  exec 5>&1
  output=$(yarn test --code-coverage --watch=false --browsers=ChromeHeadless)
  coverage=$(echo $output | grep -i "does not meet global threshold" || true)
  if [[ -n "$coverage" ]]; then
    echo "Error: Tests did not meet coverage expectations"
    exit 1
  fi
}

echo "--------------------------------------"
echo "Starting build.sh validation script..."
checkFocusedTests
echo "Updating dependencies"
yarn
echo "Validating code linting"
yarn lint
echo "Validating formatting"
runPrettier
echo "Running tests"
runTests
echo "Done, all checks passed."
echo "--------------------------------------"
