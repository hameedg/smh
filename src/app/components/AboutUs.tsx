import { ArrowRight } from "lucide-react"

export default function AboutUs() {
  return (
    <section className=" py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 xl:grid-cols-[1fr_3fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-bitter">
                01 About Us
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Empowering businesses through innovative outsourcing solutions
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              SMH Corporation is a leading provider of comprehensive outsourcing solutions, dedicated to empowering businesses of all sizes to achieve their full potential. With over two decades of experience, we have established ourselves as a trusted partner for organizations seeking to optimize their operations, reduce costs, and focus on core competencies.
            </p>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Our team of highly skilled professionals brings expertise across various industries, allowing us to offer tailored solutions that address the unique challenges and opportunities faced by each of our clients. From IT services and customer support to back-office operations and specialized project management, we deliver end-to-end solutions that drive efficiency, innovation, and growth.
            </p>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              At SMH Corporation, we believe in building long-term partnerships with our clients. We take the time to understand your business objectives, culture, and processes, ensuring that our solutions seamlessly integrate with your operations. Our commitment to quality, transparency, and continuous improvement has earned us a reputation for excellence in the outsourcing industry.
            </p>
            <ul className="grid gap-6 md:grid-cols-2">
              <li>
                <div className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4" />
                  <span className="font-medium">Global Reach</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4" />
                  <span className="font-medium">Customized Solutions</span>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <ArrowRight className="h-4 w-4" />
                  <span className="font-medium">Cutting-edge Technology</span>
                </div>
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn More
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}