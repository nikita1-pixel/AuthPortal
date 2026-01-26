"use server";
import "server-only";
import{ prisma } from"@/lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(formData : FormData){
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    const hashedPassword = await bcrypt.hash(password || "", 10);

    try{
        await prisma.user.create({
            data:{
                email,
                name,
                // password: hashedPassword,
                role: "USER",
            },
        });
        return {success: true};
    }catch(error){
        console.error("Error registering user:", error);
        return {error: "User already exists"};
    }
}   