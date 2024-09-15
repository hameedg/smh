'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function AboutUsContact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: '',
    budget: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', mobile: '', service: '', budget: '' })
  }

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr]">
          {/* Left side: About Us */}
          <div className="space-y-4 lg:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl xl:text-6xl font-bitter">
              04 Contact Us
            </h2>
            <p className="text-gray-500 text-lg lg:text-xl">
              Empowering businesses through innovative outsourcing solutions.
            </p>
          </div>

          {/* Right side: Contact Form */}
          <div className="flex flex-col justify-center max-w-lg mx-auto lg:mx-0 space-y-4">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="sr-only">Mobile Number</label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="service" className="sr-only">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select Service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="sr-only">Budget</label>
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    required
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                    placeholder="Budget"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <Send className="h-5 w-5 text-gray-500 group-hover:text-gray-400" aria-hidden="true" />
                  </span>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
