import { api } from './session'

export interface User {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    role: "admin" | "user",
    token?: string,
    password: string
}

export function getUsers(): Promise<User[]> {
    return api("users")
}

export async function getUserByEmail(email: string): Promise<User | undefined> {
    const users = await getUsers()
    return users.find(x => x.email === email)
}