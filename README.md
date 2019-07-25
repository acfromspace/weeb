@acfromspace/weeb

[![npm (scoped)](https://img.shields.io/npm/v/@acfromspace/weeb.svg)](https://github.com/acfromspace/weeb)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@acfromspace/weeb.svg)](https://github.com/acfromspace/weeb)

Changes the given string to their cringey Japanese counterpart.

Future developments include more phrases and gestures!

## Install

```
npm i @acfromspace/weeb

OR

yarn add @acfromspace/weeb
```

## Usage

```js
const weeb = require("@acfromspace/weeb");

weeb("what are you doing?!");
//=> "NANI are you doing?!"

weeb(420);
//=> Uncaught TypeError: これは文字列ではありません!
```

## Index

Showcasing the specific changes to a string given.

- `what` => `NANI`
- More to come...