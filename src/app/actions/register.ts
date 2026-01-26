// actions/register.ts
"use server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function registerUser(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // 1. Validation: Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return { error: "Email already taken" };

    // 2. Security: Hash password (12 rounds)
    const hashedPassword = await hash(password, 12);

    // 3. Database: Save user
    await prisma.user.create({
        data: {
            email,
            name: formData.get("name") as string,
            password: hashedPassword,
        },
    });

    return { success: true };
}