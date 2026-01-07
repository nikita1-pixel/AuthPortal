"use client";
import React from 'react';
import { ShieldAlert, Home, ArrowLeft, Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UnauthorizedPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">

                {/* Visual Icon Stack */}
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-rose-500/20 blur-3xl rounded-full" />
                    <div className="relative bg-[#1c1c1c] border border-white/10 p-6 rounded-3xl shadow-2xl">
                        <ShieldAlert size={64} className="text-rose-500 mx-auto" />
                        <div className="absolute -bottom-2 -right-2 bg-rose-600 p-2 rounded-lg border-2 border-[#121212]">
                            <Lock size={16} className="text-white" />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold text-white font-serif tracking-tight">Access Denied</h1>
                    <p className="text-gray-400 leading-relaxed">
                        Your current account credentials do not have the required permissions to access the internal administrative terminal.
                    </p>
                    <p className="text-xs text-rose-500/80 font-mono uppercase tracking-widest">Error Code: 403_FORBIDDEN_IDENT</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                        onClick={() => router.back()}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white font-medium hover:bg-white/10 transition-all"
                    >
                        <ArrowLeft size={18} /> Go Back
                    </button>

                    <Link
                        href="/"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-amber-600 rounded-xl text-white font-bold hover:bg-amber-500 transition-all shadow-lg shadow-amber-600/20"
                    >
                        <Home size={18} /> Homepage
                    </Link>
                </div>

                {/* Support Link */}
                <p className="text-sm text-gray-600">
                    Think this is a mistake? <span className="text-amber-500 hover:underline cursor-pointer">Contact System Admin</span>
                </p>
            </div>
        </div>
    );
}