'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Zap, Heart, Star } from 'lucide-react'
import { Button } from './ui/button'

const services = [
  {
    name: "Energy Boost",
    image: "/assets/servicesAssets/IT.jpg",
    icons: [Zap, Heart, Star],
    description: "Revitalize your body and mind with our energy-boosting treatments.",
  },
  {
    name: "Relaxation Therapy",
    image: "/assets/servicesAssets/IT.jpg",
    icons: [Heart, Star, Zap],
    description: "Unwind and de-stress with our soothing relaxation therapies.",
  },
  {
    name: "Mindfulness Practice",
    image: "/assets/servicesAssets/IT.jpg",
    icons: [Star, Zap, Heart],
    description: "Cultivate awareness and inner peace through guided mindfulness sessions.",
  },
  {
    name: "Yoga Sessions",
    image: "/assets/servicesAssets/IT.jpg",
    icons: [Heart, Zap, Star],
    description: "Improve flexibility and find balance with our expert-led yoga classes.",
  },
  {
    name: "Nutrition Counseling",
    image: "/assets/servicesAssets/IT.jpg",
    icons: [Zap, Star, Heart],
    description: "Discover the perfect diet plan tailored to your unique needs and goals.",
  },
  {
    name: "Meditation Workshops",
    image: "/assets/servicesAssets/IT.jpg",
    icons: [Star, Heart, Zap],
    description: "Learn powerful meditation techniques to calm your mind and reduce stress.",
  },
]

export default function ServiceCarousel() {
    const [currentSlide, setCurrentSlide] = useState(2)
    const [cardsToShow, setCardsToShow] = useState(1)
  
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setCardsToShow(3)
        } else if (window.innerWidth >= 768) {
          setCardsToShow(2)
        } else {
          setCardsToShow(1)
        }
      }
  
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
    const nextSlide = () => {
      setCurrentSlide((prev) => Math.min(prev + 1, services.length - cardsToShow))
    }
  
    const prevSlide = () => {
      setCurrentSlide((prev) => Math.max(prev - 1, 0))
    }
  
    return (
      <section className="py-12 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4`}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                      <div className="relative h-48 sm:h-64">
                        <Image
                          src={service.image}
                          alt={service.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                        <div className="flex space-x-2 mb-3">
                          {service.icons.map((Icon, i) => (
                            <div key={i} className="p-1.5 bg-primary/10 rounded-full">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>
                        <Button variant="outline" size="sm">Learn More</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {currentSlide > 0 && (
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {currentSlide < services.length - cardsToShow && (
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </section>
    )
  }
  