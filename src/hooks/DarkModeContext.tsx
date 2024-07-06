import { createContext, ReactNode, useEffect, useState } from 'react'

const DEFAULT_THEME = localStorage?.getItem('theme')
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

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const PREFER_SCHEME = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      localStorage.setItem('theme', PREFER_SCHEME)
      setDark(PREFER_SCHEME === 'dark')
    }
  }, [])

  const toggleMode = () => {
    setDark(prev => !prev)
    localStorage.setItem('theme', dark ? 'light' : 'dark')
  }
  return { dark, toggleMode }
}
