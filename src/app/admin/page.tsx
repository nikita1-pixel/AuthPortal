// import Login from "@/components/Admin";
// import React from "react";

// const AdminPage = () => {
//     return (
//         <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/images/espresso-bg.png')] bg-cover p-8">
//             <Login />
//         </main>
//     );
// };

// export default AdminPage;

"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const AdminDashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        // If the session is finished loading and there's no user, 
        // or the user isn't on the admin list, kick them out.
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") return <p>Checking permissions...</p>;

    if (session) {
        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
            </div>
        );
    }

    return null;
};

export default AdminDashboard;