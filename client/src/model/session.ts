import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { type User, getUserByEmail } from './users'
import * as myFetch from './myFetch'

const toast = useToast()


const session = reactive({
    user: null as User | null,
    redirectURL: null as string | null,
    messages: [] as { type: string, text: string }[],
})

export function api(action: string) {
    showErrors('api() is deprecated. Use myFetch.api() instead.')
    return myFetch.api(`${action}`)
}

export function getSession() {
    return session
}

export function showErrors(err: string | { message: string }) {
    console.error(err)
    session.messages.push({ type: 'error', text: typeof err === 'string' ? err : err.message})
    if (typeof err === 'string') {
        toast.error(err)
    } else {
        toast.error(err.message)
    }
}

export function useLogin(){
    
    return {
        login(email: string, password: string): Promise<User | null> {

            const user = getUserByEmail(email)
            return getUserByEmail(email)
            .then(user => {
                if (user && user.password === password) {
                    session.user = user;
                    //redirect to the redirectURL
                    const router = useRouter()
                    router.push(session.redirectURL || '/')
                    return user;
                }
                return null;
            })
        },
         
        logout() {
            session.user = null
        }
        
    }
}
