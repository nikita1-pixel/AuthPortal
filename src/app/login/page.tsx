"use client"; // This must be at the very top

import Login from "@/components/Login";
import React from "react";

const LoginPage = () => {
    // We REMOVED the 'async' and the 'signIn' call from here.
    // The 'signIn' logic should only happen when a user clicks a button inside <Login />.

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#121212] overflow-hidden">

            {/* Background Decoration: Subtle glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-600/5 via-transparent to-transparent opacity-50 pointer-events-none" />

            {/* The Login component handles the form and the signIn() function */}
            <div className="z-10 w-full flex justify-center items-center">
                <Login />
            </div>

            {/* Footer Note */}
            <footer className="absolute bottom-8 text-gray-600 text-xs tracking-widest uppercase">
                System Version 1.0.4 • Encrypted Connection
            </footer>
        </main>
    );
};

export default LoginPage;