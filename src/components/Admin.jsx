"use client";

import React, { useState } from 'react';
import { useSession, signOut } from "next-auth/react";

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { data: session, status } = useSession();

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Admin login attempt:", formData);
    };

    // Loading State
    if (status === "loading") {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#121212]">
                <span className="loading loading-spinner loading-lg text-amber-600"></span>
            </div>
        );
    }

    // Already Logged In State
    if (session) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[#121212] px-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-xl max-w-sm w-full">
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome, Admin</h2>
                    <p className="text-gray-400 mb-6">{session.user?.email}</p>
                    <button
                        className="btn bg-amber-600 hover:bg-amber-500 text-white border-none w-full"
                        onClick={() => signOut()}
                    >
                        Sign out
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col justify-center bg-[#121212] px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                <h1 className="text-amber-600 font-bold tracking-widest text-sm uppercase">Admin Portal</h1>
                <h2 className="mt-4 text-center text-3xl font-bold tracking-tight text-white font-serif">
                    Coffee Store Management
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Admin Email
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
                                placeholder="admin@coffeestore.com"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                Password
                            </label>
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

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-amber-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-all"
                        >
                            Authorize Access
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Not an admin?{" "}
                    <a href="/" className="font-semibold leading-6 text-amber-500 hover:text-amber-400">
                        Return to Store
                    </a>
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;