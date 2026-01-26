"use client";
import { useState } from "react"; // Added for loading state
import { registerUser } from "../actions/register";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        setError(""); // Clear previous errors

        const result = await registerUser(formData);

        if (result?.success) {
            // Success! Send them to login or dashboard
            router.push("/login?message=Account created successfully");
        } else {
            setError(result?.error || "Something went wrong");
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212] px-4">
            <form
                action={handleSubmit}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col gap-6 max-w-md w-full backdrop-blur-md"
            >
                <div className="space-y-2">
                    <h2 className="text-white text-3xl font-bold">Create Account</h2>
                    <p className="text-gray-400 text-sm">Join the Identity Control portal today.</p>
                </div>

                {/* Show Error Message if exists */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm">
                        {error}
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    <input name="name" required placeholder="Full Name"
                        className="p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:border-amber-500 outline-none transition-all" />

                    <input name="email" required type="email" placeholder="Email"
                        className="p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:border-amber-500 outline-none transition-all" />

                    <input name="password" required type="password" placeholder="Password"
                        className="p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:border-amber-500 outline-none transition-all" />
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="bg-amber-600 p-3 rounded-lg text-white font-bold hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {loading ? "Creating Account..." : "Register"}
                </button>

                <p className="text-center text-gray-500 text-sm">
                    Already have an account? <a href="/login" className="text-amber-500 hover:underline">Log in</a>
                </p>
            </form>
        </div>
    );
}