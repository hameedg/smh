'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:justify-items-center text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company Name</h3>
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <MapPin size={18} className="mr-2" />
              123 Street Name, City, Country
            </p>
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <Phone size={18} className="mr-2" />
              +1 (123) 456-7890
            </p>
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <Mail size={18} className="mr-2" />
              info@company.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <div className="mt-4">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.7690553707184!2d78.47391857493324!3d17.32668848355018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba2acc1911dc1%3A0x2634ed0ee26b575f!2sChandrayangutta%20X%20Road%2C%20Kummar%20Basthi%2C%20Chandrayangutta%2C%20Hyderabad%2C%20Telangana%20500053!5e0!3m2!1sen!2sus!4v1726394761914!5m2!1sen!2sus" 
                width="100%" 
                height="200" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
