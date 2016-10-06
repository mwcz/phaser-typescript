# phaser-typescript

A skeleton project for writing Phaser games in TypeScript.

## Setup

    git clone git@github.com:mwcz/phaser-typescript.git
    cd phaser-typescript
    npm install
    npm run watch

## dev commands

Start a development environment with automatic rebuilding and BrowserSync:

    npm run watch

BrowserSync will automatically reload your browser when files
change.  No more manual refreshing!  You can open the game in multiple browsers
and they will all be refreshed together.  Clicks will also be synchronized so
you can test the game in several browsers at the same time.

To create a build in the `build/` directory:

    npm run build

## Working with TypeScript

The type definitions of external libraries are managed with `typings`.  Phaser
and Lodash\s type definitions are included as examples, see typings.json.  Try
`typings search` to find type definitions for other libraries.
