
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web App',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    description: 'A full-stack e-commerce solution with payment integration.',
  },
  {
    title: 'Financial Dashboard',
    category: 'Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    description: 'Real-time analytics dashboard for financial institutions.',
  },
  {
    title: 'Travel Booking App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    description: 'User-friendly interface for booking flights and hotels.',
  },
  {
    title: 'Creative Agency Portfolio',
    category: 'Website',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    description: 'Showcase website for a design agency with immersive animations.',
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="bg-slate-900 py-24 relative">
      <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-slate-800/30 skew-x-12 transform origin-top"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Our Work</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Recent Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Discover how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10 opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              <img
                src={project.image}
                alt={project.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                <p className="text-sm text-cyan-400 font-medium mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {project.description}
                </p>
                <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="text-sm font-semibold mr-2">View Project</span>
                    <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cyan-700 bg-cyan-100 hover:bg-cyan-200 transition-colors">
                 View All Projects
             </a>
        </div>
      </div>
    </div>
  );
}
