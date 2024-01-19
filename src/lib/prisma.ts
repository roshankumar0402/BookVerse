// Importing the PrismaClient
import { PrismaClient } from "@prisma/client";

// Define a function to create a singleton instance of PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

// Initializing the prisma variable using the singleton pattern or the existing global instance
const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;
if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
