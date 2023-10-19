import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { type User, getUserByEmail } from './users'

const session = reactive({
    user: null as User | null,
    redirectURL: null as string | null
})



export function getSession() {
    return session
}

export function useLogin(){
    const router = useRouter()
    return {
         login(email: string, password: string): User | null {
            const user = getUserByEmail(email)
            if (user && user.password === password) {
                session.user = user;
                //redirect to the redirectURL
                const router = useRouter()
                router.push(session.redirectURL || '/')
                return user;
            }
            return null;
         },
         
         logout() {
            session.user = null
         }
    }
}
