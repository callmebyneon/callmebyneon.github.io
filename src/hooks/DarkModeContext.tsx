import { createContext, ReactNode, useEffect, useState } from 'react'

const defaultDarkModeIs = true
export const DarkModeContext = createContext({
  dark: defaultDarkModeIs,
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
  const [dark, setDark] = useState<boolean>(defaultDarkModeIs)

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const PREFER_SCHEME = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'
      localStorage.setItem('theme', PREFER_SCHEME)
      setDark(PREFER_SCHEME === 'dark')
    } else {
      const STORAGE = localStorage.getItem('theme')
      setDark(STORAGE === 'dark')
    }
  }, [])

  const toggleMode = () => {
    setDark(prev => !prev)
    localStorage.setItem('theme', dark ? 'light' : 'dark')
  }
  return { dark, toggleMode }
}
