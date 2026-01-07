"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ArrowRight, ShieldCheck, Activity, Users, Lock } from "lucide-react";

export default function HomePage() {
    const { data: session } = useSession();

    return (
        <div className="relative min-h-screen bg-[#121212] flex flex-col items-center justify-center px-6 overflow-hidden">

            {/* 1. Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 rounded-full blur-[120px]" />
            </div>

            {/* 2. Hero Section */}
            <div className="relative z-10 max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-500 text-xs font-mono mb-6 uppercase tracking-widest">
                    <Lock size={12} /> System Status: Online
                </div>

                <h1 className="text-5xl md:text-8xl font-bold text-white font-serif tracking-tight leading-[1.1]">
                    Identity <span className="text-amber-500 underline decoration-white/10">Control</span>
                </h1>

                <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    The professional gateway for user administration. Securely manage identities,
                    monitor system health, and audit access logs through a single interface.
                </p>

                {/* 3. Main Call to Action */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={session ? "/admin/dashboard" : "/login"}
                        className="group relative flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-600/20"
                    >
                        {session ? "Enter Dashboard" : "Access Portal"}
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>

                    <Link
                        href="/docs"
                        className="text-gray-400 hover:text-white font-medium transition-colors py-4 px-6"
                    >
                        System Documentation
                    </Link>
                </div>
            </div>

            {/* 4. Bottom Feature Grid */}
            <div className="relative z-10 mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                    <ShieldCheck className="text-amber-500 mb-4" size={28} />
                    <h3 className="text-white font-semibold text-lg">Encrypted Auth</h3>
                    <p className="text-gray-500 text-sm mt-2">NextAuth.js integration with JWT session encryption for total security.</p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                    <Activity className="text-amber-500 mb-4" size={28} />
                    <h3 className="text-white font-semibold text-lg">Real-time Logs</h3>
                    <p className="text-gray-500 text-sm mt-2">Monitor system interactions as they happen with low-latency audit trails.</p>
                </div>

                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                    <Users className="text-amber-500 mb-4" size={28} />
                    <h3 className="text-white font-semibold text-lg">Role Management</h3>
                    <p className="text-gray-500 text-sm mt-2">Granular permission control to restrict access to sensitive system nodes.</p>
                </div>
            </div>
        </div>
    );
}
