import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
  const themes: string[] = ['lofi', 'night']
  const [currentTheme, setCurrentTheme] = useState(() => {
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
    <div className="navbar bg-primary-content text-primary-content py-6 lg:px-96 px-8 flex justify-between items-center border-b border-primary">
      <h1 className="text-xl font-bold text-primary">Recipe Books</h1>
      {currentTheme === 'lofi' ? (
        <FaSun
          size={15}
          className={`
            ${
              currentTheme === 'lofi' ? 'text-primary' : 'text-primary-content'
            } cursor-pointer`}
          onClick={() =>
            handleChangeTheme(currentTheme === 'lofi' ? 'night' : 'lofi')
          }
        />
      ) : (
        <FaMoon
          size={15}
          className={
            currentTheme === 'night' ? 'text-primary' : 'text-primary-content'
          }
          onClick={() =>
            handleChangeTheme(currentTheme === 'lofi' ? 'night' : 'lofi')
          }
        />
      )}
    </div>
  )
}

export default Navbar
