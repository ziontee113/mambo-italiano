import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div
      className={`h-screen flex flex-col justify-center items-center ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'
      }`}
    >
      <button className="absolute top-0 right-0 m-4" onClick={toggleDarkMode}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>
      <h1 className="text-4xl font-bold">Hello World</h1>
      <p className="text-lg mt-4">Welcome to our website!</p>
    </div>
  )
}
