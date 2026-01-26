import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        // Logic: Query Postgres for real numbers
        const totalUsers = await prisma.user.count();
        const adminCount = await prisma.user.count({ where: { role: "ADMIN" } });

        // Logic: Get the last 5 sign-ups or actions
        const recentUsers = await prisma.user.findMany({
            take: 5,
            orderBy: { id: 'desc' }, // Assuming CUID/ID increases
            select: { email: true, role: true }
        });

        return NextResponse.json({
            totalUsers,
            adminCount,
            recentUsers
        });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
    }
}
