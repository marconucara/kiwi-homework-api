## Setup

You should use node 10.13.0 and yarn 1.12.1 o npm 6.4.1, if you use nvm just run:

`nvm use`

Then:

`yarn` or `npm i`


## Run the project

If default HTTP port 8888 is fine, simply run:

`npm start`

Or pass a custom port:

`NODE_PORT=9999 npm start`

Server accepts GET request at this route:

`http://host:[NODE_PORT || 8888]/[digits]`

e.g. `http://localhost:8888/3838`

It will return a JSON with an array of hints.

You may also run [web client](https://github.com/marconucara/kiwi-homework-web) or [native app client](https://github.com/marconucara/kiwi-homework-native)

This api use real english words from npm package [an-array-of-english-words](https://www.npmjs.com/package/an-array-of-english-words)


## Test

`npm test`
