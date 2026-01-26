"use client"; // Logic: Needed to handle the alert and redirect

import { registerUser } from "../actions/register";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        const result = await registerUser(formData);

        if (result?.success) {
            alert("Registration Successful!");
            router.push("/login"); // Logic: Redirect user to login after success
        } else {
            alert(result?.error || "Something went wrong");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#121212]">
            {/* Logic: Using an anonymous action to call our handler */}
            <form
                action={handleSubmit}
                className="bg-white/5 p-8 rounded-xl border border-white/10 flex flex-col gap-4"
            >
                <h2 className="text-white text-2xl font-bold">Create Account</h2>

                <input name="name" required placeholder="Full Name" className="p-2 rounded bg-black text-white border border-white/20" />
                <input name="email" required type="email" placeholder="Email" className="p-2 rounded bg-black text-white border border-white/20" />
                <input name="password" required type="password" placeholder="Password" className="p-2 rounded bg-black text-white border border-white/20" />

                <button type="submit" className="bg-amber-600 p-2 rounded text-white font-bold hover:bg-amber-500">
                    Register
                </button>
            </form>
        </div>
    );
}