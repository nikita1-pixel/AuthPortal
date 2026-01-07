import React from "react";
import Link from "next/link";

const ManagementHomePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#121212] p-8 text-center relative overflow-hidden">
      {/* Optional: Subtle background glow for a modern tech feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="z-10 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white font-serif leading-tight">
          System <span className="text-amber-500">Governance</span> <br />
          & User Intelligence
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Centralized control for your organization. Manage permissions,
          track security logs, and monitor user activity from a single,
          unified dashboard.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/admin/dashboard"
            className="btn btn-lg bg-amber-600 hover:bg-amber-500 text-white border-none px-10"
          >
            Access Dashboard
          </Link>

          <Link
            href="/docs"
            className="btn btn-lg btn-outline text-gray-300 hover:text-white border-white/20 hover:bg-white/5 px-10"
          >
            Documentation
          </Link>
        </div>
      </div>

      {/* Feature Grid Preview */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl z-10 text-left">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="text-amber-500 text-2xl mb-2 font-bold">01.</div>
          <h3 className="text-white font-bold text-lg mb-2">Role Management</h3>
          <p className="text-gray-400 text-sm">Assign granular permissions and administrative tiers with ease.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="text-amber-500 text-2xl mb-2 font-bold">02.</div>
          <h3 className="text-white font-bold text-lg mb-2">Audit Trails</h3>
          <p className="text-gray-400 text-sm">Every action is logged and timestamped for complete transparency.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <div className="text-amber-500 text-2xl mb-2 font-bold">03.</div>
          <h3 className="text-white font-bold text-lg mb-2">Secure Auth</h3>
          <p className="text-gray-400 text-sm">Powered by NextAuth for enterprise-grade security protocols.</p>
        </div>
      </div>
    </div>
  );
}

export default ManagementHomePage;