import Image from 'next/image'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-18 font-bitter"> 
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal gradient-text">
  SMH <span className="lg:inline">Corporation</span>
</h2>
<h1 className="text-2xl font-bold italic gradient-text-light">
  Expert &nbsp;
  <span className='gradient-text'>Outsourcing Solutions</span>
  &nbsp; for Your Business
</h1>
            <p className="text-md md:text-lg text-muted-foreground max-w-md">
            At <b className='gradient-text'>SMH Corporation</b>, we know that managing a business comes with its challenges. That&apos;s why we&apos;re here to offer tailored outsourcing solutions that let you focus on what you do best—growing your business. From startups to large enterprises, our team of experts delivers customized services designed to boost efficiency, cut costs, and enhance your competitive edge.
            </p>
            <Button size="lg" className="text-lg px-8 font-bitter bg-gradient-to-r from-[#5b4b34] to-[#2f4339] hover:bg-gradient-to-l" variant='black'>
              Explore Our Services
            </Button>
          </div>
          <div className="flex-1">
            <Image
              src="/assets/servicesAssets/image.jpg"
              alt="Business solutions and outsourcing services"
              width={600}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
