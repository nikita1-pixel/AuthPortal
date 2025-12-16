"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
    const {data: session, status} = useSession();

    if (status === "loading") {
     return (
        <div className="flex items-center justify-center h-full min-h-50">
            <span className="loading loading-spinner loading-lg text-primary"></span>
            <p className="ml-4 text-lg">
                Checking authentication status...
            </p>
        </div>
        );
    }
    if (session) {
        return(
            <fieldset className="fieldset flex flex-col gap-4 bg-base-200 border-base-300 rounded-box w-xs border p-4 text-center shadow-lg mx-auto">
                <legend className="fieldset-legend text-2xl font-semibold mb-4">
                    Welcome Back!
                </legend>
                <p className="mb-4 text-lg text-gray-700">
                    Signed in as {""}                    
                    <span className="font-medium text-primary">
                        {session.user?.email || "User"}
                    </span>
                </p>
                <button className="btn btn-neutral btn-sm px-6 py-2 " onClick={() => signOut()}>
                    Sign out
                </button>
            </fieldset>
        )
    }
    
 return (
       <fieldset className="fieldset flex flex-col gap-4 bg-base-200 border-base-300 rounded-box w-xs border p-4 text-center shadow-lg mx-auto">
          <legend className="fieldset-legend text-2xl font-semibold mb-4">Login</legend>
   
           <label className="label">Email</label>
          <input type="email" className="input input-bordered w-full max-w-xs mb-2" placeholder="Email" />      
   
          <label className="label">Password</label>
          <input type="password" className="input input-bordered w-full max-w-xs mb-4" placeholder="Password" />
   
          <button className="btn btn-neutral w-full mb-4">Login with Email</button>    
          <div className="divider">OR</div>
   
          <button
            className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white border-none w-full max-w-xs"    
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </button>
        </fieldset>
      );
}
export default Login;