---
date: '2022-11-22 11:26:47'
title: 'Default arguments and values in JS'
category: 'JavaScript'
tags: ['basic', 'function', 'javascript']
summary: "What is the default arguments of the javascript function"
emoji: '🔬'
---

# print arguments of the function

```js
function ex (success, error, options = {}) {
  console.log({ success, error, options })
}
```

```js
ex(1)                 // Object { "success": 1, "error": undefined, "options": {} }
ex(undefined)         // Object { "success": undefined, "error": undefined, "options": {} }
ex(1, 2, undefined)   // Object { "success": 1, "error": 2, "options": {} }
ex(NaN, '', [])      // Object { "success": NaN, "error": '', "options": [] }
ex(false, null, 0)  // Object { "success": false, "error": null, "options": 0 }
```
