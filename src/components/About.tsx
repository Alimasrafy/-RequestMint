
import { Users, Lightbulb, TrendingUp } from 'lucide-react';

const stats = [
  { id: 1, name: 'Happy Clients', value: '200+', icon: Users },
  { id: 2, name: 'Projects Completed', value: '450+', icon: Lightbulb },
  { id: 3, name: 'Years of Experience', value: '10+', icon: TrendingUp },
];

export default function About() {
  return (
    <div id="about" className="bg-slate-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Who We Are</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Passionate About Digital Excellence
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
            We are a team of creative designers, skilled developers, and strategic thinkers. We believe in the power of technology to transform businesses.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {stats.map((stat) => (
              <div key={stat.id} className="relative group">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white group-hover:scale-110 transition-transform">
                    <stat.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{stat.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-3xl font-extrabold text-cyan-400">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 lg:p-12 border border-slate-700 shadow-xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Philosophy</h3>
                    <p className="text-gray-400 mb-6">
                        We don't just build websites; we build relationships. We take the time to understand your unique challenges and goals, ensuring that every solution we deliver is perfectly aligned with your vision.
                    </p>
                    <p className="text-gray-400">
                        Transparency, collaboration, and innovation are at the core of everything we do.
                    </p>
                </div>
                <div className="mt-8 lg:mt-0">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Team collaboration" 
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
