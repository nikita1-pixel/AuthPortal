import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 1. Create a connection pool using your URL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

// 2. Create the adapter
const adapter = new PrismaPg(pool);

// 3. Initialize the client with the adapter
export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({ adapter }); // Logic: The 'adapter' satisfies the non-empty requirement

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;