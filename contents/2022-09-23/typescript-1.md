---
date: '2022-08-31'
title: 'Typescript: 1'
categories: ['Typescript']
summary: 'About Typescript'
thumbnail: './default.png'
---

## Type of Typescript
### Javascript Primitive type
* JS: https://developer.mozilla.org/ko/docs/Glossary/Primitive
* TS: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
```ts
// string
let str: string = 'string';

// number
let num: number = 10;

// boolean
let bool: boolean = true;

// undefined
let und: string | undefined = undefined;

// null
let nullable: number | null = null;

//* `bigint` and `symbol` is less common primitives
// => https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#less-common-primitives
```

### Javascript Reference type
* JS: https://developer.mozilla.org/en-US/docs/Glossary/Reference
* TS: https://www.typescriptlang.org/docs/handbook/2/objects.html
```ts
// object
let obj: { x: number, y?: number } = { x: 1 };

type NumberObj = typeof obj;
let numberObj: NumberObj;

// array
let numbers: number[] = [0, 1, 23, 100, 99, 0.5];
```

### Other Type Declaration
```ts
// Narrowing
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html
let nullable: number | null;
```

```ts
// Functions
// https://www.typescriptlang.org/docs/handbook/2/functions.html
function FnAdd(args: number[]): number {
  return args.reduce((a, b) => a + b, 0);
}
```

```ts
// type
type ComponentProps = {
  className?: string
  children?: ReactNode
}

// interface
interface ContentProps {
  html: string
}
```


## Typescript Basic
### The Basic Type Checking
* origin: 
  - en: https://www.typescriptlang.org/docs/handbook/2/basic-types.html
  - ko: https://www.typescriptlang.org/ko/docs/handbook/2/basic-types.html

