import data from "../data/users.json";

export interface User {
    id?: number,
    firstName: string,
    lastName: string,
    email: string,
    role: "admin" | "user",
    token?: string,
    password: string
}

export function getUsers() {
    return data.users.map( x => ({ ...x, role: x.id <= 5 ? 'admin' : 'user' }) ) as User[];
}

export function getUserByEmail(email: string): User | undefined {
    return getUsers().find(x => x.email === email)
}