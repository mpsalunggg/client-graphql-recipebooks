import { FC } from 'react'
import { Link } from 'react-router-dom'

const Home: FC = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          'url(https://t3.ftcdn.net/jpg/05/93/72/56/360_F_593725698_sb8lB5w7WrwzHXlVYG36W25ZOgoEZjFB.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-white text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">Recipe Books App</h1>
          <p className="mb-5">
            The website was created to make it easier for housewives to compile
            various food recipes to be made, and to save favorite recipes. Good
            luck
          </p>
          <Link to={'/main'} className="btn btn-primary-content">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Home
