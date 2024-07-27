import { FC } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../../context/ThemeContext'

const Navbar: FC = () => {
  const { currentTheme, handleChangeTheme } = useTheme()

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
          className={`${
            currentTheme === 'night' ? 'text-primary' : 'text-primary-content'
          } cursor-pointer`}
          onClick={() =>
            handleChangeTheme(currentTheme === 'lofi' ? 'night' : 'lofi')
          }
        />
      )}
    </div>
  )
}

export default Navbar
