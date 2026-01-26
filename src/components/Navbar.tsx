"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { User, LogOut, ChevronDown, Shield, Settings } from "lucide-react";

const Navbar = () => {
// status can be "loading", "authenticated", or "unauthenticated"
const { data: session, status } = useSession();
const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const handleLogout = async () => {
        setIsOpen(false); // Close the dropdown immediately for a snappy feel

        // Logic: signOut() tells the Next-Auth backend to destroy the session.
        // callbackUrl: "/" tells it where to send the user after they are logged out.
        await signOut({ callbackUrl: "/" });
    };
// 1. Prevent UI flickering during session check
if (status === "loading") {
    return <nav className="h-16 bg-[#121212] border-b border-white/5" />;
}

return (
    <nav className="bg-[#121212] border-b border-white/10 h-25 flex items-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] justify-between px-8 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 group">
            <Shield className="text-amber-500 group-hover:scale-130 transition-transform" />
            <span className="text-white font-bold text-xl transition-transform uppercase">Admin<span className="text-amber-500">Portal</span></span>
        </Link>

        <div className="flex items-center">
            {status === "authenticated" ? (
                /* --- DISPLAYED CONTINUOUSLY WHILE LOGGED IN --- */
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 p-1.5 pr-4 rounded-full transition-all border border-white/10"
                    >
                        {/* User Avatar Initial */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-white font-bold shadow-lg shadow-amber-600/20">
                            {session.user?.email?.charAt(0).toUpperCase()}
                        </div>

                        <div className="text-left hidden md:block">
                            <p className="text-[10px] text-gray-500 font-bold leading-none uppercase">Identity</p>
                            <p className="text-xs text-white truncate max-w-[150px]">{session.user?.email}</p>
                        </div>

                        <ChevronDown size={14} className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu - Persists until Sign Out */}
                    {isOpen && (
                        <>
                        {/* Invisible backdrop to close dropdown when clicking outside */}
                        <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />

                        <div className="absolute right-0 mt-3 w-56 bg-[#1c1c1c] border border-white/10 rounded-2xl shadow-2xl py-3 z-20 animate-in fade-in zoom-in-95 duration-200">
                            <div className="px-4 pb-3 border-b border-white/5 mb-2">
                                <p className="text-xs text-amber-500 font-medium italic">Active Session</p>
                            </div>

                            <Link
                                href="/admin/profile"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-white/5 transition-colors"
                            >
                                <User size={16} className="text-gray-500" /> Account Profile
                            </Link>

                            <Link
                                href="/admin/settings"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-white/5 transition-colors"
                            >
                                <Settings size={16} className="text-gray-500" /> System Settings
                            </Link>
                                <div className="mt-2 pt-2 border-t border-white/5">
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-rose-400 hover:bg-rose-500/10 transition-colors group text-left"
                                    >
                                        <LogOut size={16} className="group-hover:translate-x-1 transition-transform" />
                                        Sign Out Session
                                    </button>
                                </div>
                            
                        </div>
                        </>
                    )}
                </div>
            ) : (
                /* --- DISPLAYED ONLY WHEN LOGGED OUT --- */
                <Link
                    href="/login"
                    className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-amber-600/30"
                >
                    Authenticate
                </Link>
            )}
            <>
            <Link href="/register" className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all shadow-lg shadow-gray-700/30">
                Register
            </Link>
            </>
        </div>
    </nav>
);
};

export default Navbar;