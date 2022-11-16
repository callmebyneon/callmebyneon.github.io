---
date: '2022-11-16 17:27:27'
title: 'Let\'s start typescript'
category: 'Study'
tags: ['typescript', 'basic']
summary: ''
thumbnail: './default.png'
---

# Let's start typescript

TypeScript Playground
- https://www.typescriptlang.org/play

## Types of TS
### basic types - optional + string, number, array, object, and tuple type
```ts
const type = { name: 'TYPE' }

type.name = 'false'

console.log(JSON.stringify(type, null, 2)) // print json

type T = string | number

let a = 'hello'
let b = false
let c = [1, 2, 3]

a = 123       // ERROR: 'number' 형식은 'string' 형식에 할당할 수 없습니다.
a: T = 123    // ERROR: 'T'는(는) 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.

c.push("4")   // ERROR: 'string' 형식의 인수는 'number' 형식의 매개 변수에 할당될 수 없습니다.
```

```ts
const player: {
  name: string,
  age?: number
} = {
  name: 'Type'
}

if (player.age && player.age < 10) {
// if (player.age < 10) { // 개체가 'undefined'인 것 같습니다.

}

type PlayerName = string
type PlayerAge = number
type Player = {
  readonly name: PlayerName,
  age?: PlayerAge
}
```

```ts
function divide(a: number, b: number) {
  return a / b
}

const playerMaker = (name: string): Player => ({ name })

const newb = playerMaker('newb')
// newb.name = 'newbie' // ERROR: 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.

const numbers: readonly number[] = [1, 2]
// numbers.push(3) // ERROR: 'readonly number[]' 형식에 'push' 속성이 없습니다.
// Q. Does the readonly from Typescript compile to JavaScript?
// => A. No
// (JS) after compile => const numbers =  [1, 2]; numbers.push(3); => numbers = [1, 2, 3]
// `readonly` only work in TS code and vanishing after compiling (no exit in JS)
```

- Tuple
```ts
const user: [string, number, boolean] = ['name', 0, false]
// user[0] = 1 // ERROR: 'number' 형식은 'string' 형식에 할당할 수 없습니다.
```

- Optional
```ts
type NewPlayer = {
  age?: string | number // === string | number | undefined
}

const numeric = null // const numeric: null


type Words = {
	[key: string]: string
}

let dict: Words = {
	"food": "potato"
}
```

### basic types - any, unknown, void, never
- `any` : escape the TS world
```ts
const x: any[] = [1, 2, 3, 4]
const y: any = true

console.log(x + y) // No Problem because of `any`!
```

- `unknown`
```ts
let z: unknown
// let z_ = z + 1	 // ERROR: 개체가 '알 수 없는' 형식입니다.
// z.toUpperCase() // ERROR: 개체가 '알 수 없는' 형식입니다.

if (typeof z === 'number') {	// We have to check with typeof
  let z_ = z + 1							// before using a variable of type `unknown`
}
if (typeof z === 'string') {
  let z_ = z.toUpperCase()
}
```

- `void` : empty, no return value in function
```ts
function hello() { // function hello(): void
  console.log(z)
}
```

- `never` : when a function never return
```ts
function helloAgain(): never {  // ERROR: 'never'를 반환하는 함수에는 연결 가능한 끝점이 있을 수 없습니다.
  return 'hello' // ERROR: 'string' 형식은 'never' 형식에 할당할 수 없습니다.
}
```

```ts
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

### Function in Typescript

- call signature
  - 참고: https://stackoverflow.com/questions/32043487/difference-between-call-signature-and-function-type
```ts
type AddType = (a: number, b: number) => number;
const add: AddType = (a, b) => a + b;
```

- overloading : happens when a function has multiple and different call signatures
```ts
type SumType = {
  (a: number, b: number): number
  (a: number, b: string): number
}
// const sum: Sum = (a, b) => a + b; // return string | number
const sum: SumType = (a, b) => {
  if (typeof b === "string") return a
  return a + b
}
```

```ts
// in Next.js, using Route like below
Router.push("/home")
// OR
Router.push({
  path: "/home",
  ...options
}) 


// look like =>  
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


- generic : using type placeholder and this generating call signature on demand

> "polymorphism" : ploy-(several, multi) + morpho-(form, structure) 다형성

```ts
// example1
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

// Using Generic type
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

```ts
// example2
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

```ts
// example3
type arrNumbers = Array<number> // === number[], using interface Array<T>
```



### Classes and Interface

- class
  - after compile to JS, abstract class is just a class
```ts
abstract class User {
	constructor(										// private vs. protected vs. public
		private firstName: string,		// only use in this class
		private lastName: string,
		public nickname: string,			// can access in outside of the class
		public readonly lev: string ,	// can read but cannot accessible property in outside of the class
		protected point: number				// can access sub class too. but cannot accessible in outside of the class
	) {}
	
	abstract getPoint(): void
	
	protected getFullName() {
		return `${this.firstName} ${this.lastName}`
	}
}

// const nico = new User("nico", "las", "니꼬")	// w/ abstract class, ERROR: Cannot create on instance of an abstract class.

// > private keyword only protect in ts code
// nico.firstName // ERROR: Property 'firstName' is private and only accessible within class 'User'

class Player extends User {
	getPoint() {
		console.log(this.point)
	}
}

const nico = new Player("nico", "las", "니꼬")

nico.nickname
```


- interface
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
// 	=> another way to explain object shape
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

```ts
// > abstract class => interface
//abstract class User {
//	constructor(
//		protected firstName: string,
//		protected lastName: string,
//	) {}
//	abstract sayHi(name: string): string
//	abstract fullName(): string
//}
interface User {
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
		// private firstName: string,
		// private lastName: string
		// ERROR: Class 'Player' incorrectly implements interface 'User'. Property 'firstName' is private in type 'Player' but not in type 'User'.
		// They have to be public
		
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

- generic in class/interface
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


<!-- 
/// Set TS configuration
// > Lib configuration


// > Declaration files
 -->
