
import { Palette, Terminal, Search, BarChart, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    title: 'Web Design',
    description: 'Stunning, user-centric designs that capture your brand essence.',
    icon: Palette,
  },
  {
    title: 'Web Development',
    description: 'Robust, scalable, and high-performance websites built with modern technologies.',
    icon: Terminal,
  },
  {
    title: 'SEO Optimization',
    description: 'Increase your visibility and drive organic traffic with our expert strategies.',
    icon: Search,
  },
  {
    title: 'Analytics & Reporting',
    description: 'Data-driven insights to help you make informed business decisions.',
    icon: BarChart,
  },
  {
    title: 'Mobile App Development',
    description: 'Extend your reach with native and cross-platform mobile applications.',
    icon: Smartphone,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Secure and seamless online stores that convert visitors into customers.',
    icon: Globe,
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Everything you need to succeed online
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            We provide comprehensive digital services tailored to your specific business goals.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="pt-6">
                <div className="flow-root bg-slate-900 rounded-lg px-6 pb-8 hover:-translate-y-2 transition-transform duration-300 border border-slate-700 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-cyan-600 rounded-md shadow-lg">
                        <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
