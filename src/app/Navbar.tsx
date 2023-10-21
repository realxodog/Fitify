'use client'

import React from 'react'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import logo from './logo.jpg'

const Navbar = () => {
  // A state variable to store the menu open or close status
  const [menuOpen, setMenuOpen] = React.useState(false)

  // A function to toggle the menu open or close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="flex items-center justify-between text-white px-4 py-2 shadow-md">
      <div className="flex items-center">
        <Image src={logo} alt="Gymnastify logo" width={40} height={40} className='rounded-full'/>
        <span className="text-xl font-bold ml-2">Fitify</span>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <FaBars className="text-2xl" />
        </button>
      </div>
      <div className={`md:flex ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <li>
            <a href="#features" className="px-4 py-2 block">Features</a>
          </li>
          <li>
            <a href="#reviews" className="px-4 py-2 block">Reviews</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar