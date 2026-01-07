"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link"; // Added Link import
import { ShieldCheck, LogIn, Chrome, AlertCircle } from 'lucide-react';

const Login: React.FC = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });

    setIsSubmitting(false);

    if (result?.error) {
      setError("Invalid credentials. Access denied.");
    } else {
      router.push("/admin/dashboard");
    }
  };

  // 1. LOADING STATE
  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212]">
        <span className="loading loading-spinner loading-lg text-amber-500"></span>
        <p className="mt-4 text-gray-400 animate-pulse font-mono">Verifying credentials...</p>
      </div>
    );
  }

  // 2. LOGGED IN STATE (Management Style)
  if (session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#121212] px-6">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center shadow-2xl max-w-md w-full backdrop-blur-md">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-amber-600/20 p-5 rounded-full ring-1 ring-amber-500/30">
                <ShieldCheck className="text-amber-500" size={56} />
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#121212] rounded-full"></span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-1">Access Granted</h2>
          <div className="flex justify-center mb-6">
            <span className="text-[10px] bg-amber-600/10 border border-amber-600/20 text-amber-500 px-2 py-0.5 rounded font-mono uppercase tracking-widest">
              System Administrator
            </span>
          </div>

          <p className="text-gray-400 mb-8">
            Verified as <span className="text-white font-medium">{session.user?.email}</span>.
            The management console is ready for your session.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/admin/dashboard"
              className="btn btn-lg bg-amber-600 hover:bg-amber-500 text-white border-none shadow-lg shadow-amber-600/20 flex items-center justify-center gap-2"
            >
              Go to Control Center
              <LogIn size={18} />
            </Link>

            <button
              className="btn btn-ghost btn-sm text-gray-500 hover:text-red-400 mt-2"
              onClick={() => signOut()}
            >
              Terminate Session
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. LOGIN FORM
  return (
    <div className="flex min-h-screen flex-col justify-center bg-[#121212] px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center mb-6">
          <LogIn className="text-amber-500" size={40} />
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tight text-white font-serif">
          Management Portal
        </h2>
        <p className="mt-2 text-center text-gray-500 text-sm font-sans">
          Authorized personnel only.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="flex items-center gap-2 p-3 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-md">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Identity (Email)
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm"
                placeholder="admin@system.com"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Access Key
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-amber-500 hover:text-amber-400">
                  Reset Key?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex w-full justify-center rounded-md bg-amber-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Authenticating...' : 'Secure Login'}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#121212] px-2 text-gray-500 font-sans">Federated Auth</span></div>
            </div>

            {/* <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-md bg-white text-black px-3 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-200 transition-all"
              onClick={() => signIn("google")}
            >
              <Chrome size={18} />
              Continue with Google
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;