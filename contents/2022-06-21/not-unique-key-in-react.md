---
date: '2022-06-21'
title: 'NOT unique key'
categories: ['React', 'Issue']
summary: '처음 이 에러를 마주했을 때, List라는 단어에 넘어가 아래와 같은 코드에는 key를 주지 않았다. 당연히 에러가 발생했고 무시도 해봤지만 콘솔창에 자리만 차지하는 이 에러를 더이상 두고 볼 수가 없었다.'
thumbnail: './default.png'
---

# What is _NOT unique_ key prop in React

### 👉 introduction
처음 이 에러를 마주했을 때, List라는 단어에 넘어가 아래와 같은 코드에는 key를 주지 않았다.
```js
const colorChips = colors.map((color) => (
  <div>
    <p>color.name</p>
  </div>
));
```
당연히 에러가 발생했고 무시도 해봤지만 콘솔창에 자리만 차지하는 이 에러를 더이상 두고 볼 수가 없었다.
여기저기 key 값을 추가해보기도 하고 구글에도 검색해보면서 key 값을 추가할 때 무엇을 생각해야하는지 적어놓기로 했다.


### 👉 key가 필요한 경우
React 공식 문서에서는 key를 다음과 같이 설명한다.

> (ENG) A “key” is a special string attribute you need to include when creating lists of elements.   
> (KOR) “key”는 엘리먼트 리스트를 만들 때 포함해야 하는 특수한 문자열 어트리뷰트입니다.

따라서 에러가 말하고 있는 "key" prop은 배열을 JSX에서 렌더할 때 **리스트 형태로 만들어지는 엘리먼트**가 가져야할 고유한 값을 말한다. return 값이 배열인 메소드를 사용하여 엘리먼트를 만들었을 때, return된 배열의 각 아이템 최상위에 각각을 구별할 수 있도록 key prop이 추가되어야 하는 것을 의미한다.  


이 에러가 발생하지 않는 unique key의 조건은 렌더 시 반복되는 siblings 사이에서 유일할 것이므로, 아래와 같이 작성해도 에러는 발생하지 않는다.
```js
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

return (
  <List>
  	<ul>
  	  {todoItems}
  	  <li>empty</li>
  	</ul>
  </List>
)
```

### 👉 not unique key
아래에 실제로 작성했던 코드를 바탕으로 한 에러 코드와 안티 패턴들을 추가한다.
#### 1. no key prop
```js
// ❌ Error
const colorChips = colors.map((color) => (
  <div>
    <p>color.name</p>
  </div>
));

// 🔺
const colorChips = colors.map((color, index) => (
  <div key={index}>
    <p>color.name</p>
  </div>
));
```

#### 2. same key in the siblings
```js
// ❌ Error
return (
  <List>
  	<ul>
  	  {todoItems}
  	  {todoItems}
  	</ul>
  </List>
)

// 🔺
return (
  <List>
  	<ul>
  	  {todoItems}
    </ul>
    <ul>
  	  {todoItems}
    </ul>
  </List>
)
```

#### 3. use index
```js
// 🔺
const navItems = items.map((item, index) =>
  <li key={index}>
    <a href={item.to}>{item.title}</a>
  </li>
);

// ✅
const navItems = items.map((item) =>
  <li key={item.id}>
    <a href={item.to}>{item.title}</a>
  </li>
);
```

#### 4. use rendering time
```js
// 🔺
const todoItems = todos.map((todo) =>
  <li key={new Date().getTime()}>
    {todo.text}
  </li>
);

// ✅
const createNewTodo = (text) => ({
  completed: false,
  id: gernerateRandomId(),
  text
});
...
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```


---
참고: 
- https://ko.reactjs.org/docs/lists-and-keys.html#keys
- https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children
- https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
- https://velog.io/@jhplus13/%EC%9C%84%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%EA%B0%9C%EB%B0%9C%EB%85%B8%EB%93%9CReact#-unique%ED%95%9C-key