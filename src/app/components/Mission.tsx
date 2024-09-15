import { Target, Eye, Compass, Users, BarChart, Globe } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 xl:grid-cols-[1fr_3fr]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                03 Our Mission and Vision
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Shaping the future of outsourcing
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-blue-500" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                To empower businesses worldwide with innovative outsourcing solutions, enabling them to focus on core competencies and achieve sustainable growth. We are committed to delivering exceptional value through our expertise, technology, and unwavering dedication to client success.
              </p>
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="flex items-center space-x-2">
                  <Compass className="h-5 w-5 text-blue-500" />
                  <span>Drive innovation in outsourcing practices</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span>Foster long-term client partnerships</span>
                </li>
                <li className="flex items-center space-x-2">
                  <BarChart className="h-5 w-5 text-blue-500" />
                  <span>Enhance operational efficiency for clients</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  <span>Contribute to global economic growth</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Eye className="h-8 w-8 text-purple-500" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                To be the global leader in tailored outsourcing services, recognized for our commitment to excellence, innovation, and client success. We aspire to revolutionize the outsourcing industry by:
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>• Setting new standards for quality and efficiency in outsourcing services</li>
                <li>• Pioneering the integration of emerging technologies in outsourcing solutions</li>
                <li>• Cultivating a diverse, skilled workforce that drives innovation and excellence</li>
                <li>• Establishing a global network of satisfied clients and strategic partnerships</li>
                <li>• Contributing to sustainable business practices and corporate social responsibility</li>
              </ul>
            </div>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              At SMH Corporation, our mission and vision guide every decision we make and every service we provide. We are committed to not just meeting the current needs of our clients, but anticipating and preparing for the future challenges and opportunities in the global business landscape.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Our Values
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
           
                Company History
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}