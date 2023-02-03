---
date: '2022-11-16 17:27:55'
title: 'TypeScript Note'
category: 'Basic'
tags: ['typescript', 'basic', 'type', 'generics', 'class', 'interface']
summary: "Let's start typescript"
emoji: '🗂'
---

<small><em>last modified: 2022-11-25</em></small>

# Let's start TypeScript

> _I wrote in the hope that I can find the answer to the confusing situation while writing the TypeScript code with [this course](https://nomadcoders.co/typescript-for-beginners)._

- TypeScript Playground: [https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)

# Types Declaration

## 1. Basic Concrete Type

### Strings, Numbers, and Booleans [JS, TS]

```ts
type TheType = string | number

let a = 'hello'
let b = false

a = 123       // ERROR: Type 'number' is not assignable to type 'string'.
a: TheType = 123    // ERROR: 'TheType' only refers to a type, but is being used as a value here.
```

### Array [JS, TS]

```ts
let c = [1, 2, 3]

c.push("4")   // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
```

### Object [JS, TS]

```ts
type Words = {
 [key: string]: string
}

let dict: Words = {
 "food": "potato"
}
```

### Optional [TS only]

```ts {numberLines}
type NewPlayer = {
  age?: string | number // === string | number | undefined
}

const numeric = null // const numeric: null
```

```ts {numberLines:6}
const player: {
  name: string,
  age?: number
} = {
  name: 'Type'
}

if (player.age < 10) { // ERROR: Object is possibly 'undefined'.
 // ....
}
```

### Read-Only [TS only]

The `readonly` keyword work only in typescript and no exist in JS.

```ts
// TS
const numbers: readonly number[] = [1, 2]
numbers.push(3) // ERROR: Property 'push' does not exist on type 'readonly number[]'.
```

So, before compiling, `numbers.push(3)` is error code, after compiling, seems like normal JS code.

```js
// JS
const numbers = [1, 2]
```

```ts
type PlayerName = string
type PlayerAge = number
type Player = {
  readonly name: PlayerName,
  age?: PlayerAge
}

const playerMaker = (name: string): Player => ({ name })

const newb = playerMaker('newb')
newb.name = 'newbie' // ERROR: Cannot assign to 'name' because it is a read-only property.
```

### Tuple [TS only]

```ts
const user: [string, number, boolean] = ['name', 0, false]
user[0] = 1 // ERROR: Type 'number' is not assignable to type 'string'.
```

### Type 'any'

Type `any` means escaping the TS world

```ts
const x: any[] = [1, 2, 3, 4]
const y: any = true

console.log(x + y) // No Problem because of `any`!
```

### Type 'unknown'

```ts
let z: unknown
// let z_ = z + 1  // ERROR: 개체가 '알 수 없는' 형식입니다.
// z.toUpperCase() // ERROR: 개체가 '알 수 없는' 형식입니다.

if (typeof z === 'number') { // We have to check with typeof
  let z_ = z + 1       // before using a variable of type `unknown`
}
if (typeof z === 'string') {
  let z_ = z.toUpperCase()
}
```

### Type 'void'

Type `void` means empty: no return value in function

```ts
function hello() { // function hello(): void
  console.log(z)
}
```

### Type 'never'

When a function never return, using like below.

```ts {numberLines}
function neverHello(): never {
  throw new Error('never function')
}

function GoodHello(name: string | number) {
  if (typeof name === 'string') {
    name // (parameter) name: string
  } else if (typeof name === 'number') {
    name // (parameter) name: number
  } else {
    // never ever run
    name // (parameter) name: never
  }
}
```

```ts {numberLines:15}
function helloAgain(): never {  // ERROR: 'never'를 반환하는 함수에는 연결 가능한 끝점이 있을 수 없습니다.
  return 'hello' // ERROR: 'string' 형식은 'never' 형식에 할당할 수 없습니다.
}
```

## 2. Function in Typescript

### Call Signatures
>
> 참고: <https://stackoverflow.com/questions/32043487/difference-between-call-signature-and-function-type>

```ts
type AddType = (a: number, b: number) => number;
const add: AddType = (a, b) => a + b;
```

### Overloading

Overloading happens when a function has multiple and different call signatures.

```ts
type SumType = {
  (a: number, b: number): number
  (a: number, b: string): number
}

const sum: SumType = (a, b) => {
  if (typeof b === "string") return a
  return a + b
}
```

For example, in Next.js, using Route like below

```ts
Router.push("/home")
// OR
Router.push({
  path: "/home",
  ...options
}) 
```

And that `Router` might be like this,

```ts  
type ConfigType = {
  path: string,
  state: object
}

type PushType = {
  (path: string); void
  (config: ConfigType): void
}

const push: PushType = (config) => {
  if (typeof config === "string") {
    // run code without return ...
    console.log(config)
  }
  else {
    // available config.path ...
    console.log(config.path, config.state)
  }
} 

```

```ts
type AdditionalType = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
}

const additional: AdditionalType = (a, b, c?: number) => {
  if(c)  return a + b + c
  return a + b
}
```

### Generics

Generics using type placeholder and this generating call signature on demand.

> "polymorphism" : ploy-(several, multi) + morpho-(form, structure) 다형성

- example1

```ts
// First, NOT GOOD usage concrete type
type SuperPrintType = {
  (arr: number[]): void
  (arr: boolean[]): void
  (arr: string[]): void
  (arr: (number|boolean)[]): void // 🤔 It's NOT GOOD answer
}

const superPrint: SuperPrintType = (arr) => {
  arr.forEach(i => console.log(i))
}

superPrint([1, 2, 3])
superPrint([true, false, true])
superPrint(["1", "2", "3"]) // 🤔 It's NOT GOOD answer
superPrint(["1", 2, false, true]) // 🤔 It's NOT GOOD answer // ERROR: 이 호출과 일치하는 오버로드가 없습니다.

// => Using Generic type
// type SuperPrintGeneric = <TypePlaceholder>(arr: TypePlaceholder[]) => TypePlaceholder
// const superPrintWithGeneric: SuperPrintGeneric = (arr) => arr[0]
function superPrintWithGeneric<T>(a: T[]) {
  return a[0]
}

const A = superPrintWithGeneric([1, 2, 3])              // NO ERROR // const A: number
const B = superPrintWithGeneric([true, false, true])    // NO ERROR // const B: boolean
const C = superPrintWithGeneric(["1", "2", "3"])        // NO ERROR // const C: string
const D = superPrintWithGeneric(["1", 2, false, true])  // NO ERROR // const D: string | number | boolean
```

- example2

```ts
type PlayUser<T> = {
  name: string
  extraInfo: T
}

type NicoExtra = {
  favFood: string
}
type NicoPlayer = PlayUser<NicoExtra>

const nico: NicoPlayer = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi"
  }
}

const lynn: PlayUser<null> = {
  name: "lynn",
  extraInfo: null
}
```

- example3

```ts
type arrNumbers = Array<number> // === number[], using interface Array<T>
```

## 3. Type Checking with Classes and Interface

### Classes

- constructor in class
In variable in constructor parameter, It is initialize with declare class.

```ts
class NoInitialize {
 private x: string
}

class WithInitialize {
 constructor (
  private x: string
 ) {}
}
```

So, we get the code below after compiling `NoInitialize` and `WithInitialize` to JS

```js
"use strict";
class NoInitialize {
}
class WithInitialize {
    constructor(x) {
        this.x = x;
    }
}
```

- abstract class (추상 클래스)
After compile to JS, abstract class is just a class. Then we can create on instance of 'User' after compiled. Then, line 17 and 20 show error like below.

```ts{18,21}
// Example1
abstract class User { // L1
 constructor(          // private vs. protected vs. public
  private firstName: string,  // only use in this class
  private lastName: string,
  public nickname: string,   // can access in outside of the class
  public readonly lev: string , // can read but cannot accessible property in outside of the class
  protected point: number    // can access sub class too. but cannot accessible in outside of the class
 ) {}
 
 abstract getPoint(): void
 
 protected getFullName() {
  return `${this.firstName} ${this.lastName}`
 }
}

const nico = new User("nico", "las", "니꼬") // ERROR: Cannot create on instance of an abstract class.

// > private keyword only protect in ts code
nico.firstName // ERROR: Property 'firstName' is private and only accessible within class 'User'
```

In `User` class above, nickname property is public only

```ts {numberLines:18}
nico.nickname  // ✅
```

```ts{5}
// Example2
class Player extends User {
 getPoint() {
  // `private` property even unaccessible within subclass of 'User'
  console.log(this.firstName) // ERROR: Property 'firstName' is private and only accessible within class 'User'.
  // `protected` property won't access from out of class neither, but it will be access in subclass. 
  console.log(this.point)
 }
}
```

### Interfaces

1. type declaration

```ts
// > with type,
type Team = "red" | "blue" | "yellow"
type Health = 1 | 5 | 10

type PlayerCharacter = {
 nickname: string,
 team: Team,
 health: Health
}

const PC: PlayerCharacter = {
 nickname: "nico",
 team: "red",
 health: 10
}
```

```ts
// > with interface
//  => another way to explain object shape
// : type can explain to all of type

// : interface is only use one purpose - to explain shape of object or class
// interface Hello = string // ❌
interface PlayerCharacter {
 nickname: string
 team: Team
 health: Health
}

// can use same like type in object
const PC: PlayerCharacter = {
 nickname: "nico",
 team: "red",
 health: 10
}
```

2. type extension

```ts
// > with type,
type User = {
 name: string
}

type Player = User & {
 team: "blue",
 health: 10
}

const nico: Player = {
 name: "nico"
}
```

```ts
// > with interface
interface User {
 name: string
}

interface Player extends User {
 team: "blue",
 health: 10
}

const nico: Player = {
 name: "nico"
}

nico.name = "lalalal"
```

```ts
// also interface can stack of same interfaces
interface User {
 name: string
}
interface User {
 lastName: string
}
interface User {
 health: number
}

const nico: User = {
 name: "nico"
 lastName: "",
 health: 10
}
```

If change abstract class to interface,

```ts
abstract class User {
 constructor(
  protected firstName: string,
  protected lastName: string,
 ) {}
 abstract sayHi(name: string): string
 abstract fullName(): string
}
```

All of inherited properties have to be 'public'.

```ts{14-15}
interface User { //L1
 firstName: string,
 lastName: string,
 sayHi(name: string): string
 fullName(): string
}
interface Human {
 health: number
}
class NewPlayer implements User, Human {
 constructor(
  // ERROR: Class 'Player' incorrectly implements interface 'User'. Property 'firstName' is private in type 'Player' but not in type 'User'.
  // They have to be public
  private firstName: string,
  private lastName: string,
 )

 ...
}
```

```ts
// HAVE TO BE
class NewPlayer implements User, Human { //L10
 constructor(
  public firstName: string,
  public lastName: string,
  public heath: number
 )
 
 fullName() {
  return `${this.firstName} ${this.lastName}`
 }
 
 sayHi(name: string) {
  return `Hello ${name}! My name is ${this.fullName()}`
 }
}
```

### Generics in Classes or Interfaces

<https://www.typescriptlang.org/docs/handbook/2/generics.html>

```ts
interface SStorage<T> {
 [key: string]: T
}

class LocalStorage<T> {
 private storage: SStorage<T> = {}
 set(key: string, value: T) { 
  this.storage[key] = value
 }
 remove(key: string) {
  delete this.storage[key]
 }
 get(key: string): T {
  return this.storage[key]
 }
 clear() {
  this.storage = {}
 }
}

const stringsStorage = new LocalStorage<string>()
// stringsStorage.set(key: string, value: string)
// stringsStorage.get(key: string): string

const booleansStorage = new LocalStorage<boolean()
// booleansStorage.set(key: string, value: boolean)
// booleansStorage.get(key: string): boolean
```

# Docs

- TypeScript Documentation
  - ENG : [https://www.typescriptlang.org/docs/handbook/2/basic-types.html](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
  - KOR: [https://www.typescriptlang.org/ko/docs/handbook/2/basic-types.html](https://www.typescriptlang.org/ko/docs/handbook/2/basic-types.html)
- TypeScript Deep Dive
  - [https://radlohead.gitbook.io/typescript-deep-dive/](https://radlohead.gitbook.io/typescript-deep-dive/)
