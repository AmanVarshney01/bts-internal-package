import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
export { eq } from "drizzle-orm";

const client = createClient({
	url: process.env.DATABASE_URL || "",
});

export const db = drizzle({ client });
