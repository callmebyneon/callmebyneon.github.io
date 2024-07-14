---
date: '2024-07-11 22:00:00'
title: 'Add dark mode context and make toggle theme'
category: 'React'
tags: ['blog', 'theme', 'react', 'gatsby', 'react-context', 'react-hook', 'ssr']
summary: 'react context를 사용한 Gatsby 블로그 다크 모드 적용기'
emoji: '🔦'
---

# Start to dark mode blog

## design test

어느날 드디어 블로그에 다크 모드를 적용할 수 있도록 토글 버튼을 추가해야겠다는 생각이 들었다. 그래서 상단 Navigator에 아이콘 버튼을 클릭했을 때 테마가 바뀌도록 할 수 있게 계획했다.

<figure>
  <img src="./add-dark-mode-toggle-1.png" alt="테마 토글 버튼을 추가한 Navigation 디자인 테스트" />
  <figcaption>테마 토글 버튼을 추가한 Navigation 디자인 테스트</figcaption>
</figure>

# Make dark mode toggle button

## css (prefers-color-scheme: dark)

가장 먼저 GlobalStyle 컴포넌트에서 css variable을 추가하여 각 컬러들을 variable로 대체하고 화면을 보며 `@media (prefers-color-scheme: dark)`에 다크 모드 색상 값을 지정해줬다.

![다크 모드 색상 값 적용 css](./add-dark-mode-toggle-2.png)

## DarkModeContext with React.Context

블로그에 설정한 다크 모드 테마를 변경하기 위해 가장 먼저 다크 모드 상태값을 관리할 수 있는 훅을 만들었다. `localStorage`에 theme 아이템으로 테마 값을 저장하여 세션이 종료되어도 테마를 기억하도록 했다.

```tsx
const PREFERS = window.matchMedia('(prefers-color-scheme: dark)').matches
const DEFAULT_THEME = localStorage.getItem('theme') || PREFERS
const defaultDarkMode = DEFAULT_THEME === 'dark'

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>(defaultDarkMode)

  const toggleMode = () => {
    setDark(prev => !prev)
    localStorage.setItem('theme', dark ? 'light' : 'dark')
  }
  return { dark, toggleMode }
}
```

그 다음 이 훅을 공유하며 테마를 관리할 수 있도록 컨텍스트를 만들어 컨텍스트 프로바이더 래퍼(wrapper) 컴포넌트를 만들었다.

```tsx
export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const value = useDarkMode()
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}
```

이렇게 만든 wrapper 컴포넌트를 Template 컴포넌트에서 HTMLBase를 감싸도록 하여 HTMLBase와 ThemeToggleButton에서 컨텍스트 값을 사용할 수 있도록 만들었다.

```tsx
const Template: FunctionComponent<TemplateProps> = function ({...}) {
  return (
    <ThemeModeProvider>
      <HTMLBase data={{ title, description, url, image }}>
        <Navigator />
        {children}
        <Footer />
      </HTMLBase>
    </ThemeModeProvider>
  )
}

export default Template
```

# trouble shooting

## 404 page theme

```tsx
const NotFoundPage: FunctionComponent = function () {
  return (
    <HTMLBase>
      <NotFoundPageWrapper>...</NotFoundPageWrapper>
    </HTMLBase>
  )
}

export default NotFoundPage
```

## SSR cannot find `window`

참고한 아래 글을 보면 원인과 해결 방법을 좀 더 자세히 설명해주고 있는데, 간단히 요약하자면 Server-Side Render가 발생할 때, 전역에 window가 존재하지 않기 때문에`(in ssr, globalThis !== window)` 빌드 시 window를 사용할 수 없다는 빌드 에러가 발생하게 된다. localStorage도 마찬가지다. localStorage
