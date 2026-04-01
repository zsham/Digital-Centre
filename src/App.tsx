/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Globe, Shield, Zap, Terminal, Activity, Server, Lock, Database, ChevronRight, Search } from "lucide-react";

type Tab = "dashboard" | "network" | "security" | "systems" | "terminal";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [terminalLines, setTerminalLines] = useState<string[]>([
    "INITIALIZING DIGITAL CENTRE CORE...",
    "ESTABLISHING SECURE CONNECTION...",
    "SYSTEM STATUS: OPTIMAL",
    "READY FOR COMMANDS."
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleTerminalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newLines = [...terminalLines, `> ${inputValue}`];
    
    // Simple mock responses
    if (inputValue.toLowerCase() === "help") {
      newLines.push("AVAILABLE COMMANDS: HELP, STATUS, CLEAR, SCAN, REBOOT");
    } else if (inputValue.toLowerCase() === "status") {
      newLines.push("ALL SYSTEMS OPERATIONAL. LATENCY: 0.002ms");
    } else if (inputValue.toLowerCase() === "clear") {
      setTerminalLines([]);
      setInputValue("");
      return;
    } else {
      newLines.push(`COMMAND NOT RECOGNIZED: ${inputValue}`);
    }
    
    setTerminalLines(newLines);
    setInputValue("");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-orbitron selection:bg-[#00ff41] selection:text-black grid-bg relative overflow-hidden">
      <div className="scanline" />
      
      {/* Header */}
      <header className="border-b border-[#00ff41]/20 p-6 flex justify-between items-center backdrop-blur-sm sticky top-0 z-40">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setActiveTab("dashboard")}
        >
          <div className="w-10 h-10 bg-[#00ff41] rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(0,255,65,0.5)]">
            <Terminal className="text-black w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black tracking-widest digital-glow text-[#00ff41]">
            DIGITAL CENTRE
          </h1>
        </motion.div>
        
        <nav className="hidden md:flex gap-8 text-xs font-mono tracking-tighter uppercase">
          {(["network", "security", "systems", "terminal"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition-all hover:text-[#00ff41] relative py-2 ${
                activeTab === tab ? "text-[#00ff41] opacity-100" : "opacity-50"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00ff41] shadow-[0_0_10px_#00ff41]"
                />
              )}
            </button>
          ))}
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 relative min-h-[calc(100vh-100px)]">
        <AnimatePresence mode="wait">
          {activeTab === "dashboard" && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="inline-block px-3 py-1 border border-[#00ff41]/30 rounded-full text-[10px] font-mono text-[#00ff41] uppercase tracking-[0.2em]">
                    System Status: Operational
                  </div>
                  <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
                    THE FUTURE <br />
                    <span className="text-[#00ff41] digital-glow">IS DIGITAL.</span>
                  </h2>
                  <p className="text-lg text-gray-400 font-mono max-w-lg leading-relaxed">
                    Experience the next generation of digital infrastructure. 
                    High-speed processing, quantum security, and global connectivity 
                    at your fingertips.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setActiveTab("terminal")}
                      className="px-8 py-4 bg-[#00ff41] text-black font-bold uppercase tracking-widest hover:bg-[#00ff41]/80 transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)]"
                    >
                      Initialize
                    </button>
                    <button className="px-8 py-4 border border-[#00ff41]/30 text-[#00ff41] font-bold uppercase tracking-widest hover:bg-[#00ff41]/10 transition-all">
                      Documentation
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-square border border-[#00ff41]/20 rounded-lg bg-[#00ff41]/5 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 grid-bg opacity-20 group-hover:opacity-40 transition-opacity" />
                    <Cpu className="w-48 h-48 text-[#00ff41] digital-glow animate-pulse" />
                    
                    <div className="absolute top-10 left-10 p-4 border border-[#00ff41]/20 bg-black/50 backdrop-blur-md rounded font-mono text-[10px]">
                      <div className="text-[#00ff41] mb-1">LATENCY</div>
                      <div className="text-xl">0.002ms</div>
                    </div>
                    
                    <div className="absolute bottom-10 right-10 p-4 border border-[#00ff41]/20 bg-black/50 backdrop-blur-md rounded font-mono text-[10px]">
                      <div className="text-[#00ff41] mb-1">UPTIME</div>
                      <div className="text-xl">99.999%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <section className="mt-40 grid md:grid-cols-3 gap-8">
                {[
                  { icon: Shield, title: "Quantum Shield", desc: "Advanced encryption protocols for the modern era." },
                  { icon: Zap, title: "Hyper Speed", desc: "Zero-latency data transmission across global nodes." },
                  { icon: Globe, title: "Global Mesh", desc: "Decentralized network architecture for total resilience." }
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="p-8 border border-[#00ff41]/10 bg-[#00ff41]/5 hover:border-[#00ff41]/40 transition-all group"
                  >
                    <feature.icon className="w-10 h-10 text-[#00ff41] mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{feature.title}</h3>
                    <p className="text-sm text-gray-400 font-mono leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </section>
            </motion.div>
          )}

          {activeTab === "network" && (
            <motion.div
              key="network"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex justify-between items-end border-b border-[#00ff41]/20 pb-8">
                <div>
                  <h2 className="text-4xl font-black text-[#00ff41] digital-glow uppercase">Network Nodes</h2>
                  <p className="text-gray-400 font-mono mt-2">Global distribution and traffic analysis</p>
                </div>
                <div className="text-right font-mono text-[10px] uppercase opacity-50">
                  Active Nodes: 1,024 // Traffic: 4.2 TB/s
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-[#00ff41]/20 bg-[#00ff41]/5 p-8 rounded-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-20"><Globe className="w-32 h-32" /></div>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Activity className="text-[#00ff41] w-5 h-5" /> LIVE TRAFFIC
                  </h3>
                  <div className="space-y-4">
                    {[
                      { region: "North America", load: 85, status: "stable" },
                      { region: "Europe", load: 92, status: "heavy" },
                      { region: "Asia Pacific", load: 45, status: "stable" },
                      { region: "South America", load: 12, status: "idle" }
                    ].map((item) => (
                      <div key={item.region} className="space-y-1">
                        <div className="flex justify-between text-[10px] font-mono uppercase">
                          <span>{item.region}</span>
                          <span className={item.status === "heavy" ? "text-red-500" : "text-[#00ff41]"}>{item.load}%</span>
                        </div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${item.load}%` }}
                            className={`h-full ${item.status === "heavy" ? "bg-red-500 shadow-[0_0_10px_red]" : "bg-[#00ff41] shadow-[0_0_10px_#00ff41]"}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-[#00ff41]/20 bg-[#00ff41]/5 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-6">NODE DIRECTORY</h3>
                  <div className="space-y-3 font-mono text-xs">
                    {["US-EAST-01", "EU-WEST-04", "ASIA-SOUTH-02", "AU-EAST-01"].map((node) => (
                      <div key={node} className="flex justify-between items-center p-3 border border-white/5 hover:border-[#00ff41]/30 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <Server className="w-4 h-4 text-[#00ff41]" />
                          <span>{node}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41]" />
                          <span className="opacity-50 group-hover:opacity-100 transition-opacity">ONLINE</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "security" && (
            <motion.div
              key="security"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex justify-between items-end border-b border-[#00ff41]/20 pb-8">
                <div>
                  <h2 className="text-4xl font-black text-[#00ff41] digital-glow uppercase">Security Core</h2>
                  <p className="text-gray-400 font-mono mt-2">Quantum encryption and threat mitigation</p>
                </div>
                <div className="flex gap-4">
                  <div className="px-4 py-2 border border-[#00ff41]/30 bg-[#00ff41]/10 rounded text-[10px] font-mono text-[#00ff41]">
                    FIREWALL: ACTIVE
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 border border-[#00ff41]/20 bg-[#00ff41]/5 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Shield className="text-[#00ff41] w-5 h-5" /> THREAT DETECTION LOG
                  </h3>
                  <div className="space-y-2 font-mono text-[10px]">
                    {[
                      { time: "09:23:11", event: "Brute force attempt blocked", source: "192.168.1.45", severity: "low" },
                      { time: "09:21:05", event: "Encryption handshake verified", source: "Internal", severity: "info" },
                      { time: "09:15:44", event: "DDoS mitigation triggered", source: "84.22.11.9", severity: "high" },
                      { time: "09:10:12", event: "System integrity check passed", source: "Kernel", severity: "info" }
                    ].map((log, i) => (
                      <div key={i} className="flex gap-4 p-2 border-b border-white/5 opacity-70 hover:opacity-100 transition-opacity">
                        <span className="text-gray-500">[{log.time}]</span>
                        <span className={log.severity === "high" ? "text-red-500" : log.severity === "low" ? "text-yellow-500" : "text-[#00ff41]"}>
                          {log.event}
                        </span>
                        <span className="ml-auto opacity-30">{log.source}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="border border-[#00ff41]/20 bg-[#00ff41]/5 p-6 rounded-lg text-center">
                    <Lock className="w-12 h-12 text-[#00ff41] mx-auto mb-4 digital-glow" />
                    <h4 className="font-bold uppercase mb-2">Encryption Level</h4>
                    <div className="text-3xl font-black text-[#00ff41]">AES-4096</div>
                    <p className="text-[10px] font-mono opacity-50 mt-2">Quantum-Resistant Layer Active</p>
                  </div>
                  <div className="border border-[#00ff41]/20 bg-[#00ff41]/5 p-6 rounded-lg">
                    <h4 className="font-bold uppercase mb-4 text-xs">Access Control</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span>Biometrics</span>
                        <span className="text-[#00ff41]">ENABLED</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span>2FA Protocol</span>
                        <span className="text-[#00ff41]">ENABLED</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span>Root Access</span>
                        <span className="text-red-500">RESTRICTED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "systems" && (
            <motion.div
              key="systems"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="flex justify-between items-end border-b border-[#00ff41]/20 pb-8">
                <div>
                  <h2 className="text-4xl font-black text-[#00ff41] digital-glow uppercase">System Metrics</h2>
                  <p className="text-gray-400 font-mono mt-2">Hardware performance and resource allocation</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { label: "CPU LOAD", value: "24%", icon: Cpu, color: "text-[#00ff41]" },
                  { label: "MEMORY", value: "12.4 GB", icon: Database, color: "text-blue-400" },
                  { label: "STORAGE", value: "84.2 TB", icon: Server, color: "text-purple-400" }
                ].map((stat) => (
                  <div key={stat.label} className="border border-[#00ff41]/20 bg-[#00ff41]/5 p-8 rounded-lg group hover:bg-[#00ff41]/10 transition-all">
                    <stat.icon className={`w-10 h-10 ${stat.color} mb-6 digital-glow`} />
                    <div className="text-[10px] font-mono opacity-50 uppercase tracking-widest mb-1">{stat.label}</div>
                    <div className="text-4xl font-black">{stat.value}</div>
                    <div className="mt-6 h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        className={`h-full bg-current ${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="border border-[#00ff41]/20 bg-[#00ff41]/5 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-8">PROCESS MONITOR</h3>
                <div className="space-y-4">
                  {[
                    { name: "Kernel-Core", pid: "0001", cpu: "0.2%", mem: "124MB" },
                    { name: "Security-Daemon", pid: "1422", cpu: "4.5%", mem: "2.1GB" },
                    { name: "Network-Stack", pid: "0982", cpu: "12.1%", mem: "4.5GB" },
                    { name: "UI-Renderer", pid: "2246", cpu: "2.4%", mem: "840MB" }
                  ].map((proc) => (
                    <div key={proc.pid} className="grid grid-cols-4 text-[10px] font-mono uppercase p-3 border border-white/5 hover:bg-white/5">
                      <span className="text-[#00ff41]">{proc.name}</span>
                      <span className="opacity-50">PID: {proc.pid}</span>
                      <span className="text-right">CPU: {proc.cpu}</span>
                      <span className="text-right">MEM: {proc.mem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "terminal" && (
            <motion.div
              key="terminal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="h-[600px] border border-[#00ff41]/30 bg-black rounded-lg flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,255,65,0.1)]"
            >
              <div className="bg-[#00ff41]/10 px-4 py-2 border-b border-[#00ff41]/20 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                </div>
                <span className="text-[10px] font-mono opacity-50 ml-2">TERMINAL_CORE_V1.0</span>
              </div>
              
              <div className="flex-1 p-6 font-mono text-xs overflow-y-auto space-y-2 scrollbar-hide">
                {terminalLines.map((line, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={line.startsWith(">") ? "text-[#00ff41]" : "text-gray-400"}
                  >
                    {line}
                  </motion.div>
                ))}
                <form onSubmit={handleTerminalSubmit} className="flex gap-2">
                  <span className="text-[#00ff41]">root@digital-centre:~$</span>
                  <input 
                    autoFocus
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 bg-transparent outline-none border-none text-[#00ff41]"
                  />
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
