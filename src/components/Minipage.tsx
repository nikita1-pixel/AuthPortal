import React from "react";
import { Zap, BarChart3, Globe, Fingerprint } from "lucide-react";

export default function Showcase() {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-amber-500 font-mono text-sm tracking-widest uppercase mb-3">Capabilities</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                        Built for the modern <br /> security stack.
                    </h3>
                </div>

                {/* The Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

                    {/* Large Card - Main Feature */}
                    <div className="md:col-span-2 md:row-span-1 bg-white/[0.03] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <Fingerprint className="text-amber-500" size={40} />
                            <div>
                                <h4 className="text-xl font-bold text-white mb-2">Biometric-Ready Access</h4>
                                <p className="text-gray-400 max-w-md">Our backend supports WebAuthn standards, allowing your users to log in with Passkeys or TouchID effortlessly.</p>
                            </div>
                        </div>
                        {/* Visual Decoration */}
                        <div className="absolute top-1/2 right-[-10%] w-64 h-64 bg-amber-600/10 rounded-full blur-[80px] group-hover:bg-amber-600/20 transition-all" />
                    </div>

                    {/* Small Card 1 */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
                        <Zap className="text-amber-500" size={32} />
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2">Instant Sync</h4>
                            <p className="text-gray-500 text-sm">Prisma-powered data layer ensures sub-50ms database latency.</p>
                        </div>
                    </div>

                    {/* Small Card 2 */}
                    <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
                        <Globe className="text-amber-500" size={32} />
                        <div>
                            <h4 className="text-lg font-bold text-white mb-2">Edge Ready</h4>
                            <p className="text-gray-500 text-sm">Deployed on Vercel Edge for global performance and reliability.</p>
                        </div>
                    </div>

                    {/* Medium Card - Stats/Analytics */}
                    <div className="md:col-span-2 bg-gradient-to-br from-amber-600/20 to-transparent border border-white/10 rounded-3xl p-8 flex items-center justify-between">
                        <div className="max-w-xs">
                            <h4 className="text-xl font-bold text-white mb-2">Detailed Analytics</h4>
                            <p className="text-gray-400">Track every login, failed attempt, and password change in a single, beautiful dashboard.</p>
                        </div>
                        <div className="hidden sm:block">
                            <BarChart3 className="text-white/20 w-32 h-32" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}