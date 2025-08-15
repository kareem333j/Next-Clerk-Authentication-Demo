"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { Roles } from "../../../types/globals";
import { revalidatePath } from "next/cache";


export async function setRole(formData: FormData) {
    const { sessionClaims } = await auth();

    if (!sessionClaims) {
        throw new Error("Unauthorized");
    }

    if (sessionClaims?.metadata?.role !== "admin") {
        throw new Error("Unauthorized");
    }

    const client = await clerkClient(); // to get users or set users data or roles
    const role = formData.get("role") as Roles;
    const userId = formData.get("userId") as string;

    try{
        client.users.updateUser(userId, { publicMetadata: { role } });
        revalidatePath("/admin");
    } catch {
        throw new Error("Failed to set user role");
    }
}

export async function removeRole(formData: FormData) {
    const { sessionClaims } = await auth();

    if (!sessionClaims) {
        throw new Error("Unauthorized");
    }

    if (sessionClaims?.metadata?.role !== "admin") {
        throw new Error("Unauthorized");
    }

    const client = await clerkClient(); // to get users or set users data or roles
    const userId = formData.get("userId") as string;

    try{
        client.users.updateUser(userId, { publicMetadata: { role: null } });
        revalidatePath("/admin");
    } catch {
        throw new Error("Failed to remove user role");
    }
}