
import { Rocket, BarChart2, CheckCircle, Monitor } from 'lucide-react';

export default function HeroVariantB() {
  return (
    <div id="home" className="relative bg-slate-900 pt-24 pb-16 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-300 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2"></span>
            Now accepting new projects for Q4
          </div>
          
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Build Websites That <br className="hidden sm:block" />
            <span className="text-indigo-400">Drive Real Growth</span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Stop losing customers to poor design. We build high-performance websites optimized for conversion, speed, and user experience.
          </p>
          
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
            <a
              href="#contact"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg transition-all shadow-lg shadow-indigo-500/30"
            >
              <Rocket className="mr-2" size={20} />
              Boost My Business
            </a>
            <a
              href="#services"
              className="w-full flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 hover:text-white hover:bg-slate-800 md:py-4 md:text-lg transition-all"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500/10 text-indigo-400 mb-4">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-lg font-medium text-white">Data Driven</h3>
              <p className="mt-2 text-sm text-gray-400">Decisions based on analytics</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500/10 text-indigo-400 mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-lg font-medium text-white">SEO Optimized</h3>
              <p className="mt-2 text-sm text-gray-400">Rank higher on Google</p>
            </div>
            <div className="flex flex-col items-center">
               <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500/10 text-indigo-400 mb-4">
                <Monitor size={24} />
              </div>
              <h3 className="text-lg font-medium text-white">Responsive</h3>
              <p className="mt-2 text-sm text-gray-400">Perfect on every device</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
