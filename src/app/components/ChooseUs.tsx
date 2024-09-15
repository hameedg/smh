import { CheckCircle, Users, Briefcase, TrendingUp, Shield, Globe, Clock, Zap } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 xl:grid-cols-[1fr_3fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                02 Why Choose Us
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Unparalleled expertise and commitment to your success
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              At SMH Corporation, we stand out in the outsourcing industry through our unwavering commitment to excellence, innovation, and client success. Our unique approach combines cutting-edge technology with human expertise to deliver unparalleled results for businesses of all sizes.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { icon: Users, title: "Expert Team", description: "Our highly skilled professionals bring years of industry-specific experience to every project." },
                { icon: Briefcase, title: "Versatile Solutions", description: "From IT and customer support to specialized services, we offer comprehensive outsourcing solutions." },
                { icon: TrendingUp, title: "Proven Track Record", description: "We've consistently delivered outstanding results for clients across various sectors." },
                { icon: Shield, title: "Data Security", description: "We implement robust security measures to protect your sensitive information." },
                { icon: Globe, title: "Global Reach", description: "Our international presence allows us to provide 24/7 support and access to diverse talent pools." },
                { icon: Clock, title: "Timely Delivery", description: "We pride ourselves on meeting deadlines and exceeding expectations." },
                { icon: Zap, title: "Innovative Approach", description: "We leverage the latest technologies and methodologies to drive efficiency and innovation." },
                { icon: CheckCircle, title: "Quality Assurance", description: "Our rigorous quality control processes ensure consistent, high-quality outputs." }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <item.icon className="mt-1 h-6 w-6 flex-shrink-0 text-blue-500" />
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              By choosing SMH Corporation, you&apos;re not just outsourcing tasks; you&apos;re gaining a strategic partner committed to your long-term success. Our client-centric approach, coupled with our industry expertise, ensures that we deliver tailored solutions that drive growth, efficiency, and innovation for your business.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Our Services
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
            
                Client Testimonials
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}