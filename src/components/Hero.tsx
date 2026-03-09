
import { ArrowRight, Monitor, Smartphone, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-slate-900 pt-24 pb-16 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Crafting Digital</span>
              <span className="block text-cyan-400">Masterpieces</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              We transform your vision into powerful, scalable, and beautiful web experiences. From concept to launch, we are your partners in digital innovation.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:py-4 md:text-lg transition-all shadow-lg shadow-cyan-500/30"
                >
                  Start Your Project
                  <ArrowRight className="ml-2" size={20} />
                </a>
                <a
                  href="#portfolio"
                  className="w-full flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-300 hover:text-white hover:bg-slate-800 md:py-4 md:text-lg transition-all"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-slate-800 rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
                <div className="w-full h-11 bg-slate-900 border-b border-slate-700 flex items-center space-x-2 px-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 bg-slate-800 text-xs text-gray-400 px-3 py-1 rounded-md flex-1 text-center font-mono">pixelcraft.dev</div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-center space-x-4 text-cyan-400">
                     <Monitor className="w-8 h-8" />
                     <div className="h-2 w-32 bg-slate-700 rounded"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-slate-700 rounded"></div>
                    <div className="h-2 w-5/6 bg-slate-700 rounded"></div>
                    <div className="h-2 w-4/6 bg-slate-700 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-slate-700/50 rounded-lg border border-slate-700 flex items-center justify-center">
                       <Smartphone className="text-gray-500" />
                    </div>
                    <div className="h-24 bg-slate-700/50 rounded-lg border border-slate-700 flex items-center justify-center">
                       <Globe className="text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
