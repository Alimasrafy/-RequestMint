import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Thanks for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="bg-slate-900 py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
         <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
         <div className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Get in Touch</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Let's Start a Conversation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Ready to bring your ideas to life? Fill out the form below or contact us directly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-900 text-cyan-400">
                    <Mail className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Email</h4>
                  <p className="mt-1 text-gray-400">hello@pixelcraft.dev</p>
                  <p className="mt-1 text-gray-400">support@pixelcraft.dev</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-900 text-cyan-400">
                    <Phone className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Phone</h4>
                  <p className="mt-1 text-gray-400">+1 (555) 123-4567</p>
                  <p className="mt-1 text-gray-400">+1 (555) 987-6543</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-900 text-cyan-400">
                    <MapPin className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white">Office</h4>
                  <p className="mt-1 text-gray-400">123 Tech Avenue, Suite 400<br />San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
            
             <div className="mt-12 p-6 bg-slate-900 rounded-xl border border-slate-700/50">
                <p className="text-gray-300 italic">"PixelCraft transformed our online presence. Their attention to detail and technical expertise are unmatched."</p>
                <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold">JD</div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-white">John Doe</p>
                        <p className="text-xs text-gray-400">CEO, TechStart Inc.</p>
                    </div>
                </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-600 rounded-md bg-slate-700 text-white placeholder-gray-400 p-3 transition-colors focus:bg-slate-600"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-600 rounded-md bg-slate-700 text-white placeholder-gray-400 p-3 transition-colors focus:bg-slate-600"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full sm:text-sm border-gray-600 rounded-md bg-slate-700 text-white placeholder-gray-400 p-3 transition-colors focus:bg-slate-600"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
