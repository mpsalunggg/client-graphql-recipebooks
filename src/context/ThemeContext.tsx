import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  FC,
} from 'react'

interface ThemeContextType {
  currentTheme: string
  handleChangeTheme: (theme: string) => void
}

const defaultContextValue: ThemeContextType = {
  currentTheme: 'lofi',
  handleChangeTheme: () => {},
}

const ThemeContext = createContext<ThemeContextType>(defaultContextValue)

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const themes: string[] = ['lofi', 'night']
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme && themes.includes(savedTheme) ? savedTheme : 'lofi'
  })

  useEffect(() => {
    localStorage.setItem('theme', currentTheme)
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  const handleChangeTheme = (theme: string) => {
    setCurrentTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, handleChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext)
}
