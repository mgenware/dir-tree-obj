# dir-tree-obj

[![Build Status](https://github.com/mgenware/dir-tree-obj/workflows/Build/badge.svg)](https://github.com/mgenware/dir-tree-obj/actions)
[![npm version](https://img.shields.io/npm/v/dir-tree-obj.svg?style=flat-square)](https://npmjs.com/package/dir-tree-obj)
[![Node.js Version](http://img.shields.io/node/v/dir-tree-obj.svg?style=flat-square)](https://nodejs.org/en/)

Create a JavaScript object representing the structure of a directory

## Installation

```sh
yarn add dir-tree-obj
```

## Usage

Assume a directory named `dir` with the following structure:

```
├── a.txt
├── b.txt
└── sub
    ├── a.js
    ├── a.txt
    └── b.txt
```

```ts
import dirTreeObj from 'dir-tree-obj';

dirTreeObj('./dir');
/**
 * Prints: {
    '.': ['a.txt', 'b.txt'],
    sub: {
      '.': ['a.js', 'a.txt', 'b.txt'],
    },
  }
 */
```

Note: file names are always sorted.
