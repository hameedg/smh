'use client';
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 p-2 bg-white z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center -ml-6">
              <Image
                src="/public/assets/LandingPageAssets/TransparentLogo.png" 
                alt="Company Logo"
                width={160} // Set a width that matches the logo's original size
                height={80}  // Set the corresponding height
                className="object-contain"  // Ensures proper scaling without blurring
                priority  // Optimizes the image loading
              />
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {['Home', 'About Us', 'Services', 'Blogs', 'Contact', 'Reviews'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About Us', 'Services', 'Blogs', 'Contact', 'Reviews'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
