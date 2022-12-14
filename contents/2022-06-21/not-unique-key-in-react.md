---
date: '2022-06-21 00:00:00'
title: 'β  NOT unique key'
category: 'React'
tags: ['react', 'issue', 'list', 'unique key']
summary: 'Warning: Each child in a list should have a unique "key" prop.'
emoji: 'β'
---

<small><em>last modified: 2022-12-02</em></small>
 
# What is _NOT unique_ key prop in React

![not unique key error message](./not-unique-key-in-react-1.jpg)

## π introduction

μ²μ μ΄ μλ¬λ₯Ό λ§μ£Όνμ λ, ListλΌλ λ¨μ΄μ λμ΄κ° μλμ κ°μ μ½λμλ keyλ₯Ό μ£Όμ§ μμμ΅λλ€.
μ¬μ€ μ μ΄λ° μλ¬κ° λμ€λμ§ κ΄μ¬μ΄ μμμ΅λλ€.
```js
const colorChips = colors.map((color) => (
  <div>
    <p>color.name</p>
  </div>
));
```

μ΄ μλ¬λ λμμ λ©μΆκ² νμ§λ μμ§λ§ μ μ  μ½μ μ°½μ μ§μ λΆνκ² λ§λ€μκΈ° λλ¬Έμ λλμ΄ μ΄ μλ¬λ₯Ό μμ κΈ°λ‘ ν©λλ€.
μ¬κΈ°μ κΈ° key κ°μ μΆκ°ν΄ λ³΄κΈ°λ νκ³  κ΅¬κΈμλ κ²μν΄ λ³΄λ©΄μ key κ°μ μΆκ°ν  λ λ¬΄μμ μκ°ν΄μΌ νλμ§ μ μ΄λκΈ°λ‘ νμ΅λλ€.


## π keyκ° νμν κ²½μ°
React κ³΅μ λ¬Έμμμλ keyλ₯Ό λ€μκ³Ό κ°μ΄ μ€λͺνκ³  μμ΅λλ€.

> (ENG) A βkeyβ is a special string attribute you need to include when creating lists of elements.   
> (KOR) βkeyβλ μλ¦¬λ¨ΌνΈ λ¦¬μ€νΈλ₯Ό λ§λ€ λ ν¬ν¨ν΄μΌ νλ νΉμν λ¬Έμμ΄ μ΄νΈλ¦¬λ·°νΈμλλ€.

λ°λΌμ μλ¬κ° λ§νκ³  μλ "key" propμ λ°°μ΄μ JSXμμ λ λ ν  λ **λ¦¬μ€νΈ ννλ‘ λ§λ€μ΄μ§λ μλ¦¬λ¨ΌνΈ**κ° κ°μ ΈμΌ ν  κ³ μ ν κ°μ λ§ν©λλ€. return κ°μ΄ λ°°μ΄μΈ λ©μλλ₯Ό μ¬μ©νμ¬ μλ¦¬λ¨ΌνΈλ₯Ό λ§λ€μμ λ, returnλ λ°°μ΄μ κ° μμ΄ν μ΅μμμ κ°κ°μ κ΅¬λ³ν  μ μλλ‘ key propμ΄ μΆκ°λμ΄μΌ νλ κ²μ μλ―Έν©λλ€.  


μ΄ μλ¬κ° λ°μνμ§ μλ unique keyμ μ‘°κ±΄μ λ λ μ λ°λ³΅λλ siblings μ¬μ΄μμ μ μΌν  κ²μ΄λ―λ‘, μλμ κ°μ΄ μμ±ν΄λ μλ¬λ λ°μνμ§ μμ΅λλ€.
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

## π not unique key
μλλ μ€μ λ‘ μμ±νλ μ½λλ₯Ό λ°νμΌλ‘ ν μλ¬ μ½λμ μν° ν¨ν΄λ€μλλ€.
### 1. no key prop
```js
// β Error
const colorChips = colors.map((color) => (
  <div>
    <p>color.name</p>
  </div>
));

// πΊ
const colorChips = colors.map((color, index) => (
  <div key={index}>
    <p>color.name</p>
  </div>
));
```

### 2. same key in the siblings
```js
// β Error
return (
  <List>
  	<ul>
  	  {todoItems}
  	  {todoItems}
  	</ul>
  </List>
)

// πΊ
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

### 3. use index
```js
// πΊ
const navItems = items.map((item, index) =>
  <li key={index}>
    <a href={item.to}>{item.title}</a>
  </li>
);

// β
const navItems = items.map((item) =>
  <li key={item.id}>
    <a href={item.to}>{item.title}</a>
  </li>
);
```

### 4. use rendering time
```js
// πΊ
const todoItems = todos.map((todo) =>
  <li key={new Date().getTime()}>
    {todo.text}
  </li>
);

// β
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
μ°Έκ³ : 
- https://ko.reactjs.org/docs/lists-and-keys.html#keys
- https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children
- https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
- https://velog.io/@jhplus13/%EC%9C%84%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%EA%B0%9C%EB%B0%9C%EB%85%B8%EB%93%9CReact#-unique%ED%95%9C-key