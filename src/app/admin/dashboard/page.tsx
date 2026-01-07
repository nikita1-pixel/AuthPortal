"use client";
import React from 'react';
import Link from 'next/link';
import {
    Users,
    ShieldCheck,
    Activity,
    UserPlus,
    ArrowUpRight,
    MoreVertical,
    Terminal
} from 'lucide-react';

export default function DashboardPage() {
    // Mock data for the functional UI
    const stats = [
        { label: "Active Sessions", value: "12", icon: <Activity size={20} />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
        { label: "Admin Access", value: "3", icon: <ShieldCheck size={20} />, color: "text-amber-500", bg: "bg-amber-500/10" },
        { label: "Total Managed Users", value: "1,284", icon: <Users size={20} />, color: "text-blue-500", bg: "bg-blue-500/10" },
        { label: "Security Alerts", value: "0", icon: <Terminal size={20} />, color: "text-rose-500", bg: "bg-rose-500/10" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* 1. Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white font-serif">Internal Control Center</h1>
                    <p className="text-gray-400 mt-1">Monitoring system integrity and user access levels.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-all">
                        Export Audit Logs
                    </button>
                    <Link href="/admin/users?action=add">
                        <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 rounded-lg text-sm font-bold text-white hover:bg-amber-500 transition-all shadow-lg shadow-amber-600/20">
                            <UserPlus size={16} /> Add User
                        </button>
                    </Link>
                </div>
            </div>

            {/* 2. Key Performance Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="group p-6 bg-[#1c1c1c] border border-white/5 rounded-2xl hover:border-amber-500/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <button className="text-gray-600 hover:text-white"><MoreVertical size={16} /></button>
                        </div>
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                        <div className="flex items-baseline gap-2 mt-1">
                            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                            <span className="text-[10px] text-emerald-500 flex items-center">
                                <ArrowUpRight size={10} /> 2.4%
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* 3. Main Operational View */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Recent System Activity Table */}
                <div className="lg:col-span-2 bg-[#1c1c1c] border border-white/5 rounded-2xl overflow-hidden">
                    <div className="p-6 border-b border-white/5 flex justify-between items-center">
                        <h2 className="text-lg font-bold text-white">Recent Audit Trail</h2>
                        <span className="text-xs text-amber-500 font-mono">Live Sync active</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-white/[0.02] text-gray-400 uppercase text-[10px] tracking-widest">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">User Identity</th>
                                    <th className="px-6 py-4 font-semibold">Action</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                    <th className="px-6 py-4 font-semibold">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                {[
                                    { user: "nikkita@gmail.com", action: "Login Success", status: "Verified", time: "2 mins ago" },
                                    { user: "admin@system.com", action: "Profile Update", status: "Success", time: "14 mins ago" },
                                    { user: "guest_user_01", action: "Access Denied", status: "Blocked", time: "1 hour ago" },
                                    { user: "unknown_ip", action: "Brute Force Attempt", status: "Firewalled", time: "3 hours ago" },
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-4 font-medium text-white">{row.user}</td>
                                        <td className="px-6 py-4">{row.action}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${row.status === 'Blocked' || row.status === 'Firewalled'
                                                    ? 'bg-rose-500/10 text-rose-500'
                                                    : 'bg-emerald-500/10 text-emerald-500'
                                                }`}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 font-mono text-xs">{row.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* System Health / Quick Settings */}
                <div className="space-y-6">
                    <div className="bg-[#1c1c1c] border border-white/5 rounded-2xl p-6">
                        <h2 className="text-lg font-bold text-white mb-4">Security Overview</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-400">Database Connection</span>
                                <span className="text-xs text-emerald-500">Stable</span>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 h-full w-[98%]" />
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <span className="text-sm text-gray-400">Server Load</span>
                                <span className="text-xs text-amber-500">22%</span>
                            </div>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-amber-500 h-full w-[22%]" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl p-6 text-white shadow-xl shadow-amber-600/10">
                        <h3 className="font-bold mb-2">Ready to expand?</h3>
                        <p className="text-xs text-white/80 leading-relaxed mb-4">
                            Add a second administrator to share system governance responsibilities.
                        </p>
                        <button className="w-full py-2 bg-white text-amber-700 rounded-lg text-sm font-bold hover:bg-white/90 transition-all">
                            Invite Team Member
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}