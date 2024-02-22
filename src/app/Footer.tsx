// Import React and Next.js components
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from './logo.jpg'

// Define the Footer component
const Footer = () => {
  return (
    // Use TailwindCSS classes to style the footer
    <footer className="text-white py-8 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex items-center mb-4 md:mb-0">
          <Image src={logo} alt="Gymnastify app screenshot" width={500} height={500} className="w-10 h-10 mr-2"/>
          <h1 className="text-xl font-bold">Fitify</h1>
        </div>
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg font-semibold">The ultimate app for gymnasts</p>
          <p className="text-sm">Track your progress, learn new skills, and connect with other gymnasts</p>
        </div>
        
        <nav className="flex flex-wrap justify-center md:justify-start gap-4">
          <a href="#features" className="text-sm hover:text-gray-300">
            Features
          </a>
          <a href="#reviews" className="text-sm hover:text-gray-300">
            Reviews
          </a>
        </nav>
      </div>
      
      <div className="container mx-auto flex justify-center items-center mt-4">
        <a href="https://www.facebook.com/gymnastapp" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-300">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com/gymnastapp" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-300">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/gymnastapp" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-300">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      
      <div className="container mx-auto text-center mt-4">
        <p className="text-xs">© 2024 Fitify. All rights reserved.</p>
        <p className="text-xs"><Link href="/terms" className="hover:text-gray-300">Terms of Service</Link></p>
      </div>
    </footer>
  )
}

// Export the Footer component
export default Footer
