import AdminSidebar from "@/components/AdminSidebar";
import { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen bg-[#121212]">
            {/* Sidebar is fixed to the left */}
            <AdminSidebar />

            {/* Content area is scrollable */}
            <main className="flex-1 h-screen overflow-y-auto p-8 text-white">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}