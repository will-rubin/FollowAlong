import { reactive } from 'vue'

const session = reactive({
    user: null as User | null,
})

export interface User {
    id?: number
    firstName: string
    lastName: string
    email: string
    role: "admin" | "user"
    token?: string
}

export function getSession() {
    return session
}

export function login() {
    session.user = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@doe.com',
        role: 'admin',
    }
}
