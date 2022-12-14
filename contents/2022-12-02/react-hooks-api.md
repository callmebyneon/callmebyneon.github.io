---
date: '2022-12-02 15:42:38'
title: 'React Hooks API'
category: 'React'
tags: ['basic', 'hooks api']
summary: 'Hooks API Reference - with examples of how and when to use these hooks'
emoji: 'π'
---

<small><em>last modified: 2023-01-03</em></small>

# About React Hook

> Hookμ React 16.8μμ μλ‘ μΆκ°λ κ°λμλλ€. Hookμ ν΅ν΄ classλ₯Ό μμ±νμ§ μκ³ λ stateμ κ°μ React κΈ°λ₯λ€μ μ¬μ©ν  μ μμ΅λλ€.
> [Introducing Hooks - React π](https://reactjs.org/docs/hooks-intro.html)

κ³΅μ λ¬Έμμμλ μμ κ°μ΄ Hookμ μκ°νκ³  μμ΅λλ€. λ§νμλ©΄ Reactκ° ν΄λμ€ ν μ»΄ν¬λνΈμμ ν¨μν μ»΄ν¬λνΈ μ¬μ©μ κΆμ₯νλ©΄μ ν΄λμ€ ν μ»΄ν¬λνΈμμ μ¬μ©λμλ Reactμ κΈ°λ₯λ€μ class μμ΄ ν¨μν μ»΄ν¬λνΈμμ React κΈ°λ₯λ€μ μ¬μ©ν  μ μλλ‘ λμμ€λλ€.

μ¬μ©μκ° μ»€μ€ν νμ λ§λ€μ΄ μ¬μ©ν  μλ μμ§λ§ Reactμλ κΈ°λ³Έμ μΌλ‘ λ΄μ₯λμ΄ μλ Hookλ€μ΄ μμ΅λλ€. μ΄ νλ€μ ν¨μν μ»΄ν¬λνΈ νΉμ μ»€μ€ν νμ μ΅μμ λ λ²¨(at the top level)μμλ§ μ¬μ©λμ΄μΌ ν©λλ€. μ½λ°± λ΄λΆλ λ£¨ν λ΄λΆμμ μ¬λ¬ λ² νΉμ μ‘°κ±΄λΆλ‘ νΈμΆν  μ μμ΅λλ€.

[![react: Hooks - https://beta.reactjs.org/apis/react](./react-hooks-api-0.png)](https://beta.reactjs.org/apis/react)

μ λ¬Έμμμλ λ΄μ₯λ Hooks APIλ₯Ό λ€μκ³Ό κ°μ΄ λΆλ₯νμ¬ μ€λͺνκ³  μμ΅λλ€. μ΄λ―Έμ§λ₯Ό ν΄λ¦­νλ©΄ ν΄λΉ νμ΄μ§λ‘ μ΄λν©λλ€.

- [State Hooks](https://beta.reactjs.org/apis/react#state-hooks)
  - `useState`λ μ¬μ©μκ° μ§μ  μλ°μ΄νΈν  μ μλ μν λ³μλ₯Ό μ μν©λλ€.
  - `useReducer`λ reducer function λ΄λΆ μλ°μ΄νΈ λ‘μ§κ³Ό ν¨κ» μν λ³μλ₯Ό μ μν©λλ€.  
- [Context Hooks](https://beta.reactjs.org/apis/react#context-hooks)
  - `useContext`λ contextλ₯Ό μ½κ³  κ΅¬λν©λλ€.  
- [Ref Hooks](https://beta.reactjs.org/apis/react#ref-hooks)
  - `useRef`λ refλ₯Ό μ μν©λλ€. μ΄λ κ°μ΄λ  μ μ₯ν  μ μμ§λ§ μ£Όλ‘ DOM λΈλλ₯Ό μ μ₯νκΈ° μν΄ μ¬μ©ν©λλ€.  
  - `useImperativeHandle`λ₯Ό μ¬μ©νμ¬ κ΅¬μ± μμλ³λ‘ λΈμΆλ μ°Έμ‘°λ₯Ό μ¬μ©μ μ μν  μ μμ΅λλ€.  
- [Effect Hooks](https://beta.reactjs.org/apis/react#effect-hooks)
  - `useEffect`λ κ΅¬μ± μμλ₯Ό μΈλΆ μμ€νμ μ°κ²°ν©λλ€.  
  - `useLayoutEffect`λ λΈλΌμ°μ κ° νλ©΄μ λ€μ μΉ νκΈ° μ μ μ€νλ©λλ€. μ¬κΈ°μ λ μ΄μμμ μΈ‘μ ν  μ μμ΅λλ€.
  - `useInsertionEffect`λ Reactκ° DOMμ λ³κ²½νκΈ° μ μ μ€νλ©λλ€. λΌμ΄λΈλ¬λ¦¬λ μ¬κΈ°μ λμ  CSSλ₯Ό μ½μν  μ μμ΅λλ€.  
- [Performance Hooks](https://beta.reactjs.org/apis/react#performance-hooks)
  - `useMemo`λ₯Ό μ¬μ©νλ©΄ λΉμ©μ΄ λ§μ΄ λλ κ³μ° κ²°κ³Όλ₯Ό μΊμ ν  μ μμ΅λλ€.  
  - `useCallback`μ μ¬μ©νλ©΄ ν¨μ μ μλ₯Ό μ΅μ νλ κ΅¬μ± μμλ‘ μ λ¬νκΈ° μ μ μΊμ ν  μ μμ΅λλ€.  
  - `useTransition`μ μ¬μ©νλ©΄ μν μ νμ κΈ΄κΈνμ§ μμμΌλ‘ νμνκ³  λ€λ₯Έ μλ°μ΄νΈκ° μ΄λ₯Ό μ€λ¨ν  μ μμ΅λλ€.  
  - `useDeferredValue`λ₯Ό μ¬μ©νλ©΄ UIμ μ€μνμ§ μμ λΆλΆ μλ°μ΄νΈλ₯Ό μ°κΈ°νκ³  λ€λ₯Έ λΆλΆμ΄ λ¨Όμ  μλ°μ΄νΈλλλ‘ ν  μ μμ΅λλ€.  
- [Other Hooks](https://beta.reactjs.org/apis/react#other-hooks)
  - `useDebugValue`λ₯Ό μ¬μ©νλ©΄ μ¬μ©μ μ μ hookμ λν΄ React DevToolsκ° νμνλ λ μ΄λΈμ μ¬μ©μ μ μν  μ μμ΅λλ€.  
  - `useId`λ₯Ό μ¬μ©νλ©΄ κ΅¬μ± μμκ° κ³ μ  IDλ₯Ό μμ κ³Ό μ°κ²°ν  μ μμ΅λλ€. μΌλ°μ μΌλ‘ μ κ·Όμ± APIμ ν¨κ» μ¬μ©λ©λλ€.  
  - `useSyncExternalStore`λ₯Ό μ¬μ©νλ©΄ μ»΄ν¬λνΈκ° μΈλΆ μ μ₯μλ₯Ό κ΅¬λν  μ μμ΅λλ€.  

# Hooks reference

[Hooks API Reference - React π](https://reactjs.org/docs/hooks-reference.html)

## Basic Hook

ν¨μν μ»΄ν¬λνΈμμ κΈ°λ³Έμ μΌλ‘ μ¬μ©λλ νλ€μ λ¨Όμ  μ΄ν΄λ³΄κ² μ΅λλ€.

### React.useState

useStateλ μν κ°κ³Ό κ·Έ μν κ°μ μλ°μ΄νΈν  μ μλ μλ°μ΄νΈ ν¨μλ₯Ό λ°ννλλ°, νμ μ μλ₯Ό λΉλ € μ€λͺνμλ©΄ λ€μκ³Ό κ°μ΅λλ€.

- `@types/react/v17`

    ```ts {numberLines}
    /**  //L915
     * Returns a stateful value, and a function to update it.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usestate
     */
    function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
    // convenience overload when first argument is omitted
    ...  //L928
    function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];
    ```

initialStateλ₯Ό μΈμλ‘ λ°μ `[state, stateDispatcher]` ννμ λ°°μ΄μ λ°ννκ³ , initialStateλ₯Ό λ°μ§ μλλ€λ©΄ undefinedλ₯Ό μ΄κΉκ°μΌλ‘ κ°λ state, dispatcher λ°°μ΄μ λ°νν©λλ€.

μ€μ λ‘ μ¬μ©νλ€λ©΄ μλ μ½λμ κ°μ΄ μ¬μ©ν  μ μμ΅λλ€.

```tsx
function Counter() {
 const [count, setCount] = useState(0);
 return (
  <div>
   <p>{count}</p>
   <button onClick={() => setCount(count - 1)}>-</button>
   <button onClick={() => setCount(count + 1)}>+</button>
  </div>
 )
}
```

λ°λ©΄ dispatcherλ μλμ²λΌ μλ°μ΄νΈν΄μΌ ν  stateful valueλΏλ§ μλλΌ prevStateλ₯Ό μΈμλ‘ λ°λ μ½λ°±μ μ¬μ©ν  μλ μμ΅λλ€.

```tsx
type SetStateAction<S> = S | ((prevState: S) => S);
```

λ κ²½μ°λ₯Ό λΉκ΅ν΄ λ³΄κΈ° μν΄ countκ° 3μ© μ¦κ°νλ κΈ°λ₯μ λ¨μνκ² μΆκ°ν΄ λ³΄κ² μ΅λλ€.

```tsx {diff}
function Counter() {
 const [count, setCount] = useState(0);
 const decrement = () => setCount(count - 1);
 const increment = () => setCount(count + 1);
 return (
  <div>
   <p>{count}</p>
   <button onClick={decrement}>-1</button>
   <button onClick={increment}>+1</button>
+   <button onClick={() => {
+    increment();
+    increment();
+    increment(); 
+   }}>+3</button>
  </div>
 )
}
```

μ΄ κ²½μ°μ μλ‘μ΄ λ²νΌμ ν΄λ¦­νμ λ count κ°μ΄ 1λ°μ μ¦κ°νμ§ μλ κ²μ λ³Ό μ μλλ°, increment ν¨μκ° λ°λ³΅λλ©° `(count + 1)`μμμ count λ³μκ° λ°λ‘ μ΄μ μ μλ°μ΄νΈλ count κ°μ μ°Έμ‘°νμ§ μκ³  μκΈ° λλ¬Έμλλ€. `increment();` λμ  `setCount(count + 1)`λ₯Ό λ°λ³΅ν΄λ κ²°κ³Όλ κ°μ΅λλ€. μ¬κΈ°μμ `setCount(count + 1)`μ΄ μλ `setCount(prevCount => prevCount + 1)`λ₯Ό μ¬μ©ν΄μΌλ§ μνλ λλ‘ +3λ²νΌμ ν΄λ¦­νμ λ count κ°μ΄ 3 μ¦κ°νκ² λ©λλ€.

```tsx {diff}
function Counter() {
 const [count, setCount] = useState(0);
- const decrement = () => setCount(count - 1);
+ const decrement = () => setCount(prevCount => prevCount - 1);
- const increment = () => setCount(count + 1);
+ const increment = () => setCount(prevCount => prevCount + 1);
 return (
  <div>
   <p>{count}</p>
   <button onClick={decrement}>-1</button>
   <button onClick={increment}>+1</button>
   <button onClick={() => {
    increment();
    increment();
    increment(); 
   }}>+3</button>
  </div>
 )
}
```

### React.useEffect

useEffectλ μ½κ² λ§ν΄ μ»΄ν¬λνΈκ° λ λλ§ λλ©΄μ λ°μνλ side effectλ₯Ό μ§μ ν  μ μλ hookμλλ€. νμ μ μλ₯Ό λΉλ € μ€λͺνμλ©΄ λ€μκ³Ό κ°μ΅λλ€.

- `@types/react/v17`

    ```ts {numberLines}
    /**  //L1074
     * Accepts a function that contains imperative, possibly effectful code.
     *
     * @param effect Imperative function that can return a cleanup function
     * @param deps If present, effect will only activate if the values in the list change.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#useeffect
     */
    function useEffect(effect: EffectCallback, deps?: DependencyList): void;
    ```

useEffect νμ ν΄λμ€ ν μ»΄ν¬λνΈμ μμ  μ£ΌκΈ° APIλ₯Ό μ¬μ©νλ― EffectCallbackμ ν΅ν΄ μ»΄ν¬λνΈ μμ  μ£ΌκΈ°μ λ°μνλ λ³ν, κ΅¬λ, νμ΄λ¨Έ, λ‘κΉ λ±μ side effectsλ₯Ό μμ±νκ³  λ°μν effectλ₯Ό μ λ¦¬ν  μ μλλ‘ ν©λλ€. μμ‘΄μ± λ°°μ΄μ ν΅ν΄ μ‘°κ±΄λΆ effectλ₯Ό λ°μμν¬ μλ μμΌλ©° λ€μκ³Ό κ°μ ννλ₯Ό κ°μ§κ³  μμ΅λλ€.

```tsx
useEffect(() => {  // EffectCallback
 // setup code
 return () => {   // EffectCleanUpCallback
  // cleanup code
 }
}, [...dependencies])
```

κ°λ¨νκ² μ΄λ»κ² νμ©ν μ§ μμ μ½λλ₯Ό λ³΄κ² μ΅λλ€.

```tsx
function Stopwatch() {
 const [second, setSecond] = useState(0)
 useEffect(() => {
    const tickInterval = setInterval(() => {
      setSecond(prevSec => prevSec + 1)
    }, 1000)
    return () => {
      clearInterval(tickInterval)
    }
  }, [])
 return <p>{second}</p>
}
```

1μ΄κ° μ§λ  λλ§λ€ second κ°μ 1μ© μ¦κ°μμΌ μκ° μ΄κ° κ°λ κ²μ λ³΄μ¬μ£Όκ³ , Stopwatchκ° unmount λ  λ clearIntervalκ° μνλκ³  μμ΅λλ€.

λ§μΌ μ μ½λμμ setIntervalμ μ¬μ©νλ λμ  λ λ²μ§Έ μΈμμΈ μμ‘΄μ± λ°°μ΄μ μ λ¬νμ§ μμ μ±λ‘ secondλ₯Ό μλ°μ΄νΈνλ€λ©΄, νλ©΄μ secondκ° λΉ λ₯΄κ² μ¦κ°νλ©΄μ μλμ κ°μ μ€λ₯λ₯Ό λ§λκ² λ©λλ€.

![react-hooks-api-1.png](./react-hooks-api-1.png)

![react-hooks-api-2.png](./react-hooks-api-2.png)

VS Codeμμλ μμ‘΄μ± λ°°μ΄μ μΆκ°νκΈ°λ₯Ό κΆνλ©° μμ‘΄μ± λ°°μ΄ μμ΄λ λ¬΄ννκ² μλ°μ΄νΈ μ²΄μΈμ΄ λ°μν  μ μλ€κ³  μλ €μ€λλ€.

λ€μ μ μ½λλ‘ λμκ° λ³΄λ©΄ λ λ²μ§Έ μΈμλ‘ λΉ λ°°μ΄μ μ λ¬νκ³  μλλ°, μ¬μ€ λΉ λ°°μ΄μ μ λ¬νμ§ μμλ νλ©΄μ secondλ 1μ΄μ 1μ© μ μ¦κ°νλ κ²μ λ³Ό μ μμ΅λλ€. νμ§λ§ tickIntervalμ μ μΈνκΈ° μ μ console.logλ₯Ό μΆκ°νμ¬ λ‘κ·Έλ₯Ό νμΈν΄ λ³΄λ©΄ λ λ²μ§Έ μΈμ μμ΄λ λ‘κ·Έκ° κ³μ μλ‘­κ² μ°νλ κ²μ λ³Ό μ μμ΅λλ€.

![react-hooks-api-3.png](./react-hooks-api-3.png)

λ°λ©΄, λΉ λ°°μ΄μ μ λ¬νμ λλ intervalμ΄ μμνκΈ° μ  ν λ²λ§ λ‘κ·Έμ λ¨μ΅λλ€.

```tsx {diff}
function Stopwatch() {
 const [second, setSecond] = useState(0)
 useEffect(() => {
+  console.log('ticking')
    const tickInterval = setInterval(() => {
      setSecond(prevSec => prevSec + 1)
    }, 1000)
    return () => {
      clearInterval(tickInterval)
    }
- }, [])
+ })
 return <p>{second}</p>
}
```

λ§μ§λ§μΌλ‘ ν κ°μ§ μμλ₯Ό λ λΉκ΅ν΄ λ³΄κ² μ΅λλ€. νμ¬μ Stopwatchλ clearIntervalμ μν΄ useEffect callback λ΄λΆμμ tickIntervalμ λ³μμ μ μ₯νκ³  μλλ°, μΈλ» λ³΄λ©΄ μ΄ λ³μλ₯Ό useEffect λ°μΌλ‘ κΊΌλ΄ μλμ²λΌ μμ±ν  μλ μμ κ² κ°μ λ³΄μλλ€. μ°Έκ³ λ‘ μμ‘΄μ± λ°°μ΄μ tickIntervalμ μΆκ°νμ§ μμΌλ©΄ 1μ΄λ§λ€ μ λλ‘ secondκ° μ¦κ°νμ§ μμ΅λλ€.

```tsx {diff}
function Stopwatch() {
 const [second, setSecond] = useState(0)
+ const tickInterval = setInterval(() => {
+   setSecond(prevSec => prevSec + 1)
+ }, 1000)
 useEffect(() => {
  console.log('ticking')
-
-
-
  return () => {
   clearInterval(tickInterval)
+   console.log('stop ticking')
  }
- }, [])
+ }, [tickInterval])
 return <p>{second}</p>
}
```

μ μ½λλ₯Ό μ€νμμΌλ³΄λ©΄ second κ°λ 1μ΄λ§λ€ μ μ¦κ°ν©λλ€. νμ§λ§ tickIntervalμ λ°λΌ useEffectκ° μ€νλκ³  μμΌλ―λ‘ μ½μμ βtickingβκ³Ό βstop tickingβμ΄ second κ°μ΄ μ¦κ°ν  λ ν¨κ» μ°νλ κ²μ λ³Ό μ μμ΅λλ€.

second κ°μ΄ tickIntervalμ μν΄ 1μ© μ¦κ°ν  λλ§λ€ κ°μ λ€μ λ³΄μ¬μ£ΌκΈ° μν΄ μ»΄ν¬λνΈκ° μλ°μ΄νΈλλλ°, μ΄λ κ² μλ°μ΄νΈλ  λλ§λ€ μ»΄ν¬λνΈκ° repaint λκΈ° λλ¬Έμ cleanup μ½λ λ΄λΆμμ clearIntervalμ μ€νλ©λλ€. κ·Έλ κΈ° λλ¬Έμ μ ννκ²λ μ»΄ν¬λνΈ μ²« λ λλ§ μ βtickingβλ‘κ·Έκ° μ½μμ μ°νκ³ , second κ°μ΄ μλ°μ΄νΈλ  λλ§λ€ βstop tickingβκ³Ό βtickingβμ΄ ν λ²μ© λΈλΌμ°μ  μ½μμ λ¨κ² λ©λλ€.

useEffectμ λν λ μμΈν μ€λͺμ μλ κ³΅μ μλ£λ€μ μ°Έκ³ νμκΈ° λ°λλλ€.

- [https://ko.reactjs.org/docs/hooks-reference.html#useeffect](https://ko.reactjs.org/docs/hooks-reference.html#useeffect)
- [https://beta.reactjs.org/apis/react/useEffect#useeffect](https://beta.reactjs.org/apis/react/useEffect#useeffect)

μΆκ° μ°Έκ³  μλ£

- [https://velog.io/@superlipbalm/the-closure-trap-of-react-hooks](https://velog.io/@superlipbalm/the-closure-trap-of-react-hooks)

### React.useContext

useContextλ React.createContextμμ λ°νλ μ»¨νμ€νΈ μ€λΈμ νΈμ λ°λΌ μ»΄ν¬λνΈ λ΄λΆμμ νμ¬ κ°μ μ¬μ©ν  μ μλλ‘ ν©λλ€.

νμ μ μλ₯Ό λΉλ € μ€λͺνμλ©΄ λ€μκ³Ό κ°μ΅λλ€.

- `@types/react/v17`

    ```ts {numberLines}
    // This will technically work if you give a Consumer<T> or Provider<T> but it's deprecated and warns  //L906
    /**
     * Accepts a context object (the value returned from `React.createContext`) and returns the current
     * context value, as given by the nearest context provider for the given context.
     *
     * @version 16.8.0
     * @see https://reactjs.org/docs/hooks-reference.html#usecontext
     */
    function useContext<T>(context: Context<T>/*, (not public API) observedBits?: number|boolean */): T;
    ```

    ```ts {numberLines}
    // Context via RenderProps  //L329
    interface ProviderProps<T> {
        value: T;
        children?: ReactNode | undefined;
    }
    
    interface ConsumerProps<T> {
        children: (value: T) => ReactNode;
    }
    
    type ContextType<C extends Context<any>> = C extends Context<infer T> ? T : never;  //L365
    
    // NOTE: only the Context object itself can get a displayName
    // https://github.com/facebook/react-devtools/blob/e0b854e4c/backend/attachRendererFiber.js#L310-L325
    type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
    type Consumer<T> = ExoticComponent<ConsumerProps<T>>;
    interface Context<T> {
        Provider: Provider<T>;
        Consumer: Consumer<T>;
        displayName?: string | undefined;
    }
    function createContext<T>(
        // If you thought this should be optional, see
        // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
        defaultValue: T,
    ): Context<T>;
    ```

- Context docs: [https://ko.reactjs.org/docs/context.html](https://ko.reactjs.org/docs/context.html)

Reactμμ contextλ₯Ό μ΄λ»κ² μμ±νκ³  μ¬μ©νλμ§ κ°λ¨νκ² μμλ³΄κ² μ΅λλ€.

μ°μ  `React.createContext`λ₯Ό μ¬μ©νμ¬ context κ°μ²΄λ₯Ό μμ±ν©λλ€.

```tsx
const ThemeContext = React.createContext(themes.dark);
```

κ·Έλ€μ μμ±ν contextλ₯Ό μ¬μ©ν  μμΉμ `Context.Provider`λ₯Ό μΆκ°ν©λλ€.

```tsx
const App = () => {
 return (
  <ThemeContext.Provider>
      <div>
        <h1>Theme toggle</h1>
        <p>Try to change theme of content box :)</p>
      </div>
  </ThemeContext.Provider>
 )
}
```

μΆκ°ν Provider λ΄λΆμμ `Context.Consumer`λ₯Ό μ¬μ©νκ±°λ useContextλ₯Ό μ¬μ©νμ¬ themeμ μ¬μ©ν  μ μλλ‘ ν©λλ€.

```tsx
// use `useContext`
function ContentBox() {
  const theme = useContext(ThemeContext);
  return (
    <div className="themeWindow" style={theme}>
      {theme.color}
    </div>
  );
}

// use `Context.Consumer`
function ToggleButton({ setTheme }) {
  const changeTheme = (theme) => () => setTheme(theme);
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <div className="themeBtns">
          <button style={theme} onClick={changeTheme(themes.blue)}>
            blue π
          </button>
          <button style={theme} onClick={changeTheme(themes.green)}>
            green π
          </button>
          <button style={theme} onClick={changeTheme(themes.orange)}>
            orange π§‘
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  );
}
```

```tsx {diff}
function App() {
  const [theme, setTheme] = useState(themes.blue);
  return (
    <ThemeContext.Provider value={theme}>
      <div>
    <h1>Theme toggle</h1>
    <p>Try to change theme of content box :)</p>
+    <ToggleButton setTheme={setTheme} />
+    <ContentBox />
      </div>
    </ThemeContext.Provider>
  );
}
```

[μ΄ μ½λ](https://beta.reactjs.org/learn/passing-data-deeply-with-context#using-and-providing-context-from-the-same-component)μμλ context νμ μ¬μ©νμ¬ section νκ·Έλ‘ κ°μΈμ§ λ¨κ³(depth)μ λ°λΌ κ° μμΉμμ h1λΆν° h6κΉμ§ λ λ²¨μ λ§λ ν€λ© νκ·Έλ₯Ό μλμΌλ‘ λ λλ§νλλ‘ νκ³  μμ΅λλ€. κ° Page, Section, Heading μ»΄ν¬λνΈμμ contextλ₯Ό μ΄λ»κ² μ¬μ©νκ³  μλμ§ νλμ© μ΄ν΄λ³΄κ² μ΅λλ€.

![react-hooks-api-4](./react-hooks-api-4.png)

λ¨Όμ  μ΄ νλ©΄μμ μ¬μ©λ useContextμ λͺ©μ μ `<Heading>Heading</Heading>` μ»΄ν¬λνΈκ° μ€μ€λ‘ μ΄λ κΉμ΄(deep)μ μλμ§ section νκ·Έμ κ°μΈμ§ νμμ λ°λΌ μμμ κ³μ°ν  μ μλλ‘ ν κ²μ΄λΌ ν  μ μμ΅λλ€.

Pageμμ Sectionμ μ€μ²©μν€κ³  Section μ»΄ν¬λνΈμ children μμλ‘ Headingμ μΆκ°ν κ²μ νμΈν  μ μμ΅λλ€.

```jsx
//App.js
export default function Page() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
```

Sectionμμλ `level` λ³μμ useContextλ‘ LevelContextμ level κ°μ μ μ₯νκ³  section λ΄λΆ context providerλ₯Ό ν΅ν΄ λ£¨νΈ νΉμ μμ Sectionμμ μ κ³΅ν level κ° λ³΄λ€ 1 μ¦κ°ν level κ°μ μ λ¬νκ³  μμ΅λλ€.

```jsx
//LevelContext.js
export const LevelContext = createContext(0);

//Section.js
export default function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
```

Headingμμλ μ΄λ κ² μ λ¬λ°μ level κ°μ λ§μ°¬κ°μ§λ‘ useContextλ₯Ό μ¬μ©νμ¬ κ° λ λ²¨μ λ§λλ‘ ν€λ© νκ·Έλ₯Ό return νκ³  μμ΅λλ€.

createContextλ₯Ό μ¬μ©νμ¬ LevelContextμ μ΄κΉκ°μ΄ 0μ΄λ―λ‘ level κ° 0μ Headingμ΄ Section μ»΄ν¬λνΈλ‘ κ°μΈμ Έ μμ§ μλ€λ λ»μ΄κΈ° λλ¬Έμ μλ¬λ₯Ό λμ§λ©° μ΅μν ν κ°μ Sectionμ λ΄λΆμ μ‘΄μ¬νλλ‘ νκ³  μμ΅λλ€.

```jsx
//Heading.js
export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}
```

μ΄ μ»΄ν¬λνΈλ€μ μ¬μ©νλ€λ©΄ μλμ κ°μ κ΅¬μ‘°μμλ λ§μ°¬κ°μ§λ‘ Headingλ€μ΄ μμ λ€μ΄ μμΉν κΉμ΄μ λ°λΌ μ΄λ€ νκ·Έλ₯Ό μ¬μ©ν  κ²μΈμ§ μμμ κ²°μ νκ³  μμ΅λλ€.

![react-hooks-api-5](./react-hooks-api-5.png)

λΉμ·ν΄ λ³΄μ΄λ μ€μ²©μ μ΄λ»κ² μ μ½λμ²λΌ ν΄κ²°νλμ§μ λν΄μλ μλ³Έ νν λ¦¬μΌμ μ½μ΄λ³΄μλ κ²μ μΆμ²λλ¦½λλ€.

[μλ³Έ νν λ¦¬μΌπ Passing Data Deeply with Context](https://beta.reactjs.org/learn/passing-data-deeply-with-context#using-and-providing-context-from-the-same-component)

React.useContext λΆλΆμμ μ€λͺμ μν΄ μ¬μ©ν μ μ²΄ μ½λλ€μ [μ¬κΈ°](https://stackblitz.com/edit/react-ts-azuwsv?file=App.tsx)μμ νμΈνμ€ μ μμ΅λλ€.

## Additional Hooks

μ μΈ κ°μ§ ν μ΄μΈμ μμ£Ό μ¬μ©νκ² λ  νλ€μ λν΄ κ°λ¨ν μ¬μ©λ°©λ²λ€μλλ€.

### React.useReducer

```tsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

- example: [https://beta.reactjs.org/apis/react/useReducer#examples-basic](https://beta.reactjs.org/apis/react/useReducer#examples-basic)

  ```jsx
  // reducer
  function reducer(state, action) {
    switch (action.type) {
      case 'incremented_age': {
        return {
          name: state.name,
          age: state.age + 1
        };
      }
      case 'changed_name': {
        return {
          name: action.nextName,
          age: state.age
        };
      }
    }
    throw Error('Unknown action: ' + action.type);
  }
  
  // initial state
  const initialState = { name: 'Taylor', age: 42 };
  
  export default function Form() {
    // using
    const [state, dispatch] = useReducer(reducer, initialState);
  
    function handleButtonClick() {
      dispatch({ type: 'incremented_age' });
    }
  
    function handleInputChange(e) {
      dispatch({
        type: 'changed_name',
        nextName: e.target.value
      }); 
    }
  
    return (
      <>
        <input
          value={state.name}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>
          Increment age
        </button>
        <p>Hello, {state.name}. You are {state.age}.</p>
      </>
    );
  }
  ```

### React.useCallback

```tsx
const memoizedCallback = useCallback(
  () => {
    doSomething(...dependencies);
  },
  [...dependencies],
);
```

- [@types/react/v17 π useCallback](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts#L1097)
- example: [https://beta.reactjs.org/apis/react/useCallback#examples-rerendering](https://beta.reactjs.org/apis/react/useCallback#examples-rerendering)

  ```jsx
  // ProductPage.js
  export default function ProductPage({ productId, referrer, theme }) {
    const handleSubmit = useCallback((orderDetails) => {
      post('/product/' + productId + '/buy', {
        referrer,
        orderDetails,
      });
    }, [productId, referrer]);
  
    return (
      <div className={theme}>
        <ShippingForm onSubmit={handleSubmit} />
      </div>
    );
  }
  
  function post(url, data) {
    // Imagine this sends a request...
    console.log('POST /' + url);
    console.log(data);
  }
  
  // App.js
  export default function App() {
    const [isDark, setIsDark] = useState(false);
    return (
      <>
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={e => setIsDark(e.target.checked)}
          />
          Dark mode
        </label>
        <hr />
        <ProductPage
          referrerId="wizard_of_oz"
          productId={123}
          theme={isDark ? 'dark' : 'light'}
        />
      </>
    );
  }
  ```

### React.useMemo

```tsx
const memoizedValue = useMemo(
 () => computeExpensiveValue(...dependencies),
  [...dependencies]
);
```

- [@types/react/v17 π useMemo](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts#L1106)
- example: [https://beta.reactjs.org/apis/react/useMemo#examples-recalculation](https://beta.reactjs.org/apis/react/useMemo#examples-recalculation)

  ```jsx
  function TodoList({ todos, theme, tab }) {
    const visibleTodos = useMemo(
      () => filterTodos(todos, tab),
      [todos, tab]
    );
    return (
      <div className={theme}>
        <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
        <ul>
          {visibleTodos.map(todo => (
            <li key={todo.id}>
              {todo.completed ?
                <s>{todo.text}</s> :
                todo.text
              }
            </li>
          ))}
        </ul>
      </div>
    );
  ```

### React.useLayoutEffect

```tsx
useLayoutEffect(callback, [...dependencies])
```

- [@types/react/v17 π useLayoutEffect](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts#L1060)
- useEffectμ λμΌν λ°©μμΌλ‘ μ¬μ©νλ©°, useEffectλ‘ μΈν λ°μ΄ν° λ λ μμμ λ°λ₯Έ νλ©΄ κΉλΉ‘μμ λ§κΈ° μν΄ useEffectλ₯Ό λμ²΄ν¨.
- μ°Έκ³  λ€μ΄μ΄κ·Έλ¨
  <figure>
    <img src="./react-hooks-api-6.png" alt="React Hook Flow Diagram. when the compoenent update, cleanup & run LayoutEffects first, and after the browser's screen painting, do cleanup & run Effects" />
    <figcaption>&lt;μ΄λ―Έμ§ μΆμ²: https://github.com/donavon/hook-flow&gt;</figcaption>
  </figure>

### React.useDeferredValue

```tsx
const deferredValue = useDeferredValue(value);
```

- example: [https://beta.reactjs.org/apis/react/useDeferredValue#showing-stale-content-while-fresh-content-is-loading](https://beta.reactjs.org/apis/react/useDeferredValue#showing-stale-content-while-fresh-content-is-loading)

  ```jsx
  function SearchPage() {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query);
    // ...
  }
  ```

### React.useRef

```tsx
const refContainer = useRef(initialValue);
```

- [@types/react/v17 π useRef](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts#L1021)
- example: [https://beta.reactjs.org/apis/react/useRef#examples-value](https://beta.reactjs.org/apis/react/useRef#examples-value)

  ```jsx
  function Example() {
    const inputRef = useRef(null)
    const onClick = () => {
      inputRef.current.focus() //the HTML node will be stored in ref.current
    }
    return (
    <>
      <button onClick={onCLick}>
      click me
      </button>
      <input ref={inputRef} />
    </>
    )
  }
  ```

  ```jsx
  function Counter() {
    let ref = useRef(0);
  
    function handleClick() {
      ref.current = ref.current + 1;
      alert('You clicked ' + ref.current + ' times!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me!
      </button>
    );
  }
  ```

### React.useTransition

```tsx
const [isPending, startTransition] = useTransition();
```

- example:
  - [https://beta.reactjs.org/apis/react/useTransition#examples](https://beta.reactjs.org/apis/react/useTransition#examples)

    ```jsx
    function TabButton({ children, isActive, onClick }) {
      const [isPending, startTransition] = useTransition();
      if (isActive) {
        return <b>{children}</b>
      }
      if (isPending) {
        return <b className="pending">{children}</b>;
      }
      return (
        <button onClick={() => {
          startTransition(() => {
            onClick();
          });
        }}>
          {children}
        </button>
      );
    }
    ```

  - μ°μ  μμκ° λ?μ λ°μ΄ν°λ€μ useTransitionμ ν΅ν΄ λ λνλ μμλ₯Ό μ‘°μ νμ¬ μ±λ₯ λ¬Έμ λ₯Ό ν΄κ²°ν  μ μμ.

    ```jsx
    function Search(props) {
      const [value, setValue] = useState('');
      const [result, setResult] = useState(null);
      const [isPending, startTransition] = useTransition();
      
      const onChange = useCallback(event => {
        setName(event.target.value);
        startTransition(async () => {
          const data = await fetchData(event.target.value);
          setResult(data);
        });
      }, []);
    
      if (isPending) {
        return <Loading />;
      }
    
      // ...
    }
    ```

# Ref

- [https://ko.reactjs.org/docs/hooks-intro.html#motivation](https://ko.reactjs.org/docs/hooks-intro.html#motivation)
- [https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts)
- [https://beta.reactjs.org/learn/state-as-a-snapshot](https://beta.reactjs.org/learn/state-as-a-snapshot)
- [https://youtube.com/playlist?list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj](https://youtube.com/playlist?list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj)

## κΈ°ν μ°Έκ³  λ§ν¬λ€

- [https://velog.io/@superlipbalm/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior](https://velog.io/@superlipbalm/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior)
  - μλ¬Έ: [https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
- [https://velog.io/@surim014/react-rerender](https://velog.io/@surim014/react-rerender)
  - μλ¬Έ: [https://felixgerschau.com/react-rerender-components/](https://felixgerschau.com/react-rerender-components/)
- [https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-usememo-%EA%B7%B8%EB%A6%AC%EA%B3%A0-usecallback-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-844620cd41a1](https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-usememo-%EA%B7%B8%EB%A6%AC%EA%B3%A0-usecallback-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-844620cd41a1)
  - μλ¬Έ: [https://www.joshwcomeau.com/react/usememo-and-usecallback/](https://www.joshwcomeau.com/react/usememo-and-usecallback/)
- [https://andreassujono.medium.com/mastering-react-best-practice-2021-part-2-3-721d0578b937](https://andreassujono.medium.com/mastering-react-best-practice-2021-part-2-3-721d0578b937)
- [https://shaohao-lin.medium.com/things-you-should-know-about-useeffect-uselayouteffect-17636f786850](https://shaohao-lin.medium.com/things-you-should-know-about-useeffect-uselayouteffect-17636f786850)
- [https://www.youtube.com/watch?v=uZHjGw-dppI](https://www.youtube.com/watch?v=uZHjGw-dppI)
