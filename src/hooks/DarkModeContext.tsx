import { createContext, ReactNode, useState } from 'react'

const PREFER_SCHEME = window.matchMedia('(prefer-color-scheme: dark)').matches
const STORAGE = localStorage?.getItem('theme') === 'dark'
const defaultDarkMode = STORAGE || PREFER_SCHEME

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
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }
  return { dark, toggleMode }
}
