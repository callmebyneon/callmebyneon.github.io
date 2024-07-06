import { createContext, ReactNode, useState } from 'react'

const PREFER_SCHEME = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light'
const STORAGE = localStorage?.getItem('theme')
const DEFAULT_THEME = STORAGE || PREFER_SCHEME
const defaultDarkMode = DEFAULT_THEME === 'dark'

export const DarkModeContext = createContext({
  dark: defaultDarkMode,
  toggleMode: () => {},
})

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const value = useDarkMode()
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>(defaultDarkMode)
  const toggleMode = () => {
    setDark(prev => !prev)
    localStorage.setItem('theme', dark ? 'light' : 'dark')
  }
  return { dark, toggleMode }
}
