---
date: '2022-03-08 00:00:00'
title: 'Easy authentication with window.sessionStorage'
category: 'React'
tags: ['react', 'web', 'auth']
summary: 'How to make easy authentication with `window.sessionStorage` with react-router'
thumbnail: './default.png'
---

## Temporary authentication with window.sessionStorage

> The code below is based on the code of ['Auth Example (react-router/examples/auth/)'](https://github.com/remix-run/react-router/tree/main/examples/auth)
```js
// auth.js
import * as React from "react";
import {
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
...
let AuthContext = React.createContext(null);
export function AuthProvider({ children }) {
  const userState = sessionStorage?.LOGGED || null; /// temp - stay logged in
  let [user, setUser] = React.useState(userState);
  
  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      sessionStorage.setItem("LOGGED", newUser); /// temp - stay logged in
      callback();
    });
  };
  
  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      sessionStorage.setItem("LOGGED", false); /// temp - stay logged in
      callback();
    });
  };
  let value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
...
```
---
### Referred to
- [https://developer.mozilla.org/ko/docs/Web/API/Window/sessionStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/sessionStorage)
- [https://seungyooon.tistory.com/23](https://seungyooon.tistory.com/23)