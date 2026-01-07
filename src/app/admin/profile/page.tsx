"use client";
import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import { Save, User as UserIcon, Mail, Shield } from 'lucide-react';

export default function ProfilePage() {
    const { data: session } = useSession();
    const [isSaving, setIsSaving] = useState(false);

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-white font-serif">Account Profile</h1>
                <p className="text-gray-400">Manage your administrative identity and security preferences.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-6 pb-6 border-b border-white/5">
                    <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center text-3xl font-bold text-white">
                        {session?.user?.email?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{session?.user?.name || "System Admin"}</h3>
                        <p className="text-amber-500 text-sm font-mono tracking-widest uppercase">Level 1 Administrator</p>
                    </div>
                </div>

                <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                <UserIcon size={14} /> Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Nikkita Choudhary"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                                <Mail size={14} /> Email Address
                            </label>
                            <input
                                type="email"
                                value={session?.user?.email || ""}
                                disabled
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-gray-500 cursor-not-allowed"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                            <Shield size={14} /> Security Key (Password)
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-amber-500 outline-none transition-all"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="button"
                            onClick={() => {
                                setIsSaving(true);
                                setTimeout(() => setIsSaving(false), 1500);
                            }}
                            className="btn bg-amber-600 hover:bg-amber-500 text-white border-none flex items-center gap-2"
                        >
                            {isSaving ? <span className="loading loading-spinner loading-xs"></span> : <Save size={18} />}
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}