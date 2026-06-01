import "dotenv/config";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import ws from "ws";
import { PrismaClient } from "../generated/prisma/index.js";

neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

export default prisma;
