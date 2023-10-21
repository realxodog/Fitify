'use client'

import React from 'react'
import Image from 'next/image'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import logo from './logo.jpg'

const Hero = () => {
  // A custom hook to generate a random gradient color
  const useRandomGradient = () => {
    // An array of gradient colors
    const gradients = [
      'bg-gradient-to-r from-green-400 to-blue-500',
      'bg-gradient-to-r from-pink-500 to-purple-600',
      'bg-gradient-to-r from-[#ED213A] to-[#93291E]',
      'bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0]',
      'bg-gradient-to-r from-[#FC466B] to-[#3F5EFB]',
      'bg-gradient-to-r from-[#D3CCE3] to-[#E9E4F0]',
      'bg-gradient-to-r from-[#0cebeb] via-[#20e3b2] to-[#29ffc6]',
    ]

    // A state variable to store the current gradient
    const [gradient, setGradient] = React.useState('')

    // A function to generate a random index
    const getRandomIndex = () => Math.floor(Math.random() * gradients.length)

    // A function to update the gradient state with a random gradient
    const updateGradient = () => {
      const randomIndex = getRandomIndex()
      setGradient(gradients[randomIndex])
    }

    // A useEffect hook to update the gradient every 3 seconds
    React.useEffect(() => {
      const interval = setInterval(updateGradient, 3000)
      return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Return the gradient state
    return gradient
  }

  // Call the custom hook and get the gradient state
  const gradient = useRandomGradient()

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen px-4 py-8">
      <div className="md:w-1/2 md:pr-8">
        <h1 className={`text-6xl font-bold ${gradient} bg-clip-text text-transparent`}>
          Fitify
        </h1>
        <p className="text-xl text-gray-400 mt-4">
          The ultimate app for gymnasts of all levels. Learn new skills, track your progress, and connect with other gymnasts around the world.
        </p>
        <div className="flex items-center mt-8">
          <a href="https://play.google.com/store/games?device=windows&pli=1" target='_blank' className="flex items-center bg-gray-900 text-white px-4 py-2 rounded mr-4 hover:bg-gray-800 transition">
            <FaGooglePlay className="text-xl mr-2" />
            Download on Google Play
          </a>
          <a href="https://www.apple.com/retail/" target='_blank' className="flex items-center bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
            <FaApple className="text-xl mr-2" />
            Download on Apple Store
          </a>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
        <Image src={logo} alt="Gymnastify app screenshot" width={500} height={500} className='rounded-full'/>
      </div>
    </div>
  )
}

export default Hero
