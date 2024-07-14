---
date: '2022-12-02 15:42:38'
title: 'React Hooks API'
category: 'React'
tags: ['basic', 'hooks api']
summary: 'Hooks API Reference - with examples of how and when to use these hooks'
emoji: '🎞'
---

<small><em>last modified: 2023-01-03</em></small>

# About React Hook

> Hook은 React 16.8에서 새로 추가된 개념입니다. Hook을 통해 class를 작성하지 않고도 state와 같은 React 기능들을 사용할 수 있습니다.
> [Introducing Hooks - React 👉](https://reactjs.org/docs/hooks-intro.html)

공식 문서에서는 위와 같이 Hook을 소개하고 있습니다. 말하자면 React가 클래스 형 컴포넌트에서 함수형 컴포넌트 사용을 권장하면서 클래스 형 컴포넌트에서 사용되었던 React의 기능들을 class 없이 함수형 컴포넌트에서 React 기능들을 사용할 수 있도록 도와줍니다.

사용자가 커스텀 훅을 만들어 사용할 수도 있지만 React에는 기본적으로 내장되어 있는 Hook들이 있습니다. 이 훅들은 함수형 컴포넌트 혹은 커스텀 훅의 최상위 레벨(at the top level)에서만 사용되어야 합니다. 콜백 내부나 루프 내부에서 여러 번 혹은 조건부로 호출할 수 없습니다.

[![react: Hooks - https://beta.reactjs.org/apis/react](./react-hooks-api-0.jpg)](https://beta.reactjs.org/apis/react)

위 문서에서는 내장된 Hooks API를 다음과 같이 분류하여 설명하고 있습니다. 이미지를 클릭하면 해당 페이지로 이동합니다.

- [State Hooks](https://beta.reactjs.org/apis/react#state-hooks)
  - `useState`는 사용자가 직접 업데이트할 수 있는 상태 변수를 정의합니다.
  - `useReducer`는 reducer function 내부 업데이트 로직과 함께 상태 변수를 정의합니다.
- [Context Hooks](https://beta.reactjs.org/apis/react#context-hooks)
  - `useContext`는 context를 읽고 구독합니다.
- [Ref Hooks](https://beta.reactjs.org/apis/react#ref-hooks)
  - `useRef`는 ref를 정의합니다. 어느 값이든 저장할 수 있지만 주로 DOM 노드를 저장하기 위해 사용합니다.
  - `useImperativeHandle`를 사용하여 구성 요소별로 노출된 참조를 사용자 정의할 수 있습니다.
- [Effect Hooks](https://beta.reactjs.org/apis/react#effect-hooks)
  - `useEffect`는 구성 요소를 외부 시스템에 연결합니다.
  - `useLayoutEffect`는 브라우저가 화면을 다시 칠하기 전에 실행됩니다. 여기서 레이아웃을 측정할 수 있습니다.
  - `useInsertionEffect`는 React가 DOM을 변경하기 전에 실행됩니다. 라이브러리는 여기에 동적 CSS를 삽입할 수 있습니다.
- [Performance Hooks](https://beta.reactjs.org/apis/react#performance-hooks)
  - `useMemo`를 사용하면 비용이 많이 드는 계산 결과를 캐시 할 수 있습니다.
  - `useCallback`을 사용하면 함수 정의를 최적화된 구성 요소로 전달하기 전에 캐시 할 수 있습니다.
  - `useTransition`을 사용하면 상태 전환을 긴급하지 않음으로 표시하고 다른 업데이트가 이를 중단할 수 있습니다.
  - `useDeferredValue`를 사용하면 UI의 중요하지 않은 부분 업데이트를 연기하고 다른 부분이 먼저 업데이트되도록 할 수 있습니다.
- [Other Hooks](https://beta.reactjs.org/apis/react#other-hooks)
  - `useDebugValue`를 사용하면 사용자 정의 hook에 대해 React DevTools가 표시하는 레이블을 사용자 정의할 수 있습니다.
  - `useId`를 사용하면 구성 요소가 고유 ID를 자신과 연결할 수 있습니다. 일반적으로 접근성 API와 함께 사용됩니다.
  - `useSyncExternalStore`를 사용하면 컴포넌트가 외부 저장소를 구독할 수 있습니다.

# Hooks reference

[Hooks API Reference - React 👉](https://reactjs.org/docs/hooks-reference.html)

## Basic Hook

함수형 컴포넌트에서 기본적으로 사용되는 훅들을 먼저 살펴보겠습니다.

### React.useState

useState는 상태 값과 그 상태 값을 업데이트할 수 있는 업데이트 함수를 반환하는데, 타입 정의를 빌려 설명하자면 다음과 같습니다.

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

initialState를 인자로 받아 `[state, stateDispatcher]` 형태의 배열을 반환하고, initialState를 받지 않는다면 undefined를 초깃값으로 갖는 state, dispatcher 배열을 반환합니다.

실제로 사용한다면 아래 코드와 같이 사용할 수 있습니다.

```tsx
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
```

반면 dispatcher는 아래처럼 업데이트해야 할 stateful value뿐만 아니라 prevState를 인자로 받는 콜백을 사용할 수도 있습니다.

```tsx
type SetStateAction<S> = S | ((prevState: S) => S)
```

두 경우를 비교해 보기 위해 count가 3씩 증가하는 기능을 단순하게 추가해 보겠습니다.

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

이 경우에 새로운 버튼을 클릭했을 때 count 값이 1밖에 증가하지 않는 것을 볼 수 있는데, increment 함수가 반복되며 `(count + 1)`에서의 count 변수가 바로 이전에 업데이트된 count 값을 참조하지 않고 있기 때문입니다. `increment();` 대신 `setCount(count + 1)`를 반복해도 결과는 같습니다. 여기에서 `setCount(count + 1)`이 아닌 `setCount(prevCount => prevCount + 1)`를 사용해야만 원하는 대로 +3버튼을 클릭했을 때 count 값이 3 증가하게 됩니다.

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

useEffect는 쉽게 말해 컴포넌트가 렌더링 되면서 발생하는 side effect를 지정할 수 있는 hook입니다. 타입 정의를 빌려 설명하자면 다음과 같습니다.

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
  function useEffect(effect: EffectCallback, deps?: DependencyList): void
  ```

useEffect 훅은 클래스 형 컴포넌트의 생애 주기 API를 사용하듯 EffectCallback을 통해 컴포넌트 생애 주기에 발생하는 변형, 구독, 타이머, 로깅 등의 side effects를 생성하고 발생한 effect를 정리할 수 있도록 합니다. 의존성 배열을 통해 조건부 effect를 발생시킬 수도 있으며 다음과 같은 형태를 가지고 있습니다.

```tsx
useEffect(() => {
  // EffectCallback
  // setup code
  return () => {
    // EffectCleanUpCallback
    // cleanup code
  }
}, [...dependencies])
```

간단하게 어떻게 활용할지 예시 코드를 보겠습니다.

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

1초가 지날 때마다 second 값을 1씩 증가시켜 시간 초가 가는 것을 보여주고, Stopwatch가 unmount 될 때 clearInterval가 수행되고 있습니다.

만일 위 코드에서 setInterval을 사용하는 대신 두 번째 인자인 의존성 배열을 전달하지 않은 채로 second를 업데이트한다면, 화면의 second가 빠르게 증가하면서 아래와 같은 오류를 만나게 됩니다.

![react-hooks-api-1.jpg](./react-hooks-api-1.jpg)

![react-hooks-api-2.jpg](./react-hooks-api-2.jpg)

VS Code에서도 의존성 배열을 추가하기를 권하며 의존성 배열 없이는 무한하게 업데이트 체인이 발생할 수 있다고 알려줍니다.

다시 위 코드로 돌아가 보면 두 번째 인자로 빈 배열을 전달하고 있는데, 사실 빈 배열을 전달하지 않아도 화면의 second는 1초에 1씩 잘 증가하는 것을 볼 수 있습니다. 하지만 tickInterval을 선언하기 전에 console.log를 추가하여 로그를 확인해 보면 두 번째 인자 없이는 로그가 계속 새롭게 찍히는 것을 볼 수 있습니다.

![react-hooks-api-3.jpg](./react-hooks-api-3.jpg)

반면, 빈 배열을 전달했을 때는 interval이 시작하기 전 한 번만 로그에 남습니다.

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

마지막으로 한 가지 예시를 더 비교해 보겠습니다. 현재의 Stopwatch는 clearInterval을 위해 useEffect callback 내부에서 tickInterval을 변수에 저장하고 있는데, 언뜻 보면 이 변수를 useEffect 밖으로 꺼내 아래처럼 작성할 수도 있을 것 같아 보입니다. 참고로 의존성 배열에 tickInterval을 추가하지 않으면 1초마다 제대로 second가 증가하지 않습니다.

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

위 코드를 실행시켜보면 second 값도 1초마다 잘 증가합니다. 하지만 tickInterval에 따라 useEffect가 실행되고 있으므로 콘솔에 ‘ticking’과 ‘stop ticking’이 second 값이 증가할 때 함께 찍히는 것을 볼 수 있습니다.

second 값이 tickInterval에 의해 1씩 증가할 때마다 값을 다시 보여주기 위해 컴포넌트가 업데이트되는데, 이렇게 업데이트될 때마다 컴포넌트가 repaint 되기 때문에 cleanup 코드 내부에서 clearInterval을 실행됩니다. 그렇기 때문에 정확하게는 컴포넌트 첫 렌더링 시 ‘ticking’로그가 콘솔에 찍히고, second 값이 업데이트될 때마다 ‘stop ticking’과 ‘ticking’이 한 번씩 브라우저 콘솔에 남게 됩니다.

useEffect에 대한 더 자세한 설명은 아래 공식 자료들을 참고하시기 바랍니다.

- [https://ko.reactjs.org/docs/hooks-reference.html#useeffect](https://ko.reactjs.org/docs/hooks-reference.html#useeffect)
- [https://beta.reactjs.org/apis/react/useEffect#useeffect](https://beta.reactjs.org/apis/react/useEffect#useeffect)

추가 참고 자료

- [https://velog.io/@superlipbalm/the-closure-trap-of-react-hooks](https://velog.io/@superlipbalm/the-closure-trap-of-react-hooks)

### React.useContext

useContext는 React.createContext에서 반환된 컨텍스트 오브젝트에 따라 컴포넌트 내부에서 현재 값을 사용할 수 있도록 합니다.

타입 정의를 빌려 설명하자면 다음과 같습니다.

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
  function useContext<T>(
    context: Context<T> /*, (not public API) observedBits?: number|boolean */,
  ): T
  ```

  ```ts {numberLines}
  // Context via RenderProps  //L329
  interface ProviderProps<T> {
    value: T
    children?: ReactNode | undefined
  }

  interface ConsumerProps<T> {
    children: (value: T) => ReactNode
  }

  type ContextType<C extends Context<any>> = C extends Context<infer T>
    ? T
    : never //L365

  // NOTE: only the Context object itself can get a displayName
  // https://github.com/facebook/react-devtools/blob/e0b854e4c/backend/attachRendererFiber.js#L310-L325
  type Provider<T> = ProviderExoticComponent<ProviderProps<T>>
  type Consumer<T> = ExoticComponent<ConsumerProps<T>>
  interface Context<T> {
    Provider: Provider<T>
    Consumer: Consumer<T>
    displayName?: string | undefined
  }
  function createContext<T>(
    // If you thought this should be optional, see
    // https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
    defaultValue: T,
  ): Context<T>
  ```

- Context docs: [https://ko.reactjs.org/docs/context.html](https://ko.reactjs.org/docs/context.html)

React에서 context를 어떻게 생성하고 사용하는지 간단하게 알아보겠습니다.

우선 `React.createContext`를 사용하여 context 객체를 생성합니다.

```tsx
const ThemeContext = React.createContext(themes.dark)
```

그다음 생성한 context를 사용할 위치에 `Context.Provider`를 추가합니다.

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

추가한 Provider 내부에서 `Context.Consumer`를 사용하거나 useContext를 사용하여 theme을 사용할 수 있도록 합니다.

```tsx
// use `useContext`
function ContentBox() {
  const theme = useContext(ThemeContext)
  return (
    <div className="themeWindow" style={theme}>
      {theme.color}
    </div>
  )
}

// use `Context.Consumer`
function ToggleButton({ setTheme }) {
  const changeTheme = theme => () => setTheme(theme)
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div className="themeBtns">
          <button style={theme} onClick={changeTheme(themes.blue)}>
            blue 💙
          </button>
          <button style={theme} onClick={changeTheme(themes.green)}>
            green 💚
          </button>
          <button style={theme} onClick={changeTheme(themes.orange)}>
            orange 🧡
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
```

```tsx {diff}
function App() {
  const [theme, setTheme] = useState(themes.blue)
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Theme toggle</h1>
        <p>Try to change theme of content box :)</p>
        + <ToggleButton setTheme={setTheme} />
        + <ContentBox />
      </div>
    </ThemeContext.Provider>
  )
}
```

[이 코드](https://beta.reactjs.org/learn/passing-data-deeply-with-context#using-and-providing-context-from-the-same-component)에서는 context 훅을 사용하여 section 태그로 감싸진 단계(depth)에 따라 각 위치에서 h1부터 h6까지 레벨에 맞는 헤딩 태그를 자동으로 렌더링하도록 하고 있습니다. 각 Page, Section, Heading 컴포넌트에서 context를 어떻게 사용하고 있는지 하나씩 살펴보겠습니다.

![react-hooks-api-4](./react-hooks-api-4.jpg)

먼저 이 화면에서 사용된 useContext의 목적은 `<Heading>Heading</Heading>` 컴포넌트가 스스로 어느 깊이(deep)에 있는지 section 태그에 감싸진 횟수에 따라 알아서 계산할 수 있도록 한 것이라 할 수 있습니다.

Page에서 Section을 중첩시키고 Section 컴포넌트의 children 요소로 Heading을 추가한 것을 확인할 수 있습니다.

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
  )
}
```

Section에서는 `level` 변수에 useContext로 LevelContext의 level 값을 저장하고 section 내부 context provider를 통해 루트 혹은 상위 Section에서 제공한 level 값 보다 1 증가한 level 값을 전달하고 있습니다.

```jsx
//LevelContext.js
export const LevelContext = createContext(0)

//Section.js
export default function Section({ children }) {
  const level = useContext(LevelContext)
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}
```

Heading에서는 이렇게 전달받은 level 값을 마찬가지로 useContext를 사용하여 각 레벨에 맞도록 헤딩 태그를 return 하고 있습니다.

createContext를 사용하여 LevelContext의 초깃값이 0이므로 level 값 0은 Heading이 Section 컴포넌트로 감싸져 있지 않다는 뜻이기 때문에 에러를 던지며 최소한 한 개의 Section의 내부에 존재하도록 하고 있습니다.

```jsx
//Heading.js
export default function Heading({ children }) {
  const level = useContext(LevelContext)
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!')
    case 1:
      return <h1>{children}</h1>
    case 2:
      return <h2>{children}</h2>
    case 3:
      return <h3>{children}</h3>
    case 4:
      return <h4>{children}</h4>
    case 5:
      return <h5>{children}</h5>
    case 6:
      return <h6>{children}</h6>
    default:
      throw Error('Unknown level: ' + level)
  }
}
```

이 컴포넌트들을 사용한다면 아래와 같은 구조에서도 마찬가지로 Heading들이 자신들이 위치한 깊이에 따라 어떤 태그를 사용할 것인지 알아서 결정하고 있습니다.

![react-hooks-api-5](./react-hooks-api-5.jpg)

비슷해 보이는 중첩을 어떻게 위 코드처럼 해결했는지에 대해서는 원본 튜토리얼을 읽어보시는 것을 추천드립니다.

[원본 튜토리얼👉 Passing Data Deeply with Context](https://beta.reactjs.org/learn/passing-data-deeply-with-context#using-and-providing-context-from-the-same-component)

React.useContext 부분에서 설명을 위해 사용한 전체 코드들은 [여기](https://stackblitz.com/edit/react-ts-azuwsv?file=App.tsx)에서 확인하실 수 있습니다.

## Additional Hooks

위 세 가지 훅 이외에 자주 사용하게 될 훅들에 대해 간단한 사용방법들입니다.

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
          age: state.age + 1,
        }
      }
      case 'changed_name': {
        return {
          name: action.nextName,
          age: state.age,
        }
      }
    }
    throw Error('Unknown action: ' + action.type)
  }

  // initial state
  const initialState = { name: 'Taylor', age: 42 }

  export default function Form() {
    // using
    const [state, dispatch] = useReducer(reducer, initialState)

    function handleButtonClick() {
      dispatch({ type: 'incremented_age' })
    }

    function handleInputChange(e) {
      dispatch({
        type: 'changed_name',
        nextName: e.target.value,
      })
    }

    return (
      <>
        <input value={state.name} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Increment age</button>
        <p>
          Hello, {state.name}. You are {state.age}.
        </p>
      </>
    )
  }
  ```

### React.useCallback

```tsx
const memoizedCallback = useCallback(() => {
  doSomething(...dependencies)
}, [...dependencies])
```

- [@types/react/v17 👉 useCallback](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts#L1097)
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
  [...dependencies],
)
```

- [@types/react/v17 👉 useMemo](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts#L1106)
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

- [@types/react/v17 👉 useLayoutEffect](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts#L1060)
- useEffect와 동일한 방식으로 사용하며, useEffect로 인한 데이터 렌더 순서에 따른 화면 깜빡임을 막기 위해 useEffect를 대체함.
- 참고 다이어그램
  <figure>
    <img src="./react-hooks-api-6.jpg" alt="React Hook Flow Diagram. when the compoenent update, cleanup & run LayoutEffects first, and after the browser's screen painting, do cleanup & run Effects" />
    <figcaption>&lt;이미지 출처: https://github.com/donavon/hook-flow&gt;</figcaption>
  </figure>

### React.useDeferredValue

```tsx
const deferredValue = useDeferredValue(value)
```

- example: [https://beta.reactjs.org/apis/react/useDeferredValue#showing-stale-content-while-fresh-content-is-loading](https://beta.reactjs.org/apis/react/useDeferredValue#showing-stale-content-while-fresh-content-is-loading)

  ```jsx
  function SearchPage() {
    const [query, setQuery] = useState('')
    const deferredQuery = useDeferredValue(query)
    // ...
  }
  ```

### React.useRef

```tsx
const refContainer = useRef(initialValue)
```

- [@types/react/v17 👉 useRef](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts#L1021)
- example: [https://beta.reactjs.org/apis/react/useRef#examples-value](https://beta.reactjs.org/apis/react/useRef#examples-value)

  ```jsx
  function Example() {
    const inputRef = useRef(null)
    const onClick = () => {
      inputRef.current.focus() //the HTML node will be stored in ref.current
    }
    return (
      <>
        <button onClick={onCLick}>click me</button>
        <input ref={inputRef} />
      </>
    )
  }
  ```

  ```jsx
  function Counter() {
    let ref = useRef(0)

    function handleClick() {
      ref.current = ref.current + 1
      alert('You clicked ' + ref.current + ' times!')
    }

    return <button onClick={handleClick}>Click me!</button>
  }
  ```

### React.useTransition

```tsx
const [isPending, startTransition] = useTransition()
```

- example:

  - [https://beta.reactjs.org/apis/react/useTransition#examples](https://beta.reactjs.org/apis/react/useTransition#examples)

    ```jsx
    function TabButton({ children, isActive, onClick }) {
      const [isPending, startTransition] = useTransition()
      if (isActive) {
        return <b>{children}</b>
      }
      if (isPending) {
        return <b className="pending">{children}</b>
      }
      return (
        <button
          onClick={() => {
            startTransition(() => {
              onClick()
            })
          }}
        >
          {children}
        </button>
      )
    }
    ```

  - 우선 순위가 낮은 데이터들을 useTransition을 통해 렌더하는 순서를 조정하여 성능 문제를 해결할 수 있음.

    ```jsx
    function Search(props) {
      const [value, setValue] = useState('')
      const [result, setResult] = useState(null)
      const [isPending, startTransition] = useTransition()

      const onChange = useCallback(event => {
        setName(event.target.value)
        startTransition(async () => {
          const data = await fetchData(event.target.value)
          setResult(data)
        })
      }, [])

      if (isPending) {
        return <Loading />
      }

      // ...
    }
    ```

# Ref

- [https://ko.reactjs.org/docs/hooks-intro.html#motivation](https://ko.reactjs.org/docs/hooks-intro.html#motivation)
- [https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/v17/index.d.ts)
- [https://beta.reactjs.org/learn/state-as-a-snapshot](https://beta.reactjs.org/learn/state-as-a-snapshot)
- [https://youtube.com/playlist?list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj](https://youtube.com/playlist?list=PLuHgQVnccGMCEfBwnNGsJCQDiqSWI-edj)

## 기타 참고 링크들

- [https://velog.io/@superlipbalm/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior](https://velog.io/@superlipbalm/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior)
  - 원문: [https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/)
- [https://velog.io/@surim014/react-rerender](https://velog.io/@surim014/react-rerender)
  - 원문: [https://felixgerschau.com/react-rerender-components/](https://felixgerschau.com/react-rerender-components/)
- [https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-usememo-%EA%B7%B8%EB%A6%AC%EA%B3%A0-usecallback-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-844620cd41a1](https://medium.com/@yujso66/%EB%B2%88%EC%97%AD-usememo-%EA%B7%B8%EB%A6%AC%EA%B3%A0-usecallback-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-844620cd41a1)
  - 원문: [https://www.joshwcomeau.com/react/usememo-and-usecallback/](https://www.joshwcomeau.com/react/usememo-and-usecallback/)
- [https://andreassujono.medium.com/mastering-react-best-practice-2021-part-2-3-721d0578b937](https://andreassujono.medium.com/mastering-react-best-practice-2021-part-2-3-721d0578b937)
- [https://shaohao-lin.medium.com/things-you-should-know-about-useeffect-uselayouteffect-17636f786850](https://shaohao-lin.medium.com/things-you-should-know-about-useeffect-uselayouteffect-17636f786850)
- [https://www.youtube.com/watch?v=uZHjGw-dppI](https://www.youtube.com/watch?v=uZHjGw-dppI)
