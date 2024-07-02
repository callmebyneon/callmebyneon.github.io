import { useState } from 'react'

const THEME = window.matchMedia('(prefer-color-scheme: dark)').matches
export default function useDarkMode() {
  const [dark, _] = useState(THEME)
  return { dark }
}
