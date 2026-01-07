"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    ClipboardList,
    Settings,
    LogOut,
    Coffee
} from 'lucide-react'; // Using Lucide icons for a pro look

const AdminSidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'User Directory', href: '/admin/users', icon: <Users size={20} /> },
        { name: 'Audit Logs', href: '/admin/logs', icon: <ClipboardList size={20} /> },
        { name: 'System Settings', href: '/admin/settings', icon: <Settings size={20} /> },
    ];

    return (
        <aside className="w-64 min-h-screen bg-black border-r border-white/10 flex flex-col p-4">
            {/* Brand Header */}
            <div className="flex items-center gap-3 px-2 mb-10 mt-4">
                <div className="bg-amber-600 p-2 rounded-lg">
                    <Coffee className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold text-white font-serif tracking-tight">
                    Admin<span className="text-amber-500">CMS</span>
                </span>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 space-y-2">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 ${isActive
                                    ? 'bg-amber-600/10 text-amber-500 border-l-4 border-amber-600'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {item.icon}
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="border-t border-white/10 pt-4 mt-auto">
                <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-red-400 hover:bg-red-400/5 rounded-md transition-all">
                    <LogOut size={20} />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </aside>
    );
};

export default AdminSidebar;