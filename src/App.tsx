/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Cpu, Globe, Shield, Zap, Terminal, Activity } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-orbitron selection:bg-[#00ff41] selection:text-black grid-bg relative overflow-hidden">
      <div className="scanline" />
      
      {/* Header */}
      <header className="border-b border-[#00ff41]/20 p-6 flex justify-between items-center backdrop-blur-sm sticky top-0 z-40">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-[#00ff41] rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,255,65,0.5)]">
            <Terminal className="text-black w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black tracking-widest digital-glow text-[#00ff41]">
            DIGITAL CENTRE
          </h1>
        </motion.div>
        
        <nav className="hidden md:flex gap-8 text-xs font-mono tracking-tighter uppercase opacity-70">
          <a href="#" className="hover:text-[#00ff41] transition-colors">Network</a>
          <a href="#" className="hover:text-[#00ff41] transition-colors">Security</a>
          <a href="#" className="hover:text-[#00ff41] transition-colors">Systems</a>
          <a href="#" className="hover:text-[#00ff41] transition-colors">Terminal</a>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 border border-[#00ff41]/30 rounded-full text-[10px] font-mono text-[#00ff41] mb-6 uppercase tracking-[0.2em]">
              System Status: Operational
            </div>
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
              THE FUTURE <br />
              <span className="text-[#00ff41] digital-glow">IS DIGITAL.</span>
            </h2>
            <p className="text-lg text-gray-400 font-mono mb-10 max-w-lg leading-relaxed">
              Experience the next generation of digital infrastructure. 
              High-speed processing, quantum security, and global connectivity 
              at your fingertips.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#00ff41] text-black font-bold uppercase tracking-widest hover:bg-[#00ff41]/80 transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)]">
                Initialize
              </button>
              <button className="px-8 py-4 border border-[#00ff41]/30 text-[#00ff41] font-bold uppercase tracking-widest hover:bg-[#00ff41]/10 transition-all">
                Documentation
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square border border-[#00ff41]/20 rounded-lg bg-[#00ff41]/5 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 grid-bg opacity-20 group-hover:opacity-40 transition-opacity" />
              <Cpu className="w-48 h-48 text-[#00ff41] digital-glow animate-pulse" />
              
              {/* Floating Data Points */}
              <div className="absolute top-10 left-10 p-4 border border-[#00ff41]/20 bg-black/50 backdrop-blur-md rounded font-mono text-[10px]">
                <div className="text-[#00ff41] mb-1">LATENCY</div>
                <div className="text-xl">0.002ms</div>
              </div>
              
              <div className="absolute bottom-10 right-10 p-4 border border-[#00ff41]/20 bg-black/50 backdrop-blur-md rounded font-mono text-[10px]">
                <div className="text-[#00ff41] mb-1">UPTIME</div>
                <div className="text-xl">99.999%</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <section className="mt-40 grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "Quantum Shield", desc: "Advanced encryption protocols for the modern era." },
            { icon: Zap, title: "Hyper Speed", desc: "Zero-latency data transmission across global nodes." },
            { icon: Globe, title: "Global Mesh", desc: "Decentralized network architecture for total resilience." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 border border-[#00ff41]/10 bg-[#00ff41]/5 hover:border-[#00ff41]/40 transition-all group"
            >
              <feature.icon className="w-10 h-10 text-[#00ff41] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{feature.title}</h3>
              <p className="text-sm text-gray-400 font-mono leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Status Bar */}
        <footer className="mt-40 pt-10 border-t border-[#00ff41]/10 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] uppercase tracking-widest opacity-50">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00ff41] animate-ping" />
              Live Server: Tokyo-01
            </span>
            <span>|</span>
            <span>Protocol: v4.2.0-Alpha</span>
          </div>
          <div>
            &copy; 2026 DIGITAL CENTRE // ALL RIGHTS RESERVED
          </div>
        </footer>
      </main>

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#00ff41]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00ff41]/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
